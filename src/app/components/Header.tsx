"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return (
    <header className={`header-main ${isSticky ? "sticky" : ""}`}>
      <div className="page-center">
        <div className="custom-header-logo">
          <Link href="/" className="logo-link" onClick={() => setIsOpen(false)}>
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
              <Link href="/#services" role="menuitem" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/results" role="menuitem" onClick={() => setIsOpen(false)}>Results</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/tably" role="menuitem" onClick={() => setIsOpen(false)}>Products</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/aboutus" role="menuitem" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li className="nav-item" role="none">
              <Link href="/faqs" role="menuitem" onClick={() => setIsOpen(false)}>FAQs</Link>
            </li>
            <li className="nav-item cta-btn" role="none">
              <Link href="/getintouch" role="menuitem" onClick={() => setIsOpen(false)}>Book A Call</Link>
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
