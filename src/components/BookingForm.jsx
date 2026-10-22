import React, { useState } from "react";
import {
  Calendar,
  CalendarDays,
  MapPin,
  Users,
  Phone,
  User,
  FileText,
  Send,
  CheckCircle2,
  AlertCircle,
  Route,
  Sparkles,
} from "lucide-react";
import { businessInfo } from "../data/business";

export default function BookingForm({ id = "booking" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    duration: "1",
    from: "",
    to: "",
    passengers: "15 - 25 passengers",
    requirements: "",
  });

  const [dailyPlans, setDailyPlans] = useState({
    1: "",
    2: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const durationOptions = [
    { value: "1", label: "1 Day (Same Day Return)" },
    { value: "2", label: "2 Days (1 Night)" },
    { value: "3", label: "3 Days (2 Nights)" },
    { value: "4", label: "4 Days (3 Nights)" },
    { value: "5", label: "5 Days (4 Nights)" },
    { value: "6", label: "6 Days (5 Nights)" },
    { value: "7", label: "7 Days (1 Week)" },
    { value: "8", label: "8 Days" },
    { value: "9", label: "9 Days" },
    { value: "10", label: "10+ Days Tour" },
  ];

  const passengerOptions = [
    "Under 15 passengers",
    "15 - 25 passengers",
    "26 - 35 passengers",
    "36 - 45 passengers",
    "46 - 54 passengers",
    "Large Group / Multiple Trips",
  ];

  const daysCount = Math.max(1, Math.min(10, parseInt(formData.duration, 10) || 1));

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

  const handleDailyPlanChange = (dayNum, text) => {
    setDailyPlans((prev) => ({
      ...prev,
      [dayNum]: text,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.from.trim()) {
      newErrors.from = "Please enter your pickup location.";
    }

    if (!formData.to.trim()) {
      newErrors.to = "Please enter your destination.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a travel date.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid contact phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build day-by-day itinerary text
    const filledDays = [];
    for (let i = 1; i <= daysCount; i++) {
      const plan = dailyPlans[i]?.trim();
      if (plan) {
        filledDays.push(`• Day ${i}: ${plan}`);
      }
    }
    const dailyPlanText =
      filledDays.length > 0
        ? `\n\nDaily Itinerary:\n${filledDays.join("\n")}`
        : "";

    // Build the formatted WhatsApp Message structure with DHAM REJINI
    const formattedMessage = `DHAM REJINI SPECIAL HIRE - BOOKING REQUEST\nCustomer Name: ${formData.name.trim()}\nPhone: ${formData.phone.trim()}\nTravel Date: ${formData.date}\nDuration: ${daysCount} ${daysCount === 1 ? "Day" : "Days"}\nFrom: ${formData.from.trim()}\nTo: ${formData.to.trim()}${dailyPlanText}\nPassengers: ${formData.passengers}\nAdditional Requirements: ${formData.requirements.trim() || "None specified"}\n\nPlease confirm availability and provide the quotation.`;

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
              <div className={`form-group col-span-3 ${errors.from ? "has-error" : ""}`}>
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
              <div className={`form-group col-span-3 ${errors.to ? "has-error" : ""}`}>
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
              <div className={`form-group col-span-2 ${errors.date ? "has-error" : ""}`}>
                <label htmlFor="booking-date" className="form-label">
                  <Calendar size={16} className="field-icon" />
                  <span>DATE (Start Date) *</span>
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

              {/* How Many Days / Duration */}
              <div className="form-group col-span-2">
                <label htmlFor="booking-duration" className="form-label">
                  <CalendarDays size={16} className="field-icon" />
                  <span>HOW MANY DAYS?</span>
                </label>
                <select
                  id="booking-duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  {durationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Passenger Count */}
              <div className="form-group col-span-2">
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
              <div className={`form-group col-span-3 ${errors.name ? "has-error" : ""}`}>
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
              <div className={`form-group col-span-3 ${errors.phone ? "has-error" : ""}`}>
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

            {/* Dynamic Daily Route & Itinerary Plan */}
            <div className="daily-itinerary-container">
              <div className="daily-itinerary-header">
                <div className="daily-itinerary-title-box">
                  <Route size={18} className="field-icon" />
                  <span className="daily-itinerary-title">
                    DAILY ROUTE & ITINERARY PLAN ({daysCount} {daysCount === 1 ? "DAY" : "DAYS"})
                  </span>
                </div>
                <span className="daily-itinerary-hint">
                  Specify your travel route or planned stops for each day
                </span>
              </div>

              <div className="daily-itinerary-list">
                {Array.from({ length: daysCount }, (_, i) => i + 1).map((dayNum) => (
                  <div key={dayNum} className="form-group daily-itinerary-item">
                    <label htmlFor={`booking-day-${dayNum}`} className="form-label day-step-label">
                      <span className="day-step-badge">DAY {dayNum}</span>
                      <span>Route / Places to visit / Stops</span>
                    </label>
                    <input
                      type="text"
                      id={`booking-day-${dayNum}`}
                      placeholder={
                        dayNum === 1
                          ? "e.g. Pickup at Colombo, visit Pinnawala, night stay at Kandy..."
                          : dayNum === 2
                          ? "e.g. Kandy Temple of the Tooth, Nuwara Eliya tea estates, Gregory Lake..."
                          : dayNum === 3
                          ? "e.g. Ella Nine Arches Bridge, Little Adam's Peak, return route..."
                          : `e.g. Day ${dayNum} destination, activities, and planned stops...`
                      }
                      value={dailyPlans[dayNum] || ""}
                      onChange={(e) => handleDailyPlanChange(dayNum, e.target.value)}
                      className="form-input day-plan-input"
                    />
                  </div>
                ))}
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
