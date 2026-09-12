import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['ALL', 'Campus & Infra', 'Science & Labs', 'Sports & Athletics', 'Celebrations & Festivals'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  const handlePrev = (e) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50/70 border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            A Glimpse into Life at R.V. Public School
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From smart digital classroom sessions and laboratory experiments to athletics tournaments and campus celebrations.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-blue-100'
                  }`}
                >
                  {cat === 'ALL' ? 'All Moments' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx)}
              className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-64 w-full overflow-hidden relative bg-slate-200">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-blue-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-blue-900 backdrop-blur-xs shadow-xs">
                  {item.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 font-serif group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <ImageWithFallback
                src={filteredItems[activeImageIndex].imageUrl}
                alt={filteredItems[activeImageIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-slate-700"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-slate-700"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer border border-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wide">
                  {filteredItems[activeImageIndex].category}
                </span>
                <h4 className="text-lg font-bold font-serif">
                  {filteredItems[activeImageIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {filteredItems[activeImageIndex].description}
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                {activeImageIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
