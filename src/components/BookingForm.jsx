import React, { useState } from "react";
import { Calendar, MapPin, Users, Phone, User, FileText, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { businessInfo } from "../data/business";

export default function BookingForm({ id = "booking" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    from: "",
    to: "",
    passengers: "15 - 25 passengers",
    requirements: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const passengerOptions = [
    "Under 15 passengers",
    "15 - 25 passengers",
    "26 - 35 passengers",
    "36 - 45 passengers",
    "46 - 54 passengers",
    "Large Group / Multiple Trips"
  ];

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

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid contact phone number.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a travel date.";
    }

    if (!formData.from.trim()) {
      newErrors.from = "Please enter your pickup location.";
    }

    if (!formData.to.trim()) {
      newErrors.to = "Please enter your destination.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build the required WhatsApp Message structure with DHAM REJINI
    const formattedMessage = `DHAM REJINI SPECIAL HIRE - BOOKING REQUEST\nCustomer Name: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nTravel Date: ${formData.date}\nFrom: ${formData.from.trim()}\nTo: ${formData.to.trim()}\nPassengers: ${formData.passengers}\nAdditional Requirements: ${formData.requirements.trim() || "None specified"}\nPlease confirm availability and provide the quotation.`;

    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    setSubmittedSuccess(true);
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 8000);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <section id={id} className="booking-section section-spacing">
      <div className="container">
        <div className="booking-card-wrapper">
          <div className="booking-header">
            <div className="booking-badge">
              <Calendar size={14} />
              <span>DIRECT RESERVATION INQUIRY</span>
            </div>
            <h2 className="booking-title">BOOK YOUR JOURNEY</h2>
            <p className="booking-subtitle">
              Tell us where and when you want to travel. We will prepare an immediate personalized quotation.
            </p>
          </div>

          {submittedSuccess && (
            <div className="booking-alert-success" role="alert">
              <CheckCircle2 size={20} />
              <div>
                <strong>WhatsApp Opened!</strong> If WhatsApp did not launch automatically,{" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="link-highlight"
                >
                  click here to send your request
                </button>.
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="booking-form" noValidate>
            <div className="booking-grid">
              {/* Pickup Location */}
              <div className={`form-group ${errors.from ? "has-error" : ""}`}>
                <label htmlFor="booking-from" className="form-label">
                  <MapPin size={16} className="field-icon" />
                  <span>FROM (Pickup Location) *</span>
                </label>
                <input
                  type="text"
                  id="booking-from"
                  name="from"
                  placeholder="e.g. Colombo, Galle, Matara, Kandy..."
                  value={formData.from}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.from && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.from}
                  </span>
                )}
              </div>

              {/* Destination */}
              <div className={`form-group ${errors.to ? "has-error" : ""}`}>
                <label htmlFor="booking-to" className="form-label">
                  <MapPin size={16} className="field-icon destination" />
                  <span>TO (Destination) *</span>
                </label>
                <input
                  type="text"
                  id="booking-to"
                  name="to"
                  placeholder="e.g. Nuwara Eliya, Kataragama, Ella, Jaffna..."
                  value={formData.to}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.to && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.to}
                  </span>
                )}
              </div>

              {/* Travel Date */}
              <div className={`form-group ${errors.date ? "has-error" : ""}`}>
                <label htmlFor="booking-date" className="form-label">
                  <Calendar size={16} className="field-icon" />
                  <span>DATE (Travel Date) *</span>
                </label>
                <input
                  type="date"
                  id="booking-date"
                  name="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                />
                {errors.date && (
                  <span className="field-error-msg">
                    <AlertCircle size={14} /> {errors.date}
                  </span>
                )}
              </div>

              {/* Passenger Count */}
              <div className="form-group">
                <label htmlFor="booking-passengers" className="form-label">
                  <Users size={16} className="field-icon" />
                  <span>PASSENGERS</span>
                </label>
                <select
                  id="booking-passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  {passengerOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer Name */}
              <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="booking-name" className="form-label">
                  <User size={16} className="field-icon" />
                  <span>YOUR NAME *</span>
                </label>
                <input
                  type="text"
                  id="booking-name"
                  name="name"
                  placeholder="Your full name"
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

              {/* Customer Phone */}
              <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                <label htmlFor="booking-phone" className="form-label">
                  <Phone size={16} className="field-icon" />
                  <span>PHONE NUMBER *</span>
                </label>
                <input
                  type="tel"
                  id="booking-phone"
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
            </div>

            {/* Special Requirements */}
            <div className="form-group full-width">
              <label htmlFor="booking-requirements" className="form-label">
                <FileText size={16} className="field-icon" />
                <span>SPECIAL REQUIREMENTS (Optional)</span>
              </label>
              <textarea
                id="booking-requirements"
                name="requirements"
                rows="3"
                placeholder="Mention DJ/party sound requirements, multi-day routes, AC preferences, luggage needs, or itinerary stops..."
                value={formData.requirements}
                onChange={handleChange}
                className="form-input form-textarea"
              />
            </div>

            <div className="booking-footer">
              <div className="booking-guarantee">
                <span className="guarantee-dot"></span>
                <span>Direct quotation via WhatsApp to <strong>{businessInfo.primaryPhone}</strong></span>
              </div>
              <button
                type="submit"
                className="btn-primary booking-submit-btn"
                id="btn-request-booking"
              >
                <span>REQUEST BOOKING</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
