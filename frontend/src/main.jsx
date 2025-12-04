import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import SharePage from "./SharePage";   // ← 重要：你的分享页

import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  </BrowserRouter>
);

