import React from 'react';
import { MessageSquare, Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

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
          {TESTIMONIALS.map((item) => (
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
                <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-blue-100 shrink-0 bg-slate-200">
                  <ImageWithFallback
                    src={item.avatarUrl}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base font-serif group-hover:text-blue-700 transition-colors">
                    {item.author}
                  </h4>
                  <div className="text-xs font-semibold text-blue-700">{item.role}</div>
                  <div className="text-[11px] text-slate-500">{item.wardGrade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
