import React, { useState } from 'react';
import { Award, Phone, Mail, MapPin, ShieldCheck, ChevronRight, FileText, X, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO, MANDATORY_DISCLOSURE_DOCS } from '../data/schoolData';

export const Footer = ({ onOpenAdmissionModal }) => {
  const [disclosureModalOpen, setDisclosureModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-blue-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Institutional Identity & CBSE Accreditation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-md flex items-center justify-center shrink-0 ring-2 ring-blue-500/50 overflow-hidden">
                <img
                  src="/assets/rv_logo.svg"
                  alt="RV Public School Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold font-serif text-white tracking-tight">
                  R.V. Public School
                </h3>
                <div className="text-xs text-sky-400 font-semibold">Agra, Uttar Pradesh • Estd. 2012</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An English-medium, co-educational Senior Secondary institution (10+2) permanently affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Sprawling 8-acre campus dedicated to moral integrity, athletic champions, and academic excellence.
            </p>

            {/* Accreditation Badges */}
            <div className="p-3.5 rounded-2xl bg-blue-950/50 border border-blue-800/60 text-xs space-y-1.5 max-w-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-medium">CBSE Affiliation No:</span>
                <span className="font-bold text-sky-300">{SCHOOL_INFO.affiliationNumber}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-medium">CBSE School Code:</span>
                <span className="font-bold text-sky-300">{SCHOOL_INFO.schoolCode}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-medium">Governing Society:</span>
                <span className="font-bold text-slate-200">{SCHOOL_INFO.governingBody}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-serif">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {[
                { name: 'About School & Founders', id: 'about' },
                { name: 'Academics & CBSE Streams', id: 'academics' },
                { name: 'Board Examination Toppers', id: 'toppers' },
                { name: 'Campus Facilities & Transportation', id: 'facilities' },
                { name: 'Co-Curricular & Student Life', id: 'activities' },
                { name: 'Campus Photo Gallery', id: 'gallery' },
                { name: 'Admission Guidelines 2026–27', id: 'admissions' },
                { name: 'Campus Location & Contact', id: 'contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-500" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Stages & Streams (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-serif">
              Curriculum
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Pre-Primary (Nursery – UKG)</li>
              <li>Primary (Class I – V)</li>
              <li>Middle (Class VI – VIII)</li>
              <li>Secondary (Class IX – X)</li>
              <li className="pt-2 text-slate-300 font-semibold">Senior Secondary (10+2):</li>
              <li className="pl-2 border-l border-blue-600/40 text-slate-400">• Science (PCM & PCB)</li>
              <li className="pl-2 border-l border-blue-600/40 text-slate-400">• Commerce Stream</li>
              <li className="pl-2 border-l border-blue-600/40 text-slate-400">• Humanities / Arts</li>
            </ul>
          </div>

          {/* Col 4: Contact & Statutory Disclosure (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-serif">
              Campus Helpline
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}, {SCHOOL_INFO.landmark}, {SCHOOL_INFO.city} – {SCHOOL_INFO.pincode}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white font-bold">
                  {SCHOOL_INFO.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            {/* Mandatory Disclosure Trigger Button */}
            <div className="pt-2">
              <button
                onClick={() => setDisclosureModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-900/60 hover:bg-blue-800 border border-blue-700 text-sky-200 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>CBSE Mandatory Disclosures</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} R.V. Public School, Agra. All rights reserved. Affiliated with CBSE, New Delhi (Affiliation No: 2131798).
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>CBSE School Code: 60756</span>
            <span>•</span>
            <span>Garhi Thakur Das, Rohta, Gwalior Road, Agra</span>
          </div>
        </div>
      </div>

      {/* Mandatory Disclosure Modal */}
      {disclosureModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setDisclosureModalOpen(false)}
        >
          <div
            className="bg-white text-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-blue-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-blue-100">
              <div>
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                  Statutory Transparency
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  CBSE Mandatory Public Disclosure
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  In compliance with Appendix IX of CBSE Affiliation Bye-Laws
                </p>
              </div>

              <button
                onClick={() => setDisclosureModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-6 space-y-3">
              {MANDATORY_DISCLOSURE_DOCS.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase text-blue-700 block">
                      {doc.category}
                    </span>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{doc.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Authority: {doc.issuedBy}</div>
                  </div>

                  <div className="text-right sm:text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {doc.validity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Hardcopies are available for physical inspection at the school administrative desk.</span>
              <button
                onClick={() => setDisclosureModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
