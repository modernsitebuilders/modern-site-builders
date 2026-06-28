'use client'

import React, { useState, useEffect } from 'react';
import { Globe, TrendingUp, Wrench, Mail, ArrowRight, Menu, X } from 'lucide-react';

const ModernSiteBuilders = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const principles = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Utility over fluff",
      description: "I build interactive tools and calculators people actually search for and use — not brochure sites. Useful beats clever."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Built in public",
      description: "Every project gets a build log: what I tried, what ranked, what flopped, and the numbers behind it. The setbacks are part of the story."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Independent & operated",
      description: "These are my own businesses, run for the long term — not client work. The goal is durable, useful sites that compound over time."
    }
  ];

  const portfolio = [
    {
      title: "RemodelCalculators",
      description: "A 40+ construction calculator suite covering drywall, concrete, paint, roofing, flooring, and more — with Pro tools for contractors.",
      tech: "Next.js • React • Pro Plans",
      image: "/Screenshot-remodelcalculators.jpg",
      url: "https://remodelcalculators.com",
      eventLabel: "remodelcalculators_live"
    },
    {
      title: "RightDumpster",
      description: "The honest guide to renting a dumpster — sizes, costs, permits, and city-specific rules with a weight-aware sizing calculator and no spam calls.",
      tech: "Next.js • React • Local SEO",
      image: "/Screenshot-rightdumpster.jpg",
      url: "https://rightdumpster.com",
      eventLabel: "rightdumpster_live"
    },
    {
      title: "MeetBackdrops",
      description: "Virtual set design studio offering studio-quality 4K backgrounds for Zoom, Teams, and Google Meet — designed as cohesive sets, not stock photos.",
      tech: "Next.js • React • E-commerce",
      image: "/Screenshot-meetbackdrops.jpg",
      url: "https://meetbackdrops.com",
      eventLabel: "meetbackdrops_live"
    },
    {
      title: "WolfResume",
      description: "AI-powered resume generator engineered for ATS parsing and recruiter-ready structure — not a template builder, not raw ChatGPT.",
      tech: "Next.js • React • AI",
      image: "/Screenshot-wolfresume.jpg",
      url: "https://wolfresume.com",
      eventLabel: "wolfresume_live"
    },
    {
      title: "PromptDynamo",
      description: "Done-for-you AI prompt packs built for working professionals. Instant download, Stripe checkout, and zero account friction.",
      tech: "Next.js • React • Stripe",
      image: "/Screenshot-promptdynamo.jpg",
      url: "https://promptdynamo.com",
      eventLabel: "promptdynamo_live"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/logo1.png"
                alt="Modern Site Builders Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">Modern Site Builders</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <a href="/blog/" className="text-gray-700 hover:text-blue-600 transition-colors">Build Logs</a>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
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
                <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-blue-600 py-2">Projects</button>
                <a href="/blog/" className="text-left text-gray-700 hover:text-blue-600 py-2">Build Logs</a>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 py-2">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 py-2">Contact</button>
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
              Building useful internet businesses
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> in public</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm David Miles. I design, build, and operate a small portfolio of production websites and interactive tools — and I write about what's working, what isn't, and what I'm learning along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
              >
                See the projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a
                href="/blog/"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Read the build logs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I'm building, and why</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most people have one project. I have a portfolio — a growing set of niche, useful sites I run as independent businesses. Here's the thinking behind them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-blue-600 mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five live properties, each built and operated independently. Every one has a build log telling the real story behind it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group flex flex-col">
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img
                    src={project.image}
                    alt={`${project.title} Website Screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    LIVE
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-blue-600 font-medium">{project.tech}</span>
                    <a
                      href={project.url}
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'portfolio_click', {
                            event_category: 'engagement',
                            event_label: project.eventLabel,
                            value: 10
                          });
                        }
                        window.open(project.url, '_blank', 'noopener,noreferrer');
                      }}
                      className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm font-medium whitespace-nowrap"
                    >
                      View Live <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/blog/"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow text-lg"
            >
              Read the build logs
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Profile */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img
                src="/profile_pic-1.png"
                alt="David Miles — independent web builder and operator"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hi, I'm David Miles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              I build and operate niche websites and interactive tools as my own businesses. No clients, no agency — just a portfolio of useful sites I grow over the long term, and an open record of how it's going.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              The first stretch of any project is mostly quiet. Then a few pages reach page one, the data starts pointing somewhere, and the work compounds. I document that whole arc here — the experiments, the numbers, and the lessons — so the wins and the dead ends are both on the record.
            </p>
            <a
              href="/author/david-miles"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              More about David
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern stack</h3>
              <p className="text-gray-600">Next.js, React, and Tailwind — fast, mobile-first builds on the same stack used by today's top web products.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools, not brochures</h3>
              <p className="text-gray-600">Calculators and interactive tools that answer a real question on the spot — the kind of utility that earns search traffic and trust.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent & data-driven</h3>
              <p className="text-gray-600">Real numbers, real timelines, real setbacks. Every project's build log shows what actually moved the needle — and what didn't.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h2>
          <p className="text-xl text-gray-600 mb-10">
            Open to partnerships, collaborations, and comparing notes with other builders. The best way to reach me is email.
          </p>

          <a
            href="mailto:dave@modernsitebuilders.com"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'email_click', {
                  event_category: 'engagement',
                  event_label: 'contact_email',
                  value: 50
                });
              }
            }}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
          >
            <Mail className="w-5 h-5 mr-3" />
            dave@modernsitebuilders.com
          </a>
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
            Building and operating useful internet businesses in public.
          </p>
          <p className="text-gray-500 text-sm mb-2">
            © 2026 Modern Site Builders. Built by David Miles.
          </p>
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white text-sm transition-colors inline-block"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ModernSiteBuilders;
