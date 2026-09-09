import React, { useState } from 'react';

export const ImageWithFallback = ({ src, alt, className = '', ...props }) => {
  const [hasError, setHasError] = useState(false);

  // High-reliability educational backup image
  const fallbackUrl = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop';

  return (
    <img
      src={hasError || !src ? fallbackUrl : src}
      alt={alt || 'R.V. Public School'}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
