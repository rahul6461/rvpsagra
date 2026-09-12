import React from 'react';
import { Award, GraduationCap, CheckCircle2, MapPin, Users } from 'lucide-react';
import { KEY_STATS } from '../data/schoolData';
import { CountUpNumber } from './CountUpNumber';

export const StatCounter = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-sky-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-blue-600" />;
      case 'Users': return <Users className="w-5 h-5 text-indigo-600" />;
      default: return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="relative z-30 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {KEY_STATS.map((stat) => (
          <div
            key={stat.id}
            id={`stat-item-${stat.id}`}
            className="flex flex-col items-center text-center p-3 rounded-2xl hover:bg-blue-50/60 transition-colors group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xs">
              {getIcon(stat.iconName)}
            </div>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-900 font-serif tracking-tight">
              <CountUpNumber
                target={stat.numericTarget || parseInt(stat.value, 10)}
                suffix={stat.suffix || ''}
                duration={2200}
              />
            </div>

            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
              {stat.label}
            </div>

            <p className="text-[11px] text-slate-500 mt-1 max-w-[170px] leading-relaxed hidden sm:block">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
