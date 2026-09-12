import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

export const Navbar = ({ onOpenAdmissionModal, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Campus', href: '#campus-building', id: 'campus-building' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Academics', href: '#academics', id: 'academics' },
    { name: 'Toppers', href: '#toppers', id: 'toppers' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Activities', href: '#activities', id: 'activities' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Admissions', href: '#admissions', id: 'admissions' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* School Crest & Institutional Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Un-distorted School Crest Logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 shadow-sm border border-blue-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <SchoolLogo className="w-full h-full" />
            </div>

            {/* School Title & Affiliation Subtext */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-serif leading-none group-hover:text-blue-700 transition-colors">
                R.V. Public School
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-xs font-semibold text-blue-700 tracking-wide">
                  Agra, Uttar Pradesh
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                  Estd. 2012 • CBSE 10+2
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-extrabold shadow-xs'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="header-admission-cta-btn"
              onClick={onOpenAdmissionModal}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all text-xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span>Apply for Admission</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-blue-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-700'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-blue-100 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Apply for Admission</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};