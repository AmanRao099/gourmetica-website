"use client";

import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
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
  { label: 'Work', href: '/results' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'FAQs', href: '/faqs' },
];
const defaultCta: NavItem = { label: 'Get In Touch', href: '/getintouch' };

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */
export const HeaderBlock = React.forwardRef<HTMLDivElement, HeaderBlockProps>(
  ({ logo, navItems = defaultNavItems, cta = defaultCta, className, ...props }, ref) => {
    const { isScrolled } = useScrollHeader(20);
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

    const logoSrc = isScrolled ? "/images/logo/logoscroll.png" : "/images/logo/logo.png";
    const resolvedLogo = logo || (
      <img
        src={logoSrc}
        alt="Gourmetica Logo"
        className="transition-all duration-300 block"
        style={{ height: isScrolled ? 44 : 52, width: 'auto', maxHeight: '100%' }}
      />
    );

    const navLinkStyle: React.CSSProperties = { fontSize: 15, letterSpacing: '0.08em' };
    const navLinkClass = "font-heading font-semibold tracking-wider text-white/90 hover:text-white transition-colors duration-200";

    return (
      <header
        ref={ref}
        className={cn(
          'fixed top-0 left-0 w-full z-[1000] flex items-center transition-all duration-300 border-b',
          isScrolled
            ? 'h-[64px] md:h-[72px] lg:h-[88px] border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.28)]'
            : 'h-[72px] md:h-[80px] lg:h-[104px] border-transparent',
          className
        )}
        style={{
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.72)" : "transparent",
          backdropFilter: isScrolled ? "blur(18px) saturate(160%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(18px) saturate(160%)" : "none",
        }}
        {...props}
      >
        <div
          className="w-full mx-auto max-w-[1440px] flex items-center justify-between"
          style={{ paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
        >
          <Link href="/" className="logo-link shrink-0" onClick={() => setIsOpen(false)}>
            {resolvedLogo}
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center list-none" style={{ gap: 56 }}>
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
                      <button
                        className={cn(navLinkClass, "flex items-center gap-1.5 bg-transparent border-none cursor-pointer")}
                        style={navLinkStyle}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <svg
                          className={cn("w-2.5 h-2.5 transition-transform duration-200 ml-0.5", dropdownOpen && "rotate-180")}
                          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* ── Clean White Dropdown ── */}
                      <div
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-[180ms] ease-out",
                          dropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        )}
                      >
                        {/* Dropdown card — dark premium simple stacked */}
                        <div
                          className="rounded-2xl overflow-hidden"
                          style={{
                            width: 'min(420px, calc(100vw - 48px))',
                            backgroundColor: 'rgba(12,12,12,0.97)',
                            backdropFilter: 'blur(24px) saturate(150%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(150%)',
                            boxShadow: '0 30px 70px rgba(0,0,0,0.45), 0 8px 24px rgba(0,0,0,0.20)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          {/* Service list */}
                          <div className="py-4 px-3 flex flex-col gap-1.5">
                            {SERVICES.map((service, idx) => {
                              const hasPage = !service.href.startsWith('/#');
                              const descriptions: Record<string, string> = {
                                'Strategy': 'Tailored growth strategies aligned with your goals.',
                                'Branding': 'Memorable brand design, positioning and systems.',
                                'Website Design & Development': 'Fast, responsive websites built for growth.',
                                'Search Engine Optimisation': 'SEO strategies for organic search growth.',
                                'Social Media Management': 'Engaged social presence and campaigns.',
                                'Photography': 'Enticing food, space and brand photography.',
                                'Advertising': 'PPC, search and retargeting campaigns.',
                                'Email Marketing': 'Data-driven automated campaigns.',
                                'Google Business Profile': 'Optimize local visibility and reviews.',
                              };
                              const desc = descriptions[service.title] || '';

                              return (
                                <Link
                                  key={idx}
                                  href={service.href}
                                  className="group flex flex-col transition-all duration-[260ms] ease-out rounded-xl"
                                  style={{
                                    padding: '12px 20px',
                                    backgroundColor: 'transparent',
                                    borderLeft: '2px solid transparent',
                                  }}
                                  onClick={() => setDropdownOpen(false)}
                                  onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.backgroundColor = 'rgba(255,255,255,0.03)';
                                    el.style.paddingLeft = '28px'; // +8px from 20px default
                                    if (hasPage) {
                                      el.style.borderLeftColor = '#E42528';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.backgroundColor = 'transparent';
                                    el.style.paddingLeft = '20px';
                                    el.style.borderLeftColor = 'transparent';
                                  }}
                                >
                                  {/* Title */}
                                  <span
                                    className="font-heading font-bold transition-colors duration-150 text-white/95"
                                    style={{
                                      fontSize: 15,
                                      letterSpacing: '0.02em',
                                    }}
                                  >
                                    {service.title}
                                  </span>

                                  {/* Description */}
                                  <span
                                    className="text-white/40 font-secondary mt-1 block"
                                    style={{ fontSize: 12, lineHeight: 1.4, maxWidth: '36ch' }}
                                  >
                                    {desc}
                                  </span>

                                  {/* Learn More (if page exists) */}
                                  {hasPage && (
                                    <span
                                      className="inline-flex items-center gap-1.5 font-heading font-semibold uppercase tracking-[0.06em] text-[#E42528] mt-2.5 transition-colors duration-200"
                                      style={{ fontSize: 11 }}
                                    >
                                      Learn More
                                      <svg
                                        className="w-3 h-3 transition-transform duration-[180ms] ease-out group-hover:translate-x-1"
                                        fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                      </svg>
                                    </span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="nav-item">
                    <Link href={item.href} className={navLinkClass} style={navLinkStyle}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              {cta && (
                <li className="nav-item cta-btn">
                  <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[34px] py-[18px] font-bold uppercase tracking-[0.05em] text-[12px] h-14">
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                </li>
              )}
            </ul>
          </nav>

          {/* ── Mobile Toggle ── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
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
            className="fixed inset-0 bg-neutral-950 z-40 lg:hidden flex flex-col h-screen overflow-y-auto"
            style={{ paddingTop: 96, paddingLeft: 'var(--page-gutter)', paddingRight: 'var(--page-gutter)' }}
          >
            <Flex direction="col" gap="md" as="nav">
              {navItems.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div key="services-mobile">
                      <button
                        className="font-heading font-bold text-2xl uppercase text-white hover:text-brand-500 transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer w-full text-left"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        {item.label}
                        <svg
                          className={cn("w-4 h-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileServicesOpen && (
                        <div className="mt-3 ml-1 flex flex-col border-l border-white/10 pl-4">
                          {SERVICES.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.href}
                              className="font-heading font-medium text-white/70 hover:text-white py-2.5 transition-colors"
                              style={{ fontSize: 15 }}
                              onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
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
                    className="font-heading font-bold text-2xl uppercase text-white hover:text-brand-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {cta && (
                <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[22px] pt-[15px] pb-[13px] font-bold uppercase tracking-[0.05em] text-[12px] h-auto w-full mt-4">
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
