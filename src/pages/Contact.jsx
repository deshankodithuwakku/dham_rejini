import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Send, ShieldCheck, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { businessInfo } from "../data/business";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (!formData.message.trim()) newErrors.message = "Please enter your inquiry message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = `DHAM REJINI SPECIAL HIRE - GENERAL INQUIRY\nCustomer Name: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nSubject: ${formData.subject}\nMessage: ${formData.message.trim()}\nPlease respond at your earliest convenience.`;

    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    setSubmitted(true);
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <span className="section-badge">COMMUNICATION</span>
            <h1 className="page-hero-title">CONTACT DHAM REJINI</h1>
            <p className="page-hero-subtitle">
              Direct connection with owner Supun Wijesinghe for bookings, quotations, and special hire inquiries across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section section-spacing">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Info Cards */}
            <div className="contact-info-column">
              <div className="contact-info-card">
                <span className="contact-card-badge">DIRECT MANAGEMENT LINE</span>
                <h2 className="contact-card-title">We are ready to assist you</h2>
                <p className="contact-card-lead">
                  Speak directly with the owner to secure dates, clarify route details, or customize your group itinerary.
                </p>

                <div className="contact-channels">
                  {/* WhatsApp Direct Card */}
                  <a
                    href={businessInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-item wa-channel"
                  >
                    <div className="channel-icon-wrap wa">
                      <MessageCircle size={24} />
                    </div>
                    <div className="channel-content">
                      <span className="channel-label">INSTANT WHATSAPP CHAT</span>
                      <strong className="channel-value">{businessInfo.primaryPhone}</strong>
                      <span className="channel-note">Tap to open WhatsApp conversation</span>
                    </div>
                  </a>

                  {/* Phone Call Card */}
                  <a
                    href={`tel:${businessInfo.primaryPhone}`}
                    className="contact-channel-item"
                  >
                    <div className="channel-icon-wrap phone">
                      <Phone size={24} />
                    </div>
                    <div className="channel-content">
                      <span className="channel-label">DIRECT PHONE CALL</span>
                      <strong className="channel-value">{businessInfo.primaryPhone}</strong>
                      <span className="channel-note">Mon – Sun: 24/7 Availability</span>
                    </div>
                  </a>

                  {/* Operating Region */}
                  <div className="contact-channel-item static">
                    <div className="channel-icon-wrap loc">
                      <MapPin size={24} />
                    </div>
                    <div className="channel-content">
                      <span className="channel-label">OPERATING REGION</span>
                      <strong className="channel-value">Island-Wide Sri Lanka</strong>
                      <span className="channel-note">{businessInfo.contactPlaceholder.address}</span>
                    </div>
                  </div>

                  {/* Management */}
                  <div className="contact-channel-item static">
                    <div className="channel-icon-wrap owner">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="channel-content">
                      <span className="channel-label">FOUNDER & OPERATOR</span>
                      <strong className="channel-value">{businessInfo.ownerName}</strong>
                      <span className="channel-note">Personal oversight on every charter</span>
                    </div>
                  </div>
                </div>

                {/* Related Ventures */}
                <div className="contact-enterprises-box">
                  <span className="box-title">CONNECTED BUSINESSES:</span>
                  <div className="box-links">
                    <Link to="/alankara-automotive" className="box-link-pill">
                      <span>ALANKARA AUTOMOTIVE</span>
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link to="/kochchi-restaurant" className="box-link-pill">
                      <span>KOCHCHI RESTAURANT</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Instant WhatsApp Message Form */}
            <div className="contact-form-column">
              <div className="premium-card contact-form-card">
                <div className="form-card-header">
                  <span className="section-badge">SEND INQUIRY</span>
                  <h3 className="form-card-title">Send a Quick Message</h3>
                  <p className="form-card-subtitle">
                    Complete this form and it will format and open your message directly in WhatsApp with zero wait time.
                  </p>
                </div>

                {submitted && (
                  <div className="booking-alert-success" role="alert">
                    <CheckCircle2 size={20} />
                    <div>
                      <strong>WhatsApp Opened!</strong> Your message has been prepared for dispatch.
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                    <label htmlFor="contact-name" className="form-label">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="e.g. Priyantha Fernando"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                    {errors.name && (
                      <span className="field-error-msg">
                        <AlertCircle size={14} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                    <label htmlFor="contact-phone" className="form-label">
                      CONTACT PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="e.g. 077 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                    {errors.phone && (
                      <span className="field-error-msg">
                        <AlertCircle size={14} /> {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      INQUIRY TOPIC
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input form-select"
                    >
                      <option value="Special Hire Bus Quotation">Special Hire Bus Quotation</option>
                      <option value="VVIP Party Bus Booking">VVIP Party Bus Booking</option>
                      <option value="Wedding / Event Transport">Wedding / Event Transport</option>
                      <option value="Corporate / Company Outing">Corporate / Company Outing</option>
                      <option value="Vehicle Inspection Appointment">Vehicle Inspection Appointment</option>
                      <option value="Alankara Automotive Inquiry">Alankara Automotive Inquiry</option>
                      <option value="Kochchi Restaurant Inquiry">Kochchi Restaurant Inquiry</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div className={`form-group ${errors.message ? "has-error" : ""}`}>
                    <label htmlFor="contact-message" className="form-label">
                      MESSAGE / TRIP DETAILS *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      placeholder="Include dates, pickup, destination, passenger count, or special notes..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input form-textarea"
                    />
                    {errors.message && (
                      <span className="field-error-msg">
                        <AlertCircle size={14} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-whatsapp full-width contact-submit-btn"
                  >
                    <MessageCircle size={18} />
                    <span>SEND VIA WHATSAPP (0767958695)</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section section-spacing">
        <div className="container">
          <SectionHeading
            badge="COMMON QUERIES"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Helpful guidance for booking Dham Rejini Special Hire."
          />

          <div className="faq-grid">
            <div className="premium-card faq-card">
              <h4>How do I confirm a booking?</h4>
              <p>Once you reach out via WhatsApp with your travel dates and route, Supun Wijesinghe will provide a quotation. A standard advance deposit confirms your bus reservation.</p>
            </div>

            <div className="premium-card faq-card">
              <h4>Can I inspect the bus beforehand?</h4>
              <p>Yes. We welcome vehicle inspections by appointment so you can experience the cabin comfort, sound setup, and cleanliness before your journey.</p>
            </div>

            <div className="premium-card faq-card">
              <h4>Does Dham Rejini travel across all of Sri Lanka?</h4>
              <p>Yes. We operate round-island charters covering the Southern Expressway, Central Highlands, Cultural Triangle, Northern, and Eastern provinces.</p>
            </div>

            <div className="premium-card faq-card">
              <h4>Can route stops and rest timings be tailored?</h4>
              <p>Absolutely. As a private special hire service, the schedule is shaped around your group’s preferences, meals, music, and photography stops.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
