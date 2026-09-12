import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated number counting from 0 to target when visible in viewport.
 * Supports integers, floating-point decimals, and optional locale formatting.
 */
export const CountUpNumber = ({
  target = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  formatWithCommas = true
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    let animationFrameId = null;
    const numericTarget = typeof target === 'number' ? target : parseFloat(target) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease out expo formula for smooth deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeOut * numericTarget;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, target, duration]);

  const formatNumber = (num) => {
    if (decimals > 0) {
      const fixed = num.toFixed(decimals);
      return fixed;
    }
    const rounded = Math.round(num);
    return formatWithCommas ? rounded.toLocaleString('en-IN') : rounded.toString();
  };

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};
