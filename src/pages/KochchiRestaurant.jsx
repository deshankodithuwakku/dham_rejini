import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Utensils, Phone, MapPin, Clock, ArrowRight, Share2, Globe, Sparkles, MessageCircle, AlertCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { restaurantData } from "../data/restaurant";
import { businessInfo } from "../data/business";

export default function KochchiRestaurant() {
  const [activeMenuCat, setActiveMenuCat] = useState("ALL");

  const categories = ["ALL", "Signature Flavors", "Authentic Traditions", "Seafood & Grill", "Botanical Beverages"];

  const filteredMenuItems = activeMenuCat === "ALL"
    ? restaurantData.menuHighlights
    : restaurantData.menuHighlights.filter((item) => item.category === activeMenuCat);

  return (
    <div className="restaurant-page">
      {/* 1. Hero Section */}
      <section className="restaurant-hero-section">
        <div className="restaurant-hero-bg">
          <img
            src={restaurantData.heroImage}
            alt="Kochchi Restaurant Dining Room Ambience"
            className="restaurant-hero-img"
            loading="eager"
          />
          <div className="restaurant-hero-overlay" />
        </div>

        <div className="container restaurant-hero-container">
          <div className="restaurant-hero-content">
            <div className="restaurant-badge">
              <Sparkles size={16} />
              <span>CONTEMPORARY CEYLON DINING</span>
            </div>

            <h1 className="restaurant-title">{restaurantData.restaurantName}</h1>
            <p className="restaurant-tagline">{restaurantData.tagline}</p>
            <p className="restaurant-lead">{restaurantData.leadText}</p>

            <div className="restaurant-hero-ctas">
              <a
                href={restaurantData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>INQUIRE TABLE RESERVATION</span>
              </a>
              <a href="#menu" className="btn-secondary">
                <span>VIEW MENU PREVIEW</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="restaurant-owner-tag">
              <span>Associated with <strong>{businessInfo.ownerName}</strong> • Premium Hospitality Showcase</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="restaurant-about-section section-spacing">
        <div className="container">
          <div className="restaurant-about-grid">
            <div className="restaurant-about-text">
              <span className="section-badge">OUR CULINARY CONCEPT</span>
              <h2 className="restaurant-h2">{restaurantData.about.heading}</h2>
              <p className="restaurant-paragraph">
                {restaurantData.about.textPlaceholder}
              </p>
              <p className="restaurant-paragraph">
                Taking inspiration from the fiery Ceylon green chilli (Kochchi) that lends our kitchen its daring identity, each creation balances bold regional spices with refined contemporary presentation and artisan hospitality.
              </p>

              <div className="placeholder-info-box">
                <AlertCircle size={18} className="box-icon" />
                <div>
                  <strong>Restaurant Details Notice:</strong>
                  <p>{restaurantData.about.verifiedNotice}</p>
                </div>
              </div>
            </div>

            <div className="restaurant-about-visual">
              <div className="restaurant-food-highlight-card">
                <img
                  src="/assets/images/restaurant-food.jpg"
                  alt="Kochchi Signature Dish"
                  className="restaurant-food-img"
                  loading="lazy"
                />
                <div className="food-caption-overlay">
                  <span className="caption-tag">CEYLON CRAB DELICACY</span>
                  <span className="caption-sub">Prepared with Fresh Kochchi Chillies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Food / Menu Section */}
      <section id="menu" className="restaurant-menu-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="CULINARY SHOWCASE"
            title="FEATURED MENU SELECTION"
            subtitle="Sample highlights from the Kochchi kitchen. Verified menu pricing and full seasonal course listings will be published soon."
          />

          {/* Category Tabs */}
          <div className="menu-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`menu-filter-pill ${activeMenuCat === cat ? "active" : ""}`}
                onClick={() => setActiveMenuCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="menu-grid">
            {filteredMenuItems.map((item) => (
              <div key={item.id} className="premium-card menu-card">
                <div className="menu-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-img"
                    loading="lazy"
                  />
                  <span className="menu-item-tag">{item.tag}</span>
                </div>
                <div className="menu-card-body">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <span className="menu-price-placeholder">{item.pricePlaceholder}</span>
                  </div>
                  <span className="menu-category-label">{item.category}</span>
                  <p className="menu-item-desc">{item.description}</p>

                  <div className="menu-card-action">
                    <a
                      href={`https://wa.me/${restaurantData.contact.whatsapp}?text=${encodeURIComponent(
                        `Hello Kochchi Restaurant, I would like to inquire about ${item.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-inquire-link"
                    >
                      <span>Inquire availability</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Restaurant Gallery (Food, Interior, Exterior, Dining experience) */}
      <section className="restaurant-gallery-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="ATMOSPHERE & PLATING"
            title="RESTAURANT GALLERY"
            subtitle="A glimpse into the warm ambiance, dining spaces, and handcrafted presentations at Kochchi."
          />

          <div className="restaurant-gallery-grid">
            {restaurantData.gallery.map((g) => (
              <div key={g.id} className="restaurant-gallery-card">
                <div className="gallery-photo-frame">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="restaurant-photo"
                    loading="lazy"
                  />
                  <div className="restaurant-photo-overlay">
                    <span className="res-cat-tag">{g.category}</span>
                    <h4 className="res-photo-title">{g.title}</h4>
                    <p className="res-photo-caption">{g.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location Section Placeholder */}
      <section className="restaurant-location-section section-spacing">
        <div className="container">
          <div className="location-card">
            <SectionHeading
              badge="FIND US"
              title="LOCATION & DIRECTIONS"
              subtitle="Where dining excellence takes place."
            />

            <div className="location-grid">
              <div className="location-map-placeholder">
                <div className="map-mockup">
                  <MapPin size={48} className="map-pin-pulse" />
                  <h4>Interactive Location Map</h4>
                  <p className="map-sub">
                    [Google Map embed / physical premises coordinates will be updated once confirmed by the owner]
                  </p>
                  <span className="map-placeholder-tag">{restaurantData.contact.addressPlaceholder}</span>
                </div>
              </div>

              <div className="location-info-side">
                <h3 className="location-heading">Visit Kochchi Restaurant</h3>
                <p className="location-desc">
                  Join us for an unforgettable dining experience. Group banquets, family celebrations, and special hire dining stops can be arranged in coordination with Dham Rejini bus tours.
                </p>

                <div className="location-detail-list">
                  <div className="loc-item">
                    <MapPin size={20} className="loc-icon" />
                    <div>
                      <strong>Address:</strong>
                      <p>{restaurantData.contact.addressPlaceholder}</p>
                    </div>
                  </div>

                  <div className="loc-item">
                    <Clock size={20} className="loc-icon" />
                    <div>
                      <strong>Hours:</strong>
                      <p>{restaurantData.contact.hoursPlaceholder}</p>
                    </div>
                  </div>

                  <div className="loc-item">
                    <Phone size={20} className="loc-icon" />
                    <div>
                      <strong>Direct Phone:</strong>
                      <p>{restaurantData.contact.phonePlaceholder}</p>
                    </div>
                  </div>
                </div>

                {/* 6. Contact & Social Media */}
                <div className="restaurant-contact-block">
                  <a
                    href={restaurantData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp full-width"
                  >
                    <MessageCircle size={18} />
                    <span>WHATSAPP RESERVATIONS: 0767958695</span>
                  </a>

                  <div className="restaurant-socials-row">
                    <span className="socials-label">Social Media:</span>
                    <a href="#" className="social-pill">
                      <Globe size={16} />
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="social-pill">
                      <Share2 size={16} />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
