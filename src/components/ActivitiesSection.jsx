import React from 'react';
import { Trophy, Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SCHOOL_ACTIVITIES } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

export const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-blue-600" />
            <span>Co-Curricular & Student Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Holistic Student Life & Extracurriculars
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Education that extends beyond textbooks into athletic championships, cultural celebrations, debates, science fairs, and national parades on our 8-acre campus.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOOL_ACTIVITIES.map((act) => (
            <div
              key={act.id}
              id={`activity-card-${act.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="h-52 w-full overflow-hidden relative bg-slate-200">
                  <ImageWithFallback
                    src={act.imageUrl}
                    alt={act.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-blue-900 backdrop-blur-xs shadow-xs">
                    {act.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-950/80 text-white backdrop-blur-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    <span>{act.dateOrFrequency}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      {act.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>

              <div className="px-6 py-3 bg-blue-50/40 border-t border-blue-100/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  Mentored by Faculty
                </span>
                <span className="text-xs font-bold text-blue-700 flex items-center gap-1">
                  <span>Campus Event</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
