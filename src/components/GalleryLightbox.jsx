import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !items || items.length === 0 || currentIndex < 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      onClick={onClose}
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image preview"
        >
          <X size={26} />
        </button>

        {/* Previous Button */}
        <button
          type="button"
          className="lightbox-nav-btn prev"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Image Display */}
        <div className="lightbox-media-wrapper">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="lightbox-image"
          />

          {/* Info bar at the bottom */}
          <div className="lightbox-info-bar">
            <div className="lightbox-category-tag">{currentItem.category}</div>
            <div className="lightbox-titles">
              <h3 className="lightbox-main-title">{currentItem.title}</h3>
              {currentItem.subtitle && (
                <p className="lightbox-subtitle">{currentItem.subtitle}</p>
              )}
            </div>
            <div className="lightbox-counter">
              {currentIndex + 1} / {items.length}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="lightbox-nav-btn next"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
