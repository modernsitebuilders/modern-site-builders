'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Globe, Smartphone, TrendingUp, Users, Mail, Phone, MapPin, ArrowRight, Check, Menu, X } from 'lucide-react';

const ModernSiteBuilders = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Business Websites",
      description: "Professional websites that get local businesses found online and convert visitors into customers.",
      features: ["Mobile-responsive design", "Local SEO optimization", "Contact forms & booking", "Google My Business integration"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Portfolios",
      description: "Stand out from the crowd with a personal website that showcases your expertise and attracts opportunities.",
      features: ["Personal branding", "Portfolio showcase", "Resume integration", "LinkedIn optimization"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO & Growth",
      description: "Get found on Google with search engine optimization that drives real results for your business.",
      features: ["Keyword research", "Local search optimization", "Performance tracking", "Monthly reporting"]
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here - you can integrate with your preferred form service
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Modern Site Builders</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-3 pt-4">
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-600 py-2">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-blue-600 py-2">Portfolio</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-blue-600 py-2">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors w-fit">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Websites That Get You 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Found & Hired</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional websites for local businesses and working professionals who want to stand out, get discovered, and win more opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                Get Your Website Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services That Drive Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a local business or working professional, I create websites that help you get found, build trust, and win more opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of modern, professional websites built with cutting-edge technology and optimized for performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* StreamBackdrops */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                <Smartphone className="w-12 h-12 text-purple-600 z-10" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  LIVE
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">StreamBackdrops</h3>
                <p className="text-gray-600 mb-4">Virtual backgrounds platform fully optimized for streamers and content creators with seamless performance.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">Next.js • React • Vercel</span>
                  <a 
                    href="https://streambackdrops.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium"
                  >
                    View Live <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Italian Restaurant Demo */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20"></div>
                <Users className="w-12 h-12 text-red-600 z-10" />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  DEMO
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bella Vista Restaurant</h3>
                <p className="text-gray-600 mb-4">Modern restaurant website with online menu, reservations, and local SEO optimization for authentic Italian dining.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">WordPress • Local SEO</span>
                  <span className="text-gray-500 text-sm">Demo Project</span>
                </div>
              </div>
            </div>

            {/* Personal Portfolio Demo */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
                <TrendingUp className="w-12 h-12 text-green-600 z-10" />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  DEMO
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Portfolio</h3>
                <p className="text-gray-600 mb-4">Personal branding website for career advancement with resume integration and LinkedIn optimization.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-medium">React • Personal Brand</span>
                  <span className="text-gray-500 text-sm">Demo Project</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ready to build something similar for your business or career?</p>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* About Section with Profile */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img 
                src="/profile_pic-1.png" 
                alt="David Miles - Professional Web Developer" 
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm David Miles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Professional WordPress developer helping local businesses get found online with mobile-friendly websites that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WordPress Expert</h3>
              <p className="text-gray-600">Specialized in creating professional WordPress websites that drive real business results.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Focus</h3>
              <p className="text-gray-600">Understanding local business needs and helping you connect with customers in your area.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Results Driven</h3>
              <p className="text-gray-600">Every website is built with one goal: helping you get found online and grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how a professional website can help grow your business or advance your career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">david@modernsitebuilders.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Local businesses & remote professionals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Business Website</option>
                    <option>Professional Portfolio</option>
                    <option>SEO Services</option>
                    <option>Website Redesign</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logo1.png" 
              alt="Modern Site Builders Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="ml-3 text-xl font-bold">Modern Site Builders</span>
          </div>
          <p className="text-gray-400 mb-4">
            Professional websites for local businesses and working professionals.
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Modern Site Builders. Built by David Miles.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernSiteBuilders;