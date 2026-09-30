import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { businessInfo } from "../data/business";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SPECIAL HIRE", path: "/special-hire" },
    { name: "ALANKARA AUTOMOTIVE", path: "/alankara-automotive" },
    { name: "KOCHCHI RESTAURANT", path: "/kochchi-restaurant" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`site-header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <Link to="/" className="brand-logo" aria-label="Dham Rejini Home">
          <img
            src="/assets/images/dham-rejini-logo.png"
            alt="Dham Rejini Logo"
            className="brand-logo-img"
          />
          <div className="brand-text-block">
            <span className="brand-title">{businessInfo.brandName}</span>
            <span className="brand-subtitle">{businessInfo.businessType}</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle & Book Now CTA */}
        <div className="nav-actions">
          <ThemeToggle />

          <Link to="/#booking" className="btn-primary nav-cta-btn">
            <span>BOOK NOW</span>
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-owner-badge">
            <ShieldCheck size={16} />
            <span>DIRECT HIRE • {businessInfo.ownerName}</span>
          </div>
          <ul className="mobile-menu-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`mobile-nav-link ${isActive(link.path) ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta">
            <Link
              to="/#booking"
              className="btn-primary mobile-cta-action"
              onClick={() => setMobileMenuOpen(false)}
            >
              BOOK YOUR JOURNEY
            </Link>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mobile-wa-action"
            >
              DIRECT WHATSAPP: {businessInfo.primaryPhone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
