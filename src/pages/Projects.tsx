import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white dark:bg-black">
        <section className="py-20 px-4">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-white">
              My Projects
            </h1>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
              Here are some of my projects.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project Card 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-4 border-green-300 dark:border-green-600 hover:scale-105 transition-transform duration-300">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  E-Commerce Website with Payment System
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  A full-featured online shopping platform with a secure payment flow, product browsing, and a user-friendly storefront experience.
                </p>
                <a
                  href="https://github.com/Ranjanravi07/E-Commerce-website-with-payment-system-.git"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-none"
                >
                  View Project
                </a>
              </div>

              {/* Project Card 2 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-4 border-green-300 dark:border-green-600 hover:scale-105 transition-transform duration-300">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  Job Finder Mobile Application
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  A mobile job-matching platform built for unskilled and semi-skilled workers, helping them discover local opportunities quickly through a simple and accessible user experience.
                </p>
                <a
                  href="https://github.com/Ranjanravi07/Job-Finder-Mobile-Application-for-Unskilled-and-Semi-Skilled-Workers-.git"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-none"
                >
                  View Project
                </a>
              </div>

              {/* Project Card 3 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-4 border-green-300 dark:border-green-600 hover:scale-105 transition-transform duration-300">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  My Portfolio
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  A responsive personal portfolio website that highlights my skills, projects, and professional profile through a modern, polished UI.
                </p>
                <a
                  href="https://github.com/Ranjanravi07/My-portfolio.git"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-none"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
