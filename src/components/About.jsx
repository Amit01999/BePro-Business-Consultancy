import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
} from 'framer-motion';
import heroImage from '../assets/hero-business.jpg';
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Globe,
  Target,
  BarChart3,
  Lightbulb,
  Shield,
  Zap,
  Rocket,
  Eye,
  Brain,
  ArrowUpRight,
  MousePointer2,
  Sparkles,
} from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const imageRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredStat, setHoveredStat] = useState(null);
  const [imageRotation, setImageRotation] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroInView = useInView(heroRef, { once: true, margin: '-10%' });
  const statsInView = useInView(statsRef, { once: true, margin: '-20%' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-15%' });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const stats = [
    // {
    //   number: 250,
    //   suffix: 'M+',
    //   label: 'Revenue Impact',
    //   icon: TrendingUp,
    //   gradient: 'from-emerald-400 to-teal-500',
    // },
    {
      number: 98,
      suffix: '%',
      label: 'Success Rate',
      icon: Target,
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      number: 50,
      suffix: '+',
      label: 'Global Clients',
      icon: Users,
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      number: 12,
      suffix: '+',
      label: 'Years Leading',
      icon: Award,
      gradient: 'from-amber-400 to-orange-500',
    },
  ];

  const services = [
    {
      title: 'Strategic Intelligence',
      subtitle: 'AI-Powered Insights',
      description:
        'Revolutionary market analysis using artificial intelligence and machine learning to predict market trends and strategic opportunities.',
      icon: Brain,
      features: [
        'Predictive Analytics',
        'Market Forecasting',
        'Competitive Intelligence',
        'Strategic Roadmapping',
      ],
      gradient: 'from-purple-600 via-indigo-600 to-blue-600',
      accent: '#8b5cf6',
    },
    {
      title: 'Digital Transformation',
      subtitle: 'Future-Ready Solutions',
      description:
        'Complete digital ecosystem transformation with cutting-edge automation, cloud architecture, and data-driven decision making.',
      icon: Zap,
      features: [
        'Process Automation',
        'Cloud Migration',
        'Data Analytics',
        'AI Integration',
      ],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      accent: '#06b6d4',
    },
    {
      title: 'Innovation Labs',
      subtitle: 'Breakthrough Research',
      description:
        'Revolutionary R&D partnerships that create industry-disrupting innovations and patent-worthy solutions for market leadership.',
      icon: Rocket,
      features: [
        'Innovation Workshops',
        'Prototype Development',
        'Patent Strategy',
        'Market Testing',
      ],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      accent: '#10b981',
    },
  ];

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (e.clientY - centerY) / 30;
        const rotateY = (e.clientX - centerX) / 30;
        setImageRotation({ x: rotateX, y: rotateY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CounterAnimation = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsInView) return;

      let start = 0;
      const increment = target / 120;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [statsInView, target]);

    return `${count}${suffix}`;
  };

  return (
    <div
      ref={containerRef}
      id="about"
      className="relative w-full bg-gradient-to-b from-[#19181E] via-[#004D43] to-[#19181E] text-white overflow-hidden"
    >
      {/* Background Accent Circle */}
      {/* <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#CDEA68] rounded-full opacity-20 blur-3xl"></div> */}
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#CDEA68] rounded-full opacity-20 blur-3xl"></div>
      {/* Dynamic Particle Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #CDEA68 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#CDEA68]/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex items-center py-20"
        >
          <div className="grid lg:grid-cols-12 gap-16 items-center w-full">
            {/* Left Content - 7 cols */}
            <motion.div
              className="lg:col-span-7 space-y-10"
              initial={{ opacity: 0, x: -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl border border-[#CDEA68]/30 rounded-full text-sm font-medium text-[#CDEA68]"
                whileHover={{ scale: 1.05, borderColor: '#CDEA68' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                TRANSFORMING BUSINESSES SINCE 2008
              </motion.div>

              {/* Main Headlines */}
              <div className="space-y-8">
                <motion.div style={{ scale }} className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-black leading-[0.8] tracking-tighter">
                    <motion.span
                      className="block text-white"
                      whileHover={{ x: 10, color: '#CDEA68' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      ELEVATE
                    </motion.span>
                    <motion.span
                      className="block bg-gradient-to-r from-[#CDEA68] via-emerald-500 to-teal-400 bg-clip-text text-transparent"
                      whileHover={{ x: -10, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      DOMINATE
                    </motion.span>
                    <motion.span
                      className="block text-zinc-400"
                      whileHover={{ x: 10, color: '#ffffff' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      SUCCEED
                    </motion.span>
                  </h1>
                </motion.div>

                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-[#CDEA68] to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={heroInView ? { width: 128 } : {}}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />

                <motion.p
                  className="text-xl text-zinc-300 leading-relaxed max-w-2xl font-light"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  We don't just consult—we architect the future. Partner with
                  industry
                  <span className="text-[#CDEA68] font-semibold">
                    {' '}
                    disruptors
                  </span>{' '}
                  who transform ambitious visions into market-defining realities
                  through cutting-edge innovation.
                </motion.p>
              </div>

              {/* Interactive CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 pt-4"
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.button
                  className="group relative bg-[#CDEA68] text-black px-10 py-4 rounded-full text-lg font-bold overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Begin Revolution
                    <motion.div
                      className="w-6 h-6 bg-black rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 90, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-3 h-3 text-[#CDEA68]" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                  />
                </motion.button>

                <motion.button
                  className="group border-2 border-zinc-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-zinc-900 hover:border-[#CDEA68] transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    View Portfolio
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual - 5 cols */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={heroInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              {/* 3D Interactive Image */}
              <motion.div
                ref={imageRef}
                className="relative group perspective-1000"
                style={{
                  rotateX: imageRotation.x,
                  rotateY: imageRotation.y,
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#CDEA68]/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 border border-zinc-800 shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <motion.img
                      src={heroImage}
                      alt="Executive Excellence"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Dynamic Overlay */}
                  <div className="absolute inset-6 bg-black/40 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center text-white">
                      <motion.div
                        className="text-4xl font-black mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ELITE
                      </motion.div>
                      <div className="text-sm font-bold opacity-90">
                        Consulting Partners
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-2xl border border-purple-500/50"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black">50+</div>
                  <div className="text-xs font-bold opacity-90">Client</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-white shadow-2xl border border-emerald-500/50"
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                whileHover={{ scale: 1.1, rotate: -15 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black">98%</div>
                  <div className="text-xs font-bold opacity-90">
                    Success Rate
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section ref={statsRef} className="py-32">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
              IMPACT
              <span className="bg-gradient-to-r from-[#CDEA68] to-emerald-500 bg-clip-text text-transparent">
                {' '}
                METRICS
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Quantifiable results that redefine industry standards and showcase
              our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 100 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -20, scale: 1.05 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
              >
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-8 border border-zinc-800 hover:border-[#CDEA68]/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative space-y-6 text-center">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                    >
                      {React.createElement(stat.icon, {
                        className: 'w-8 h-8 text-white',
                      })}
                    </motion.div>

                    <div className="text-5xl font-black text-white">
                      <CounterAnimation
                        target={stat.number}
                        suffix={stat.suffix}
                      />
                    </div>

                    <div className="text-lg font-bold text-[#CDEA68]">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#CDEA68] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section ref={servicesRef} className="py-32">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
              ELITE
              <span className="bg-gradient-to-r from-[#CDEA68] to-emerald-500 bg-clip-text text-transparent">
                {' '}
                SERVICES
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto">
              Revolutionary solutions that position you at the forefront of
              industry innovation and market leadership.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                animate={servicesInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3 }}
                whileHover={{ y: -15, scale: 1.02, rotateY: 5 }}
                onHoverStart={() => setActiveService(index)}
              >
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-10 border border-zinc-800 hover:border-[#CDEA68]/50 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden h-full">
                  {/* Dynamic Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative space-y-8">
                    {/* Icon with Animation */}
                    <motion.div
                      className="w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      style={{
                        background:
                          activeService === index
                            ? `linear-gradient(135deg, ${service.accent}, ${service.accent}aa)`
                            : '#27272a',
                      }}
                    >
                      {React.createElement(service.icon, {
                        className: 'w-10 h-10 text-white',
                      })}
                    </motion.div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg font-semibold text-[#CDEA68] mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3 + featureIndex * 0.1,
                          }}
                        >
                          <div className="w-2 h-2 bg-[#CDEA68] rounded-full" />
                          <span className="text-zinc-300 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    {/* <motion.button
                      className="group/btn w-full bg-zinc-800 text-white py-4 rounded-2xl font-bold hover:bg-[#CDEA68] hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Excellence
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-32 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.h2
              className="text-5xl lg:text-7xl font-black text-white"
              whileHover={{ scale: 1.05 }}
            >
              READY TO
              <span className="bg-gradient-to-r from-[#CDEA68] to-emerald-500 bg-clip-text text-transparent">
                {' '}
                DOMINATE?
              </span>
            </motion.h2>

            <p className="text-2xl text-zinc-400 leading-relaxed">
              Join the elite circle of industry leaders who trust us to
              architect their future. Your transformation begins with a single
              decision.
            </p>

            <motion.a
              href="https://calendar.app.google/TyHZuwgs37EGZxW38"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#CDEA68] text-black px-16 py-6 rounded-full text-xl font-black shadow-2xl overflow-hidden inline-flex items-center gap-4"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                INITIATE TRANSFORMATION
                <motion.div
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <Rocket className="w-4 h-4 text-[#CDEA68]" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
