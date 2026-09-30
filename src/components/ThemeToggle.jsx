import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className={`theme-toggle-track ${isDark ? "is-dark" : "is-light"}`}>
        <div className="theme-toggle-thumb">
          {isDark ? (
            <Moon size={14} className="theme-icon moon" />
          ) : (
            <Sun size={14} className="theme-icon sun" />
          )}
        </div>
      </div>
    </button>
  );
}
