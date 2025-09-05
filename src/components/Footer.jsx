import React, { useState } from 'react';
import Logo from '../assets/logo1.png';

function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const currentYear = new Date().getFullYear();

  const navigationSections = [
    {
      title: 'Explore',
      links: ['Home', 'About Us', 'Services'],
    },
    {
      title: 'Solutions',
      links: [
        'Strategy',
        'Analytics',
        'Innovation',
        'Growth',
        'Transformation',
      ],
    },
    {
      title: 'Connect',
      links: ['Contact', 'Careers', 'Partnership', 'Support', 'Newsletter'],
    },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                background: `radial-gradient(circle, #CDEA68 0%, transparent 70%)`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mt-10">
        {/* Top curved section */}
        <div className="relative">
          <svg
            viewBox="0 0 1200 120"
            className="w-full h-20 fill-[#CDEA68]"
            preserveAspectRatio="none"
          >
            <path d="M0,120 C300,60 600,0 1200,80 L1200,120 Z" />
          </svg>

          {/* Floating logo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
            <div className="bg-[#CDEA68] p-4 rounded-full shadow-2xl border-4 border-black">
              <img
                src={Logo}
                alt="BePro Business Consultancy"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="px-6 md:px-12 lg:px-20 pb-16">
          {/* Hero section */}
          <div className="text-center mb-16 pt-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">Let's Build</span>
              <br />
              <span
                className="text-[#CDEA68] relative inline-block"
                style={{
                  textShadow: '0 0 30px rgba(205, 234, 104, 0.3)',
                }}
              >
                Tomorrow
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CDEA68] to-transparent animate-pulse" />
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Where visionary strategy meets exceptional execution. Your success
              story starts here.
            </p>
          </div>

          {/* Interactive navigation grid - Updated Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {navigationSections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="group relative">
                {/* Section Title with Unique Styling */}
                <div className="relative mb-8">
                  <h3 className="text-3xl font-black text-[#CDEA68] relative inline-block">
                    {section.title}
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#CDEA68] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                  <div className="absolute -top-1 -left-2 w-1 h-0 bg-[#CDEA68] group-hover:h-8 transition-all duration-500 delay-200" />
                </div>

                {/* Links with Modern Styling */}
                <ul className="space-y-3 relative">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="relative">
                      <button
                        className="text-gray-300 hover:text-white transition-all duration-300 text-left w-full group/link relative overflow-hidden py-2 px-4 rounded-lg"
                        onMouseEnter={() =>
                          setHoveredLink(`${sectionIdx}-${linkIdx}`)
                        }
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span className="relative z-10 flex items-center font-medium">
                          <span
                            className={`w-1 h-4 mr-4 transition-all duration-300 ${
                              hoveredLink === `${sectionIdx}-${linkIdx}`
                                ? 'bg-[#CDEA68] shadow-lg shadow-[#CDEA68]/50'
                                : 'bg-gray-600'
                            }`}
                          />
                          {link}
                          <span
                            className={`ml-auto opacity-0 transition-all duration-300 ${
                              hoveredLink === `${sectionIdx}-${linkIdx}`
                                ? 'opacity-100 translate-x-0'
                                : 'translate-x-2'
                            }`}
                          >
                            →
                          </span>
                        </span>

                        {/* Hover Background Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-[#CDEA68]/5 via-[#CDEA68]/10 to-transparent transition-all duration-500 ${
                            hoveredLink === `${sectionIdx}-${linkIdx}`
                              ? 'translate-x-0 opacity-100'
                              : '-translate-x-full opacity-0'
                          }`}
                        />

                        {/* Side Accent Line */}
                        <div
                          className={`absolute left-0 top-0 w-1 h-full bg-[#CDEA68] transition-all duration-300 ${
                            hoveredLink === `${sectionIdx}-${linkIdx}`
                              ? 'opacity-100 scale-y-100'
                              : 'opacity-0 scale-y-0'
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#CDEA68]/20 group-hover:border-[#CDEA68]/60 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#CDEA68]/20 group-hover:border-[#CDEA68]/60 transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* Contact & CTA section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#CDEA68] mb-4">
                  Ready to Transform?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Join industry leaders who trust us to drive their success.
                  Let's create something extraordinary together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-[#CDEA68] transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#CDEA68] rounded-full mr-3 animate-pulse" />
                    <span className="text-[#CDEA68] font-semibold">
                      Email Us
                    </span>
                  </div>
                  <a
                    href="mailto:info@bepro.com.bd"
                    className="text-white hover:text-[#CDEA68] transition-colors"
                  >
                    info@bepro.com.bd
                  </a>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-[#CDEA68] transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-[#CDEA68] rounded-full mr-3 animate-pulse" />
                    <span className="text-[#CDEA68] font-semibold">
                      Call Us
                    </span>
                  </div>
                  <a
                    href="tel:+8801686395927"
                    className="text-white hover:text-[#CDEA68] transition-colors"
                  >
                    +8801686395927
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-right">
              <a
                href="https://calendar.app.google/TyHZuwgs37EGZxW38"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-black bg-[#CDEA68] rounded-full hover:shadow-2xl hover:shadow-[#CDEA68]/30 transition-all duration-500 transform hover:scale-110 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <svg
                      className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </button>
              </a>

              {/* Social links */}
              <div className="flex justify-center lg:justify-end space-x-4 mt-8">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 bg-zinc-900 hover:bg-[#CDEA68] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 border border-zinc-800 hover:border-[#CDEA68]"
                  >
                    {social.slice(0, 2)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 text-gray-400">
                <p className="text-center md:text-left">
                  © {currentYear} BePro Business Consultancy
                </p>
                <div className="flex space-x-6 text-sm">
                  <button className="hover:text-[#CDEA68] transition-colors">
                    Privacy
                  </button>
                  <button className="hover:text-[#CDEA68] transition-colors">
                    Terms
                  </button>
                  <button className="hover:text-[#CDEA68] transition-colors">
                    Cookies
                  </button>
                </div>
              </div>

              <div className="text-gray-400 text-sm">
                Crafted with{' '}
                <span className="text-[#CDEA68] animate-pulse">●</span> for
                excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
