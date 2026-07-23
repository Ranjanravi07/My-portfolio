// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full bg-white dark:bg-black">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-transparent dark:bg-transparent">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-2xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Secure Your Future with{" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Ethical Hacking Done Right
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-base sm:text-lg lg:text-2xl dark:text-gray-400">
          From deep-dive penetration testing to proactive threat monitoring, I provide tailored solutions to secure your network and protect your business.

          </p>
          <div className="flex flex-wrap gap-3 mt-2">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
          >
            More About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Contact Me!
          </a>
          </div>
        </div>
        <div 
          id="hacker-logo" 
          className="mt-12 ml-6 lg:mt-0 lg:ml-0 lg:col-span-5 lg:flex relative z-10 avatar-container"
        >
          <img
            className="avatar-img"
            src="/assets/images/ravi%20ranjan.jpg"
            alt="Ravi Ranjan Sah"
          />
        </div>
      </div>
    </section>

    {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-5xl font-extrabold">
                      <span data-counter-target="6">0</span>+
                  </dt>
                  <dd className="font-light text-lg text-gray-500 dark:text-gray-400">Months of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-5xl font-extrabold">
                      <span data-counter-target="1"></span>+
                  </dt>
                  <dd className="font-light text-lg text-gray-500 dark:text-gray-400">Projects Completed</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-5xl font-extrabold">
                      <span data-counter-target="10">0</span>+
                  </dt>
                  <dd className="font-light text-lg text-gray-500 dark:text-gray-400">Skills Learned</dd>
              </div>
          </dl>
                    </div>
                    
        </section>

        {/* #### SERVICES SECTION #### */}
          <section id="services" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Breaking Systems, Building Security
                </h2>
                <p className="text-gray-500 text-base sm:text-lg lg:text-2xl dark:text-gray-400">
                Specialized in uncovering critical security vulnerabilities through advanced penetration testing, helping organizations fortify their digital infrastructure before real threats emerge.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Penetration Testing</h3>
                  <p className="text-gray-500 text-base dark:text-gray-400">
                    Comprehensive security assessment simulating real-world attacks to identify vulnerabilities in your systems, networks, and applications before malicious actors can exploit them.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Web App Security</h3>
                  <p className="text-gray-500 text-base dark:text-gray-400">
                  In-depth analysis and testing of web applications to uncover security flaws, injection vulnerabilities, authentication weaknesses, and other critical risks affecting your platforms.
                  </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Network Infrastructure</h3>
                  <p className="text-gray-500 text-base dark:text-gray-400">
                  Thorough evaluation of network architecture, firewall configurations, access controls, and routing protocols to ensure robust security across your entire digital infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          

          {/* #### SERVICES SECTION #### */}
          
          <section id="about" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me, Ranjan Ravi
              </h2>
              <p className="mb-4 text-base sm:text-xl lg:text-2xl">
              I've dedicated my career to finding the vulnerabilities that others miss. My journey began with CTF competitions and evolved into a full-time commitment to making digital spaces more secure.
                           My approach combines creative problem-solving with rigorous methodology, ensuring no stone is left unturned in the pursuit of robust security.

              </p>
              <a 
                href="/assets/images/Ravi%20ranjan%20sah.pdf" 
                download="Ravi ranjan sah.pdf"
                className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Download C.V.
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-1.png"
              alt="office content 2"
            />
          </div>
          </div>
        </section>
        <section id="contact" className="bg-white dark:bg-black">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/data.png"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Ready to Strengthen Your Security Posture?
              </h2>
              <p className="mb-6 font-light text-gray-500 text-base lg:text-lg dark:text-gray-400">
              Let's connect and discuss how I can help identify vulnerabilities in your systems before malicious actors do.
              </p>
              <p className="mb-6 font-light text-gray-500 text-base lg:text-lg dark:text-gray-400">Whether you need penetration testing, security consultation, or vulnerability assessments, I'm here to provide expert guidance that fits your organization's unique needs. 
              </p>
            </div>
          </div>
        </section>
        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-white dark:bg-black">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Your security is my priority
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-base lg:text-lg">
            Protect your digital assets and maintain customer trust with proactive security testing.
            </p>
            <form action="mailto:sahranjanravi@gmail.com" method="post" encType="text/plain" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        {/* #### FIND ME ON SECTION #### */}
        <section className="relative overflow-hidden bg-white dark:bg-black">
          {/* Subtle white speckles overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          
          <div className="relative z-10 py-16 px-4 mx-auto max-w-screen-xl text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Find Me On
            </h2>
            <p className="mb-12 text-lg md:text-xl text-gray-600 dark:text-gray-200">
              {"Feel free to "}
              <span className="text-green-500 font-semibold">connect</span>
              {" with me"}
            </p>
            
            <div className="flex justify-center gap-8 md:gap-12">
              {/* GitHub */}
              <a
                href="https://github.com/Ranjanravi07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white dark:text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Ranjanravi4482/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white dark:text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ravi-ranjansah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white dark:text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ranjan_ravi7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white dark:text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;


