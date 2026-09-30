import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Image as ImageIcon, Sparkles } from "lucide-react";
import { businessInfo } from "../data/business";

export default function Hero() {
  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" aria-label="Dham Rejini Hero Showcase">
      <div className="hero-background-container">
        <img
          src="/assets/images/bus-highway.jpg"
          alt="Dham Rejini Actual VVIP Party Bus SP NB - 4118"
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-layout-single">
          {/* Main Hero Branding & Actions */}
          <div className="hero-text-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>VVIP PARTY BUS • SPECIAL HIRE</span>
            </div>

            <div className="hero-logo-container">
              <img
                src="/assets/images/dham-rejini-logo.png"
                alt="Dham Rejini Official Logo"
                className="hero-logo-img"
              />
            </div>

            <h1 className="hero-title">
              <span className="hero-brand">{businessInfo.brandName}</span>
              <span className="hero-subbrand">{businessInfo.businessType}</span>
            </h1>

            <p className="hero-tagline">“{businessInfo.heroTagline}”</p>
            <p className="hero-secondary-text">{businessInfo.heroSecondary}</p>

            <div className="hero-cta-group">
              <a
                href="#booking"
                onClick={handleScrollToBooking}
                className="btn-primary hero-btn-main"
                id="hero-book-now"
              >
                <span>BOOK NOW</span>
                <ArrowUpRight size={18} />
              </a>
              <Link to="/gallery" className="btn-secondary hero-btn-sub">
                <ImageIcon size={18} />
                <span>VIEW GALLERY</span>
              </Link>
            </div>

            <div className="hero-meta-strip">
              <div className="meta-item">
                <span className="meta-label">OWNER</span>
                <strong className="meta-val">{businessInfo.ownerName}</strong>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-label">DIRECT WHATSAPP</span>
                <strong className="meta-val">{businessInfo.primaryPhone}</strong>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-label">REGISTRATION</span>
                <strong className="meta-val">SP NB - 4118</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
