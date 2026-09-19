import React, { useState } from 'react';
import { MessageSquare, Star, ExternalLink, PlusCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, SCHOOL_INFO } from '../data/schoolData';
import { WriteReviewModal } from './WriteReviewModal';

const INITIAL_REVIEWS = [
  ...TESTIMONIALS,
  {
    id: 'test-5',
    author: 'Sunil Sisodia',
    role: 'Parent of Class IX Student',
    wardGrade: 'Father of Daksh Sisodia',
    gender: 'male',
    genderLabel: 'Father',
    category: 'Parents',
    quote: 'RV Public School on Gwalior Road is by far the best CBSE school in this region. The teachers are very cooperative and give personal attention to every child. The 8-acre campus and sports ground give plenty of space for activities.',
    rating: 5,
    source: 'Google Review',
    verified: true,
    date: '1 month ago'
  },
  {
    id: 'test-6',
    author: 'Pooja Pachauri',
    role: 'Parent of Primary Wing',
    wardGrade: 'Mother of Shaurya (Class IV)',
    gender: 'female',
    genderLabel: 'Mother',
    category: 'Parents',
    quote: 'Very disciplined environment, safe transport for children with female conductors, and clean RO drinking water. Principal sir and teachers are easily accessible whenever parents have queries.',
    rating: 5,
    source: 'Google Review',
    verified: true,
    date: '3 months ago'
  },
  {
    id: 'test-7',
    author: 'Aman Chahar',
    role: 'Alumnus (Class XII 2023 - 94.4%)',
    wardGrade: 'Science Stream Graduate',
    gender: 'male',
    genderLabel: 'Alumnus',
    category: 'Alumni',
    quote: 'Science practicals in Physics and Chemistry labs prepared me thoroughly for CBSE boards as well as competitive entrance. The teachers never hesitated to solve doubts after class hours.',
    rating: 5,
    source: 'Google Review',
    verified: true,
    date: '5 months ago'
  }
];

export const TestimonialsSection = () => {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('rvps_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...INITIAL_REVIEWS];
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_REVIEWS;
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const handleAddNewReview = (newReview) => {
    const updated = [newReview, ...reviews];
    setReviews(updated);
    try {
      const localSaved = JSON.parse(localStorage.getItem('rvps_user_reviews') || '[]');
      localStorage.setItem('rvps_user_reviews', JSON.stringify([newReview, ...localSaved]));
    } catch (e) {
      console.error(e);
    }
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 4000);
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Parents') return r.genderLabel === 'Father' || r.genderLabel === 'Mother' || r.category === 'Parents';
    if (activeFilter === 'Alumni') return r.genderLabel === 'Alumnus' || r.genderLabel === 'Alumna' || r.category === 'Alumni';
    if (activeFilter === '5 Star') return r.rating === 5;
    return true;
  });

  return (
    <section id="reviews" className="py-20 bg-slate-50/80 border-t border-b border-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {successToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-emerald-700 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
            <CheckCircle2 className="w-5 h-5 text-emerald-200" />
            <span className="text-sm font-semibold">Your review was successfully published!</span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Reviews & Ratings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Parent & Community Testimonials
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real experiences from parents, board toppers, and alumni across Agra who have entrusted R.V. Public School for over 14 years.
          </p>
        </div>

        {/* Google Rating Banner & Action Callouts */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-blue-800/80 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            
            {/* Google Rating Showcase */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Google G Icon with Rating Pill */}
              <div className="w-16 h-16 rounded-2xl bg-white p-2.5 shadow-md flex items-center justify-center shrink-0">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.57.38-2.27V6.58H1.25A11.95 11.95 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-3xl font-extrabold text-amber-300 font-serif">4.8</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                  Official Google Rating • <span className="text-sky-300 font-bold">RV Public School, Rohta Agra</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center justify-center sm:justify-start gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CBSE Affiliated Sr. Secondary (10+2)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Leave Google Review & Write Review on Site */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              {/* Button 1: Official Google Review */}
              <a
                href={SCHOOL_INFO.googleDirectReviewUrl || SCHOOL_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-md hover:bg-slate-100 hover:shadow-xl transition-all cursor-pointer group"
                id="btn-google-review-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.57.38-2.27V6.58H1.25A11.95 11.95 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Button 2: Write Website Review */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all cursor-pointer"
                id="btn-write-review-modal"
              >
                <PlusCircle className="w-4 h-4 text-slate-950" />
                <span>Write a School Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            {['All', 'Parents', 'Alumni', '5 Star'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter === 'All' ? `All Reviews (${reviews.length})` : filter}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-900">{filteredReviews.length}</span> reviews
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => {
            const isFemale = item.gender === 'female';
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-blue-100 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Source Tag */}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {item.source || 'Verified'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                  {/* Clean vector figure indicator (Male / Female) */}
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 shadow-xs ${
                      isFemale
                        ? 'bg-gradient-to-br from-rose-50 to-pink-100/70 border-rose-200 text-rose-600'
                        : 'bg-gradient-to-br from-blue-50 to-sky-100/70 border-blue-200 text-blue-700'
                    }`}
                  >
                    {isFemale ? (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="7" r="3.75" />
                        <path d="M6 21v-3a4.5 4.5 0 0 1 4.5-4.5h3A4.5 4.5 0 0 1 18 18v3H6z" opacity="0.85" />
                        <path d="M12 13.5l2 3h-4l2-3z" fill="#f43f5e" opacity="0.4" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="7" r="3.75" />
                        <path d="M6.5 21v-3.5a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4V21H6.5z" opacity="0.85" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="font-bold text-slate-900 text-sm font-serif truncate group-hover:text-blue-700 transition-colors">
                        {item.author}
                      </h4>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" title="Verified review" />
                      )}
                    </div>
                    <div className="text-[11px] font-semibold text-blue-700 truncate">{item.role}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.wardGrade}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: View All On Google */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Are you a parent or former student of R.V. Public School? We appreciate your thoughts!
          </p>
          <div className="inline-flex items-center gap-3">
            <a
              href={SCHOOL_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-blue-200 text-blue-800 hover:bg-blue-50 font-bold text-xs shadow-xs transition-colors"
            >
              <span>View All Reviews on Google Search</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Write Review Modal */}
      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddNewReview}
      />
    </section>
  );
};
