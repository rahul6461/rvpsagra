import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS_DATA, SCHOOL_INFO } from '../data/schoolData';

export const FaqSection = ({ onOpenAdmissionModal }) => {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Answers for Prospective Parents
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Clear, honest answers regarding admissions, CBSE curriculum, bus transport routes, and academic policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/50 border-blue-300 shadow-sm'
                    : 'bg-white border-blue-100 hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded-md">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/70 border border-blue-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 font-serif">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Our admissions desk is available from 8:00 AM to 3:30 PM.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SCHOOL_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-xl bg-white border border-blue-200 text-blue-700 hover:bg-blue-50 font-bold text-xs transition-colors shadow-2xs"
            >
              Call {SCHOOL_INFO.primaryPhone}
            </a>
            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2.5 rounded-xl bg-blue-700 text-white hover:bg-blue-800 font-bold text-xs transition-colors cursor-pointer shadow-sm"
            >
              Enquire Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
