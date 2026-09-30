import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { businessInfo } from "../data/business";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a subtle prompt after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-wa-wrapper" aria-label="Quick WhatsApp Contact">
      {showTooltip && (
        <div className="floating-wa-bubble">
          <button
            type="button"
            className="bubble-close-btn"
            onClick={() => setShowTooltip(false)}
            aria-label="Close message"
          >
            <X size={12} />
          </button>
          <span className="bubble-title">Need a quick quote?</span>
          <span className="bubble-text">Chat directly with Supun on WhatsApp!</span>
        </div>
      )}

      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat directly on WhatsApp"
        id="btn-floating-whatsapp"
      >
        <MessageCircle size={28} />
        <span className="floating-wa-label">WhatsApp</span>
      </a>
    </div>
  );
}
