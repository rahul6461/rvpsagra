import React, { useState } from 'react';
import {
  Bus,
  Monitor,
  FlaskConical,
  Laptop,
  BookOpen,
  Trophy,
  Activity,
  Smile,
  ShieldCheck,
  Droplets,
  Sun,
  CheckCircle,
  MapPin,
  Phone,
  ShieldAlert,
  Sparkles,
  Layers
} from 'lucide-react';
import { FACILITIES_DATA, BUS_ROUTES, SCHOOL_INFO } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

export const FacilitiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedRoute, setSelectedRoute] = useState(BUS_ROUTES[0]);

  const categories = ['ALL', 'Transport & Safety', 'Academic', 'Labs', 'Sports', 'Safety', 'Infrastructure'];

  const filteredFacilities = FACILITIES_DATA.filter((facility) => {
    if (selectedCategory === 'ALL') return true;
    return facility.category === selectedCategory;
  });

  const getFacilityIcon = (iconName) => {
    switch (iconName) {
      case 'Bus': return <Bus className="w-5 h-5 text-blue-600" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-blue-600" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-indigo-600" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-sky-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Smile': return <Smile className="w-5 h-5 text-rose-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-blue-500" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-500" />;
      default: return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-slate-50/70 border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Bus className="w-3.5 h-3.5 text-blue-600" />
            <span>Infrastructure & Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            World-Class Campus Infrastructure & Transportation Network
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Featuring our good connectivity network for smooth transportation over the city, Agra’s largest 8-acre championship sports grounds, digital smart classrooms, and modern science laboratories.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PREMIER FEATURE: GOOD CONNECTIVITY NETWORK BUS FLEET SPOTLIGHT            */}
        {/* ========================================================================= */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-10 border-2 border-blue-300 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-700 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-200" />
            <span>Primary Campus Feature • Smooth Transportation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left 6 cols: Bus Fleet Photo & Badge */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
                  alt="Good Connectivity Network for Smooth Transportation"
                  className="w-full h-72 sm:h-84 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-300 mb-1">
                      Comprehensive Agra & Highway Coverage
                    </div>
                    <div className="text-xl font-bold font-serif">
                      Good Connectivity Network for Smooth Transportation Over the City
                    </div>
                  </div>
                </div>
              </div>

              {/* Fleet Metric Highlights */}
              <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100">
                  <div className="text-lg font-bold text-blue-900 font-serif">100%</div>
                  <div className="text-[11px] text-slate-600 font-medium">City Coverage</div>
                </div>
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100">
                  <div className="text-lg font-bold text-blue-900 font-serif">&lt;40 km/h</div>
                  <div className="text-[11px] text-slate-600 font-medium">Speed Governed</div>
                </div>
                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100">
                  <div className="text-lg font-bold text-blue-900 font-serif">Verified</div>
                  <div className="text-[11px] text-slate-600 font-medium">Female Attendant</div>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Bus Fleet Highlights & Safety Specs */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                  <Bus className="w-3.5 h-3.5 text-blue-700" />
                  <span>Smooth Transportation Network</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  Good Connectivity Network for Smooth Transportation Over the City
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  R.V. Public School provides a dedicated yellow school bus network offering a good connectivity network for smooth transportation over the city, covering all key corridors across Southern Agra, Rohta, Sevla, Malpura, and the Gwalior Highway corridor with verified female attendants to ensure total peace of mind for parents.
                </p>
              </div>

              {/* Safety Specs list */}
              <div className="space-y-2.5">
                {[
                  'Good connectivity network for smooth transportation over the city',
                  'Strict speed governor limit (<40 km/h) on all vehicles',
                  'Trained female bus conductor & attendant on every route',
                  'Dedicated transport coordinator helpline for immediate updates',
                  'Routine safety checks and certified licensed drivers'
                ].map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Quick Route Selector */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Check Major Bus Transit Routes
                </span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {BUS_ROUTES.map((route) => (
                    <button
                      key={route.routeNumber}
                      onClick={() => setSelectedRoute(route)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        selectedRoute.routeNumber === route.routeNumber
                          ? 'bg-blue-700 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50'
                      }`}
                    >
                      {route.routeNumber}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-slate-700">
                  <div className="font-bold text-blue-900 mb-1">{selectedRoute.routeName}</div>
                  <div className="flex items-center gap-1.5 text-slate-500 flex-wrap">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Key Stops: {selectedRoute.keyStops.join(' → ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ALL CAMPUS FACILITIES GRID WITH CATEGORY FILTERS                          */}
        {/* ========================================================================= */}
        <div>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-blue-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Facilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                id={`facility-card-${facility.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Facility Image */}
                  <div className="h-52 w-full overflow-hidden relative bg-slate-200">
                    <ImageWithFallback
                      src={facility.imageUrl}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-blue-900 backdrop-blur-xs shadow-xs">
                      {facility.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        {getFacilityIcon(facility.iconName)}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 font-serif leading-snug group-hover:text-blue-700 transition-colors">
                        {facility.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {facility.shortDesc}
                    </p>

                    {/* Facility Specs List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {facility.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-3 bg-blue-50/50 border-t border-blue-100/60 text-right">
                  <span className="text-[11px] font-semibold text-blue-700">
                    Inspected & CBSE Certified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
