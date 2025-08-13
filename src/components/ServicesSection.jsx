// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import {
//   Shield,
//   Lightbulb,
//   Building2,
//   Users,
//   FileText,
//   GraduationCap,
//   Search,
//   Scale,
//   Award,
//   MapPin,
//   Calculator,
//   Gavel,
//   ChevronRight,
//   ArrowUpRight,
//   Sparkles,
//   Zap,
//   Play,
//   Target,
// } from 'lucide-react';
// import { HoverEffect } from './ui/card-hover-effect';

// const ServicesSection = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoveredService, setHoveredService] = useState(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start end', 'end start'],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
//   const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

//   const services = [
//     {
//       title: 'Audit & Assurance',
//       description:
//         'Advanced audit methodologies ensuring complete financial transparency and stakeholder confidence through rigorous examination.',
//       link: 'https://example.com/audit-assurance',
//     },
//     {
//       title: 'Business Establishment',
//       description:
//         'Comprehensive business setup solutions leveraging market intelligence and regulatory expertise for optimal market entry.',
//       link: 'https://example.com/business-establishment',
//     },
//     {
//       title: 'Corporate Formation',
//       description:
//         'Streamlined incorporation process with digital-first approach, ensuring rapid business formation and legal compliance.',
//       link: 'https://example.com/corporate-formation',
//     },
//     {
//       title: 'Process Outsourcing',
//       description:
//         'Next-generation BPO solutions combining AI automation with skilled expertise for maximum operational efficiency.',
//       link: 'https://example.com/process-outsourcing',
//     },
//     {
//       title: 'Corporate Secretarial',
//       description:
//         'Digital governance platform ensuring seamless compliance management and corporate administration.',
//       link: 'https://example.com/corporate-secretarial',
//     },
//     {
//       title: 'Training & Development',
//       description:
//         'Cutting-edge learning solutions with personalized development paths and measurable skill enhancement.',
//       link: 'https://example.com/training-development',
//     },
//     {
//       title: 'Forensic Investigation',
//       description:
//         'Advanced forensic capabilities utilizing digital analysis, AI detection, and investigative expertise.',
//       link: 'https://example.com/forensic-investigation',
//     },
//     {
//       title: 'Legal Advisory',
//       description:
//         'Comprehensive legal solutions powered by regulatory intelligence and strategic business understanding.',
//       link: 'https://example.com/legal-advisory',
//     },
//     {
//       title: 'Licensing Services',
//       description:
//         'Streamlined licensing solutions with automated tracking and renewal management systems.',
//       link: 'https://example.com/licensing-services',
//     },
//     {
//       title: 'Management Consulting',
//       description:
//         'Data-driven consulting solutions delivering measurable business transformation and competitive advantage.',
//       link: 'https://example.com/management-consulting',
//     },
//     {
//       title: 'Virtual Office',
//       description:
//         'Modern virtual office solutions with premium addresses and comprehensive business support services.',
//       link: 'https://example.com/virtual-office',
//     },
//     {
//       title: 'Tax Advisory',
//       description:
//         'Advanced tax planning strategies utilizing AI-powered analysis and regulatory intelligence for optimal outcomes.',
//       link: 'https://example.com/tax-advisory',
//     },
//   ];

//   useEffect(() => {
//     const initAnimations = async () => {
//       const { gsap } = await import('gsap');
//       const { ScrollTrigger } = await import('gsap/ScrollTrigger');

//       gsap.registerPlugin(ScrollTrigger);

//       // Main title animation
//       gsap.fromTo(
//         '.main-title',
//         {
//           opacity: 0,
//           y: 100,
//           rotationX: 45,
//           scale: 0.8,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotationX: 0,
//           scale: 1,
//           duration: 1.5,
//           ease: 'power4.out',
//           scrollTrigger: {
//             trigger: '.main-title',
//             start: 'top 80%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );

//       // Services grid animation
//       gsap.fromTo(
//         '.service-card',
//         {
//           opacity: 0,
//           y: 80,
//           scale: 0.8,
//           rotationY: 45,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotationY: 0,
//           duration: 1,
//           ease: 'power3.out',
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: '.services-grid',
//             start: 'top 70%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );

//       // Floating animation for cards
//       gsap.to('.service-card', {
//         y: -5,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: 'power2.inOut',
//         stagger: {
//           amount: 2,
//           from: 'random',
//         },
//       });

//       // Background elements animation
//       gsap.to('.bg-orb', {
//         rotation: 360,
//         duration: 20,
//         repeat: -1,
//         ease: 'none',
//       });

//       gsap.to('.bg-orb', {
//         scale: 1.2,
//         duration: 4,
//         repeat: -1,
//         yoyo: true,
//         ease: 'power2.inOut',
//         stagger: 0.5,
//       });
//     };

//     initAnimations();

//     // Auto-rotate active service
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % services.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [services.length]);

//   return (
//     <section
//       ref={containerRef}
//       className="min-h-screen relative overflow-hidden"
//       style={{ backgroundColor: '#19181E' }}
//     >
//       {/* Animated Background */}
//       <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
//         {/* Dynamic background orbs */}
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="bg-orb absolute rounded-full opacity-5"
//             style={{
//               width: Math.random() * 400 + 200,
//               height: Math.random() * 400 + 200,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               backgroundColor: '#CDEA68',
//             }}
//             animate={{
//               x: [0, 50, 0],
//               y: [0, -30, 0],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: 10 + i * 2,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: i * 1.5,
//             }}
//           />
//         ))}

