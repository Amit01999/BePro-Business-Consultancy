import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaGraduationCap,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaBriefcase />,
    title: 'Diverse Business Cases',
    desc: 'Work on real-world business challenges across industries.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Continuous Learning',
    desc: 'Access mentorship, training, and skill-development programs.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation Culture',
    desc: 'Be part of a creative, ownership-driven workplace.',
  },
  {
    icon: <FaUsers />,
    title: 'Inclusive Environment',
    desc: 'Thrive in a friendly, collaborative, and supportive team.',
  },
  {
    icon: <FaClock />,
    title: 'Hybrid Flexibility',
    desc: 'Enjoy hybrid and flexible work options for select roles.',
  },
];

export default function Featured() {
  return (
    <section className="relative bg-gradient-to-b from-[#19181E] via-[#004D43] to-[#19181E] text-white py-20 overflow-hidden">
      {/* Background Accent Circle */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#CDEA68] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#CDEA68] rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Careers at{' '}
          <span className="text-[#CDEA68] drop-shadow-md">BePro</span>
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center text-lg max-w-3xl mx-auto text-gray-300 mb-12"
        >
          At BePro, we believe our people are the driving force behind our
          success. Join us in a collaborative environment where innovation,
          growth, and excellence are celebrated.
        </motion.p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#19181E]/60 backdrop-blur-md border border-[#CDEA68]/20 rounded-xl p-6 text-center shadow-lg hover:shadow-[#CDEA68]/30 transition-all hover:scale-105 duration-300"
            >
              {/* Icon wrapper for perfect centering */}
              <div className="flex justify-center items-center mb-4">
                <div className="text-4xl text-[#CDEA68]">{item.icon}</div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to take your career to the next level? Send your CV and a
            short cover letter to:
          </p>
          <a
            href="mailto:info@bepro.com.bd"
            className="inline-block px-8 py-4 rounded-full bg-[#CDEA68] text-[#19181E] font-bold text-lg hover:bg-white transition-colors shadow-lg"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
