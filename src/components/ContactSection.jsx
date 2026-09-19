import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Bus, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO, BUS_ROUTES } from '../data/schoolData';
import { openWhatsApp } from '../utils/whatsapp';

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

    const text = `*New Contact Message — R.V. Public School, Agra*
----------------------------------------
*From:* ${msgForm.name}
*Phone:* ${msgForm.phone}
*Email:* ${msgForm.email || 'Not provided'}
*Subject:* ${msgForm.subject || 'General Inquiry'}
*Message:*
${msgForm.message}
----------------------------------------
_Sent via RVPS Website Contact Form_`;

    openWhatsApp(text);
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
                  Smooth Transportation Network Helpdesk
                </span>
                <span className="text-xs text-slate-600">
                  Good connectivity network over the city: <strong className="text-blue-900">{SCHOOL_INFO.primaryPhone}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps & Message Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Maps Container */}
            <div className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-sm">
              <div className="p-4 bg-slate-50 border-b border-blue-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>RV Public School Campus Location & Street View (Agra)</span>
                </span>
                <a
                  href="https://www.google.com/maps/place/RV+Public+School/@27.0906396,78.0161034,3a,75y,296.82h,90t/data=!3m7!1e1!3m5!1swOVoH8_1sze_P8H02JeRsw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DwOVoH8_1sze_P8H02JeRsw%26yaw%3D296.82178!7i16384!8i8192!4m14!1m7!3m6!1s0x39747479a50ca7bd:0x1a7c00b74e32a03c!2sRV+Public+School!8m2!3d27.0907405!4d78.0158787!16s%2Fg%2F11c5rsq1dz!3m5!1s0x39747479a50ca7bd:0x1a7c00b74e32a03c!8m2!3d27.0907405!4d78.0158787!16s%2Fg%2F11c5rsq1dz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open 360° Street View & Directions</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="h-80 w-full bg-slate-200 relative">
                <iframe
                  title="RV Public School Campus Map & Street View"
                  src="https://maps.google.com/maps?q=27.0907405,78.0158787+(RV+Public+School)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 bg-blue-50/70 border-t border-blue-100 flex items-center justify-between text-[11px] text-blue-900">
                <span>📍 Coordinates: 27.0907405° N, 78.0158787° E • Rohta, Gwalior Road</span>
                <a
                  href="https://www.google.com/maps/place/RV+Public+School/@27.0906396,78.0161034,3a,75y,296.82h,90t/data=!3m7!1e1!3m5!1swOVoH8_1sze_P8H02JeRsw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DwOVoH8_1sze_P8H02JeRsw%26yaw%3D296.82178!7i16384!8i8192!4m14!1m7!3m6!1s0x39747479a50ca7bd:0x1a7c00b74e32a03c!2sRV+Public+School!8m2!3d27.0907405!4d78.0158787!16s%2Fg%2F11c5rsq1dz!3m5!1s0x39747479a50ca7bd:0x1a7c00b74e32a03c!8m2!3d27.0907405!4d78.0158787!16s%2Fg%2F11c5rsq1dz"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-blue-700 hover:underline"
                >
                  View Gate Street View ↗
                </a>
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
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-blue-950 font-serif">Message Sent to WhatsApp</h4>
                  <p className="text-xs text-slate-600 mt-1 mb-4">
                    Thank you, <strong>{msgForm.name}</strong>. Your message was forwarded directly to the school administrative WhatsApp desk.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        const text = `*Inquiry Follow-up:*
From: ${msgForm.name}
Phone: ${msgForm.phone}
Subject: ${msgForm.subject || 'School Inquiry'}`;
                        openWhatsApp(text);
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Open WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
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
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Send Message via WhatsApp</span>
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
