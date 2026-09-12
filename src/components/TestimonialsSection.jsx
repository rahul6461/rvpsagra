import React from 'react';
import { MessageSquare, Star, Quote, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/70 border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Community Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Words of Trust from Parents & Alumni
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            For over 14 years, families across Agra have placed their trust in our holistic values, academic dedication, and safe environment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => {
            const isFemale = item.gender === 'female';
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-blue-200" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                  {/* Clean vector figure indicator (Male / Female) */}
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 shadow-xs ${
                      isFemale
                        ? 'bg-gradient-to-br from-rose-50 to-pink-100/70 border-rose-200 text-rose-600'
                        : 'bg-gradient-to-br from-blue-50 to-sky-100/70 border-blue-200 text-blue-700'
                    }`}
                    title={isFemale ? 'Female Parent / Reviewer' : 'Male Parent / Reviewer'}
                  >
                    {isFemale ? (
                      /* Minimalist Female Figure */
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="7" r="3.75" />
                        <path d="M6 21v-3a4.5 4.5 0 0 1 4.5-4.5h3A4.5 4.5 0 0 1 18 18v3H6z" opacity="0.85" />
                        <path d="M12 13.5l2 3h-4l2-3z" fill="#f43f5e" opacity="0.4" />
                      </svg>
                    ) : (
                      /* Minimalist Male Figure */
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="7" r="3.75" />
                        <path d="M6.5 21v-3.5a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4V21H6.5z" opacity="0.85" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base font-serif group-hover:text-blue-700 transition-colors">
                        {item.author}
                      </h4>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          isFemale
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                      >
                        {isFemale ? 'Female' : 'Male'} • {item.genderLabel || 'Parent'}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-blue-700 mt-0.5">{item.role}</div>
                    <div className="text-[11px] text-slate-500">{item.wardGrade}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
