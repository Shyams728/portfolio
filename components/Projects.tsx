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
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured <span className="text-primary-400">Projects</span></h2>
            <p className="text-slate-400">Data analytics, automated pipelines, and machine learning models.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${selectedCategory === cat
                  ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <a href="https://github.com/Shyams728" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
            View GitHub Profile <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="glass group p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:-translate-y-1 relative flex flex-col h-full cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                    {getIcon(project.category)}
                  </div>
                  <div className="flex gap-2 items-center">
                    {project.stats && (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary-500/10 border border-primary-500/20 text-[10px] font-bold uppercase tracking-wider text-primary-400 mr-2">
                        <span className="opacity-60">{project.stats.label}:</span>
                        <span>{project.stats.value}</span>
                      </div>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                        title="Live Streamlit Demo"
                      >
                        <Play className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                      title="View Code on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  <a
                    href={project.demoLink || project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-8 text-center md:hidden">
          <a href="https://github.com/Shyams728" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-white transition-colors">
            View More on GitHub <ExternalLink className="w-4 h-4" />
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
