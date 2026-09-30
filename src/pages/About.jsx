import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Compass, Heart, Award, ArrowRight, Phone, Milestone, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import OwnerSection from "../components/OwnerSection";
import { businessInfo } from "../data/business";

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">ABOUT OUR VENTURE</span>
            <h1 className="page-hero-title">THE DHAM REJINI STORY</h1>
            <p className="page-hero-subtitle">
              Built on a foundation of reliability, pride in our fleet, and a genuine passion for high-energy modern road travel in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Introduction Section */}
      <section className="about-intro-section section-spacing">
        <div className="container">
          <div className="about-two-col">
            <div className="about-col-text">
              <span className="section-badge">BRAND PHILOSOPHY</span>
              <h2 className="about-h2">A Distinct Vision for Private Travel</h2>
              <p className="about-lead-p">
                Dham Rejini Special Hire was created to give Sri Lankan travelers, organizers, and families a dependable, premium transport alternative. While conventional bus travel can often feel impersonal and ordinary, Dham Rejini approaches every private charter as a high-standard celebration and travel experience.
              </p>
              <p className="about-body-p">
                We believe that when people travel together—whether celebrating a wedding, embarking on an annual office tour, or visiting sacred pilgrimage sites—the bus itself is not simply transit; it is the shared space where memories, music, laughter, and camaraderie begin.
              </p>
              <div className="about-pillars">
                <div className="pillar-item">
                  <ShieldCheck size={24} className="pillar-icon" />
                  <div>
                    <h4>Mechanical Integrity</h4>
                    <p>Rigorous inspection protocols and precision maintenance before every highway assignment.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <Sparkles size={24} className="pillar-icon" />
                  <div>
                    <h4>VVIP Celebration Atmosphere</h4>
                    <p>Luminous neon magenta lighting, DJ sound setup capability, and accommodating customer preferences on routes and rest stops.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-col-media">
              <div className="about-image-card">
                <img
                  src="/assets/images/bus-real.jpg"
                  alt="Dham Rejini VVIP Party Bus SP NB - 4118"
                  className="about-bus-photo"
                  loading="lazy"
                />
                <div className="about-image-caption">
                  <img
                    src="/assets/images/dham-rejini-logo.png"
                    alt="Dham Rejini Logo"
                    className="about-logo-badge-img"
                  />
                  <span>DHAM REJINI • VVIP PARTY BUS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section with Clean Placeholders */}
      <section className="timeline-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="JOURNEY & MILESTONES"
            title="OUR TIMELINE"
            subtitle="The path of growth, vehicle acquisition, and service evolution. Milestones will be updated with verified historical records."
          />

          <div className="timeline-wrapper">
            <div className="timeline-line" />

            {/* Timeline Item 1 */}
            <div className="timeline-block">
              <div className="timeline-badge-marker">
                <Milestone size={18} />
              </div>
              <div className="premium-card timeline-card">
                <div className="timeline-phase-tag">FOUNDATION</div>
                <h3 className="timeline-title">The Inception of Dham Rejini</h3>
                <p className="timeline-desc">
                  Conceived with a clear mission to provide elevated private charter services across Sri Lanka, focusing on vehicle cleanliness, mechanical excellence, and client trust.
                </p>
                <div className="timeline-placeholder-notice">
                  <span>[Verified launch date & inception details to be added by owner]</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-block">
              <div className="timeline-badge-marker">
                <Milestone size={18} />
              </div>
              <div className="premium-card timeline-card">
                <div className="timeline-phase-tag">FLEET EVOLUTION</div>
                <h3 className="timeline-title">Kylie Grand Luxury Limousine Edition</h3>
                <p className="timeline-desc">
                  Commissioning of our iconic party bus coach (SP NB - 4118), equipped with high-fidelity sound, custom neon lighting, and executive lounge seating.
                </p>
                <div className="timeline-placeholder-notice">
                  <span>[Verified coach commissioning milestone to be added by owner]</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-block">
              <div className="timeline-badge-marker">
                <Milestone size={18} />
              </div>
              <div className="premium-card timeline-card">
                <div className="timeline-phase-tag">ENTERPRISE EXPANSION</div>
                <h3 className="timeline-title">Synergy with Alankara & Kochchi</h3>
                <p className="timeline-desc">
                  Broadening the founder’s service umbrella into specialized automotive care through Alankara Automotive and culinary hospitality with Kochchi Restaurant.
                </p>
                <div className="timeline-placeholder-notice">
                  <span>[Verified business integration notes to be added by owner]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Dham Rejini Experience Section */}
      <section className="experience-deep-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="OUR PROMISE"
            title="THE DHAM REJINI EXPERIENCE"
            subtitle="What sets our journeys apart from conventional bus chartering."
          />

          <div className="experience-pillars-grid">
            <div className="premium-card exp-card">
              <div className="exp-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h3>Safety Without Compromise</h3>
              <p>Experienced, disciplined chauffeurs trained in long-haul highway awareness, defensive driving, and passenger safety.</p>
              <div className="placeholder-tag">
                <span>[Verified driver safety records to be confirmed]</span>
              </div>
            </div>

            <div className="premium-card exp-card">
              <div className="exp-icon-box">
                <Compass size={28} />
              </div>
              <h3>Tailored Route Freedom</h3>
              <p>You choose the pickup time, scenic waypoints, tea stops, and destination timing. We adjust to your itinerary.</p>
              <div className="placeholder-tag">
                <span>[Verified customized route policies to be confirmed]</span>
              </div>
            </div>

            <div className="premium-card exp-card">
              <div className="exp-icon-box">
                <Award size={28} />
              </div>
              <h3>Pristine Presentation</h3>
              <p>Polished exterior, meticulously sanitized passenger cabin, clean window viewports, and spotless floorboards every trip.</p>
              <div className="placeholder-tag">
                <span>[Fleet maintenance standards supported by Alankara]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Owner Section */}
      <OwnerSection showEnterpriseLinks={true} />

      {/* Bottom CTA */}
      <section className="cta-banner-section section-spacing">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="cta-badge">EXPERIENCE THE DIFFERENCE</span>
              <h2 className="cta-heading">READY TO RESERVE DHAM REJINI?</h2>
              <p className="cta-sub">
                Connect with founder Supun Wijesinghe today to discuss travel routes, schedule vehicle inspections, or receive an immediate trip quotation.
              </p>
              <div className="cta-buttons">
                <Link to="/#booking" className="btn-primary">
                  <span>BOOK YOUR JOURNEY</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Phone size={18} />
                  <span>DIRECT WHATSAPP: {businessInfo.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
