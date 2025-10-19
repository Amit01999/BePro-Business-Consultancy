import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Award, Target } from 'lucide-react';
import Suman from '../assets/Team/Suman.jpg';
import Antik from '../assets/Team/Antik.jpg';
import Redwanul from '../assets/Team/Redwanul.jpg';
import Tajnin from '../assets/Team/Tajnin.jpg';
import Rituparna from '../assets/Team/Rituparna.jpg';
import Azfar from '../assets/Team/Apurbo.jpg';
import Anik from '../assets/Team/Anik.jpg';
import Tanmoy from '../assets/Team/Tanmoy.jpg';
import demo from '../assets/Team/demo.png';

export default function Team() {
  const containerRef = useRef(null);
  const heroInView = useInView(containerRef, { once: true, margin: '-20%' });
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Suman Saha',
      designation: 'Founder and Head of Consultant',
      image: Suman,
      specialty: 'Strategic Leadership',
    },
    {
      id: 2,
      name: 'Muhaiminul Islam Antik',
      designation: 'Managing Director',
      image: demo,
      specialty: 'Business Development',
    },
    {
      id: 3,
      name: 'Md. Redwanul Islam',
      designation: 'Sr. Business Consultant',
      image: Redwanul,
      specialty: 'Market Analysis',
    },
    {
      id: 5,
      name: 'Rituparna Debnath',
      designation: 'Head of Staff',
      image: Rituparna,
      specialty: 'Operations Management',
    },
    {
      id: 4,
      name: 'Jerin Tajnin Siddique',
      designation: 'Business Analyst',
      image: Tajnin,
      specialty: 'Data Analytics',
    },

    {
      id: 6,
      name: 'Azfar Apurbo',
      designation: 'Jr. Consultant',
      image: Azfar,
      specialty: 'Client Relations',
    },
    {
      id: 7,
      name: 'Anik Saha',
      designation: 'Accountant',
      image: Anik,
      specialty: 'Financial Planning',
    },
    {
      id: 8,
      name: 'Tanmoy Kumar Datta',
      designation: 'Jr. Business Analyst',
      image: Tanmoy,
      specialty: 'Research & Insights',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      ref={containerRef}
      id="team"
      className="relative w-full bg-gradient-to-br from-[#0a0a0f] via-[#004D43] to-[#0f0f1a] text-white overflow-hidden py-24 lg:py-36"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#CDEA68]/40 via-emerald-500/20 to-transparent rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-[#004D43]/40 via-[#CDEA68]/20 to-transparent rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '4s' }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-[#CDEA68]/10 rounded-full blur-[90px]"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #CDEA68 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 mb-20 lg:mb-28"
      >
        {/* Status Badge */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={
              heroInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.8, y: 20 }
            }
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-zinc-900/90 to-zinc-800/80 backdrop-blur-2xl border border-[#CDEA68]/40 rounded-full shadow-lg hover:shadow-[#CDEA68]/20 transition-all duration-300 hover:scale-105"
          >
            <Users className="w-5 h-5 text-[#CDEA68] group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-8xl font-black text-center mb-8 leading-[1.1] tracking-tight"
        >
          The Visionaries <br className="hidden md:block" />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-[#CDEA68] via-emerald-400 to-[#CDEA68] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Shaping Success
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={heroInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CDEA68] to-transparent origin-left"
            ></motion.div>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-lg lg:text-xl text-zinc-400 text-center max-w-3xl mx-auto leading-relaxed font-light"
        >
          A collective of passionate experts dedicated to transforming visions
          into reality.
          <span className="text-[#CDEA68] font-medium"> Excellence </span>
          is not just our goal—it's our standard.
        </motion.p>
      </motion.section>

      {/* Team Grid - Ultra Premium Bento Grid Layout */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-16"
      >
        {/* Bento-style Grid with varying sizes */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 lg:gap-6 auto-rows-[280px]">
          {teamMembers.map((member, index) => {
            // Unique grid spans for asymmetric bento layout
            const gridPatterns = [
              'md:col-span-3 lg:col-span-5 md:row-span-2', // Large wide
              'md:col-span-3 lg:col-span-4 md:row-span-1', // Medium
              'md:col-span-3 lg:col-span-3 md:row-span-1', // Small
              'md:col-span-3 lg:col-span-4 md:row-span-2', // Tall
              'md:col-span-3 lg:col-span-5 md:row-span-1', // Wide
              'md:col-span-3 lg:col-span-3 md:row-span-2', // Tall narrow
              'md:col-span-3 lg:col-span-4 md:row-span-1', // Medium
              'md:col-span-3 lg:col-span-5 md:row-span-2', // Large wide
            ];

            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(member.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`group relative ${gridPatterns[index]}`}
              >
                {/* Premium Card with Split Reveal Effect */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black">
                  {/* Image Layer with Ken Burns Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover brightness-110 contrast-105"
                      />
                    </motion.div>

                    {/* Sophisticated Multi-Layer Overlays - Lightened for better image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#004D43]/30 to-black/50 group-hover:from-black/30 group-hover:via-[#004D43]/40 group-hover:to-[#CDEA68]/30 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Radial Spotlight Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 40%, rgba(205, 234, 104, 0.12), transparent 60%)',
                      }}
                    ></motion.div>
                  </div>

                  {/* Animated Border Frame */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Top Border */}
                    <motion.div
                      className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#CDEA68] via-emerald-400 to-transparent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>

                    {/* Left Border */}
                    <motion.div
                      className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#CDEA68] to-transparent"
                      initial={{ height: 0 }}
                      whileInView={{ height: '40%' }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    ></motion.div>

                    {/* Corner Accent - Top Right */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <motion.div
                        className="absolute top-4 right-4 w-16 h-16"
                        initial={{ scale: 0, rotate: 45 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, ease: 'backOut' }}
                      >
                        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#CDEA68] to-transparent"></div>
                        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#CDEA68] to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Specialty Badge - Floating & Compact */}
                  <motion.div
                    className="absolute top-5 left-5 z-20"
                    initial={{ opacity: 0, x: -30, y: -10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.div
                      className="px-4 py-2 bg-black/70 backdrop-blur-2xl border border-[#CDEA68]/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-[#CDEA68]/10"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <span className="text-[9px] font-black text-[#CDEA68] tracking-[0.15em] uppercase">
                        {member.specialty}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Award Icon - Floating Corner */}
                  <motion.div
                    className="absolute top-6 right-6 z-20"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1 + 0.4,
                      ease: 'backOut',
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-[#CDEA68]/20 to-emerald-500/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center border border-[#CDEA68]/30 shadow-lg shadow-[#CDEA68]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-6 h-6 text-[#CDEA68]" />
                    </motion.div>
                  </motion.div>

                  {/* Content Section - Slide Up Effect with Reduced Padding */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 z-10 p-5 lg:p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {/* Name with Reveal Animation - Reduced size for better image visibility */}
                    <div className="mb-3 ">
                      <motion.h3
                        className="text-xl lg:text-2xl xl:text-3xl font-black leading-[1.1] mb-2"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                      >
                        <span className="inline-block bg-gradient-to-r from-white via-white to-[#CDEA68] bg-clip-text text-transparent group-hover:from-[#CDEA68] group-hover:via-emerald-300 group-hover:to-white transition-all duration-700">
                          {member.name}
                        </span>
                      </motion.h3>
                    </div>

                    {/* Designation with Icon - Enhanced & Compact */}
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div
                        className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#CDEA68]/25 to-emerald-500/15 backdrop-blur-xl border border-[#CDEA68]/40 flex items-center justify-center shadow-lg shadow-[#CDEA68]/20"
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Briefcase className="w-4 h-4 text-[#CDEA68]" />
                      </motion.div>
                      <p className="text-xs lg:text-sm text-zinc-200 font-medium leading-relaxed pt-1.5">
                        {member.designation}
                      </p>
                    </div>

                    {/* Animated Accent Bar */}
                    <motion.div
                      className="relative h-1.5 bg-gradient-to-r from-zinc-800/60 via-zinc-700/60 to-transparent rounded-full overflow-hidden backdrop-blur-sm"
                      initial={{ scaleX: 0.3, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#CDEA68] via-emerald-400 to-[#CDEA68] rounded-full"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      ></motion.div>

                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: 'linear',
                        }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Hover Glow Effect - Refined */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 100%, rgba(205, 234, 104, 0.2), transparent 65%)',
                    }}
                  ></motion.div>

                  {/* Subtle Grid Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(rgba(205, 234, 104, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(205, 234, 104, 0.5) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  ></div>
                </div>

                {/* Outer Glow Shadow - Enhanced */}
                <div className="absolute -inset-1 -z-10 bg-gradient-to-br from-[#CDEA68]/0 via-[#CDEA68]/10 to-emerald-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 mt-24 lg:mt-36"
      >
        <div className="relative group bg-gradient-to-br from-zinc-900/70 via-zinc-800/50 to-zinc-900/70 backdrop-blur-3xl rounded-[2.5rem] p-10 lg:p-16 border border-zinc-700/50 overflow-hidden hover:border-[#CDEA68]/50 transition-all duration-700">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #CDEA68 1.5px, transparent 0)`,
                backgroundSize: '50px 50px',
              }}
            ></div>
          </div>

          {/* Gradient Orb Animation */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#CDEA68]/20 to-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[#CDEA68]/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative z-10 text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                heroInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#CDEA68]/15 to-emerald-500/10 backdrop-blur-xl border border-[#CDEA68]/40 rounded-full group-hover:scale-105 transition-transform duration-300"
            >
              <Target className="w-5 h-5 text-[#CDEA68] group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-sm font-bold text-[#CDEA68] tracking-wider uppercase">
                Join Our Team
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-4xl lg:text-6xl font-black leading-tight"
            >
              Ready to{' '}
              <span className="bg-gradient-to-r from-[#CDEA68] via-emerald-400 to-[#CDEA68] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Shape the Future
              </span>
              <br />
              With Us?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light"
            >
              We're always seeking exceptional talent to join our innovative
              team.
              <span className="text-white font-medium">
                {' '}
                Let's create something extraordinary together.
              </span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative px-10 py-5 bg-gradient-to-r from-[#CDEA68] to-emerald-400 text-black font-black text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#CDEA68]/40 transition-all duration-500"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get In Touch
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      →
                    </motion.span>
                  </span>

                  {/* Button Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
