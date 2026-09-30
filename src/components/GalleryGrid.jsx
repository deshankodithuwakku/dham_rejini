import React, { useState } from "react";
import { Maximize2, Tag } from "lucide-react";
import GalleryLightbox from "./GalleryLightbox";
import { galleryCategories, galleryItems } from "../data/gallery";

export default function GalleryGrid({ initialLimit = null }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter items
  const filteredItems = activeCategory === "ALL"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const displayedItems = initialLimit
    ? filteredItems.slice(0, initialLimit)
    : filteredItems;

  const handleOpenLightbox = (item) => {
    // Find index in filteredItems
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
      setLightboxOpen(true);
    }
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="gallery-component">
      {/* Category Pills */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            className={`gallery-filter-pill ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="gallery-grid">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="gallery-grid-card"
            onClick={() => handleOpenLightbox(item)}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenLightbox(item);
              }
            }}
          >
            <div className="gallery-image-container">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-thumbnail"
                loading="lazy"
              />
              <div className="gallery-hover-overlay">
                <div className="gallery-card-badge">{item.category}</div>
                <div className="gallery-card-info">
                  <h4 className="gallery-card-title">{item.title}</h4>
                  {item.subtitle && (
                    <p className="gallery-card-sub">{item.subtitle}</p>
                  )}
                </div>
                <span className="gallery-expand-icon">
                  <Maximize2 size={20} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedItems.length === 0 && (
        <div className="gallery-empty-state">
          <p>No photos currently listed under this category.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
