import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { businessInfo } from "../data/business";

export default function ServiceCard({ service, onBookNow }) {
  const whatsappInquiryUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dham Rejini Special Hire, I would like to inquire about ${service.title} hire options.`
  )}`;

  return (
    <div className="premium-card service-card">
      <div className="service-card-body">
        <div className="service-category-badge">{service.category}</div>
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-summary">{service.summary}</p>

        <ul className="service-features-list">
          {service.features.map((feature, idx) => (
            <li key={idx} className="service-feature-item">
              <CheckCircle2 size={16} className="feature-check" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {service.highlight && (
          <div className="service-highlight-pill">
            <span className="pill-dot" />
            <span>{service.highlight}</span>
          </div>
        )}
      </div>

      <div className="service-card-footer">
        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="service-inquire-btn"
        >
          <span>INQUIRE THIS SERVICE</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
