import { SCHOOL_INFO } from '../data/schoolData';

/**
 * Helper to build and open a pre-filled WhatsApp message URL
 * @param {string} text - Message body
 */
export const openWhatsApp = (text) => {
  const phone = SCHOOL_INFO.whatsappNumber || '7455957545';
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/91${phone}?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
