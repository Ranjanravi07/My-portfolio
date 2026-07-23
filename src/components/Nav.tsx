import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (elementId: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      className={`fixed w-full transition-all duration-300 z-50 ${
        isScrolled
          ? 'py-1 bg-white dark:bg-black shadow-lg'
          : 'py-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm md:bg-transparent md:dark:bg-transparent'
      }`}
      fluid
    >
      {/* Brand */}
      <Navbar.Brand href="/">
        <div className="avatar-wrapper">
          <img
            src="/assets/images/ravi%20ranjan.jpg"
            alt="Ravi Ranjan Sah"
          />
        </div>
        <span className={`self-center whitespace-nowrap font-bold dark:text-white transition-all duration-300 ml-2 ${
          isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-2xl'
        }`}>
          Ranjan Ravi
        </span>
      </Navbar.Brand>

      {/* Right side controls */}
      <div className="flex items-center gap-1 md:gap-2 ml-auto">

        {/* Dark theme toggle */}
        <DarkThemeToggle />

        {/* My Project button — always visible, icon-only on mobile, icon+text on desktop */}
        <Link
          to="/projects"
          className={`flex bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-2 md:px-4 transition-all duration-300 items-center gap-2 ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-100"
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
          <span className="hidden md:inline text-white font-medium">My Project</span>
        </Link>

        {/* Contact Me button — desktop only */}
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className={`hidden md:block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold text-center transition-all duration-300 ${
            isScrolled ? 'text-sm px-3 py-1.5' : 'text-md px-4 py-2'
          }`}
        >
          Contact Me!
        </button>

        {/* Custom hamburger — visible on ALL screen sizes */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-200"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg z-50">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-green-700 dark:hover:text-white font-bold border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors duration-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </Navbar>
  );
};

export default Nav;
