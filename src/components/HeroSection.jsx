import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Compass, Trophy, ChevronLeft, ChevronRight, Bus, BookOpen, CheckCircle, MapPin } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { SCHOOL_INFO } from '../data/schoolData';

const HERO_SLIDES = [
  {
    id: 1,
    tag: 'Sprawling 8-Acre Campus • Estd. 24 May 2012',
    headline: 'Empowering Minds, Shaping Futures',
    subheadline: '14+ Years of Educational Excellence, Moral Rectitude & Holistic Character Building in Agra',
    highlightBadge: "Agra's Largest School Sports Field & Green Campus",
    imageUrl: '/assets/photos/campus_building.jpeg',
    icon: Trophy,
    features: ['100% CBSE Pass Record', 'Zero-Tuition Remedial Support', 'Good Connectivity Network']
  },
  {
    id: 2,
    tag: 'Modern Pedagogy • NEP 2020 Aligned',
    headline: 'Digital Classrooms & Modern Science Labs',
    subheadline: 'Interactive 4K smart panels and dedicated Physics, Chemistry & Biology laboratories for conceptual mastery',
    highlightBadge: 'Experiential NCERT Learning & Comprehensive Reading Sanctuary',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop',
    icon: BookOpen,
    features: ['Interactive 4K Smart Panels', 'Composite Physics, Chem & Bio Labs', '15,000+ Volume Library']
  },
  {
    id: 3,
    tag: 'Athletics & Character • 8-Acre Grounds',
    headline: "Agra's Premier Athletic & Sports Arena",
    subheadline: 'Cultivating Mental Resilience, Team Spirit & National Championship Winners on Agra’s largest school field',
    highlightBadge: 'Full Cricket Turf, Football Ground & Athletics Track',
    imageUrl: '/assets/photos/AnnualSportsDay.jpeg',
    icon: Trophy,
    features: ['Trained Athletics Coaches', 'Floodlit Volleyball & Basketball', 'Indoor TT & Chess Pavilion']
  },
  {
    id: 4,
    tag: 'Reliable & Smooth City-Wide Commute',
    headline: 'Good Connectivity Network for Smooth Transportation Over the City',
    subheadline: 'Extensive transportation coverage across Rohta, Sevla, Gwalior Highway, Saiyan, Tehra & Agra City',
    highlightBadge: 'Smooth Transportation Network & Verified Female Attendants',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop',
    icon: Bus,
    features: ['Good Connectivity Network Across Agra', 'Speed Governors (<40 km/h)', 'Female Conductors on Every Route']
  }
];

export const HeroSection = ({ onOpenAdmissionModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Slides with Crossfade Animation */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <ImageWithFallback
            src={slide.imageUrl}
            alt={slide.headline}
            className="w-full h-full object-cover scale-105 transform motion-safe:transition-transform motion-safe:duration-7000"
          />
          {/* Deep Navy/Blue tinted gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
        </div>
      ))}

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="max-w-3xl">
          {/* Institutional Accreditation Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>CBSE Affiliated 10+2 (Affil. No: {SCHOOL_INFO.affiliationNumber})</span>
            <span className="text-blue-300 hidden sm:inline">•</span>
            <span className="text-slate-200 hidden sm:inline">Rohta, Gwalior Road, Agra</span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif mb-4 drop-shadow-sm">
            {activeSlideData.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-blue-100/90 font-normal leading-relaxed mb-6 max-w-2xl">
            {activeSlideData.subheadline}
          </p>

          {/* Key highlights / feature badges for active slide */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {activeSlideData.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/70 border border-blue-500/30 text-slate-100 text-xs sm:text-sm font-medium backdrop-blur-sm"
              >
                <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              id="hero-enquiry-cta-btn"
              onClick={onOpenAdmissionModal}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all text-sm sm:text-base cursor-pointer border border-blue-400/40"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-academics-btn"
              onClick={() => scrollToSection('academics')}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all text-sm sm:text-base cursor-pointer"
            >
              <Compass className="w-4 h-4 text-sky-300" />
              <span>Explore Academics</span>
            </button>

            <button
              id="hero-facilities-btn"
              onClick={() => scrollToSection('facilities')}
              className="hidden sm:flex items-center gap-2 bg-transparent hover:bg-blue-900/40 text-blue-200 hover:text-white font-semibold px-4 py-3.5 rounded-xl border border-blue-500/30 transition-all text-sm cursor-pointer"
            >
              <span>Campus Facilities</span>
            </button>
          </div>
        </div>
      </div>

      {/* Manual Slideshow Controls & Progress Indicators */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-9 h-9 rounded-full bg-slate-900/80 border border-blue-500/40 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-1.5">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide ? 'w-8 bg-sky-400' : 'w-2.5 bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-9 h-9 rounded-full bg-slate-900/80 border border-blue-500/40 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Slide Counter */}
        <span className="text-xs font-semibold text-blue-200 ml-1">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </span>
      </div>

      {/* Bottom subtle landmark location bar */}
      <div className="hidden md:flex absolute bottom-6 left-6 z-30 items-center gap-2 text-xs text-blue-200 bg-slate-950/70 border border-blue-900/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
        <MapPin className="w-3.5 h-3.5 text-sky-400" />
        <span>Garhi Thakur Das, Rohta, Gwalior Road, Southern Agra – 282009</span>
      </div>
    </section>
  );
};
