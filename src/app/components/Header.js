"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`header-main ${isSticky ? "sticky" : ""}`}>
      <div className="page-center">
        <div className="custom-header-logo">
          <Link href="/" className="logo-link">
            {/* Using the white/trans logo PNG.1.png which looks premium on dark/sticky glass backgrounds */}
            <img 
              src="/images/logo/PNG.1.png" 
              alt="Gourmetica Logo" 
              style={{ width: "242px", height: "auto" }}
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          <span style={{ transform: isOpen ? "rotate(45deg) translate(6px, 6px)" : "none" }}></span>
          <span style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ transform: isOpen ? "rotate(-45deg) translate(6px, -6px)" : "none" }}></span>
        </div>

        <nav className="custom-menu-primary">
          <ul className={`nav-menu ${isOpen ? "open" : ""}`} role="menu">
            <li className="nav-item" role="none">
              <Link href="/#services" role="menuitem">Services</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/ourwork" role="menuitem">Work</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/products" role="menuitem">Products</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/aboutus" role="menuitem">About Us</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/faqs" role="menuitem">FAQs</Link>
            </li>
            <li className="nav-item cta-btn" role="none">
              <Link href="/getintouch" role="menuitem">Book A Call</Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        /* Local scoped JSX styles to add specific overlay details for the mobile view */
        @media (max-width: 767px) {
          .nav-menu {
            display: flex;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .nav-menu.open {
            opacity: 1;
            pointer-events: all;
          }
        }
      `}</style>
    </header>
  );
}
