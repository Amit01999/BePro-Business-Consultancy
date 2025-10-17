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
import Team from './components/Team';

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
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
// import Marquee from './components/Marquee';
// import About from './components/About';
// import Eyes from './components/Eyes';
// import Featured from './components/Featured';
// import Cards from './components/Cards';
// import Footer from './components/Footer';
// import LocomotiveScroll from 'locomotive-scroll';
// import ServicesSection from './components/ServicesSection';
// import ContactForm from './components/ContactForm';
// import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

// function App() {
//   const whatsappNumber = '+8801686395927'; // replace with your number
//   const whatsappLink = `https://wa.me/${whatsappNumber}`;

//   return (
//     <div className="min-h-screen bg-zinc-900 w-full text-white relative">
//       <Navbar />
//       <LandingPage />
//       <Marquee />
//       <About />
//       <Eyes />
//       <ServicesSection />
//       <Featured />
//       <ContactForm />
//       <Footer />

//       {/* WhatsApp Chat Button */}
//       <a
//         href={whatsappLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-[1000] transition-transform transform hover:scale-110"
//       >
//         <FaWhatsapp size={28} />
//       </a>
//     </div>
//   );
// }

// export default App;
