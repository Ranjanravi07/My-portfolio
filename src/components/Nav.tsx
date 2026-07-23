import React, { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (elementId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
      <Navbar.Brand href="/">
        <div className="avatar-wrapper">
          <img
            src="/assets/images/ravi%20ranjan.jpg"
            alt="Ravi Ranjan Sah"
          />
        </div>
        <span className={`self-center whitespace-nowrap font-bold dark:text-white transition-all duration-300 ml-3 ${
          isScrolled ? 'text-lg' : 'text-2xl'
        }`}>
          Ranjan Ravi
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 items-center gap-2">
        <DarkThemeToggle />

        <Link
          to="/projects"
          className={`hidden md:flex bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 py-2 px-4 transition-all duration-300 items-center gap-2 ${
            isScrolled ? 'scale-90' : 'scale-100'
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

        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-bold text-center transition-all duration-300 ${
            isScrolled ? 'text-sm px-3 py-1.5' : 'text-md px-4 py-2'
          }`}
        >
          Contact Me!
        </button>

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="dark:bg-black">
        {['home', 'services', 'about', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`block pr-4 pl-3 border-b border-gray-100 text-gray-700 hover:bg-gray-50 font-bold dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white transition-all duration-300 ${
              isScrolled ? 'text-base md:text-lg py-2' : 'text-xl md:text-xl py-2.5'
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
