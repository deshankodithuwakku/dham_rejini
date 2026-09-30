import React from "react";
import { ShieldCheck, Phone, CheckCircle, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { businessInfo } from "../data/business";

export default function OwnerSection({ showEnterpriseLinks = true }) {
  return (
    <section className="owner-section section-spacing">
      <div className="container">
        <div className="owner-card-wrapper">
          <div className="owner-grid">
            {/* Owner Image */}
            <div className="owner-visual-col">
              <div className="owner-image-frame">
                <img
                  src="/assets/images/owner-profile.jpg"
                  alt={`Owner ${businessInfo.ownerName}`}
                  className="owner-photo"
                  loading="lazy"
                />
                <div className="owner-floating-tag">
                  <ShieldCheck size={18} />
                  <span>FOUNDER & OPERATOR</span>
                </div>
              </div>
            </div>

            {/* Owner Content */}
            <div className="owner-content-col">
              <div className="owner-badge">
                <span>DIRECT ACCOUNTABILITY</span>
              </div>
              <h2 className="owner-name">{businessInfo.ownerName}</h2>
              <p className="owner-role">Founder, Dham Rejini Special Hire</p>

              <blockquote className="owner-quote">
                “When you book Dham Rejini, you are entrusting us with your most important family moments, company milestones, and sacred journeys. We ensure every mile is conducted with meticulous care, uncompromising safety, and genuine Sri Lankan hospitality.”
              </blockquote>

              <div className="owner-highlights">
                <div className="owner-point">
                  <CheckCircle size={18} className="point-icon" />
                  <span>Direct booking coordination with the owner</span>
                </div>
                <div className="owner-point">
                  <CheckCircle size={18} className="point-icon" />
                  <span>Verified route transparency & punctuality guarantee</span>
                </div>
                <div className="owner-point">
                  <CheckCircle size={18} className="point-icon" />
                  <span>Enterprise ventures in automotive services & hospitality</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="owner-action-strip">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp owner-wa-btn"
                >
                  <Phone size={18} />
                  <span>CHAT WITH SUPUN: {businessInfo.primaryPhone}</span>
                </a>
              </div>

              {/* Related Enterprises */}
              {showEnterpriseLinks && (
                <div className="owner-enterprises">
                  <span className="enterprises-label">CONNECTED VENTURES:</span>
                  <div className="enterprise-links">
                    <Link to="/alankara-automotive" className="enterprise-chip">
                      <span>ALANKARA AUTOMOTIVE</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link to="/kochchi-restaurant" className="enterprise-chip">
                      <span>KOCHCHI RESTAURANT</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
