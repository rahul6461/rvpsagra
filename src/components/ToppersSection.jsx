import React, { useState } from 'react';
import { Award, Trophy, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { TOPPER_STUDENTS, SUBJECT_CENTURY_SCORERS } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

export const ToppersSection = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredToppers = TOPPER_STUDENTS.filter((student) => {
    if (filter === 'ALL') return true;
    return student.classGrade === filter;
  });

  return (
    <section id="toppers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Hall of Academic Honor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            CBSE Board Examination Toppers & Accolades
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Celebrating the academic brilliance, relentless perseverance, and sterling accomplishments of our CBSE Class XII & X scholars.
          </p>

          {/* Filter tabs */}
          <div className="mt-8 inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'ALL'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              All Achievers
            </button>
            <button
              onClick={() => setFilter('XII')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'XII'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              Class XII Stream Toppers
            </button>
            <button
              onClick={() => setFilter('X')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === 'X'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              Class X Board High Achievers
            </button>
          </div>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredToppers.map((topper) => (
            <div
              key={topper.id}
              id={`topper-card-${topper.id}`}
              className="bg-white rounded-3xl p-6 border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-700 text-white shadow-xs">
                    {topper.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{topper.year}</span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-blue-100 shadow-md shrink-0 bg-slate-200">
                    <ImageWithFallback
                      src={topper.avatarUrl}
                      alt={topper.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif group-hover:text-blue-700 transition-colors">
                      {topper.name}
                    </h3>
                    <div className="text-xs font-semibold text-blue-700 mt-0.5">{topper.stream}</div>
                    <div className="flex items-center gap-1 text-amber-500 mt-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-slate-700">Class {topper.classGrade} Ranker</span>
                    </div>
                  </div>
                </div>

                {/* Score badge */}
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between mb-4 shadow-2xs">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Aggregate</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 font-serif">
                      {topper.percentage}%
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 text-amber-500 flex items-center justify-center shadow-xs">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{topper.highlightText}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Private Coaching • In-House Remedial Scholar</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Subject Century Scorers (100 / 100 Marks) with White-Bluish Palette */}
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-blue-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-blue-800/80">
            <div>
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Perfect Century Honors (100% Score)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                CBSE Board 100/100 Subject Centum Scorers
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-blue-100 max-w-md">
              Achieving a flawless 100/100 mark in the CBSE Board examination requires impeccable conceptual precision and rigorous answer presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SUBJECT_CENTURY_SCORERS.map((scorer) => (
              <div
                key={scorer.id}
                className="bg-blue-900/60 rounded-2xl p-5 border border-blue-700/60 hover:border-sky-400/70 transition-all flex items-center justify-between backdrop-blur-xs"
              >
                <div>
                  <h4 className="font-bold text-white text-base font-serif">{scorer.studentName}</h4>
                  <div className="text-xs text-sky-200 font-medium mt-0.5">{scorer.subject}</div>
                  <div className="text-[11px] text-blue-300 mt-1">{scorer.year}</div>
                </div>

                <div className="text-right">
                  <div className="inline-block px-3 py-1.5 rounded-xl bg-sky-400 text-slate-950 font-extrabold text-sm shadow-md">
                    {scorer.score}
                  </div>
                  <div className="text-[10px] text-emerald-300 font-bold uppercase mt-1">Centum Score</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
