import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWidgets = ({ onOpenAdmissionModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = SCHOOL_INFO.whatsappNumber || '7455957545';
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
    'Hello, I would like to inquire about admissions at R.V. Public School, Agra.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      <div className="flex flex-col gap-2.5 pointer-events-auto">
        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-white text-slate-700 hover:text-blue-700 shadow-lg border border-blue-100 flex items-center justify-center hover:bg-blue-50 transition-all cursor-pointer group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Admissions Desk"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer ring-4 ring-[#25D366]/20"
        >
          <MessageSquare className="w-6 h-6 fill-white text-white" />
        </a>

        {/* Phone Call Floating Button */}
        <a
          href={`tel:${SCHOOL_INFO.primaryPhone.replace(/\s+/g, '')}`}
          aria-label="Direct Phone Call"
          className="w-12 h-12 rounded-full bg-blue-700 text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer ring-4 ring-blue-700/20"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
