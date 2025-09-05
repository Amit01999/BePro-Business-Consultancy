// import React, { useEffect, useState } from 'react';
// import { header } from '../constants/index';
// import { useLocation } from 'react-router-dom';
// import { FaArrowUp } from 'react-icons/fa';
// import logo from '../assets/logo1.png';

// function Navbar() {
//   const { hash } = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed w-full px-10 lg:px-20 py-5 gap-10 font-["Neue Montreal"] flex justify-between items-center z-[100] transition-colors duration-500 ${
//         scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'
//       }`}
//     >
//       {/* <div className="logo">
//         <div className="text-2xl font-bold text-blue-700 tracking-tight">
//           <span className="text-white">Bepro</span>{' '}
//           <span className="text-blue-500">Consulting</span>
//         </div>
//       </div> */}
//       <div className="logo">
//         <img
//           src={logo}
//           alt="Bepro Consulting Logo"
//           className="h-14 w-auto object-contain"
//         />
//       </div>

//       <div className="links md:flex gap-10 flex-wrap hidden">
//         {header.map((item, index) => (
//           <a
//             key={item.id}
//             href={item.url}
//             className={`sm:text-xl text-base ${
//               item.title === hash ? 'z-2 text-purple-500' : 'text-white'
//             } capitalize font-light ${index === 4 && 'ml-25'}`}
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>

//       {/* Mobile Toggle Button */}
//       <div className="fixed top-[20%] inset-y-0 right-[5%] z-[100] md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="inline-flex transition-all font-bold hover:border border-black duration-500 items-center justify-center p-2 rounded-full text-coral-red hover:text-black hover:bg-rose-700"
//           aria-controls="mobile-menu"
//           aria-expanded={isOpen}
//         >
//           {!isOpen ? (
//             <svg
//               className="block h-6 w-6 font-bold"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="block h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isOpen ? 'flex' : 'hidden'
//         } flex-1 lg:hidden top-0 transition-all z-40 max-lg:pt-10 left-0 flex-col items-center justify-evenly max-lg:min-h-screen max-lg:w-full max-lg:absolute gap-5 font-light lg:font-lg backdrop-blur-xl text-3xl lg:text-xl tracking-widest bg-black/70`}
//       >
//         {header.map(item => (
//           <a
//             key={item.id}
//             href={item.url}
//             className={`${
//               item.title === hash ? 'z-2 text-purple-500' : 'text-white'
//             }`}
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>

//       {/* Scroll to top arrow (optional) */}
//       <a
//         href="#services"
//         className="fixed -bottom-[490%] right-[7%] lg:hidden border border-black bg-lime-400 p-3 text-black z-[999] rounded-full"
//       >
//         <FaArrowUp />
//       </a>
//     </div>
//   );
// }

// export default Navbar;
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { Menu, X, ArrowUp } from 'lucide-react';
import logo from '../assets/logo1.png';

function Navbar() {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sisterOpen, setSisterOpen] = useState(false);

  const header = [
    { id: 1, title: 'Home', url: '#home' },
    { id: 2, title: 'About', url: '#about' },
    { id: 3, title: 'Services', url: '#services' },
    // { id: 4, title: 'Portfolio', url: '#portfolio' },
    { id: 5, title: 'Contact', url: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    top: {
      backgroundColor: 'transparent',
      backdropFilter: 'blur(0px)',
      height: '5rem',
      boxShadow: 'none',
    },
    scrolled: {
      backgroundColor: 'rgba(0,0,0,0.4)', // dark glass
      backdropFilter: 'blur(16px)',
      height: '4rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
    },
  };

  return (
    <>
      <motion.nav
        className="fixed w-full px-6 lg:px-16 z-[100] transition-all duration-300"
        variants={navbarVariants}
        animate={scrolled ? 'scrolled' : 'top'}
        initial="top"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full py-2">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#CDEA68] p-2 rounded-full shadow-md border border-black">
              <img
                src={logo}
                alt="BePro Business Consultancy"
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="hidden sm:block text-base font-bold text-white group-hover:text-[#CDEA68] transition-colors">
              BePro Consulting
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {header.map(item => (
              <motion.a
                key={item.id}
                href={item.url}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  hash === item.url
                    ? 'text-[#CDEA68]'
                    : 'text-white hover:text-[#CDEA68]'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
                {hash === item.url && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#CDEA68] rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.a>
            ))}

            {/* Sister Concern Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSisterOpen(true)}
              onMouseLeave={() => setSisterOpen(false)}
            >
              <motion.button className="flex items-center gap-1 text-sm font-semibold text-white hover:text-[#CDEA68]">
                Sister Concern
                <motion.div
                  animate={{ rotate: sisterOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="w-3 h-3" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {sisterOpen && (
                  <motion.div
                    className="absolute top-full mt-2 right-0 bg-black/70 backdrop-blur-lg rounded-lg p-3 shadow-lg border border-white/20 min-w-[160px]"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  >
                    <a
                      href="https://www.fly8.global/"
                      className="block py-2 px-3 text-sm text-white hover:text-[#CDEA68] hover:bg-white/10 rounded-md"
                    >
                      Fly8 Global
                    </a>
                    <a
                      href="https://bepro.it.com/"
                      className="block py-2 px-3 text-sm text-white hover:text-[#CDEA68] hover:bg-white/10 rounded-md"
                    >
                      BeProIT
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://calendar.app.google/TyHZuwgs37EGZxW38"
              className="bg-[#CDEA68] text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-black shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-xl border-t border-[#CDEA68]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-6 py-6 space-y-4">
                {header.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.url}
                    className={`block py-3 px-4 rounded-lg text-base font-semibold ${
                      hash === item.url
                        ? 'text-[#CDEA68] bg-[#CDEA68]/10 border border-[#CDEA68]/30'
                        : 'text-white hover:text-[#CDEA68] hover:bg-white/10'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </motion.a>
                ))}

                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm font-semibold text-[#CDEA68] mb-3 px-4">
                    Sister Concern
                  </p>
                  <a
                    href="https://www.fly8.global/"
                    className="block py-2 px-4 text-white hover:text-[#CDEA68] hover:bg-white/10 rounded-lg"
                  >
                    Fly8 Global
                  </a>
                  <a
                    href="https://bepro.it.com/"
                    className="block py-2 px-4 text-white hover:text-[#CDEA68] hover:bg-white/10 rounded-lg"
                  >
                    BeProIT
                  </a>
                </div>

                <motion.a
                  href="https://calendar.app.google/TyHZuwgs37EGZxW38 "
                  className="block mt-6 bg-[#CDEA68] text-black text-center py-3 rounded-lg font-bold hover:bg-white hover:text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to Top Button */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 bg-[#CDEA68] text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50 md:hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: scrolled ? 1 : 0,
          opacity: scrolled ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.a>
    </>
  );
}

export default Navbar;
