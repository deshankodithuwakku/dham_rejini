import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowUpRight, MessageCircle, MapPin, Shield } from "lucide-react";
import { businessInfo } from "../data/business";

export default function Footer() {
  const currentYear = businessInfo.copyrightYear || new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Left Column: Brand */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo" aria-label="Dham Rejini Home">
              <img
                src="/assets/images/dham-rejini-logo.png"
                alt="Dham Rejini Logo"
                className="footer-logo-img"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-title">{businessInfo.brandName}</span>
                <span className="footer-brand-subtitle">{businessInfo.businessType}</span>
              </div>
            </Link>
            <p className="footer-statement">
              {businessInfo.brandStatement}
            </p>
            <div className="footer-owner-indicator">
              <Shield size={16} />
              <span>Owner & Management: <strong>{businessInfo.ownerName}</strong></span>
            </div>
          </div>

          {/* Middle Column: Navigation Links */}
          <div className="footer-col nav-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/" className="footer-link">HOME</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">ABOUT</Link>
              </li>
              <li>
                <Link to="/special-hire" className="footer-link">SPECIAL HIRE</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">GALLERY</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* Connected Ventures Column */}
          <div className="footer-col ventures-col">
            <h4 className="footer-col-title">VENTURES</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/alankara-automotive" className="footer-venture-link">
                  <span>ALANKARA AUTOMOTIVE</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/kochchi-restaurant" className="footer-venture-link">
                  <span>KOCHCHI RESTAURANT</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
            <div className="footer-coverage-note">
              <MapPin size={14} />
              <span>Serving all 9 Provinces across Sri Lanka</span>
            </div>
          </div>

          {/* Right Column: Direct Contact & WhatsApp */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">DIRECT RESERVATION</h4>
            <p className="footer-contact-desc">
              Immediate trip quotations and vehicle inspection scheduling:
            </p>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-card"
            >
              <div className="wa-icon-bubble">
                <MessageCircle size={22} />
              </div>
              <div className="wa-card-info">
                <span className="wa-label">DIRECT WHATSAPP</span>
                <strong className="wa-number">{businessInfo.primaryPhone}</strong>
              </div>
            </a>

            <div className="footer-social-strip">
              <span className="social-heading">FOLLOW US</span>
              <div className="social-links-row">
                {businessInfo.socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={`Visit our ${s.name}`}
                  >
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} Dham Rejini. All Rights Reserved. Special Hire Sri Lanka.
          </p>
          <div className="footer-bottom-meta">
            <span>Powered by Precision Travel Logistics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
