import React, { useState } from 'react';
import { BookOpen, CheckCircle, GraduationCap, ChevronRight, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { ACADEMIC_STAGES, STREAM_DETAILS } from '../data/schoolData';

export const AcademicsSection = () => {
  const [activeStageId, setActiveStageId] = useState('foundational');
  const [activeStreamId, setActiveStreamId] = useState('science-pcm-pcb');

  const currentStage = ACADEMIC_STAGES.find((s) => s.id === activeStageId) || ACADEMIC_STAGES[0];
  const currentStream = STREAM_DETAILS.find((s) => s.id === activeStreamId) || STREAM_DETAILS[0];

  return (
    <section id="academics" className="py-20 bg-slate-50/60 border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Framework & Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Comprehensive CBSE Learning Continuum
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From kindergarten play-way phonics to senior secondary pre-university streams, our NCERT and NEP 2020 aligned pedagogy fosters genuine intellectual autonomy.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: 4 ACADEMIC STAGES                                                 */}
        {/* ========================================================================= */}
        <div className="mb-20">
          {/* Stage Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {ACADEMIC_STAGES.map((stage) => {
              const isActive = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  id={`tab-stage-${stage.id}`}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-blue-100'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-blue-100 mb-6">
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-1">
                  Grade Bracket: {currentStage.grades} ({currentStage.ageGroup})
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  {currentStage.title} — {currentStage.subtitle}
                </h3>
              </div>

              <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold shrink-0">
                NEP 2020 Aligned Structure
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Pedagogy & Highlights (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-2">
                    Instructional Philosophy & Approach
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {currentStage.pedagogy}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-3">
                    Curricular Hallmarks & Activities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStage.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Subject Domains (5 cols) */}
              <div className="lg:col-span-5 bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-2 mb-4 text-blue-900 font-bold text-sm">
                  <GraduationCap className="w-5 h-5 text-blue-700" />
                  <span>Key Subject Domains</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentStage.keySubjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-white text-slate-800 text-xs font-semibold border border-blue-100 shadow-2xs"
                    >
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-blue-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>English Medium Instruction</span>
                  <span className="font-bold text-blue-700">Zero Private Tuition Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: SENIOR SECONDARY (10+2) STREAM COMBINATIONS                        */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Pre-University Specialization</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">
              Class XI & XII Senior Secondary Academic Streams
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tailored academic pathways bridging CBSE Board examinations with premier competitive exams and university admissions.
            </p>
          </div>

          {/* Stream Selector Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {STREAM_DETAILS.map((stream) => {
              const isSelected = activeStreamId === stream.id;
              return (
                <button
                  key={stream.id}
                  id={`btn-stream-${stream.id}`}
                  onClick={() => setActiveStreamId(stream.id)}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-700 text-white border-blue-700 shadow-lg'
                      : 'bg-white text-slate-800 border-blue-100 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-800'
                      }`}>
                        {stream.category}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-serif leading-snug">
                      {stream.streamName}
                    </h4>
                  </div>

                  <div className={`mt-3 text-xs font-semibold flex items-center gap-1 ${
                    isSelected ? 'text-blue-100' : 'text-blue-600'
                  }`}>
                    <span>{stream.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stream Breakdown Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-md">
            <div className="mb-6">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                Specialized Curriculum Profile
              </span>
              <h4 className="text-2xl font-bold text-slate-900 font-serif mt-1">
                {currentStream.streamName}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
                {currentStream.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-blue-100">
              {/* Core Subjects */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Core Compulsory Subjects
                </span>
                <ul className="space-y-2">
                  {currentStream.coreSubjects.map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Elective Options */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
                  Elective & Skill Options
                </span>
                <ul className="space-y-2">
                  {currentStream.electives.map((ele, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                      <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{ele}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Pathways */}
              <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-3">
                  Prominent Career Horizons
                </span>
                <ul className="space-y-2">
                  {currentStream.careerProspects.map((car, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-blue-950">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{car}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
