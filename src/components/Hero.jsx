import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { businessInfo } from "../data/business";

export default function Hero() {
  const whatsappUrl = businessInfo.whatsappUrl || "https://wa.me/94767958695";

  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Staggered falling character generator
  const renderFallingChars = (text, startDelay = 0.5, step = 0.07, charClass = "") => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span key={index} className="falling-space">
            &nbsp;
          </span>
        );
      }
      const delay = (startDelay + index * step).toFixed(2);
      return (
        <span
          key={index}
          className={`falling-char ${charClass}`}
          style={{ animationDelay: `${delay}s` }}
          aria-hidden="true"
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section className="cinematic-hero-section" aria-label="Dham Rejini Special Hire Homepage Hero">
      {/* LAYER 1: Deep Dark Background & Ambient Purple Aura */}
      <div className="hero-layer-bg" aria-hidden="true" />
      <div className="hero-layer-ambient-aura" aria-hidden="true" />

      {/* LAYER 2: Original Dam Rajini Bus Image (Full Bus Visible, Contain) */}
      <div className="hero-layer-bus" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/dham-rejini-original.jpg`}
          alt="Dham Rejini Special Hire bus"
          className="hero-full-bus-img"
          loading="eager"
        />
      </div>

      {/* LAYER 3: Soft Depth-of-Field Overlay */}
      <div className="hero-layer-dof-overlay" aria-hidden="true" />

      {/* LAYER 4: Dark Readability Vignette Gradient (transparent black -> soft black -> transparent black) */}
      <div className="hero-layer-readability-overlay" aria-hidden="true" />

      {/* Top Status Bar */}
      <header className="hero-top-status-bar">
        <div className="hero-status-pill">
          <span className="status-dot-pulse" aria-hidden="true" />
          <span>VVIP PARTY BUS • SPECIAL HIRE</span>
        </div>
        <div className="hero-reg-plate">
          <span>SP NB - 4118 • LIMOUSINE EDITION</span>
        </div>
      </header>

      {/* LAYER 5: Falling Typography Stage */}
      <div className="hero-stage-container">
        <div className="hero-falling-content">
          {/* Brand Name with Falling Letters: DHAM REJINI */}
          <div className="hero-brand-falling">
            <span className="sr-only">DHAM REJINI</span>
            <div className="falling-word word-dham">
              {renderFallingChars("DHAM", 0.5, 0.08, "char-dham")}
            </div>
            <span className="falling-word-gap">&nbsp;</span>
            <div className="falling-word word-rejini">
              {renderFallingChars("REJINI", 0.85, 0.07, "char-rejini")}
            </div>
          </div>

          {/* Sub-brand: SPECIAL HIRE */}
          <div className="hero-subbrand-fade">
            <span className="hero-subbrand-rule" aria-hidden="true" />
            <span className="hero-subbrand-text">{businessInfo.businessType}</span>
            <span className="hero-subbrand-rule" aria-hidden="true" />
          </div>

          {/* Main Headline: A NEW EXPERIENCE IS COMING. */}
          <div className="hero-headline-falling">
            <span className="sr-only">A NEW EXPERIENCE IS COMING.</span>
            
            <div className="falling-line line-eyebrow">
              {renderFallingChars("A NEW EXPERIENCE", 1.45, 0.045, "char-eyebrow")}
            </div>

            <div className="falling-line line-coming">
              {renderFallingChars("IS COMING.", 1.95, 0.05, "char-coming")}
            </div>
          </div>

          {/* Supporting Text */}
          <p className="hero-supporting-text">
            A brand-new Dam Rajini experience is coming soon.
          </p>

          {/* LAYER 6: Contact Action CTA */}
          <div className="hero-cta-wrapper">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-contact-btn"
              id="btn-hero-contact-whatsapp"
              aria-label="Contact Dham Rejini on WhatsApp"
            >
              <MessageCircle size={22} aria-hidden="true" />
              <span>CONTACT US</span>
            </a>

            <div className="hero-stay-tuned">
              <span className="stay-tuned-line" aria-hidden="true" />
              <span className="stay-tuned-text">STAY TUNED FOR MORE UPDATES</span>
              <span className="stay-tuned-line" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Footer Strip */}
      <footer className="hero-bottom-strip">
        <div className="hero-strip-left">
          <span>Owner &amp; Management: <strong>{businessInfo.ownerName}</strong></span>
          <span className="strip-divider">•</span>
          <span>Sri Lanka Island-Wide</span>
        </div>
        <div className="hero-strip-right">
          <span>&copy; {new Date().getFullYear()} DHAM REJINI. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
}
