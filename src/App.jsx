import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="min-h-screen bg-zinc-900 w-full text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <ServicesSection />
      <Featured />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
