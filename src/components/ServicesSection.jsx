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
      id="services"
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
