import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Phone, Mail, User, BookOpen, Send, Calendar, Clock, MapPin } from 'lucide-react';
import { ADMISSION_STEPS, AGE_CRITERIA_TABLE, SCHOOL_INFO } from '../data/schoolData';

export const AdmissionSection = ({ onOpenAdmissionModal }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    seekingGrade: 'Nursery',
    streamChoice: 'Science (PCM/PCB)',
    locality: '',
    needsTransport: 'yes',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Admissions 2026–27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Enrollment & Admission Pathway
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A transparent, child-centric admission process welcoming scholars from Pre-Primary (Nursery) through Senior Secondary (Class XII).
          </p>
        </div>

        {/* 4-Step Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ADMISSION_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-3xl p-6 border border-blue-100 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-700 text-white font-serif font-extrabold flex items-center justify-center text-base shadow-sm">
                    0{step.stepNumber}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                {step.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column: Age Eligibility Table & Direct Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Age Eligibility & Document Checklist (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-blue-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
                Age Eligibility Criteria (Session 2026–2027)
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">
                Class Readiness & Age Norms
              </h3>

              <div className="divide-y divide-slate-200 text-xs">
                {AGE_CRITERIA_TABLE.map((row, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="font-bold text-slate-800">{row.grade}</span>
                    <span className="text-slate-600 text-right">{row.minimumAge}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                * Age calculated as on 31st March 2026 as per New Education Policy (NEP 2020) norms.
              </div>
            </div>

            <div className="bg-blue-50/60 rounded-3xl p-6 sm:p-8 border border-blue-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-2">
                Mandatory Documentation
              </span>
              <h4 className="text-lg font-bold text-blue-950 font-serif mb-3">
                Items Required During Enrollment
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Original Birth Certificate (Nursery to Class I)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Countersigned Transfer Certificate (TC) from previous school</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Previous class report card/mark sheet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Copy of Student & Parents' Aadhaar Cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>4 Recent passport-sized color photographs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Direct Admission Application Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border-2 border-blue-200 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Direct Registration Desk
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-serif">
                Submit Online Admission Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our admissions counselor will review your submission and connect with you within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-200 text-center animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-blue-950 font-serif mb-2">
                  Enquiry Successfully Registered!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.parentName}</strong>. Our admissions officer will contact you at <strong>{formData.phone}</strong> to guide you through registration and schedule your campus visit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-700 text-white font-bold text-xs hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Full Name"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Contact Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-Digit Mobile"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Student / Ward Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="Student's Name"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seeking Admission in Grade *
                    </label>
                    <select
                      value={formData.seekingGrade}
                      onChange={(e) => setFormData({ ...formData, seekingGrade: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden bg-white"
                    >
                      <option value="Nursery">Nursery / Playgroup</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II to V">Class II – V (Primary)</option>
                      <option value="Class VI to VIII">Class VI – VIII (Middle)</option>
                      <option value="Class IX">Class IX (Secondary)</option>
                      <option value="Class X">Class X (CBSE Board)</option>
                      <option value="Class XI">Class XI (Senior Secondary)</option>
                      <option value="Class XII">Class XII (CBSE Board)</option>
                    </select>
                  </div>
                </div>

                {formData.seekingGrade.includes('XI') && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Senior Secondary Stream
                    </label>
                    <select
                      value={formData.streamChoice}
                      onChange={(e) => setFormData({ ...formData, streamChoice: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden bg-white"
                    >
                      <option value="Science (PCM)">Science Stream (Physics, Chem, Math + CS)</option>
                      <option value="Science (PCB)">Science Stream (Physics, Chem, Biology / NEET)</option>
                      <option value="Commerce">Commerce Stream (Accounts, Business, Economics)</option>
                      <option value="Humanities">Humanities (History, Pol. Science, Economics)</option>
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Residential Locality in Agra
                    </label>
                    <input
                      type="text"
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      placeholder="e.g. Rohta, Sevla, Gwalior Road, Sadar"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Smooth City Transportation Network?
                    </label>
                    <select
                      value={formData.needsTransport}
                      onChange={(e) => setFormData({ ...formData, needsTransport: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden bg-white"
                    >
                      <option value="yes">Yes — Good Connectivity Bus Network Required</option>
                      <option value="no">No — Self Conveyance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Specific Questions or Remarks (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any specific questions regarding curriculum, fees, or bus routes..."
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-xs sm:text-sm outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-bold text-sm shadow-md hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
