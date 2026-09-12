import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, User, Send, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const AdmissionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    grade: 'Nursery',
    locality: '',
    needsBus: 'yes'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={handleResetAndClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-blue-200 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white p-0.5 shadow-sm border border-blue-200 shrink-0 overflow-hidden">
              <img
                src="/assets/rv_logo.svg"
                alt="RV Public School Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>Admissions 2026–27</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                Admission Enquiry Desk
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                CBSE Affiliated Senior Secondary (10+2) • Agra
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="py-8 text-center animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-blue-950 font-serif mb-2">
              Enquiry Successfully Registered!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mb-6">
              Thank you, <strong>{formData.parentName}</strong>. Our admissions counselor will contact you at <strong>{formData.phone}</strong> shortly to discuss curriculum and arrange your campus tour.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl bg-blue-700 text-white font-bold text-xs hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-3.5">
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
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Primary WhatsApp / Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-Digit Mobile"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Child's Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  placeholder="Student Name"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seeking Grade *
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden bg-white"
                >
                  <option value="Nursery">Nursery / Playgroup</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="Class I">Class I</option>
                  <option value="Class II - V">Class II – V</option>
                  <option value="Class VI - VIII">Class VI – VIII</option>
                  <option value="Class IX">Class IX</option>
                  <option value="Class X">Class X</option>
                  <option value="Class XI Science">Class XI — Science (PCM/PCB)</option>
                  <option value="Class XI Commerce">Class XI — Commerce</option>
                  <option value="Class XI Humanities">Class XI — Humanities</option>
                  <option value="Class XII">Class XII (All Streams)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Residential Area in Agra
                </label>
                <input
                  type="text"
                  value={formData.locality}
                  onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                  placeholder="e.g. Rohta, Sevla, Gwalior Road"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Good City Transportation Network?
                </label>
                <select
                  value={formData.needsBus}
                  onChange={(e) => setFormData({ ...formData, needsBus: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden bg-white"
                >
                  <option value="yes">Yes — Bus Needed</option>
                  <option value="no">No — Self Pick & Drop</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Admission Enquiry</span>
            </button>
          </form>
        )}

        <div className="pt-3 border-t border-slate-100 text-center">
          <span className="text-[11px] text-slate-500">
            Helpline: <strong className="text-blue-900">{SCHOOL_INFO.primaryPhone}</strong> (Mon–Sat: 8 AM – 3:30 PM)
          </span>
        </div>
      </div>
    </div>
  );
};
