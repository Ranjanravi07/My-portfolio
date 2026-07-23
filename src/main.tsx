import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Projects from "./pages/Projects.tsx";
import "./index.css";

const getInitialThemeMode = () => {
  const savedThemeMode = localStorage.getItem('flowbite-theme-mode') ?? localStorage.getItem('color-theme');

  if (savedThemeMode === 'light') {
    return false;
  }

  if (savedThemeMode === 'dark') {
    return true;
  }

  return true;
};

document.documentElement.classList.toggle('dark', getInitialThemeMode());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
