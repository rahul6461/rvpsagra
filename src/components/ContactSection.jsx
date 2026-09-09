import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Bus } from 'lucide-react';
import { SCHOOL_INFO, BUS_ROUTES } from '../data/schoolData';

export const ContactSection = () => {
  const [msgForm, setMsgForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Visit & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Visit Our Sprawling 8-Acre Agra Campus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Conveniently situated in Rohta along Gwalior Road in Southern Agra. We warmly invite parents for a personal guided campus tour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Campus Location
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                R.V. Public School
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {SCHOOL_INFO.address}, {SCHOOL_INFO.landmark}, {SCHOOL_INFO.city}, {SCHOOL_INFO.state} – {SCHOOL_INFO.pincode}
              </p>
              <div className="mt-3 text-xs font-semibold text-blue-800 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                Landmark: Near Rohta Chauraha, Gwalior Highway Corridor
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500 block">
                    Admissions & Information Desk
                  </span>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    <a href={`tel:${SCHOOL_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-blue-700">
                      {SCHOOL_INFO.primaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-slate-600">
                    Alternate: <a href={`tel:${SCHOOL_INFO.alternatePhone.replace(/\s+/g, '')}`} className="hover:text-blue-700 font-semibold">{SCHOOL_INFO.alternatePhone}</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500 block">
                    Official Email Communications
                  </span>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="text-sm font-semibold text-blue-700 hover:underline">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500 block">
                    School & Administrative Hours
                  </span>
                  <div className="text-xs text-slate-700 mt-0.5 font-medium">
                    Classes: {SCHOOL_INFO.timings.school}
                  </div>
                  <div className="text-xs text-slate-700 font-medium">
                    Office: {SCHOOL_INFO.timings.office}
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Helpline Box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0">
                <Bus className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase text-blue-900 block">
                  Safe GPS Bus Fleet Helpdesk
                </span>
                <span className="text-xs text-slate-600">
                  Route coordination & live vehicle status: <strong className="text-blue-900">{SCHOOL_INFO.primaryPhone}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Message Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Maps Container */}
            <div className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-sm">
              <div className="p-4 bg-slate-50 border-b border-blue-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Campus Location on Map (Agra, UP)</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Rohta+Gwalior+Road+Agra"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-700 hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="h-72 w-full bg-slate-200 relative">
                <iframe
                  title="R.V. Public School Agra Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113655.43890250917!2d77.92525143329718!3d27.108098042578586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740b2a7593c783%3A0x24ffc965c71a3e62!2sRohta%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Quick Campus Message Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Direct Correspondence
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">
                Send a Message to the Principal / Administrative Office
              </h3>

              {submitted ? (
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-blue-700 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-blue-950 font-serif">Message Received</h4>
                  <p className="text-xs text-slate-600 mt-1 mb-4">
                    Thank you, <strong>{msgForm.name}</strong>. The administrative desk has logged your inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs hover:bg-blue-800 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={msgForm.name}
                        onChange={(e) => setMsgForm({ ...msgForm, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={msgForm.phone}
                        onChange={(e) => setMsgForm({ ...msgForm, phone: e.target.value })}
                        placeholder="10-Digit Mobile"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={msgForm.email}
                        onChange={(e) => setMsgForm({ ...msgForm, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject of Inquiry</label>
                      <input
                        type="text"
                        value={msgForm.subject}
                        onChange={(e) => setMsgForm({ ...msgForm, subject: e.target.value })}
                        placeholder="e.g. Bus Routes, Fee Structure, Transfer"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Query *</label>
                    <textarea
                      rows={3}
                      required
                      value={msgForm.message}
                      onChange={(e) => setMsgForm({ ...msgForm, message: e.target.value })}
                      placeholder="Please write your detailed inquiry here..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Administration</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
