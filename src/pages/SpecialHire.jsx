import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Info, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import BookingForm from "../components/BookingForm";
import { specialHireServices } from "../data/services";
import { businessInfo } from "../data/business";

export default function SpecialHire() {
  return (
    <div className="special-hire-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">PRIVATE CHARTER EXPERTISE</span>
            <h1 className="page-hero-title">SPECIAL HIRE</h1>
            <p className="page-hero-subtitle">
              Distinguished bus charter services for your private journeys, festive celebrations, pilgrimages, and executive corporate transit across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="container">
        <div className="disclaimer-banner">
          <Info size={20} className="disclaimer-icon" />
          <p>
            <strong>Service Notice:</strong> The categories below represent common special hire arrangements. Final vehicle allocations, itinerary feasibility, and custom specifications will be confirmed directly with the owner upon request.
          </p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <section className="hire-services-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="EXPLORE CATEGORIES"
            title="TAILORED CHARTER OPTIONS"
            subtitle="Select the travel style that best matches your group's upcoming journey."
          />

          <div className="services-grid">
            {specialHireServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="SEAMLESS PROCEDURE"
            title="HOW TO RESERVE DHAM REJINI"
            subtitle="Four straightforward steps to secure your private charter."
          />

          <div className="steps-grid">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3 className="step-title">Submit Requirements</h3>
              <p className="step-desc">Fill out our booking form or message us with your travel dates, pickup point, and destination.</p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3 className="step-title">Direct Quotation</h3>
              <p className="step-desc">Receive an immediate, transparent price quotation and route feasibility assessment via WhatsApp.</p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3 className="step-title">Confirm & Inspect</h3>
              <p className="step-desc">Confirm your reservation with a standard advance deposit. Vehicle inspection can be arranged on request.</p>
            </div>

            <div className="step-card">
              <span className="step-number">04</span>
              <h3 className="step-title">Travel in Distinction</h3>
              <p className="step-desc">Our punctual, impeccably cleaned bus arrives ahead of schedule, prepared for a relaxed expedition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Component */}
      <BookingForm id="booking" />

      {/* Direct Contact Callout */}
      <section className="cta-banner-section section-spacing">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">DIRECT MANAGEMENT LINE</span>
              <h2 className="cta-heading">HAVE A BESPOKE TRIP IN MIND?</h2>
              <p className="cta-sub">
                Multiple days, multi-city drops, or custom wedding convoy coordination? Speak directly with owner Supun Wijesinghe for flexible arrangements.
              </p>
              <div className="cta-buttons">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Phone size={18} />
                  <span>WHATSAPP {businessInfo.primaryPhone}</span>
                </a>
                <Link to="/contact" className="btn-secondary">
                  <span>CONTACT PAGE</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
