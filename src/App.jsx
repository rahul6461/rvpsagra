import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatCounter } from './components/StatCounter';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CampusBuildingSection } from './components/CampusBuildingSection';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { ToppersSection } from './components/ToppersSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { FullGalleryPage } from './components/FullGalleryPage';
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
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#gallery' ? 'gallery' : 'home';
  });

  // Listen to hash changes (for back/forward navigation or direct links)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#gallery') {
        setCurrentView('gallery');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll-spy observer to highlight active navigation link on main page
  useEffect(() => {
    if (currentView !== 'home') return;

    const sectionIds = [
      'home',
      'campus-building',
      'about',
      'academics',
      'toppers',
      'facilities',
      'activities',
      'admissions',
      'reviews',
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
  }, [currentView]);

  const navigateToGallery = () => {
    setCurrentView('gallery');
    window.location.hash = '#gallery';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (targetId = 'home') => {
    setCurrentView('home');
    window.location.hash = targetId === 'home' ? '' : `#${targetId}`;
    setTimeout(() => {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  if (currentView === 'gallery') {
    return (
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
        <FullGalleryPage
          onBackToHome={() => navigateToHome('home')}
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        />
        <Footer
          onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
          onNavigateToGallery={navigateToGallery}
        />
        <AdmissionModal
          isOpen={isAdmissionModalOpen}
          onClose={() => setIsAdmissionModalOpen(false)}
        />
        <FloatingWidgets onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* 1. Header Navigation Hierarchy */}
      <TopBar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
      <Navbar
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        activeSection={activeSection}
        onNavigateToGallery={navigateToGallery}
      />

      {/* 2. Main Content Flow */}
      <main id="main-content">
        {/* Slideshow Hero on Homepage */}
        <HeroSection onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Floating Stat Counter Card */}
        <StatCounter />

        {/* Why Choose R.V. Public School */}
        <WhyChooseSection />

        {/* Dedicated School Building & Campus Section */}
        <CampusBuildingSection onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Founders Memorial (Large Photos) & Leadership (Principal & MD in Upper Part) */}
        <AboutSection />

        {/* Academics & CBSE Streams (Science, Commerce, Humanities) */}
        <AcademicsSection />

        {/* CBSE Board Examination Toppers & Century Scorers */}
        <ToppersSection />

        {/* Facilities Spotlight: Good Connectivity Network & Modern Infrastructure */}
        <FacilitiesSection />

        {/* Extracurricular Activities (House system removed) */}
        <ActivitiesSection />

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
      <Footer
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onNavigateToGallery={navigateToGallery}
      />

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
