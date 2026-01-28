import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database, Code, BarChart, Truck, CreditCard, ScanLine, Brain } from 'lucide-react';
import { Project } from '../types';

import { projects } from '../constants';
import { Play } from 'lucide-react';
import ProjectModal from './ProjectModal';

const getIcon = (category: string) => {
  switch (category) {
    case 'Analytics': return <BarChart className="w-5 h-5" />;
    case 'Web Scraping': return <Truck className="w-5 h-5" />;
    case 'OCR': return <ScanLine className="w-5 h-5" />;
    case 'Machine Learning': return <Brain className="w-5 h-5" />;
    default: return <Code className="w-5 h-5" />;
  }
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 bg-industrial-steel/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tighter">
              INDUSTRIAL <span className="text-industrial-orange">SOLUTIONS</span>
            </h2>
            <p className="text-slate-400 font-sans text-lg">
              Data pipelines, predictive models, and analytics platforms engineered for heavy industry operational excellence.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-sm text-xs font-industrial font-bold tracking-widest uppercase transition-all border-2 ${selectedCategory === cat
                  ? 'bg-industrial-orange border-industrial-orange text-white shadow-[0_0_15px_rgba(255,107,53,0.3)]'
                  : 'bg-transparent border-slate-700 text-slate-400 hover:border-industrial-orange/50 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-[#1e1e2e]/40 border border-slate-800 hover:border-industrial-orange/40 transition-all duration-500 overflow-hidden rounded-sm cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image/Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-900 group-hover:scale-[1.02] transition-transform duration-500">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Database className="w-12 h-12 text-slate-700" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] to-transparent"></div>

                  {/* Category Badge - Industrial Look */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-2 py-1 bg-industrial-orange text-white text-[10px] font-industrial font-bold uppercase tracking-tighter shadow-lg">
                    {getIcon(project.category)}
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-industrial-orange transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[10px] font-industrial font-bold uppercase tracking-widest rounded-none bg-slate-900/80 text-industrial-yellow border border-slate-700 group-hover:border-industrial-yellow/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Impact Metric - Only on hover or prominent */}
                  {project.impact && (
                    <div className="mb-6 p-3 bg-industrial-orange/5 border-l-2 border-industrial-orange">
                      <div className="text-[10px] font-industrial text-industrial-orange uppercase tracking-widest font-bold">Business Impact</div>
                      <div className="text-sm font-heading font-bold text-white">{project.impact}</div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                    <div className="flex gap-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-industrial font-bold text-industrial-orange hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Play className="w-4 h-4" /> LIVE DEMO
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-industrial font-bold text-slate-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" /> REPOSITORY
                      </a>
                    </div>
                  </div>
                </div>

                {/* Industrial Corner Detail */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-industrial-orange shadow-[0_0_8px_#FF6B35]"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/Shyams728"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-slate-700 text-slate-400 font-industrial font-bold uppercase tracking-widest hover:border-industrial-orange hover:text-white transition-all group"
          >
            Terminal Output: Full Repository <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};


export default Projects;