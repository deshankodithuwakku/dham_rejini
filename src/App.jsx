import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}
