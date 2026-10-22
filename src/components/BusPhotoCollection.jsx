import { assetUrl } from "../lib/assetUrl.js";
import React, { useState } from "react";
import { Sparkles, Maximize2, ShieldCheck, Music, Armchair, Eye, Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GalleryLightbox from "./GalleryLightbox";

const collectionItems = [
  {
    id: "col-1",
    title: "Twin Flagship Fleet",
    subtitle: "NC 1931 & SP NB - 4118 • Member of S&S Group",
    badge: "ICONIC TWINS",
    icon: ShieldCheck,
    image: assetUrl("assets/images/collection-01-front-twins.jpg"),
    aspect: "landscape-large",
    description: "The unmistakable front profile of Dham Rejini buses with custom chrome grills, auxiliary lamps, and vibrant purple-pink artwork.",
  },
  {
    id: "col-2",
    title: "Purple Queen Signature Coach",
    subtitle: "Daytime Full Side Profile",
    badge: "VVIP EXTERIOR",
    icon: Sparkles,
    image: assetUrl("assets/images/collection-05-side-profile.jpg"),
    aspect: "portrait",
    description: "Full exterior presence showcasing aerodynamic body spoilers, customized window tinting, and pristine coach detailing.",
  },
  {
    id: "col-3",
    title: "Custom Rear Engineering",
    subtitle: "Alankara Automotive Custom Body & S&S Group",
    badge: "CUSTOM BUILD",
    icon: Camera,
    image: assetUrl("assets/images/collection-02-rear-profile.jpg"),
    aspect: "portrait",
    description: "High-spec rear styling featuring LED light bars, ladder access, Alankara Automotive engineering, and Queen's Performance lettering.",
  },
  {
    id: "col-4",
    title: "Golden VIP Cabin Lounge",
    subtitle: "Plush Leather Seating & Warm LED Canopy",
    badge: "LUXURY INTERIOR",
    icon: Armchair,
    image: assetUrl("assets/images/collection-03-luxury-seats.jpg"),
    aspect: "landscape",
    description: "Ergonomically contoured VIP seating with grand limousine ambiance, gold leather accents, and soft overhead illumination.",
  },
  {
    id: "col-5",
    title: "DJ Sound Wall & Neon Ceiling",
    subtitle: "High-Fidelity Audio & Dynamic Chasing LEDs",
    badge: "AUDIO & NEON",
    icon: Music,
    image: assetUrl("assets/images/collection-04-sound-neon.jpg"),
    aspect: "landscape",
    description: "State-of-the-art multi-speaker club sound system with acoustic wall tuning and psychedelic neon ceiling light choreography.",
  },
];

export default function BusPhotoCollection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bus-collection-section section-spacing" aria-label="Dham Rejini Photo Collection">
      <div className="container">
        <SectionHeading
          badge="AUTHENTIC FLEET ARCHIVE"
          title="DHAM REJINI PHOTO COLLECTION"
          subtitle="A visual showcase of Sri Lanka's undisputed party bus leader — from exterior road presence to club-grade sound and grand luxury seating."
        />

        {/* 5-Photo Luxury Showcase Grid */}
        <div className="collection-grid">
          {/* Item 1: Large Featured Front Twins */}
          <div
            className="collection-card card-featured"
            onClick={() => handleOpenLightbox(0)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${collectionItems[0].title}`}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenLightbox(0)}
          >
            <div className="collection-img-box">
              <img
                src={collectionItems[0].image}
                alt={collectionItems[0].title}
                className="collection-img"
                loading="lazy"
              />
              <div className="collection-card-overlay">
                <div className="collection-card-top">
                  <span className="collection-badge">
                    <ShieldCheck size={14} />
                    <span>{collectionItems[0].badge}</span>
                  </span>
                  <span className="collection-expand-icon">
                    <Maximize2 size={18} />
                  </span>
                </div>
                <div className="collection-card-bottom">
                  <h3 className="collection-title">{collectionItems[0].title}</h3>
                  <p className="collection-sub">{collectionItems[0].subtitle}</p>
                  <p className="collection-desc">{collectionItems[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Side Profile Portrait */}
          <div
            className="collection-card card-side"
            onClick={() => handleOpenLightbox(1)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${collectionItems[1].title}`}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenLightbox(1)}
          >
            <div className="collection-img-box">
              <img
                src={collectionItems[1].image}
                alt={collectionItems[1].title}
                className="collection-img"
                loading="lazy"
              />
              <div className="collection-card-overlay">
                <div className="collection-card-top">
                  <span className="collection-badge">
                    <Sparkles size={14} />
                    <span>{collectionItems[1].badge}</span>
                  </span>
                  <span className="collection-expand-icon">
                    <Maximize2 size={18} />
                  </span>
                </div>
                <div className="collection-card-bottom">
                  <h3 className="collection-title">{collectionItems[1].title}</h3>
                  <p className="collection-sub">{collectionItems[1].subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Rear Profile Portrait */}
          <div
            className="collection-card card-rear"
            onClick={() => handleOpenLightbox(2)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${collectionItems[2].title}`}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenLightbox(2)}
          >
            <div className="collection-img-box">
              <img
                src={collectionItems[2].image}
                alt={collectionItems[2].title}
                className="collection-img"
                loading="lazy"
              />
              <div className="collection-card-overlay">
                <div className="collection-card-top">
                  <span className="collection-badge">
                    <Camera size={14} />
                    <span>{collectionItems[2].badge}</span>
                  </span>
                  <span className="collection-expand-icon">
                    <Maximize2 size={18} />
                  </span>
                </div>
                <div className="collection-card-bottom">
                  <h3 className="collection-title">{collectionItems[2].title}</h3>
                  <p className="collection-sub">{collectionItems[2].subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: Luxury Seats */}
          <div
            className="collection-card card-interior-seats"
            onClick={() => handleOpenLightbox(3)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${collectionItems[3].title}`}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenLightbox(3)}
          >
            <div className="collection-img-box">
              <img
                src={collectionItems[3].image}
                alt={collectionItems[3].title}
                className="collection-img"
                loading="lazy"
              />
              <div className="collection-card-overlay">
                <div className="collection-card-top">
                  <span className="collection-badge">
                    <Armchair size={14} />
                    <span>{collectionItems[3].badge}</span>
                  </span>
                  <span className="collection-expand-icon">
                    <Maximize2 size={18} />
                  </span>
                </div>
                <div className="collection-card-bottom">
                  <h3 className="collection-title">{collectionItems[3].title}</h3>
                  <p className="collection-sub">{collectionItems[3].subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Item 5: Sound & Neon Ceiling */}
          <div
            className="collection-card card-interior-sound"
            onClick={() => handleOpenLightbox(4)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${collectionItems[4].title}`}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenLightbox(4)}
          >
            <div className="collection-img-box">
              <img
                src={collectionItems[4].image}
                alt={collectionItems[4].title}
                className="collection-img"
                loading="lazy"
              />
              <div className="collection-card-overlay">
                <div className="collection-card-top">
                  <span className="collection-badge">
                    <Music size={14} />
                    <span>{collectionItems[4].badge}</span>
                  </span>
                  <span className="collection-expand-icon">
                    <Maximize2 size={18} />
                  </span>
                </div>
                <div className="collection-card-bottom">
                  <h3 className="collection-title">{collectionItems[4].title}</h3>
                  <p className="collection-sub">{collectionItems[4].subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Preview */}
        <GalleryLightbox
          isOpen={lightboxOpen}
          currentIndex={lightboxIndex}
          items={collectionItems}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + collectionItems.length) % collectionItems.length)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % collectionItems.length)}
        />
      </div>
    </section>
  );
}
