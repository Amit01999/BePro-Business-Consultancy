import React from 'react';

function Footer() {
  return (
    <footer
      id="contact"
      className='w-full bg-zinc-900 text-white px-8 md:px-20 py-16 font-["Founders Grotesk X Cond Lt"]'
    >
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">
        {/* Left section */}
        <div className="flex flex-col justify-between gap-10 md:gap-20 w-full md:w-1/2">
          <div>
            <h1 className="text-[8vw] md:text-[4vw] font-bold uppercase leading-none">
              Strategic
            </h1>
            <h1 className="text-[8vw] md:text-[4vw] font-bold uppercase leading-none">
              Solutions
            </h1>
          </div>

          {/* Tagline */}
          <p className='max-w-sm text-gray-400 font-["Neue Montreal"] text-lg'>
            Empowering businesses with insight-driven strategies and tailored
            consultancy for lasting success.
          </p>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 font-['Neue Montreal']">
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4">Quick Links</h2>
            <ul className="space-y-3 text-gray-300">
              {['Home', 'About Us', 'Services', 'Case Studies', 'Contact'].map(
                (item, idx) => (
                  <li key={idx} className="relative group">
                    <a href="#" className="block">
                      {item}
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#CDEA68] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-bold uppercase mb-4">Services</h2>
            <ul className="space-y-3 text-gray-300">
              {[
                'Business Strategy',
                'Market Analysis',
                'Financial Planning',
                'Operational Efficiency',
                'Risk Management',
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 pt-6 border-t border-zinc-700 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BePro Business Consultancy. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
