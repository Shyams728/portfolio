import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Code, BarChart, Truck, CreditCard, ScanLine, Brain } from 'lucide-react';
import { Project } from '../types';

import { projects } from '../constants';
import { Play } from 'lucide-react';

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
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured <span className="text-primary-400">Projects</span></h2>
            <p className="text-slate-400">Data analytics, automated pipelines, and machine learning models.</p>
          </div>
          <a href="https://github.com/Shyams728" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
            View GitHub Profile <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass group p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:-translate-y-1 relative flex flex-col h-full"
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
                    className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                    title="View Code on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                <a href={project.demoLink || project.link} target="_blank" rel="noreferrer">
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
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="https://github.com/Shyams728" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-white transition-colors">
            View More on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};


export default Projects;