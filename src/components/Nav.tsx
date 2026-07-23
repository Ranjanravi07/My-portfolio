import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const syncThemePreference = () => {
      const hasManualThemeOverride = localStorage.getItem("portfolio-theme-user-set") === "true";
      const savedTheme =
        localStorage.getItem("flowbite-theme-mode") ??
        localStorage.getItem("color-theme");
      const useDarkTheme = hasManualThemeOverride
        ? savedTheme === "light"
          ? false
          : true
        : true;

      setIsDarkTheme(useDarkTheme);
      document.documentElement.classList.toggle("dark", useDarkTheme);
    };

    syncThemePreference();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (
        !localStorage.getItem("flowbite-theme-mode") &&
        !localStorage.getItem("color-theme")
      ) {
        syncThemePreference();
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else {
      mediaQuery.addListener(handleSystemThemeChange);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      } else {
        mediaQuery.removeListener(handleSystemThemeChange);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (elementId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const nextDarkTheme = !isDarkTheme;
    localStorage.setItem("portfolio-theme-user-set", "true");
    localStorage.setItem("flowbite-theme-mode", nextDarkTheme ? "dark" : "light");
    localStorage.setItem("color-theme", nextDarkTheme ? "dark" : "light");
    setIsDarkTheme(nextDarkTheme);
    document.documentElement.classList.toggle("dark", nextDarkTheme);
  };

  return (
    <Navbar
      className={`fixed w-full transition-all duration-300 ${
        isScrolled
          ? "z-50 py-1 bg-white dark:bg-black shadow-lg md:bg-white md:dark:bg-black"
          : "z-50 py-4 bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent"
      }`}
      fluid
    >
      {/* Brand */}
      <Navbar.Brand href="/" className="flex items-center gap-2 mr-0">
        <div className="avatar-wrapper">
          <img
            src="/assets/images/ravi%20ranjan.jpg"
            alt="Ravi Ranjan Sah"
          />
        </div>
        <span
          className={`self-center whitespace-nowrap font-bold dark:text-white transition-all duration-300 ${
            isScrolled ? "text-base md:text-lg" : "text-lg md:text-2xl"
          }`}
        >
          Ranjan Ravi
        </span>
      </Navbar.Brand>

      {/* Right side controls */}
      <div className="flex md:order-2 items-center ml-auto gap-2 md:gap-0">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
        >
          {isDarkTheme ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 2.75V5M12 19v2.25M21.25 12H19M5 12H2.75M18.35 5.65l-1.6 1.6M7.25 16.75l-1.6 1.6M18.35 18.35l-1.6-1.6M7.25 7.25 5.65 5.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5a8.5 8.5 0 1 0 11.7 11.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* Mobile project shortcut icon */}
        <Link
          to="/projects"
          aria-label="Open projects"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2z"
              clipRule="evenodd"
            />
          </svg>
        </Link>

        {/* My Project — hidden on mobile, visible on desktop */}
        <Link
          to="/projects"
          className={`hidden md:flex mx-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 transition-all duration-300 items-center gap-2 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <svg
            className="w-6 h-6 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white font-medium">My Project</span>
        </Link>

        {/* Contact Me — always visible */}
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className={`hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold text-center mx-3 md:mr-0 z-10 transition-all duration-300 ${
            isScrolled ? "text-sm px-3 py-1.5" : "text-md px-4 py-2"
          }`}
        >
          Contact Me!
        </button>

        {/* Flowbite hamburger toggle — hidden on desktop, visible on mobile */}
        <Navbar.Toggle className="ml-1" />
      </div>

      {/* Nav links — inline on desktop (md+), inside hamburger on mobile */}
      <Navbar.Collapse className="md:flex md:items-center md:justify-center md:order-1 md:flex-1">
        {["home", "services", "about", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block pr-4 pl-3 border-b border-gray-100 text-gray-700 hover:bg-gray-50 font-bold dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white transition-all duration-300 ${
              isScrolled
                ? "text-base md:text-lg py-2"
                : "text-xl md:text-xl py-2.5"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
