import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Cpu, Sparkles, Sliders, Phone, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { automotiveData } from "../data/automotive";
import { businessInfo } from "../data/business";

const iconMap = {
  Wrench: Wrench,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Sliders: Sliders,
};

export default function AlankaraAutomotive() {
  return (
    <div className="automotive-page">
      {/* 1. Hero Section */}
      <section className="automotive-hero-section">
        <div className="automotive-hero-bg">
          <img
            src={automotiveData.heroImage}
            alt="Alankara Automotive Precision Studio"
            className="automotive-hero-img"
            loading="eager"
          />
          <div className="automotive-hero-overlay" />
        </div>

        <div className="container automotive-hero-container">
          <div className="automotive-hero-content">
            <div className="automotive-badge">
              <ShieldCheck size={16} />
              <span>PRECISION AUTOMOTIVE VENTURE</span>
            </div>

            <h1 className="automotive-title">{automotiveData.brandName}</h1>
            <p className="automotive-tagline">{automotiveData.tagline}</p>
            <p className="automotive-lead">{automotiveData.leadText}</p>

            <div className="automotive-hero-ctas">
              <a
                href={automotiveData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <Phone size={18} />
                <span>INQUIRE VIA WHATSAPP</span>
              </a>
              <a href="#services" className="btn-secondary">
                <span>VIEW SERVICES</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="automotive-owner-note">
              <span>Managed directly by <strong>{businessInfo.ownerName}</strong> • Connected with Dham Rejini Fleet Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="automotive-about-section section-spacing">
        <div className="container">
          <div className="automotive-about-card">
            <div className="automotive-about-grid">
              <div className="automotive-about-text">
                <span className="section-badge">BUSINESS OVERVIEW</span>
                <h2 className="automotive-section-h2">Engineering & Vehicle Excellence</h2>
                <p className="automotive-paragraph">{automotiveData.aboutText}</p>
                <p className="automotive-paragraph">
                  Whether providing fleet maintenance support for the Dham Rejini luxury coach or servicing private passenger vehicles, our philosophy remains centered on precision, honest diagnosis, and uncompromising work quality.
                </p>

                <div className="placeholder-info-box">
                  <AlertCircle size={18} className="box-icon" />
                  <div>
                    <strong>Owner Verification Placeholder:</strong>
                    <p>{automotiveData.disclaimer}</p>
                  </div>
                </div>
              </div>

              <div className="automotive-stats-box">
                <div className="stat-highlight">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Dedicated Craftsmanship</span>
                </div>
                <div className="stat-highlight">
                  <span className="stat-num">FLEET</span>
                  <span className="stat-label">Dham Rejini Maintenance Backing</span>
                </div>
                <div className="stat-highlight">
                  <span className="stat-num">DIRECT</span>
                  <span className="stat-label">Consultation with Supun Wijesinghe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="automotive-services-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="OUR CORE CAPABILITIES"
            title="AUTOMOTIVE SERVICES"
            subtitle="Explore our specialized services catalog. Each category can be tailored to individual vehicle requirements."
          />

          <div className="automotive-services-grid">
            {automotiveData.services.map((service) => {
              const IconComponent = iconMap[service.iconName] || Wrench;
              return (
                <div key={service.id} className="premium-card auto-service-card">
                  <div className="auto-card-header">
                    <div className="auto-icon-wrapper">
                      <IconComponent size={24} />
                    </div>
                    <span className="auto-status-pill">{service.status}</span>
                  </div>

                  <h3 className="auto-service-title">{service.title}</h3>
                  <p className="auto-service-desc">{service.description}</p>

                  <ul className="auto-points-list">
                    {service.points.map((pt, idx) => (
                      <li key={idx} className="auto-point-item">
                        <CheckCircle2 size={16} className="point-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="auto-card-action">
                    <a
                      href={`https://wa.me/${automotiveData.contact.whatsappNumber}?text=${encodeURIComponent(
                        `Hello Alankara Automotive, I would like to inquire about ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="auto-inquire-link"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Contact & Location Placeholder Section */}
      <section className="automotive-contact-section section-spacing">
        <div className="container">
          <div className="automotive-contact-card">
            <SectionHeading
              badge="GET IN TOUCH"
              title="CONTACT ALANKARA AUTOMOTIVE"
              subtitle="Connect directly for repair consultations, servicing appointments, or fleet assistance."
            />

            <div className="contact-details-grid">
              <div className="contact-detail-box">
                <Phone size={22} className="detail-icon" />
                <h4>Inquiry Line & WhatsApp</h4>
                <p>Direct communication with management</p>
                <a
                  href={automotiveData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-highlight-link"
                >
                  {automotiveData.contact.inquiryPhone}
                </a>
              </div>

              <div className="contact-detail-box">
                <MapPin size={22} className="detail-icon" />
                <h4>Workshop Location</h4>
                <p>Physical facility address placeholder</p>
                <span className="contact-placeholder-text">
                  {automotiveData.contact.locationPlaceholder}
                </span>
              </div>

              <div className="contact-detail-box">
                <Clock size={22} className="detail-icon" />
                <h4>Operating Schedule</h4>
                <p>Daily workshop working hours</p>
                <span className="contact-placeholder-text">
                  {automotiveData.contact.hoursPlaceholder}
                </span>
              </div>
            </div>

            <div className="contact-action-center">
              <a
                href={automotiveData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <Phone size={18} />
                <span>OPEN WHATSAPP CONVERSATION</span>
              </a>
              <Link to="/" className="btn-secondary">
                <span>RETURN TO DHAM REJINI HOME</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
