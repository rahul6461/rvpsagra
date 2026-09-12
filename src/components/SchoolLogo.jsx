import React, { useState } from 'react';

export const SchoolLogo = ({ 
  className = 'w-12 h-12', 
  alt = 'R.V. Public School Logo', 
  showText = false,
  containerClassName = ''
}) => {
  // Automatically tries logo.png first, then rv_logo.png, then rv_logo.svg
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const candidateSources = [
    '/assets/logo.png',
    '/assets/rv_logo.png',
    '/assets/rv_logo.svg'
  ];

  const handleImageError = () => {
    if (currentSrcIndex < candidateSources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 ${containerClassName}`}>
      <div className={`${className} shrink-0 flex items-center justify-center`}>
        <img
          src={candidateSources[currentSrcIndex]}
          alt={alt}
          className="w-full h-full object-contain select-none"
          loading="eager"
          onError={handleImageError}
        />
      </div>
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

export default SchoolLogo;