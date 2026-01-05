import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Code, BarChart, Truck, CreditCard, ScanLine, Brain } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Maintenance Analytics Dashboard',
    description: 'Industrial IoT dashboard for tracking machine downtime, RCFA, and predictive maintenance schedules. Directly leverages manufacturing domain expertise.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    link: 'https://github.com/Shyams728/maintanance_analytics_dashboard',
    category: 'Analytics',
    stats: { label: 'Utility', value: 'High' }
  },
  {
    id: 'p3',
    title: 'PhonePe Data Visualization',
    description: 'Geo-spatial analysis of digital transaction data across India using PhonePe pulse data.',
    tech: ['Python', 'GeoPandas', 'Streamlit', 'Plotly'],
    link: 'https://github.com/Shyams728/phonepe_data_visualisation',
    category: 'Analytics'
  },
  {
    id: 'p4',
    title: 'RedBus Data Scraping',
    description: 'Automated pipeline to scrape bus routes, pricing, and availability to analyze transport trends.',
    tech: ['Selenium', 'Python', 'SQL', 'Automation'],
    link: 'https://github.com/Shyams728/redbus-data-scraping',
    category: 'Web Scraping'
  },
  {
    id: 'p7',
    title: 'Machine Learning Projects',
    description: 'A comprehensive collection of various ML algorithms and experiments, demonstrating breadth of knowledge in predictive modeling.',
    tech: ['Python', 'Scikit-Learn', 'Jupyter', 'Algorithms'],
    link: 'https://github.com/Shyams728/machine_learning_projects',
    category: 'Machine Learning'
  },
  {
    id: 'p2',
    title: 'Kannada LMV (LLM)',
    description: 'A specialized Large Language Model fine-tuned for the Kannada language, enabling vernacular NLP applications.',
    tech: ['PyTorch', 'Transformers', 'NLP', 'HuggingFace'],
    link: 'https://github.com/Shyams728/kannada_lmv7',
    category: 'Machine Learning'
  },
  {
    id: 'p6',
    title: 'Kannada MNIST',
    description: 'Computer Vision model trained to recognize handwritten Kannada numerals, similar to the classic MNIST dataset.',
    tech: ['TensorFlow', 'CNN', 'Deep Learning'],
    link: 'https://github.com/Shyams728/kannada_MNIST',
    category: 'Machine Learning'
  },
  {
    id: 'p5',
    title: 'BizCard OCR',
    description: 'Optical Character Recognition application to digitize business cards and store contact info in a database.',
    tech: ['EasyOCR', 'OpenCV', 'SQL', 'Streamlit'],
    link: 'https://github.com/Shyams728/bizcard_ocr_project',
    category: 'OCR'
  }
];

const getIcon = (category: string) => {
    switch(category) {
        case 'Analytics': return <BarChart className="w-5 h-5" />;
        case 'Web Scraping': return <Truck className="w-5 h-5" />; // Transport metaphor
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
                <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass group p-6 rounded-xl border border-slate-800 hover:border-primary-500/50 transition-all hover:-translate-y-1 relative flex flex-col h-full"
                >
                    <div className="absolute top-4 right-4 text-slate-600 group-hover:text-primary-400 transition-colors">
                        <Github className="w-5 h-5" />
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-colors">
                        {getIcon(project.category)}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{project.title}</h3>
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
                </motion.a>
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