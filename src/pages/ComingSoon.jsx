import React from "react";
import { MessageCircle } from "lucide-react";
import { businessInfo } from "../data/business";

export default function ComingSoon() {
  return (
    <section className="coming-soon" aria-label="Dham Rejini Coming Soon">
      <div className="coming-soon__glow coming-soon__glow--top" aria-hidden="true" />
      <div className="coming-soon__glow coming-soon__glow--bottom" aria-hidden="true" />

      <div className="coming-soon__stage">
        <header className="coming-soon__brand">
          <div className="coming-soon__brand-rule" aria-hidden="true" />
          <div className="coming-soon__brand-block">
            <h1 className="coming-soon__logo">
              <span className="coming-soon__logo-dham">DHAM</span>{" "}
              <span className="coming-soon__logo-rejini">REJINI</span>
            </h1>
            <p className="coming-soon__tagline">{businessInfo.businessType}</p>
          </div>
          <div className="coming-soon__brand-rule" aria-hidden="true" />
        </header>

        <div className="coming-soon__headline">
          <p className="coming-soon__eyebrow">A NEW EXPERIENCE</p>
          <h2 className="coming-soon__coming">IS COMING.</h2>
          <p className="coming-soon__sub">
            A brand-new Dam Rajini experience is coming soon.
          </p>
        </div>

        <figure className="coming-soon__visual">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/bus-highway.jpg`}
            alt="Dham Rejini VVIP Party Bus glowing neon magenta on the highway at dusk"
            className="coming-soon__bus"
            width={1600}
            height={900}
          />
          <div className="coming-soon__visual-fade" aria-hidden="true" />
          <div className="coming-soon__road-glow" aria-hidden="true" />
        </figure>

        <div className="coming-soon__cta">
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="coming-soon__contact"
            id="btn-coming-soon-whatsapp"
          >
            <MessageCircle size={22} aria-hidden="true" />
            <span>CONTACT US</span>
          </a>
          <p className="coming-soon__stay">
            <span className="coming-soon__stay-line" aria-hidden="true" />
            <span className="coming-soon__stay-text">STAY TUNED FOR MORE UPDATES</span>
            <span className="coming-soon__stay-line" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
}
