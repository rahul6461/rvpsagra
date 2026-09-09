import React from 'react';
import { Phone, Mail, Award, Clock, MapPin, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const TopBar = ({ onOpenAdmissionModal }) => {
  return (
    <div id="top-announcement-bar" className="bg-slate-900 text-slate-100 border-b border-blue-900/60 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: CBSE Accreditation Credentials */}
        <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto justify-center md:justify-start">
          <div className="flex items-center gap-1.5 text-blue-300 font-semibold shrink-0">
            <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>CBSE Affiliated (10+2)</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-300 text-[11px] shrink-0 font-medium">
            Affiliation No: <strong className="text-sky-300">{SCHOOL_INFO.affiliationNumber}</strong>
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-300 text-[11px] shrink-0 font-medium">
            School Code: <strong className="text-sky-300">{SCHOOL_INFO.schoolCode}</strong>
          </span>
        </div>

        {/* Right: Contact Hotline & Enquire CTA */}
        <div className="flex items-center gap-4 text-slate-300 text-[11px] shrink-0">
          <a
            href={`tel:${SCHOOL_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold text-white">{SCHOOL_INFO.primaryPhone}</span>
          </a>

          <span className="text-slate-600 hidden lg:inline">•</span>

          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>{SCHOOL_INFO.email}</span>
          </a>

          <button
            onClick={onOpenAdmissionModal}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition-colors cursor-pointer shadow-sm ml-1"
          >
            <Sparkles className="w-3 h-3 text-sky-200" />
            <span>Enquire Online</span>
          </button>
        </div>
      </div>
    </div>
  );
};