//         {/* Grid pattern */}
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(205,234,104,0.1) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(205,234,104,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '80px 80px',
//           }}
//         />
//       </motion.div>

//       <div className="relative z-10 container mx-auto px-6 py-20">
//         {/* Header Section */}
//         <motion.div className="text-center mb-20" style={{ y: titleY }}>
//           {/* Animated badge */}
//           <motion.div
//             className="main-title inline-flex items-center gap-3 px-8 py-4 rounded-full border mb-8 backdrop-blur-xl"
//             style={{
//               backgroundColor: 'rgba(205,234,104,0.1)',
//               borderColor: 'rgba(205,234,104,0.3)',
//               color: '#CDEA68',
//             }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Sparkles className="w-6 h-6" />
//             <span className="font-bold text-lg tracking-wide">
//               PREMIUM BUSINESS SERVICES
//             </span>
//             <Zap className="w-6 h-6" />
//           </motion.div>

//           <motion.h1
//             className="main-title text-8xl lg:text-9xl font-black mb-8 leading-tight"
//             style={{ color: '#CDEA68' }}
//           >
//             OUR
//             <br />
//             <span className="text-white">SERVICES</span>
//           </motion.h1>

//           <motion.p className="main-title text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             Experience next-generation business solutions powered by
//             cutting-edge technology and unparalleled expertise in Bangladesh's
//             dynamic market
//           </motion.p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="max-w-7xl mx-auto px-8">
//           <HoverEffect items={services} />
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="text-center mt-30"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl backdrop-blur-xl border"
//             style={{
//               backgroundColor: 'rgba(205,234,104,0.05)',
//               borderColor: 'rgba(205,234,104,0.2)',
//             }}
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="text-center sm:text-left">
//               <h3
//                 className="text-3xl font-bold mb-2"
//                 style={{ color: '#CDEA68' }}
//               >
//                 Ready to Transform Your Business?
//               </h3>
//               <p className="text-gray-300 text-lg">
//                 Let's discuss how our services can accelerate your growth
//               </p>
//             </div>

//             <motion.button
//               className="px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3"
//               style={{
//                 backgroundColor: '#CDEA68',
//                 color: '#19181E',
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: '0 20px 40px rgba(205,234,104,0.3)',
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Play className="w-5 h-5" />
//               <span>Start Your Journey</span>
//               <ChevronRight className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Zap, Play, ChevronRight } from 'lucide-react';
import { HoverEffect } from './ui/card-hover-effect';

const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const services = [
    {
      title: 'Audit & Assurance',
      description:
        'Advanced audit methodologies ensuring complete financial transparency and stakeholder confidence.',
      link: '#',
    },
    {
      title: 'Business Establishment',
      description:
        'Comprehensive business setup solutions leveraging market intelligence and regulatory expertise.',
      link: '#',
    },
    {
      title: 'Corporate Formation',
      description:
        'Streamlined incorporation process with rapid legal compliance and minimal hassle.',
      link: '#',
    },
    {
      title: 'Process Outsourcing',
      description:
        'AI-powered BPO solutions for maximum operational efficiency.',
      link: '#',
    },
    {
      title: 'Corporate Secretarial',
      description:
        'Digital governance platform ensuring seamless compliance management.',
      link: '#',
    },
    {
      title: 'Training & Development',
      description:
        'Personalized learning solutions with measurable skill growth.',
      link: '#',
    },
    {
      title: 'Forensic Investigation',
      description: 'Digital forensic capabilities and investigative expertise.',
      link: '#',
    },
    {
      title: 'Legal Advisory',
      description:
        'Strategic legal solutions for sustainable business success.',
      link: '#',
    },
    {
      title: 'Licensing Services',
      description:
        'Automated licensing solutions with tracking & renewal reminders.',
      link: '#',
    },
    {
      title: 'Management Consulting',
      description:
        'Data-driven strategies delivering measurable transformation.',
      link: '#',
    },
    {
      title: 'Virtual Office',
      description: 'Premium addresses with complete virtual business support.',
      link: '#',
    },
    {
      title: 'Tax Advisory',
      description: 'AI-powered tax planning for optimal financial outcomes.',
      link: '#',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#19181E' }}
    >
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: 300 + i * 80,
              height: 300 + i * 80,
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              background:
                'radial-gradient(circle, rgba(205,234,104,0.4) 0%, transparent 70%)',
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div className="text-center mb-20" style={{ y: titleY }}>
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border backdrop-blur-xl mb-6"
            style={{
              backgroundColor: 'rgba(205,234,104,0.08)',
              borderColor: 'rgba(205,234,104,0.25)',
              color: '#CDEA68',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">
              PREMIUM BUSINESS SERVICES
            </span>
            <Zap className="w-5 h-5" />
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-black mb-6 leading-tight"
            style={{ color: '#CDEA68' }}
          >
            OUR <span className="text-white">SERVICES</span>
          </motion.h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation business solutions powered by
            cutting-edge technology and unparalleled expertise in Bangladesh’s
            dynamic market.
          </p>
        </motion.div>

        {/* Services */}
        <div className="max-w-7xl mx-auto px-4">
          <HoverEffect items={services} />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl backdrop-blur-xl border"
            style={{
              backgroundColor: 'rgba(205,234,104,0.05)',
              borderColor: 'rgba(205,234,104,0.15)',
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center sm:text-left">
              <h3
                className="text-2xl font-bold mb-1"
                style={{ color: '#CDEA68' }}
              >
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300">
                Let’s discuss how our services can accelerate your growth.
              </p>
            </div>

            <motion.button
              className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              style={{
                backgroundColor: '#CDEA68',
                color: '#19181E',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 24px rgba(205,234,104,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4" />
              <span>Start Your Journey</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
