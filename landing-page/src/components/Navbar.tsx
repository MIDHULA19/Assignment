import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCourseNav, setShowCourseNav] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const courseLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'advantage', label: 'Program Advantage' },
    { id: 'details', label: 'Program Details' },
    { id: 'advisors', label: 'Program Advisor' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'career', label: 'Career Support' },
    { id: 'admission', label: 'Admission' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faqs', label: 'FAQs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowCourseNav(scrollY > 600);

      // Scroll Spy Logic
      const sections = courseLinks.map(link => document.getElementById(link.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 400;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center h-16">
        {/* Logo & Search */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-tighter text-brand-accent cursor-pointer shrink-0"
          >
            GEN<span className="text-brand-accent">AI</span> PRO
          </div>

          {!showCourseNav && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center gap-6"
            >
              <button className="flex items-center gap-1 font-semibold text-brand-accent whitespace-nowrap">
                Explore <ChevronDown size={16} />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses"
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-48 xl:w-64 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-sm text-brand-accent placeholder-brand-accent/70"
                />
                <Search className="absolute left-3 top-2.5 text-brand-accent/70" size={16} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Dynamic Navigation Content */}
        <div className="hidden lg:flex flex-1 justify-center px-8 overflow-hidden h-full items-center">
          <AnimatePresence mode="wait">
            {!showCourseNav ? (
              <motion.div
                key="global-nav"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center gap-8"
              >
                <button onClick={() => scrollToSection('advantage')} className="font-semibold text-brand-accent hover:opacity-80 transition-opacity">Highlights</button>
                <button onClick={() => scrollToSection('learning-path')} className="font-semibold text-brand-accent hover:opacity-80 transition-opacity">Curriculum</button>
                <button onClick={() => scrollToSection('details')} className="font-semibold text-brand-accent hover:opacity-80 transition-opacity">Advisors</button>
              </motion.div>
            ) : (
              <motion.div
                key="course-nav"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center gap-6"
              >
                {courseLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-xs xl:text-sm font-bold transition-all relative whitespace-nowrap ${activeSection === link.id ? 'text-brand-accent' : 'text-brand-primary/60 hover:text-brand-primary'
                      }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div layoutId="nav-underline" className="absolute -bottom-2 lg:-bottom-6 left-0 w-full h-[3px] bg-brand-accent" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('final-apply')}
            className="bg-brand-accent text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            Apply Now
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-brand-accent p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="py-6 px-6 flex flex-col gap-4">
              {showCourseNav ? (
                courseLinks.map(link => (
                  <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left text-sm font-bold text-brand-accent py-2 border-b border-gray-50 uppercase tracking-wider">{link.label}</button>
                ))
              ) : (
                <>
                  <button onClick={() => scrollToSection('advantage')} className="text-left font-bold text-brand-accent py-2 uppercase tracking-wider text-sm">Highlights</button>
                  <button onClick={() => scrollToSection('learning-path')} className="text-left font-bold text-brand-accent py-2 uppercase tracking-wider text-sm">Curriculum</button>
                  <button onClick={() => scrollToSection('details')} className="text-left font-bold text-brand-accent py-2 uppercase tracking-wider text-sm">Advisors</button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
