import React from "react";
import { Sparkles, Armchair, Compass, Maximize2, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { busFeatures } from "../data/business";

const featureIcons = {
  comfort: Armchair,
  experience: Compass,
  space: Maximize2,
  service: Award,
};

export default function BusShowcase() {
  return (
    <section className="bus-showcase-section section-spacing">
      <div className="container">
        <SectionHeading
          badge="THE ICONIC PARTY BUS"
          title="MEET DHAM REJINI"
          subtitle="Sri Lanka's benchmark VVIP Party Bus & Grand Luxury Limousine Edition. Experience road travel where electric night presence meets deep cabin comfort."
        />

        {/* Dual Showcase: Real Bus Photography + Highway Cruise */}
        <div className="showcase-visual-wrapper">
          <div className="showcase-dual-display">
            <div className="showcase-image-frame">
              <img
                src="/assets/images/bus-real.jpg"
                alt="Dham Rejini Actual Front Profile SP NB - 4118"
                className="showcase-bus-img"
                loading="lazy"
              />
              <div className="showcase-badge-floating">
                <span className="floating-glow"></span>
                <span className="floating-text">DHAM REJINI • SP NB - 4118</span>
              </div>
            </div>

            <div className="showcase-image-frame">
              <img
                src="/assets/images/bus-highway.jpg"
                alt="Dham Rejini Coastal Highway Night Cruise"
                className="showcase-bus-img"
                loading="lazy"
              />
              <div className="showcase-badge-floating">
                <span className="floating-glow"></span>
                <span className="floating-text">LUMINOUS NIGHT PRESENCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards with Editable Placeholders */}
        <div className="features-grid">
          {busFeatures.map((feat) => {
            const Icon = featureIcons[feat.id] || Sparkles;
            return (
              <div key={feat.id} className="premium-card feature-card">
                <div className="feature-icon-box">
                  <Icon size={24} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <h4 className="feature-subtitle">{feat.subtitle}</h4>
                <p className="feature-desc">{feat.description}</p>
                <div className="placeholder-tag">
                  <span className="placeholder-label">{feat.placeholderNote}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
