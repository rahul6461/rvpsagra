import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatCounter } from './components/StatCounter';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { ToppersSection } from './components/ToppersSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionSection } from './components/AdmissionSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { FloatingWidgets } from './components/FloatingWidgets';

export function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll-spy observer to highlight active navigation link
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'academics',
      'toppers',
      'facilities',
      'activities',
      'gallery',
      'admissions',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* 1. Header Navigation Hierarchy */}
      <TopBar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
      <Navbar
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        activeSection={activeSection}
      />

      {/* 2. Main Content Flow */}
      <main id="main-content">
        {/* Slideshow Hero on Homepage */}
        <HeroSection onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Floating Stat Counter Card */}
        <StatCounter />

        {/* Why Choose R.V. Public School */}
        <WhyChooseSection />

        {/* Founders Memorial (Large Photos) & Leadership (Principal & MD in Upper Part) */}
        <AboutSection />

        {/* Academics & CBSE Streams (Science, Commerce, Humanities) */}
        <AcademicsSection />

        {/* CBSE Board Examination Toppers & Century Scorers */}
        <ToppersSection />

        {/* Facilities Spotlight: Safe GPS-Tracked Bus Fleet */}
        <FacilitiesSection />

        {/* Extracurricular Activities (House system removed) */}
        <ActivitiesSection />

        {/* Campus Photo Gallery */}
        <GallerySection />

        {/* Admissions Roadmap, Age Criteria & Enquiry Form */}
        <AdmissionSection onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Parent & Alumni Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Campus Map & Direct Contact */}
        <ContactSection />
      </main>

      {/* 3. Comprehensive Institutional Footer with CBSE Disclosures */}
      <Footer onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

      {/* 4. Interactive Modals & Floating Connectors */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />
      <FloatingWidgets onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
    </div>
  );
}

export default App;
