import React from 'react';
import { Building2, MapPin, Calendar, Sparkles, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { CAMPUS_BUILDING_INFO, SCHOOL_INFO } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

export const CampusBuildingSection = ({ onOpenAdmissionModal }) => {
  return (
    <section id="campus-building" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Campus & Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Our School Campus & Modern Learning Environment
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A serene, 8-acre eco-friendly campus thoughtfully designed for academic rigor, athletics, and character development in Southern Agra.
          </p>
        </div>

        {/* Feature Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left 7 cols: School Building Image with Badges */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] overflow-hidden group">
              <ImageWithFallback
                src="/assets/photos/campus_building.jpeg"
                alt="R V Public School Building Campus"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-between p-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold shadow-md backdrop-blur-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Estd. 24 May 2012</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-bold shadow-md backdrop-blur-xs">
                    <Award className="w-3.5 h-3.5" />
                    <span>8-Acre Green Campus</span>
                  </span>
                </div>

                <div className="text-white">
                  <div className="flex items-center gap-2 text-sky-300 text-xs sm:text-sm font-semibold mb-1">
                    <MapPin className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>Garhi Thakur Das, Gwalior Road, Agra</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight">
                    R V Public School Campus Building
                  </h3>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Official Description & Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Educational Excellence</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mb-4">
                  Dedicated to Holistic Student Growth
                </h3>

                {/* User Requested Exact Description */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify font-normal bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
                  {CAMPUS_BUILDING_INFO.description}
                </p>

                {/* Campus Highlights */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <div className="text-xs font-bold text-blue-900 font-serif">Opening Date</div>
                    <div className="text-xs text-blue-700 font-semibold mt-0.5">24 May 2012</div>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <div className="text-xs font-bold text-blue-900 font-serif">Location</div>
                    <div className="text-xs text-blue-700 font-semibold mt-0.5">Garhi Thakur Das, Agra</div>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <div className="text-xs font-bold text-blue-900 font-serif">Learning Environment</div>
                    <div className="text-xs text-blue-700 font-semibold mt-0.5">Safe & Supportive</div>
                  </div>
                  <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                    <div className="text-xs font-bold text-blue-900 font-serif">Connectivity</div>
                    <div className="text-xs text-blue-700 font-semibold mt-0.5">City-Wide Transit</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onOpenAdmissionModal && (
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenAdmissionModal}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 text-white text-sm font-bold hover:bg-blue-800 transition-colors shadow-md cursor-pointer"
                  >
                    <span>Schedule Campus Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
