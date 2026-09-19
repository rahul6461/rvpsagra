import React, { useState, useEffect } from 'react';
import {
  Camera,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Download,
  ExternalLink,
  Sparkles,
  School,
  Share2,
  Check,
  ZoomIn
} from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { SCHOOL_INFO } from '../data/schoolData';

export const FULL_DRIVE_GALLERY_ITEMS = [
  {
    id: 'drive-assembly',
    title: 'Assembly',
    driveName: 'Assembly',
    category: 'Campus & Assembly',
    imageUrl: '/assets/drive_gallery/Assembly.jpg',
    driveUrl: 'https://drive.google.com/file/d/1UWgXsAqOh49CZqtNWLPJ9_tx1LybgMjB/view?usp=sharing',
    description: 'Morning school assembly fostering discipline, prayer, moral values, and patriotic songs at RV Public School Agra.'
  },
  {
    id: 'drive-bharat_sir_and_kamal_sir',
    title: 'Bharat Sir and Kamal Sir',
    driveName: 'Bharat Sir and Kamal Sir',
    category: 'Campus & Leadership',
    imageUrl: '/assets/drive_gallery/Bharat_Sir_and_Kamal_Sir.jpg',
    driveUrl: 'https://drive.google.com/file/d/1aDLkz_QVBISxvRwmRaln5frS0jgx477w/view?usp=sharing',
    description: 'Respected Vice Chairman Mr. Bharat Bhushan Sharma and Principal Mr. Kamal Singh guiding institutional excellence.'
  },
  {
    id: 'drive-farewell26',
    title: "Farewell'26",
    driveName: "Farewell'26",
    category: 'Celebrations & Farewell',
    imageUrl: '/assets/drive_gallery/Farewell26.jpg',
    driveUrl: 'https://drive.google.com/file/d/1POZ3LTDsy8CbJupihGn0ntXlNq4QXHtt/view?usp=sharing',
    description: "Memorable Class XII Farewell '26 ceremony bidding adieu with blessings, awards, and cherished campus memories."
  },
  {
    id: 'drive-graduation_day',
    title: 'Graduation Day',
    driveName: 'Graduation Day',
    category: 'Academic Honors',
    imageUrl: '/assets/drive_gallery/Graduation_Day.jpg',
    driveUrl: 'https://drive.google.com/file/d/1AK7vJhjrTXyf7j7whT0QRK6_KIt_8Wo0/view?usp=sharing',
    description: 'Graduation Day convocation ceremony celebrating student milestones and awarding academic diplomas.'
  },
  {
    id: 'drive-graduation_day_2',
    title: 'Graduation Day (Ceremony)',
    driveName: 'Graduation Day',
    category: 'Academic Honors',
    imageUrl: '/assets/drive_gallery/Graduation_Day_2.jpg',
    driveUrl: 'https://drive.google.com/file/d/1KSK9Ymjxf-jevBOSmnGTUTxBsn0YgMOS/view?usp=sharing',
    description: 'Graduation honors and certificates presentation with proud parents and teachers.'
  },
  {
    id: 'drive-holi_celebration',
    title: 'Holi Celebration',
    driveName: 'Holi Celebration',
    category: 'Cultural & Events',
    imageUrl: '/assets/drive_gallery/Holi_Celebration.jpg',
    driveUrl: 'https://drive.google.com/file/d/1wNWchTRqslold42ZrQBt03WF_kqVrDGq/view?usp=sharing',
    description: 'Joyous, vibrant Holi festival celebrations with colors, music, and brotherhood on campus.'
  },
  {
    id: 'drive-honouring_champions',
    title: 'Honouring Champions',
    driveName: 'Honouring Champions',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/Honouring_Champions.jpg',
    driveUrl: 'https://drive.google.com/file/d/1UZby5UpDZXwWPc5S4cOy8bVCYWSAVjMf/view?usp=sharing',
    description: 'Felicitation ceremony honoring sports champions, athletes, and championship trophy winners.'
  },
  {
    id: 'drive-interschool_tournament_winners',
    title: 'InterSchool Tournament Winners',
    driveName: 'InterSchool Tournament Winners',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/InterSchool_Tournament_Winners.jpg',
    driveUrl: 'https://drive.google.com/file/d/1g0xk66d50b25sdrCZ3b3eXeha5SUxvyn/view?usp=sharing',
    description: 'RVPS team lifting the prestigious Inter-School Tournament champions trophy.'
  },
  {
    id: 'drive-interschool_tournament_winner',
    title: 'InterSchool Tournament Winner',
    driveName: 'InterSchool Tournament Winner',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/InterSchool_Winner.jpg',
    driveUrl: 'https://drive.google.com/file/d/1_02EwOy-1ntbX68bHF-0sLk3ed4YHRo_/view?usp=sharing',
    description: 'Student champions receiving medals and certificates of excellence for inter-school tournament competitions.'
  },
  {
    id: 'drive-interschool_tournament_team_winners',
    title: 'InterSchool Tournament Winners',
    driveName: 'InterSchool Tournament Winners',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/InterSchool_Winners.jpg',
    driveUrl: 'https://drive.google.com/file/d/1HGd74-AXy2XCmly5TqTcMuzX4y2-c_Uq/view?usp=sharing',
    description: 'Triumphant inter-school tournament team celebrate with their coaches and school principals.'
  },
  {
    id: 'drive-kabaddi',
    title: 'Kabaddi',
    driveName: 'Kabaddi',
    category: 'Sports & Athletics',
    imageUrl: '/assets/drive_gallery/Kabaddi.jpg',
    driveUrl: 'https://drive.google.com/file/d/1Q6bKxxiHRTk0JsRwu6DyBOLwUwP4W3YJ/view?usp=sharing',
    description: 'High-energy inter-house and district Kabaddi championship match on our 8-acre sports grounds.'
  },
  {
    id: 'drive-khokho_champs',
    title: 'KhoKho Champs',
    driveName: 'KhoKho Champs',
    category: 'Sports & Athletics',
    imageUrl: '/assets/drive_gallery/KhoKho_Champs.jpg',
    driveUrl: 'https://drive.google.com/file/d/1wkQnmyz9NYH37zJLhgeTvfsUZbdgeFnJ/view?usp=sharing',
    description: 'Kho-Kho championship winners celebrating victory with their coach and gold medals.'
  },
  {
    id: 'drive-our_creative_minds',
    title: 'Our Creative Minds',
    driveName: 'Our Creative Minds',
    category: 'Arts & Culture',
    imageUrl: '/assets/drive_gallery/Our_Creative_Minds.jpg',
    driveUrl: 'https://drive.google.com/file/d/1Hv705VYiq1qarSDDZgHL_ZFk8vjpvCN0/view?usp=sharing',
    description: 'Student art exhibition displaying paintings, crafts, models, and creative projects.'
  },
  {
    id: 'drive-picnic',
    title: 'Picnic',
    driveName: 'Picnic',
    category: 'Cultural & Events',
    imageUrl: '/assets/drive_gallery/Picnic.jpg',
    driveUrl: 'https://drive.google.com/file/d/1PORQY6TM9L7GKrbFCtlo59AmQ7KN40Rj/view?usp=sharing',
    description: 'Annual student school picnic and recreational excursion fostering camaraderie.'
  },
  {
    id: 'drive-rising_star',
    title: 'Rising Star',
    driveName: 'Rising Star',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/Rising_Star.jpg',
    driveUrl: 'https://drive.google.com/file/d/1lgVj6IlLyk1ss7qw_o9E2XW2B35KmtQO/view?usp=sharing',
    description: 'Rising star student achievers receiving recognition and awards for exceptional talent.'
  },
  {
    id: 'drive-rvps_family',
    title: 'RVPS Family',
    driveName: 'RVPS Family',
    category: 'Campus & Leadership',
    imageUrl: '/assets/drive_gallery/RVPS_Family.jpg',
    driveUrl: 'https://drive.google.com/file/d/1LAc3zgP7E4stLMittNTo18JazGMHk2H0/view?usp=sharing',
    description: 'The dedicated faculty, teaching staff, and institutional leadership of R.V. Public School Agra.'
  },
  {
    id: 'drive-sansad_khel_mahotsav_sp_singh_baghel',
    title: 'Sansad Khel Mahotsav (SP singh baghel)',
    driveName: 'Sansad Khel Mahotsav (SP singh baghel)',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/Sansad_Khel_Mahotsav_SP_singh_baghel.jpg',
    driveUrl: 'https://drive.google.com/file/d/1A3IevgMYI2MSh-vIiSmE5U3UmueLWr2O/view?usp=sharing',
    description: 'Felicitation ceremony at Sansad Khel Mahotsav presided by Union Minister Prof. S.P. Singh Baghel.'
  },
  {
    id: 'drive-sarnath_mueseum',
    title: 'Sarnath Mueseum',
    driveName: 'Sarnath Mueseum',
    category: 'Cultural & Events',
    imageUrl: '/assets/drive_gallery/Sarnath_Mueseum.jpg',
    driveUrl: 'https://drive.google.com/file/d/1Rx2-nBL40qfSeIrlkZkxwJOgrNhmtesJ/view?usp=sharing',
    description: 'Historical and educational study tour to Sarnath Archaeological Museum.'
  },
  {
    id: 'drive-school_fair',
    title: 'School Fair',
    driveName: 'School Fair',
    category: 'Cultural & Events',
    imageUrl: '/assets/drive_gallery/School_Fair.jpg',
    driveUrl: 'https://drive.google.com/file/d/1g2Fc4UJwP4_otRu2k7hNTGQq1ONrzZ18/view?usp=sharing',
    description: 'Annual school fair and exhibition stalls showcasing student innovation, games, and culinary skills.'
  },
  {
    id: 'drive-spiritual_gurus',
    title: 'Spiritual Gurus',
    driveName: 'Spiritual Gurus',
    category: 'Cultural & Events',
    imageUrl: '/assets/drive_gallery/Spiritual_Gurus.jpg',
    driveUrl: 'https://drive.google.com/file/d/1m2rxpkFR6M_nlovucQgH5755iKLcCSbZ/view?usp=sharing',
    description: 'Moral inspiration, spiritual discourse, and guidance session by venerated spiritual teachers.'
  },
  {
    id: 'drive-team_art_competition',
    title: 'Team Art Competition',
    driveName: 'Team Art Competition',
    category: 'Arts & Culture',
    imageUrl: '/assets/drive_gallery/Team_Art_Competition.jpg',
    driveUrl: 'https://drive.google.com/file/d/11pPUTcPlk9vcslTAUNIhsgoE7_hsr8HX/view?usp=sharing',
    description: 'Inter-house team art competition showcasing creative painting, sketching, and poster making.'
  },
  {
    id: 'drive-winners',
    title: 'Winners',
    driveName: 'Winners',
    category: 'Achievements & Sports',
    imageUrl: '/assets/drive_gallery/Winners.jpg',
    driveUrl: 'https://drive.google.com/file/d/1dXjSTfBDiw84eNNTVhHOiQy7gVXuHqWR/view?usp=sharing',
    description: 'Student champions holding victory trophies and medals for inter-school tournament honors.'
  },
  // Additional Campus & Event Archive
  {
    id: 'drive-sports-day',
    title: 'Annual Sports Day & Athletic Meet',
    driveName: 'AnnualSportsDay',
    category: 'Sports & Athletics',
    imageUrl: '/assets/photos/AnnualSportsDay.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Sprint races, track events, and athletics competitions held on the 8-acre school grounds.'
  },
  {
    id: 'drive-science-day',
    title: 'Annual Science & Innovation Day',
    driveName: 'AnnualInnovationDay',
    category: 'Academic Honors',
    imageUrl: '/assets/photos/AnnualInnovationDay.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Student-designed working models, technological projects, and eco-innovations on display.'
  },
  {
    id: 'drive-award-dist',
    title: 'Annual Award Distribution',
    driveName: 'AwardDistribution',
    category: 'Academic Honors',
    imageUrl: '/assets/photos/AwardDistribution.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Annual felicitation ceremony for academic and sports achievers.'
  },
  {
    id: 'drive-clean-india',
    title: 'Clean India Green India Campaign',
    driveName: 'CleanIndiaGreenIndia',
    category: 'Campus & Assembly',
    imageUrl: '/assets/photos/CleanIndiaGreenIndia.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Student cleanliness rally and environmental care drive under Swachh Bharat mission.'
  },
  {
    id: 'drive-earth-day',
    title: 'Earth Day Tree Plantation',
    driveName: 'EarthDay',
    category: 'Campus & Assembly',
    imageUrl: '/assets/photos/EarthDay.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Sapling plantation drives and green campus preservation.'
  },
  {
    id: 'drive-independence',
    title: 'Independence Day Celebrations',
    driveName: 'IndependenceDay',
    category: 'Cultural & Events',
    imageUrl: '/assets/photos/IndependenceDay.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'National flag hoisting ceremony, marching parades, and patriotic recitations.'
  },
  {
    id: 'drive-yoga-day',
    title: 'International Yoga Day',
    driveName: 'InternationalYogaDay',
    category: 'Sports & Athletics',
    imageUrl: '/assets/photos/InternationalYogaDay.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Mindfulness yoga postures and pranayama practice by students and faculty.'
  },
  {
    id: 'drive-ima-tour',
    title: 'Leadership Tour to IMA Dehradun',
    driveName: 'IMADehradunTour',
    category: 'Academic Honors',
    imageUrl: '/assets/photos/IMADehradunTour.jpeg',
    driveUrl: 'https://drive.google.com/drive/folders/1Jk5ARn1QJMbyzczvAWcKsGndqqHA_qYS',
    description: 'Senior students leadership orientation tour to Indian Military Academy Dehradun.'
  }
];

