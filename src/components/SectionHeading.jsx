import React from "react";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = ""
}) {
  return (
    <div
      className={`section-header ${className}`}
      style={{ textAlign: align, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}
    >
      {badge && <span className="section-badge">{badge}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
