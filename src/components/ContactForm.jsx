import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can send data to backend or email API
  };

  const inputClass =
    'w-full px-4 py-3 bg-transparent border border-[#CDEA68]/30 rounded-lg focus:border-[#CDEA68] focus:ring-2 focus:ring-[#CDEA68]/40 outline-none text-white placeholder-gray-400 transition-all';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#19181E]/60 backdrop-blur-md border border-[#CDEA68]/20 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto my-20"
    >
      <h2 className="text-3xl font-bold text-[#CDEA68] mb-6 text-center">
        Get in Touch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          required
          className={inputClass}
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className={inputClass}
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className={inputClass}
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject *"
          required
          className={inputClass}
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message *"
          required
          rows="5"
          className={inputClass}
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 bg-[#CDEA68] text-[#19181E] font-semibold rounded-lg shadow-md hover:shadow-[#CDEA68]/50 transition-all"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
