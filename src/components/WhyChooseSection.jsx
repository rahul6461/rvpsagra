import React from 'react';
import {
  Award,
  BookOpen,
  Compass,
  Trophy,
  Monitor,
  Bus,
  CheckCircle2,
  FlaskConical,
  ShieldCheck
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/schoolData';

export const WhyChooseSection = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-blue-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-sky-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-blue-600" />;
      case 'Bus': return <Bus className="w-5 h-5 text-blue-700" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-indigo-600" />;
      default: return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-slate-50/70 border-t border-b border-blue-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Institutional Hallmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Why Discerning Families Choose R.V. Public School
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A harmonious synthesis of rigorous academic inquiry, moral discipline, state-of-the-art sports infrastructure, and dedicated student care.
          </p>
        </div>

        {/* 8-Card Grid with White-Bluish Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`why-choose-${item.id}`}
              className="bg-white rounded-3xl p-6 border border-blue-100 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase bg-blue-50 text-blue-700 border border-blue-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-right">
                <span className="text-[11px] font-semibold text-blue-600 group-hover:underline">
                  CBSE Benchmarked •
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
