import React from 'react';

/**
 * Official RV Public School Crest Logo
 * Based on the official emblem:
 * - Laurel wreath in golden amber (#EB811B)
 * - Outer dark navy ring (#0E4369) with text "RV PUBLIC SCHOOL", "ESTD. IN", "2012"
 * - Bottom ribbon "COME TO LEARN • GO TO SERVE"
 * - Inner stylized orange "R" and navy "V" checkmark
 */
export const SchoolLogo = ({ className = 'w-12 h-12', alt = 'RV Public School Logo', showText = false }) => {
  return (
    <div className="inline-flex items-center gap-3">
      <img
        src="/assets/rv_logo.svg"
        alt={alt}
        className={`${className} object-contain shrink-0 drop-shadow-sm`}
        onError={(e) => {
          // Fallback if SVG fails to load
          e.currentTarget.style.display = 'none';
        }}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-serif leading-none">
            R.V. Public School
          </span>
          <span className="text-xs font-semibold text-blue-700 tracking-wide mt-1">
            Agra, Uttar Pradesh • Estd. 2012
          </span>
        </div>
      )}
    </div>
  );
};
