import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Image as ImageIcon } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GalleryGrid from "../components/GalleryGrid";
import { businessInfo } from "../data/business";

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">PHOTOGRAPHIC ARCHIVE</span>
            <h1 className="page-hero-title">DHAM REJINI GALLERY</h1>
            <p className="page-hero-subtitle">
              Browse through high-resolution photography capturing our flagship coach, interior cabin amenities, road expeditions, and evening party bus travel across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="gallery-main-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="CLICK ANY PHOTO TO ENLARGE"
            title="THE FLEET IN PERSPECTIVE"
            subtitle="Filter by category to explore exterior styling, interior appointments, and live journey captures."
          />

          <GalleryGrid />
        </div>
      </section>

      {/* Client Upload Notice */}
      <div className="container">
        <div className="gallery-client-note">
          <ImageIcon size={20} className="client-note-icon" />
          <div>
            <strong>Asset Management Notice:</strong>
            <p>
              New verified photographs of Dham Rejini journeys, client events, and updated cabin amenities can be placed directly in <code>/public/assets/images/</code> and registered in <code>src/data/gallery.js</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="cta-banner-section section-spacing">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">EXPERIENCE IT IN PERSON</span>
              <h2 className="cta-heading">IMPRESSED BY WHAT YOU SEE?</h2>
              <p className="cta-sub">
                Book Dham Rejini for your upcoming trip or schedule an in-person vehicle inspection before you make your reservation.
              </p>
              <div className="cta-buttons">
                <Link to="/#booking" className="btn-primary">
                  <span>BOOK YOUR TRIP</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Phone size={18} />
                  <span>WHATSAPP {businessInfo.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