export const FullGalleryPage = ({ onBackToHome, onOpenAdmissionModal }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'ALL',
    'Sports & Athletics',
    'Achievements & Sports',
    'Arts & Culture',
    'Cultural & Events',
    'Academic Honors',
    'Campus & Leadership',
    'Campus & Assembly',
    'Celebrations & Farewell'
  ];

  const filteredItems = FULL_DRIVE_GALLERY_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.driveName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white pb-24">
      {/* Top Header Navigation for Gallery Page */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs sm:text-sm transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-900 hidden sm:inline">
              R.V. Public School, Agra
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-xs text-slate-500">Official Drive Photo Gallery</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer transition-colors"
              title="Copy gallery link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              Admissions 2026–27
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Banner for Gallery */}
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-blue-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Google Drive Visual Archive</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-white">
            Official School Photo Gallery
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            All original event photographs, inter-school tournament sports championships, awards, and celebrations straight from our verified Google Drive archive.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-slate-400">
              Showing {filteredItems.length} photos
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Controls: Search Bar & Category Tabs */}
        <div className="space-y-4 mb-10">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search photo by name (e.g. Kabaddi, Assembly, tournament winner)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-blue-700 border border-slate-200'
                  }`}
                >
                  {cat === 'ALL' ? 'All Photographs' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700 font-serif">No Photos Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try changing your search term or select another category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('ALL');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-700 text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(idx)}
                className="bg-white rounded-3xl overflow-hidden border border-blue-100/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-slate-100">
                    <ImageWithFallback
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3.5 rounded-full bg-white/95 text-blue-900 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2 font-bold text-xs">
                        <ZoomIn className="w-4 h-4" />
                        <span>View Fullscreen</span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-blue-900 backdrop-blur-xs shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif group-hover:text-blue-700 transition-colors truncate">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-700">RVPS Agra</span>
                  <span className="text-[11px] font-medium text-slate-400">Campus Archive</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back to Homepage Footer Bar */}
        <div className="mt-14 pb-8 flex justify-center">
          <button
            onClick={onBackToHome}
            className="px-6 py-3 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to School Homepage</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
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
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-slate-700"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer border border-slate-700"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setActiveImageIndex(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer border border-slate-700"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Modal Metadata */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wide">
                    {filteredItems[activeImageIndex].category}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-1">
                  {filteredItems[activeImageIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {filteredItems[activeImageIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-semibold text-slate-400">
                  {activeImageIndex + 1} of {filteredItems.length}
                </span>

                <a
                  href={filteredItems[activeImageIndex].imageUrl}
                  download={`${filteredItems[activeImageIndex].title}.jpg`}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Download photo"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
