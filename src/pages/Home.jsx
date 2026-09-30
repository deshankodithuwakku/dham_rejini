import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Clock, Award, Sparkles, Phone, CheckCircle } from "lucide-react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import BookingForm from "../components/BookingForm";
import BusShowcase from "../components/BusShowcase";
import ServiceCard from "../components/ServiceCard";
import GalleryGrid from "../components/GalleryGrid";
import OwnerSection from "../components/OwnerSection";
import SectionHeading from "../components/SectionHeading";
import { specialHireServices } from "../data/services";
import { businessInfo } from "../data/business";

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Full-screen Hero */}
      <Hero />

      {/* 2. Horizontal Brand Marquee */}
      <Marquee />

      {/* 3. Booking Request Section */}
      <BookingForm id="booking" />

      {/* 4. Dham Rejini Introduction */}
      <section className="intro-section section-spacing">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text-col">
              <span className="section-badge">DEFINING PRIVATE HIRE EXCELLENCE</span>
              <h2 className="intro-title">
                DISTINGUISHED ROAD TRAVEL ACROSS SRI LANKA
              </h2>
              <p className="intro-paragraph">
                Dham Rejini Special Hire was conceived to elevate the standards of chartered bus travel in Sri Lanka. As a recognized VVIP Party Bus and Grand Luxury Limousine Edition, we provide high-profile corporate retreats, festive family gatherings, wedding party logistics, and long-distance island tours with unmatched energy and comfort.
              </p>
              <p className="intro-paragraph">
                Every booking is personally coordinated with direct accountability, transparent communication, and meticulous attention to cleanliness, sound quality, mechanical safety, and passenger comfort.
              </p>
              <div className="intro-cta-row">
                <Link to="/about" className="btn-secondary">
                  <span>THE DHAM REJINI STORY</span>
                  <ArrowRight size={16} />
                </Link>
                <div className="intro-owner-stamp">
                  <ShieldCheck size={20} className="stamp-icon" />
                  <span>Managed by <strong>{businessInfo.ownerName}</strong></span>
                </div>
              </div>
            </div>

            <div className="intro-stats-col">
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Compass size={28} />
                </div>
                <div className="stat-content">
                  <span className="stat-heading">Island-Wide Range</span>
                  <p className="stat-desc">Operates across all scenic routes, coastal highways, and mountain provinces.</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Clock size={28} />
                </div>
                <div className="stat-content">
                  <span className="stat-heading">Punctual Schedules</span>
                  <p className="stat-desc">Dedicated route planning with strict departure and arrival discipline.</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <Award size={28} />
                </div>
                <div className="stat-content">
                  <span className="stat-heading">Pristine Fleet Care</span>
                  <p className="stat-desc">Maintained in conjunction with Alankara Automotive engineering standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Large Bus Showcase ("MEET DHAM REJINI") */}
      <BusShowcase />

      {/* 6. Special Hire Services Preview */}
      <section className="services-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="BESPOKE CHARTER SOLUTIONS"
            title="SPECIAL HIRE SERVICES"
            subtitle="Tailored private transport options suited for your group's unique itinerary, safety priorities, and celebration needs."
          />

          <div className="services-grid">
            {specialHireServices.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="services-view-more">
            <Link to="/special-hire" className="btn-secondary">
              <span>EXPLORE ALL HIRE CATEGORIES</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Travel Experience / Feature Section */}
      <section className="experience-section section-spacing">
        <div className="container">
          <div className="experience-box">
            <div className="experience-image-side">
              <img
                src="/assets/images/interior-01.jpg"
                alt="Dham Rejini Interior Cabin Experience"
                className="experience-img"
                loading="lazy"
              />
              <div className="experience-overlay-badge">
                <Sparkles size={16} />
                <span>VVIP PARTY BUS EXPERIENCE</span>
              </div>
            </div>

            <div className="experience-text-side">
              <span className="section-badge">CABIN HIGHLIGHTS</span>
              <h2 className="experience-title">A CELEBRATION ON WHEELS</h2>
              <p className="experience-desc">
                Long highway runs and milestone celebrations demand an environment where passengers can truly celebrate, socialize, and relax. Dham Rejini combines deep leather seating with vibrant neon lighting and club-level sound clarity.
              </p>

              <div className="experience-points">
                <div className="exp-point">
                  <CheckCircle size={18} className="exp-icon" />
                  <div>
                    <strong>Smooth Suspension Dynamics</strong>
                    <p>Engineered to dampen road vibration across uneven provincial terrain.</p>
                  </div>
                </div>
                <div className="exp-point">
                  <CheckCircle size={18} className="exp-icon" />
                  <div>
                    <strong>Luminous Ambient Illumination</strong>
                    <p>Iconic magenta and purple neon accents that create a memorable celebration mood.</p>
                  </div>
                </div>
                <div className="exp-point">
                  <CheckCircle size={18} className="exp-icon" />
                  <div>
                    <strong>Dedicated Luggage Proportions</strong>
                    <p>Deep beneath-cabin bay volume keeps the main passenger deck clutter-free.</p>
                  </div>
                </div>
              </div>

              <div className="experience-footer">
                <Link to="/gallery" className="btn-primary">
                  <span>VIEW CABIN GALLERY</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Gallery Preview */}
      <section className="gallery-preview-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="VISUAL RECORD"
            title="DHAM REJINI IN FOCUS"
            subtitle="Explore our bus on scenic Sri Lankan highways, evening journeys, and upscale party arrivals."
          />

          <GalleryGrid initialLimit={6} />

          <div className="gallery-preview-footer">
            <Link to="/gallery" className="btn-secondary">
              <span>VIEW FULL GALLERY ARCHIVE</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Owner Section */}
      <OwnerSection showEnterpriseLinks={true} />

      {/* 10. CTA Section */}
      <section className="cta-banner-section section-spacing">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">DIRECT QUOTATIONS • 24/7 WHATSAPP</span>
              <h2 className="cta-heading">PLAN YOUR NEXT JOURNEY WITH DHAM REJINI</h2>
              <p className="cta-sub">
                Secure your travel dates early. Contact Supun Wijesinghe directly on WhatsApp for route planning, vehicle inspection, or instant competitive pricing.
              </p>
              <div className="cta-buttons">
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Phone size={18} />
                  <span>START WHATSAPP CHAT: {businessInfo.primaryPhone}</span>
                </a>
                <a href="#booking" className="btn-secondary">
                  <span>FILL BOOKING FORM</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
