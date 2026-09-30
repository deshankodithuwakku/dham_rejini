import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import SpecialHire from "./pages/SpecialHire";
import AlankaraAutomotive from "./pages/AlankaraAutomotive";
import KochchiRestaurant from "./pages/KochchiRestaurant";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/Contact";

// Scroll to top or handle hash navigation on route change
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollHandler />
        <div className="app-shell">
          <Navbar />
          <main className="main-content" id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/special-hire" element={<SpecialHire />} />
              <Route path="/alankara-automotive" element={<AlankaraAutomotive />} />
              <Route path="/kochchi-restaurant" element={<KochchiRestaurant />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
