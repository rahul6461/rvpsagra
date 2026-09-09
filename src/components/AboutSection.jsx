import React, { useState } from 'react';
import { Award, BookOpen, Quote, Sparkles, ChevronRight, X, Heart, ShieldCheck, Star } from 'lucide-react';
import { FOUNDERS_MEMORIAL, LEADERSHIP_MESSAGES, SCHOOL_INFO } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Group leaders so Principal & MD are in the upper part (first row), followed by Chairman & Vice Chairman
  const upperLeadership = LEADERSHIP_MESSAGES.slice(0, 2); // Principal & MD
  const governingLeadership = LEADERSHIP_MESSAGES.slice(2, 4); // Chairman & Vice Chairman

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Legacy & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Rooted in Noble Vision, Led by Educational Pioneers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Founded in 2012 under the aegis of RV Educational Trust, R.V. Public School blends time-honored Indian moral virtues with modern academic excellence on an 8-acre sprawling campus in Agra.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: FOUNDERS MEMORIAL WITH LARGE HIGH-DIGNITY PHOTOS                  */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
              <span>In Sacred & Revered Memory</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              Our Visionary Founders & Guiding Inspirations
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-1">
              Honoring the timeless philanthropic vision and enduring benevolence that brought R.V. Public School to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FOUNDERS_MEMORIAL.map((founder, idx) => (
              <div
                key={idx}
                id={`founder-memorial-${idx}`}
                className="bg-gradient-to-b from-blue-50/70 via-white to-blue-50/30 rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
              >
                {/* Large prominent portrait image matching leadership scale */}
                <div className="w-48 h-64 sm:w-52 sm:h-72 shrink-0 rounded-2xl overflow-hidden ring-4 ring-blue-100/90 shadow-lg bg-slate-200 relative">
                  <ImageWithFallback
                    src={founder.imageUrl}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 to-transparent p-3 text-center">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                      Eternal Tribute
                    </span>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="flex-1 flex flex-col justify-between text-center sm:text-left h-full">
                  <div>
                    <div className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
                      {founder.role}
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                      {founder.name}
                    </h4>

                    <div className="text-xs font-semibold text-blue-700 mt-0.5 mb-3">
                      {founder.title}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {founder.legacyText}
                    </p>
                  </div>

                  {/* Reverent Quote */}
                  <div className="p-3.5 rounded-2xl bg-white border border-blue-100 text-xs italic text-slate-700 shadow-xs">
                    <Quote className="w-4 h-4 text-blue-400 mb-1 inline mr-1" />
                    <span>{founder.quote}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: LEADERSHIP WITH PRINCIPAL & MD IN THE UPPER PART                  */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Institutional Stewards</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">
              Messages from School Leadership & Administration
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Guiding academic rigor, student welfare, and progressive pedagogy with visionary leadership.
            </p>
          </div>

          {/* Upper Row: Principal & Managing Director */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 font-serif">
                Executive & Academic Administration
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upperLeadership.map((leader) => (
                <div
                  key={leader.id}
                  id={`leadership-card-${leader.id}`}
                  className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
                      <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden ring-4 ring-blue-100 shadow-md shrink-0 bg-slate-200">
                        <ImageWithFallback
                          src={leader.imageUrl}
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center sm:text-left flex-1">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                          {leader.designation}
                        </span>

                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-2 group-hover:text-blue-700 transition-colors">
                          {leader.name}
                        </h4>

                        {leader.qualifications && (
                          <div className="text-xs font-semibold text-blue-700 mt-0.5">
                            Qualifications: {leader.qualifications}
                          </div>
                        )}

                        <div className="mt-2 text-xs font-medium text-slate-500 italic">
                          "{leader.motto}"
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4 bg-blue-50/50 p-3.5 rounded-2xl border border-blue-100">
                      "{leader.excerpt}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">R.V. Public School, Agra</span>
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Read Full Letter</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Row: Chairman & Vice Chairman */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-blue-100">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 font-serif">
                Trustees & Governing Body
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {governingLeadership.map((leader) => (
                <div
                  key={leader.id}
                  id={`leadership-card-${leader.id}`}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
                      <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl overflow-hidden ring-2 ring-blue-100 shadow-sm shrink-0 bg-slate-200">
                        <ImageWithFallback
                          src={leader.imageUrl}
                          alt={leader.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="text-center sm:text-left flex-1">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-white shadow-xs">
                          {leader.designation}
                        </span>

                        <h4 className="text-xl font-bold text-slate-900 font-serif mt-2 group-hover:text-blue-700 transition-colors">
                          {leader.name}
                        </h4>

                        <div className="mt-1 text-xs font-medium text-slate-500 italic">
                          "{leader.motto}"
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4 bg-white p-3.5 rounded-2xl border border-slate-200">
                      "{leader.excerpt}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-500">RV Educational Trust</span>
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Read Message</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Full Letter Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-blue-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-blue-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 rounded-xl overflow-hidden ring-2 ring-blue-100 shrink-0">
                  <ImageWithFallback
                    src={selectedLeader.imageUrl}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                    {selectedLeader.designation}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                    {selectedLeader.name}
                  </h3>
                  {selectedLeader.qualifications && (
                    <div className="text-xs text-slate-500 font-medium">
                      {selectedLeader.qualifications}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedLeader(null)}
                className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-slate-600 flex items-center justify-center font-bold transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-900 font-medium italic border border-blue-100">
                Motto: "{selectedLeader.motto}"
              </div>
              <p className="whitespace-pre-line">{selectedLeader.fullMessage}</p>
            </div>

            <div className="pt-4 border-t border-blue-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                R.V. Public School, Agra (CBSE 10+2)
              </span>
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-5 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
