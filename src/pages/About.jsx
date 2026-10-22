import { assetUrl } from "../lib/assetUrl.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Compass, Heart, Award, ArrowRight, Phone, Milestone, Sparkles, ZoomIn, X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import OwnerSection from "../components/OwnerSection";
import { businessInfo } from "../data/business";

const historyMilestones = [
  {
    id: 1,
    chapter: "CHAPTER 01 • THE GENESIS",
    reg: "NC - 1931",
    badge: "WORKSHOP YARD • ආරම්භක යුගය",
    title: "The Birth of an Icon & Artisan Craft",
    sinhalaTitle: "විචිත්‍රවත් නිමවුම සහ ආරම්භක යුගය",
    desc: "Dham Rejini began with pure passion and uncompromising dedication. In the workshop yard, skilled artisans brought the bus to life through custom hand-cut vinyl, precision bodywork, and the distinctive pink styling that would soon make history across southern highways.",
    highlight: "Authentic hand-finished bodywork and custom styling that laid the foundation for the Dham Rejini legacy.",
    image: assetUrl("assets/images/history-01-genesis.jpg"),
    alt: "Dham Rejini early body painting and craftsmanship in workshop yard"
  },
  {
    id: 2,
    chapter: "CHAPTER 02 • HIGHWAY SERVICE & CELEBRATIONS",
    reg: "NC - 1931",
    badge: "ROUTE 03 • වලස්මුල්ල - කොළඹ",
    title: "Connecting People Across Route 03",
    sinhalaTitle: "වලස්මුල්ල - කොළඹ සේවය සහ උත්සව මතකයන්",
    desc: "Proudly serving commuters on Route 03 (Walasmulla - Colombo), Dham Rejini quickly earned admiration across the Southern Province for punctuality and vibrant character. Shown here decorated with festive balloons and garlands celebrating the Sinhala & Tamil New Year.",
    highlight: "A beloved Southern highway icon renowned for festive welcomes, warm community ties, and reliable service.",
    image: assetUrl("assets/images/history-02-route03.jpg"),
    alt: "Dham Rejini NC-1931 Route 03 Walasmulla Colombo New Year celebrations"
  },
  {
    id: 3,
    chapter: "CHAPTER 03 • TRANSITION TO SPECIAL TOURS",
    reg: "NC - 1931",
    badge: "SPECIAL HIRE ERA • විශේෂ චාරිකා යුගය",
    title: "Farewell to Route 03 & Entering Special Tours",
    sinhalaTitle: "දෛනික ධාවනයට සමුදී Special Tours වෙත පිවිසීම",
    desc: "Marking a landmark milestone in its storied journey, Dham Rejini bid farewell to standard daily highway route service to exclusively embrace luxury private charters and special celebrations. Upgraded under the S&S Group banner with signature custom styling and a full VVIP party setup.",
    highlight: "Transforming from daily public transit into Sri Lanka's premier dedicated VVIP special hire coach.",
    image: assetUrl("assets/images/history-03-special-tours.jpg"),
    alt: "Dham Rejini NC-1931 Member of S&S Group VVIP Party Bus Special Hire"
  },
  {
    id: 4,
    chapter: "CHAPTER 04 • MODERN VVIP EVOLUTION",
    reg: "SP NB - 4118",
    badge: "MODERN ERA • නූතන සුඛෝපභෝගී යුගය",
    title: "The Kylie Grand Luxury Limousine Edition",
    sinhalaTitle: "නූතන VVIP සුඛෝපභෝගී සාද රථ විප්ලවය",
    desc: "Today, Dham Rejini has evolved into Sri Lanka's benchmark VVIP luxury celebration coach (SP NB - 4118). Featuring high-fidelity club sound walls, luminous neon LED contour lighting, executive reclining lounge seats, and an elite private charter travel experience.",
    highlight: "Sri Lanka's pinnacle celebration coach setting the gold standard in luxury group travel.",
    image: assetUrl("assets/images/bus-real.jpg"),
    alt: "Dham Rejini SP NB-4118 modern VVIP Luxury Party Bus"
  }
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(null);

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
                  src={assetUrl("assets/images/bus-real.jpg")}
                  alt="Dham Rejini VVIP Party Bus SP NB - 4118"
                  className="about-bus-photo"
                  loading="lazy"
                />
                <div className="about-image-caption">
                  <img
                    src={assetUrl("assets/images/dham-rejini-logo.png")}
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

      {/* History Timeline & Vintage Memories Section */}
      <section className="timeline-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="HERITAGE & VINTAGE MEMORIES • පැරණි මතකයන්"
            title="THE ROOTS OF DHAM REJINI"
            subtitle="ගමන් මගේ නොමැකෙන පැරණි මතකයන් — Explore the inspiring journey of Dham Rejini, from hand-crafted beginnings and Route 03 memories to Sri Lanka's leading VVIP luxury party coach."
          />

          <div className="timeline-wrapper">
            <div className="timeline-line" />

            {historyMilestones.map((item, index) => (
              <div className="timeline-block" key={item.id}>
                <div className="timeline-badge-marker">
                  <span className="timeline-marker-num">0{index + 1}</span>
                </div>
                <div className="premium-card timeline-card">
                  <div className="timeline-card-inner">
                    <div
                      className="timeline-image-container"
                      onClick={() => setActivePhoto(item)}
                      title="Click to view full photo"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="timeline-image"
                        loading="lazy"
                      />
                      <span className="timeline-image-badge">{item.badge}</span>
                      <div className="timeline-image-zoom-hint">
                        <ZoomIn size={16} />
                      </div>
                    </div>

                    <div className="timeline-card-content">
                      <div className="timeline-header-meta">
                        <span className="timeline-phase-tag">{item.chapter}</span>
                        <span className="timeline-bus-reg">{item.reg}</span>
                      </div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <h4 className="timeline-sinhala-title">{item.sinhalaTitle}</h4>
                      <p className="timeline-desc">{item.desc}</p>
                      <div className="timeline-highlight-box">
                        <Sparkles size={16} />
                        <span>{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Vintage Memories */}
      {activePhoto && (
        <div className="history-modal-backdrop" onClick={() => setActivePhoto(null)}>
          <div className="history-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="history-modal-close"
              onClick={() => setActivePhoto(null)}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
            <div className="history-modal-img-wrap">
              <img
                src={activePhoto.image}
                alt={activePhoto.alt}
                className="history-modal-img"
              />
            </div>
            <div className="history-modal-details">
              <div className="timeline-header-meta">
                <span className="timeline-phase-tag">{activePhoto.chapter}</span>
                <span className="timeline-bus-reg">{activePhoto.reg}</span>
              </div>
              <h3 className="history-modal-title">{activePhoto.title}</h3>
              <h4 className="timeline-sinhala-title">{activePhoto.sinhalaTitle}</h4>
              <p className="history-modal-desc">{activePhoto.desc}</p>
              <div className="timeline-highlight-box">
                <Sparkles size={16} />
                <span>{activePhoto.highlight}</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
