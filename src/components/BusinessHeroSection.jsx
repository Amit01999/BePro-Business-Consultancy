import React from 'react';
import heroImage from '../assets/hero-business.jpg';
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Globe,
  Sparkles,
  Target,
} from 'lucide-react';

const BusinessHeroSection = () => {
  const trustIndicators = [
    { icon: Users, text: 'Clients Served', count: '50+' },
    { icon: TrendingUp, text: 'Success Rate', count: '95%' },
    { icon: Award, text: 'Years Excellence', count: '10+' },
    { icon: Globe, text: 'Market Leader', count: 'BD' },
  ];

  const keyServices = [
    'Business Setup & Registration',
    'Legal Advisory & Compliance',
    'Tax Planning & Strategy',
    'Corporate Training',
    'IPO Strategy & Planning',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Sophisticated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-black/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-1/4 w-2 h-2 bg-black/20 rotate-45 animate-bounce"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-1 h-8 bg-black/15 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-black/10 backdrop-blur-sm rounded-full border border-black/10">
              <Sparkles className="w-4 h-4 text-black/70" />
              <span className="text-sm font-medium text-black/80">
                Your Trusted Business Partner
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight text-black">
                Your Trusted Partner in{' '}
                <span className="font-bold italic">Business Growth</span>
              </h1>

              <p className="text-xl text-black/70 leading-relaxed max-w-xl font-light">
                BePro Business Consultancy delivers tailored, reliable, and
                forward-thinking business solutions to help you succeed in
                Bangladesh's dynamic market.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-black/90 flex items-center">
                <Target className="w-5 h-5 mr-2 text-black/60" />
                What We Excel At
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {keyServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group py-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                      <CheckCircle className="w-4 h-4 text-black/70 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-black/80 group-hover:text-black transition-colors font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-black text-[#CDEA68] px-8 py-4 rounded-full text-base font-semibold hover:bg-black/90 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center">
                Start Your Growth Journey
                <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-black/20 text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-black/5 hover:border-black/40 transition-all duration-300">
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Right Side - Modern Stats Display */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Professional business consultancy services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* <div className="text-center mb-8">
                <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-black/70" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Market Leadership
                </h3>
                <p className="text-black/70">
                  Driving business excellence across Bangladesh
                </p>
              </div> */}

              {/* <div className="grid grid-cols-2 gap-6">
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="text-center space-y-3 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/10 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <indicator.icon className="w-6 h-6 text-black/70 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-black group-hover:scale-105 transition-transform">
                        {indicator.count}
                      </p>
                      <p className="text-sm text-black/70 font-medium">
                        {indicator.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Floating Achievement Cards */}
            <div
              className="absolute -top-6 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-green-600">10+</p>
                <p className="text-xs text-gray-600 font-semibold">
                  Years Excellence
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 animate-bounce"
              style={{ animationDuration: '3s', animationDelay: '1.5s' }}
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold text-blue-600">50+</p>
                <p className="text-xs text-gray-600 font-semibold">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-32 text-center space-y-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 px-6 py-2 bg-black/5 rounded-full border border-black/10">
              <span className="text-sm font-medium text-black/70">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-black leading-tight">
              Empowering businesses to grow with{' '}
              <span className="font-bold italic">clarity and confidence</span>
            </h2>

            <p className="text-xl text-black/70 leading-relaxed max-w-3xl mx-auto font-light">
              To deliver personalized, practical, and performance-driven
              consultancy services that empower businesses to thrive in
              Bangladesh's evolving marketplace.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Client-Focused */}
            <div className="group p-8 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-500 hover:transform hover:-translate-y-2">
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  Client-Focused
                </h3>
                <p className="text-black/70 leading-relaxed">
                  We prioritize your goals at every step, ensuring personalized
                  solutions that drive real results.
                </p>
              </div>
            </div>

            {/* Card 2 - Excellence */}
            <div
              className="group p-8 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  Excellence
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Maintaining the highest standards in everything we do, from
                  strategy to execution.
                </p>
              </div>
            </div>

            {/* Card 3 - Innovation */}
            <div
              className="group p-8 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  Innovation
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Embracing change and driving smart solutions for tomorrow's
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
