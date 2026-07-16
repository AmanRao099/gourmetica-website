"use client";

import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Flex } from '@/core/primitives';
import { Button } from '@/core/components';
import { cn } from '@/core/utils';
import { useScrollHeader } from '@/core/hooks/useScrollHeader';

/* ───────────────────────────────────────────
   Types
   ─────────────────────────────────────────── */
export interface NavItem { label: string; href: string; }
export interface HeaderBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  cta?: NavItem;
}

import { getServiceNavItems } from '@/features/services/repositories/service.repository';

/* ───────────────────────────────────────────
   Service Items (from repository — single source of truth)
   ─────────────────────────────────────────── */
const SERVICES = getServiceNavItems();

/* ───────────────────────────────────────────
   Navigation defaults
   ─────────────────────────────────────────── */
const defaultNavItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/products' },
  { label: 'Work', href: '/results' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Clients', href: '/clients' },
  { label: 'News', href: '/news' },
  { label: 'FAQs', href: '/faqs' },
];
const defaultCta: NavItem = { label: 'Get In Touch', href: '/getintouch' };

/* Routes whose page tops are light: the unscrolled header is transparent with
   white links, which vanishes on them. These get the same solid dark backdrop
   the bar visually sits on on /clients (white links over black). */
const DARK_HEADER_ROUTES = ['/news', '/faqs', '/aboutus'];

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export const HeaderBlock = React.forwardRef<HTMLDivElement, HeaderBlockProps>(
  ({ logo, navItems = defaultNavItems, cta = defaultCta, className, ...props }, ref) => {
    const { isScrolled, direction } = useScrollHeader(20);
    const pathname = usePathname();
    const hasDarkHeader = DARK_HEADER_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const closeTimer = useRef<NodeJS.Timeout | null>(null);

    // Close on outside click
    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, []);

    const enter = useCallback(() => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setDropdownOpen(true);
    }, []);

    const leave = useCallback(() => {
      closeTimer.current = setTimeout(() => setDropdownOpen(false), 220);
    }, []);

    const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.includes('#')) {
        const parts = href.split('#');
        const hash = parts[parts.length - 1];
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }, []);

    const logoSrc = isScrolled ? "/images/logo/logoscroll.png" : "/images/logo/logo.png";
    const resolvedLogo = logo || (
      <img
        src={logoSrc}
        alt="Gourmetica Logo"
        className="transition-all duration-300 block"
        style={{ height: isScrolled ? 44 : 52, width: 'auto', maxHeight: '100%' }}
      />
    );

    // Matches gourmetica.co.uk: Eina 03, 12px/16px, weight 500, 2px tracking, uppercase.
    const navLinkStyle: React.CSSProperties = {
      fontFamily: 'var(--font-mont)',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '2px',
      padding: '15px 22px 13px',
    };
    // Colours live in globals.css: the unlayered `a { color: inherit }` there outranks
    // Tailwind's layered text-* utilities, so they cannot be set with classes here.
    const navLinkClass = "nav-link whitespace-nowrap transition-colors duration-200 uppercase";

    const isRedHeader = isScrolled && direction === 'up';
    const headerBgColor = isScrolled
      ? (direction === 'up' ? "#e42528" : "transparent")
      : (hasDarkHeader ? "#0a0a0a" : "transparent");

    return (
      <header
        ref={ref}
        className={cn(
          'site-header fixed top-0 left-0 w-full z-[1000] flex items-center transition-all duration-300 border-b',
          isScrolled
            ? 'is-scrolled h-[64px] md:h-[72px] lg:h-[88px]'
            : 'h-[72px] md:h-[80px] lg:h-[104px]',
          isRedHeader
            ? 'border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.28)]'
            : 'border-transparent shadow-none',
          className
        )}
        style={{
          backgroundColor: headerBgColor,
          backdropFilter: isScrolled && !isRedHeader ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled && !isRedHeader ? "blur(20px)" : "none",
        }}
        {...props}
      >
        <div
          className="w-full mx-auto max-w-[1440px] flex items-center justify-between gap-x-8"
          style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
        >
          <Link
            href="/"
            className="logo-link shrink-0 transition-all duration-300"
            style={{
              backgroundColor: isRedHeader ? "#e42528" : "transparent",
              padding: isScrolled ? "8px 16px" : "8px 0",
            }}
            onClick={() => setIsOpen(false)}
          >
            {resolvedLogo}
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden xl:flex items-center min-w-0">
            <ul className="flex items-center list-none" style={{ gap: 12 }}>
              {navItems.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <li
                      key="services"
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={enter}
                      onMouseLeave={leave}
                    >
                      <Link
                        href={item.href}
                        className={cn(navLinkClass, "flex items-center gap-1.5 bg-transparent border-none cursor-pointer")}
                        style={navLinkStyle}
                        onClick={(e) => {
                          setDropdownOpen(false);
                          handleLinkClick(e, item.href);
                        }}
                      >
                        {item.label}
                        <svg
                          className={cn("w-2.5 h-2.5 transition-transform duration-200 ml-0.5", dropdownOpen && "rotate-180")}
                          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDropdownOpen(!dropdownOpen);
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* ── Compact Dropdown ── */}
                      <div
                        className={cn(
                          "absolute top-full left-0 pt-3 transition-all duration-[180ms] ease-out origin-top-left",
                          dropdownOpen
                            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                            : "opacity-0 -translate-y-1.5 scale-[0.98] pointer-events-none"
                        )}
                      >
                        {/* Dropdown card — small, dark premium */}
                        <div
                          className="rounded-xl overflow-hidden"
                          style={{
                            width: 'min(248px, calc(100vw - 32px))',
                            backgroundColor: 'rgba(12,12,12,0.97)',
                            backdropFilter: 'blur(24px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                            boxShadow: '0 20px 45px rgba(0,0,0,0.4), 0 4px 14px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          {/* Service list */}
                          <div className="py-1.5 px-1.5 flex flex-col">
                            {SERVICES.map((service, idx) => (
                              <Link
                                key={idx}
                                href={service.href}
                                className="group relative flex items-center gap-2 rounded-lg transition-colors duration-150"
                                style={{ padding: '7px 10px' }}
                                onClick={(e) => {
                                  setDropdownOpen(false);
                                  handleLinkClick(e, service.href);
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                }}
                              >
                                <span
                                  className="shrink-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                                  style={{ width: 4, height: 4 }}
                                  aria-hidden
                                />
                                <span
                                  className="font-heading font-semibold text-white/85 group-hover:text-white transition-colors duration-150"
                                  style={{ fontSize: 12.5, letterSpacing: '0.01em' }}
                                >
                                  {service.title}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={navLinkClass}
                      style={navLinkStyle}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              {cta && (
                <li className="ml-2">
                  <Button asChild className="cta-link rounded-none px-[24px] py-3 font-bold uppercase tracking-[0.04em] text-[12px] h-auto whitespace-nowrap">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </li>
              )}
            </ul>
          </nav>

          {/* ── Mobile Toggle ── */}
          <button
            className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn('block w-6 h-0.5 bg-white transition-transform duration-300', isOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-6 h-0.5 bg-white transition-opacity duration-300', isOpen && 'opacity-0')} />
            <span className={cn('block w-6 h-0.5 bg-white transition-transform duration-300', isOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {isOpen && (
          <Box
            className="fixed inset-0 bg-neutral-950 z-40 xl:hidden flex flex-col h-screen overflow-y-auto"
            style={{ paddingTop: 96, paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
          >
            <Flex direction="col" gap="md" as="nav">
              {navItems.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div key="services-mobile">
                      <div className="flex items-center justify-between w-full">
                        <Link
                          href={item.href}
                          className="mobile-nav-link font-heading font-bold text-2xl uppercase transition-colors"
                          onClick={(e) => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                            handleLinkClick(e, item.href);
                          }}
                        >
                          {item.label}
                        </Link>
                        <button
                          className="p-2 text-white hover:text-brand-500 bg-transparent border-none cursor-pointer"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          aria-label="Toggle services menu"
                        >
                          <svg
                            className={cn("w-6 h-6 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <div className="mt-3 ml-1 flex flex-col border-l border-white/10 pl-4">
                          {SERVICES.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              className="mobile-nav-sublink font-heading font-medium py-2.5 transition-colors"
                              style={{ fontSize: 15 }}
                              onClick={(e) => {
                                setIsOpen(false);
                                setMobileServicesOpen(false);
                                handleLinkClick(e, service.href);
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="mobile-nav-link font-heading font-bold text-2xl uppercase transition-colors"
                    onClick={(e) => {
                      setIsOpen(false);
                      handleLinkClick(e, item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {cta && (
                <Button asChild className="mobile-cta-link rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto w-full mt-4">
                  <Link href={cta.href} onClick={() => setIsOpen(false)}>{cta.label}</Link>
                </Button>
              )}
            </Flex>
          </Box>
        )}
      </header>
    );
  }
);
HeaderBlock.displayName = 'HeaderBlock';
