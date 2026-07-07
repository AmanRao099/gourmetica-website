"use client";

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Box, Flex } from '@/core/primitives';
import { Button } from '@/core/components';
import { cn } from '@/core/utils';
import { useScrollHeader } from '@/core/hooks/useScrollHeader';

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  navItems?: NavItem[];
  cta?: NavItem;
}

const defaultNavItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/results' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'FAQs', href: '/faqs' },
];

const defaultCta: NavItem = { label: 'Get In Touch', href: '/getintouch' };

export const HeaderBlock = React.forwardRef<HTMLDivElement, HeaderBlockProps>(
  (
    {
      logo,
      navItems = defaultNavItems,
      cta = defaultCta,
      className,
      ...props
    },
    ref
  ) => {
    const { isScrolled } = useScrollHeader(20);
    const [isOpen, setIsOpen] = useState(false);

    const logoSrc = isScrolled ? "/images/logo/logoscroll.png" : "/images/logo/logo.png";
    const resolvedLogo = logo || (
      <img
        src={logoSrc}
        alt="Gourmetica Logo"
        style={{
          height: isScrolled ? "60px" : "68px",
          width: "auto",
          display: "block"
        }}
        className="transition-all duration-300"
      />
    );

    return (
      <header
        ref={ref}
        className={cn(
          'fixed top-0 left-0 w-full z-[1000] flex items-center transition-all duration-300 border-b',
          isScrolled
            ? 'h-[88px] border-white/5 shadow-[0_8px_40px_rgba(0,0,0,0.28)]'
            : 'h-[104px] border-transparent',
          className
        )}
        style={{
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.72)" : "transparent",
          backdropFilter: isScrolled ? "blur(18px) saturate(160%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(18px) saturate(160%)" : "none",
        }}
        {...props}
      >
        <div className="w-full mx-auto max-w-[1440px] flex items-center justify-between" style={{ paddingLeft: 120, paddingRight: 120 }}>
          <Link href="/" className="logo-link shrink-0" onClick={() => setIsOpen(false)}>
            {resolvedLogo}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center list-none" style={{ gap: '56px' }}>
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <Link
                    href={item.href}
                    className="font-heading font-semibold tracking-wider text-white/90 hover:text-white transition-colors duration-200"
                    style={{ fontSize: '15px', letterSpacing: '0.08em' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {cta && (
                <li className="nav-item cta-btn">
                  <Button asChild className="bg-primary hover:bg-[#bd1a1d] text-white rounded-none px-[34px] py-[18px] font-bold uppercase tracking-[0.05em] text-[12px] h-14">
                    <Link href={cta.href}>
                      {cta.label}
                    </Link>
                  </Button>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile Toggle */}
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

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <Box className="fixed inset-0 bg-neutral-950 z-40 lg:hidden pt-24 px-8 flex flex-col h-screen">
            <Flex direction="col" gap="xl" as="nav">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-heading font-bold text-2xl uppercase text-white hover:text-brand-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
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
