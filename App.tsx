import React, { useState, useEffect, Suspense, lazy, useRef } from 'react';
import Hero from './components/Hero';
const ExperienceSection = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const ResumesSection = lazy(() => import('./components/Resumes'));
const GallerySection = lazy(() => import('./components/Gallery'));
const CertificatesSection = lazy(() => import('./components/Certificates'));
const ContactForm = lazy(() => import('./components/ContactForm'));
import { Menu, X, Mail, Phone, MapPin, ChevronUp, Loader2 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resumes', href: '#resumes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isScrolledRef = useRef(isScrolled);
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolledRef.current) {
          isScrolledRef.current = scrolled;
          setIsScrolled(scrolled);
        }

        let nextActive = '';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            nextActive = section;
            break;
          }
        }
        if (nextActive !== activeSectionRef.current) {
          activeSectionRef.current = nextActive;
          setActiveSection(nextActive);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-primary-500/30 selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
              S
            </div>
            <span className="font-bold text-lg text-white">Shyam<span className="text-slate-500">sundar</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary-500 after:transition-all hover:after:w-full ${activeSection === link.href.replace('#', '') ? 'text-white after:w-full' : 'text-slate-400 hover:text-white after:w-0'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:shyamsundardharwad@gmail.com"
              className="px-5 py-2.5 bg-white text-slate-950 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 animate-fade-in-down"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block font-medium py-2 transition-colors ${activeSection === link.href.replace('#', '') ? 'text-primary-400' : 'text-slate-300 hover:text-primary-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:shyamsundardharwad@gmail.com"
                  className="block text-center w-full mt-4 px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Suspense fallback={
          <div className="py-24 flex items-center justify-center bg-slate-950">
            <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
          </div>
        }>
          <Skills />
          <ExperienceSection />
          <Projects />
          <CertificatesSection />
          <ResumesSection />
          <GallerySection />
          <ContactForm />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to optimize your operations?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Currently available for immediate joining in Data Analyst or Operations Engineer roles.
          </p>

          <a href="mailto:shyamsundardharwad@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg shadow-primary-600/25 transition-all hover:scale-105 mb-12">
            <Mail className="w-5 h-5" />
            shyamsundardharwad@gmail.com
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-400 border-t border-slate-900 pt-8 mb-8">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-primary-400" />
              <div className="flex items-center gap-3">
                <a href="tel:+917892470215" className="hover:text-primary-400 transition-colors">+91 789 247 0215</a>
                <span className="text-slate-800">|</span>
                <a href="tel:+919591456580" className="hover:text-primary-400 transition-colors">+91 9591 4565 80</a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Mundgod, Karnataka, India</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>Open to Relocate</span>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Shyamsundar Dharwad. Built with React & Tailwind.
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-slate-800 text-primary-400 border border-slate-700 shadow-xl transition-all duration-300 z-40 hover:bg-slate-700 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Scroll to top"
        type="button"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default App;
