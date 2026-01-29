import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
const ExperienceSection = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills.Simple'));
const ResumesSection = lazy(() => import('./components/Resumes'));
const GallerySection = lazy(() => import('./components/Gallery'));
const CertificatesSection = lazy(() => import('./components/Certificates'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const OperationalMetrics = lazy(() => import('./components/OperationalMetrics'));
import LoadingScreen from './components/LoadingScreen';
import SystemHealth from './components/SystemHealth';
import { Menu, X, Mail, Phone, MapPin, ChevronUp, Loader2, Settings } from 'lucide-react';

const SectionDivider: React.FC<{ type?: 'gear' | 'circuit' }> = ({ type = 'gear' }) => (
  <div className="py-12 flex items-center justify-center overflow-hidden">
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    <div className="mx-8 relative">
      {type === 'gear' ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-industrial-orange/40"
        >
          <Settings className="w-12 h-12" />
        </motion.div>
      ) : (
        <div className="w-12 h-12 border border-slate-800 rounded-sm flex items-center justify-center">
          <div className="w-2 h-2 bg-industrial-orange animate-pulse"></div>
        </div>
      )}
    </div>
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
  </div>
);

const CustomCursor: React.FC = () => {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const posRef = React.useRef({ x: 0, y: 0 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    let animationFrameId: number;
    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
        setCoords(posRef.current);
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:block top-0 left-0"
    >
      {/* Main Crosshair */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute w-full h-[1px] bg-industrial-orange/50"></div>
        <div className="absolute h-full w-[1px] bg-industrial-orange/50"></div>

        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-industrial-orange"></div>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-industrial-orange"></div>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-industrial-orange"></div>
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-industrial-orange"></div>
      </div>

      {/* Coordinates display */}
      <div className="absolute top-4 left-4 flex flex-col gap-0.5">
        <span className="text-[7px] font-mono text-industrial-orange font-bold uppercase tracking-wider">X: {coords.x.toFixed(0)}</span>
        <span className="text-[7px] font-mono text-industrial-orange font-bold uppercase tracking-wider">Y: {coords.y.toFixed(0)}</span>
      </div>
    </div>
  );
};

const NAV_LINKS = [
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'PIPELINE', href: '#experience' },
  { label: 'SOLUTIONS', href: '#projects' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'MAINTENANCE', href: '#resumes' },
  { label: 'SITES', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      const active = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (active) setActiveSection(active);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-industrial-steel text-slate-200 font-sans selection:bg-industrial-orange/30 selection:text-white md:cursor-none transition-colors duration-500">
        <CustomCursor />

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-industrial-steel/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent border-b border-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-industrial-orange flex items-center justify-center text-slate-950 font-heading font-extrabold text-xl skew-x-[-10deg]">
                S
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-black text-lg text-white tracking-tighter uppercase">SHYAMSUNDAR</span>
                <span className="font-industrial text-[10px] text-industrial-orange tracking-[0.2em]">SYSTEM_ADMIN</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex gap-8">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={`Navigate to ${link.label} section`}
                      className={`text-[10px] font-industrial font-bold tracking-widest transition-all relative py-2 ${activeSection === link.href.replace('#', '') ? 'text-industrial-orange' : 'text-slate-500 hover:text-white'}`}
                    >
                      {link.label}
                      {activeSection === link.href.replace('#', '') && (
                        <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-industrial-orange" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-industrial-orange text-slate-950 text-[10px] font-industrial font-bold tracking-widest uppercase hover:bg-industrial-orange-light transition-all shadow-[0_0_20px_rgba(255,107,53,0.3)]"
              >
                Issue Work Order
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-slate-300 hover:text-industrial-orange"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 animate-fade-in-down">
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`block font-industrial font-bold text-xs tracking-widest py-2 transition-colors ${activeSection === link.href.replace('#', '') ? 'text-industrial-orange' : 'text-slate-300 hover:text-industrial-orange'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="block text-center w-full mt-4 px-5 py-3 bg-industrial-orange text-slate-950 font-industrial font-bold tracking-widest uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Issue Work Order
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>

        <main>
          <Hero />
          <Suspense fallback={
            <div className="py-24 flex items-center justify-center bg-industrial-steel">
              <Loader2 className="w-10 h-10 text-industrial-orange animate-spin" />
            </div>
          }>
            <OperationalMetrics />
            <SectionDivider />
            <Skills />
            <SectionDivider type="circuit" />
            <ExperienceSection />
            <SectionDivider />
            <Projects />
            <SectionDivider type="circuit" />
            <CertificatesSection />
            <ResumesSection />
            <GallerySection />
            <SectionDivider />
            <ContactForm />
          </Suspense>
          <SystemHealth />
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900 bg-industrial-steel/80 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-industrial-orange flex items-center justify-center text-slate-950 font-heading font-extrabold text-lg skew-x-[-10deg]">
                    S
                  </div>
                  <span className="font-heading font-black text-xl text-white tracking-tighter uppercase">SHYAMSUNDAR <span className="text-industrial-orange">DHARWAD</span></span>
                </div>
                <p className="text-slate-500 font-sans max-w-md mb-8">
                  Specializing in the nexus between heavy industry and data science. Available for global deployment and remote technical optimization.
                </p>
                <div className="flex gap-4">
                  <a href="mailto:shyamsundardharwad@gmail.com" className="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:border-industrial-orange transition-colors text-industrial-orange">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-900/50 p-8 border border-slate-800 rounded-sm">
                <span className="text-[10px] font-industrial font-bold text-industrial-yellow uppercase tracking-widest block mb-6">Operational Readiness</span>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">RELOCATION:</span>
                    <span className="text-white">ENABLED</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">AVAILABILITY:</span>
                    <span className="text-white">IMMEDIATE_JOINING</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">TIMEZONE:</span>
                    <span className="text-white">IST [UTC+5:30]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900 gap-6">
              <div className="flex flex-wrap justify-center gap-6 text-[9px] font-industrial font-bold text-slate-500 uppercase tracking-widest">
                <a href="#expertise" className="hover:text-industrial-orange transition-colors tracking-[0.2em]">Expertise</a>
                <a href="#experience" className="hover:text-industrial-orange transition-colors tracking-[0.2em]">Pipeline</a>
                <a href="#projects" className="hover:text-industrial-orange transition-colors tracking-[0.2em]">Solutions</a>
                <a href="#contact" className="hover:text-industrial-orange transition-colors tracking-[0.2em]">Work Order</a>
              </div>
              <p className="text-[9px] font-industrial text-slate-600 uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} CORE_OS // SHYAMSUNDAR_DHARWAD // ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </footer>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-industrial-orange text-slate-950 shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300 z-40 hover:scale-110 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default App;