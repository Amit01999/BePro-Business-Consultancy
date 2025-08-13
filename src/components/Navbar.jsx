import React, { useEffect, useState } from 'react';
import { header } from '../constants/index';
import { useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import logo from '../assets/logo1.png';

function Navbar() {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full px-10 lg:px-20 py-5 gap-10 font-["Neue Montreal"] flex justify-between items-center z-[100] transition-colors duration-500 ${
        scrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* <div className="logo">
        <div className="text-2xl font-bold text-blue-700 tracking-tight">
          <span className="text-white">Bepro</span>{' '}
          <span className="text-blue-500">Consulting</span>
        </div>
      </div> */}
      <div className="logo">
        <img
          src={logo}
          alt="Bepro Consulting Logo"
          className="h-14 w-auto object-contain"
        />
      </div>

      <div className="links md:flex gap-10 flex-wrap hidden">
        {header.map((item, index) => (
          <a
            key={item.id}
            href={item.url}
            className={`sm:text-xl text-base ${
              item.title === hash ? 'z-2 text-purple-500' : 'text-white'
            } capitalize font-light ${index === 4 && 'ml-25'}`}
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <div className="fixed top-[20%] inset-y-0 right-[5%] z-[100] md:hidden">
        <button
          onClick={toggleMenu}
          className="inline-flex transition-all font-bold hover:border border-black duration-500 items-center justify-center p-2 rounded-full text-coral-red hover:text-black hover:bg-rose-700"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          {!isOpen ? (
            <svg
              className="block h-6 w-6 font-bold"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-1 lg:hidden top-0 transition-all z-40 max-lg:pt-10 left-0 flex-col items-center justify-evenly max-lg:min-h-screen max-lg:w-full max-lg:absolute gap-5 font-light lg:font-lg backdrop-blur-xl text-3xl lg:text-xl tracking-widest bg-black/70`}
      >
        {header.map(item => (
          <a
            key={item.id}
            href={item.url}
            className={`${
              item.title === hash ? 'z-2 text-purple-500' : 'text-white'
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>

      {/* Scroll to top arrow (optional) */}
      <a
        href="#services"
        className="fixed -bottom-[490%] right-[7%] lg:hidden border border-black bg-lime-400 p-3 text-black z-[999] rounded-full"
      >
        <FaArrowUp />
      </a>
    </div>
  );
}

export default Navbar;
