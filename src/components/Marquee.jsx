import React from "react";
import { marqueeItems } from "../data/business";

export default function Marquee() {
  // Duplicate array for seamless infinite scroll
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrapper" aria-label="Dham Rejini Brand Highlights">
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <div key={index} className="marquee-unit">
            <span className="marquee-text">{item}</span>
            <span className="marquee-separator" aria-hidden="true">
              <span className="separator-diamond">◆</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
