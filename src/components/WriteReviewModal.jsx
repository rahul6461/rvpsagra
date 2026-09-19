import React, { useState } from 'react';
import { X, Star, MessageSquare, CheckCircle, Send, User, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const WriteReviewModal = ({ isOpen, onClose, onSubmitReview }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Parent');
  const [category, setCategory] = useState('Parents');
  const [wardGrade, setWardGrade] = useState('');
  const [gender, setGender] = useState('male');
  const [quote, setQuote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    const newReview = {
      id: 'rev-' + Date.now(),
      author: name.trim(),
      role: role === 'Parent' ? 'Parent / Guardian' : role === 'Alumni' ? 'Alumni' : role === 'Student' ? 'Student' : 'Community Member',
      wardGrade: wardGrade.trim() || (role === 'Parent' ? 'Parent of RVPS Student' : 'R.V. Public School, Agra'),
      category: category,
      gender: gender,
      genderLabel: gender === 'female' ? 'Female' : 'Male',
      quote: quote.trim(),
      rating: rating,
      verified: true,
      source: 'Website Submission',
      date: 'Just now'
    };

    onSubmitReview(newReview);
    setSubmitted(true);

    const starsStr = '⭐'.repeat(rating);
    const message = `*New School Review / Feedback — R.V. Public School, Agra*
----------------------------------------
*Rating:* ${starsStr} (${rating}/5)
*Reviewer Name:* ${name.trim()}
*Role:* ${role}
*Ward Grade / Batch:* ${wardGrade.trim() || 'RVPS Agra'}
*Review:*
"${quote.trim()}"
----------------------------------------
_Submitted via RVPS Website Review Desk_`;

    openWhatsApp(message);

    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setQuote('');
      setWardGrade('');
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-blue-100 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-slate-900">
              Review Submitted & Sent to WhatsApp!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you for sharing your feedback. Your testimonial has been published and forwarded to our team.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4" />
              <span>Share Your Experience</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-serif mb-1">
              Write a Review for RVPS Agra
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Your honest feedback helps us maintain educational excellence and guides prospective parents.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          (hoverRating || rating) >= star
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200 fill-slate-100'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-sm font-bold text-slate-700 ml-2">
                    {rating === 5 ? '5.0 — Excellent' : rating === 4 ? '4.0 — Very Good' : rating === 3 ? '3.0 — Good' : `${rating}.0`}
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Relationship & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    I am a...
                  </label>
                  <select
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                      if (e.target.value === 'Alumni') setCategory('Alumni');
                      else setCategory('Parents');
                    }}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="Parent">Parent / Guardian</option>
                    <option value="Alumni">Alumnus / Former Student</option>
                    <option value="Student">Current Student</option>
                    <option value="Community">Educationist / Visitor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Gender Identity
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="male">Male (Father / Alumnus)</option>
                    <option value="female">Female (Mother / Alumna)</option>
                  </select>
                </div>
              </div>

              {/* Child Class or Context */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Child's Class / Batch (Optional)
                </label>
                <input
                  type="text"
                  value={wardGrade}
                  onChange={(e) => setWardGrade(e.target.value)}
                  placeholder="e.g. Father of Aryan (Class X) or Batch 2022"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Review / Testimonial *
                </label>
                <textarea
                  required
                  rows={4}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Share your thoughts on the school's teaching standards, teachers, campus safety, sports, or values..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-700 hover:from-emerald-700 hover:to-blue-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Submit & Share via WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
