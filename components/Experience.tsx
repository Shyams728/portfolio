import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Data Science Upskilling',
    company: 'IIT Madras (GUVI) & IIM Madras',
    period: '2023 - Present',
    location: 'Remote / Hybrid',
    description: 'Specialized training in predictive modeling and big data analytics.',
    achievements: [
        'Advanced Professional Program in Master Data Science',
        'Advanced Python for Data Science certification',
        'Applied statistical models to manufacturing maintenance datasets'
    ],
    type: 'education'
  },
  {
    id: 'exp2',
    role: 'Service Engineer',
    company: 'Larsen & Toubro (Construction & Mining)',
    period: 'Sep 2012 - Mar 2017',
    location: 'Kanchipuram / Chennai',
    description: 'Managed end-to-end service lifecycle for Heavy Earth Moving Machinery (HEMM).',
    achievements: [
        'Analyzed breakdown data to improve machine availability to 20+ hours/day',
        'Used SAP (HANA) for service orders, spares tracking, and cost estimation',
        'Site In-Charge for large irrigation projects (Telangana)',
        'Received CEO Award for operational excellence'
    ],
    type: 'work'
  },
  {
    id: 'exp3',
    role: 'Diploma in Electrical & Electronics',
    company: 'Technical Board',
    period: '2010 - 2012',
    location: 'Karnataka',
    description: 'Foundation in electrical systems and electronics.',
    achievements: [],
    type: 'education'
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2 hidden md:block opacity-30" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Trajectory</span></h2>
        </div>

        <div className="relative">
            {/* Vertical Line for Mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 md:hidden" />

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={exp.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary-500 -translate-x-1/2 mt-6 z-20 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>

                        {/* Content Card */}
                        <div className="ml-16 md:ml-0 md:w-1/2 pr-0 md:pr-12 pl-0 md:pl-12">
                             <div className={`glass p-6 rounded-xl border border-slate-800 hover:border-primary-500/30 transition-colors group relative overflow-hidden ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                                <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-0`} />
                                
                                <div className={`flex items-center gap-3 mb-2 text-primary-400 ${index % 2 === 1 ? '' : 'md:flex-row-reverse'}`}>
                                    {exp.type === 'work' ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                                    <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300">{exp.period}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-slate-400 text-sm mb-4">{exp.company} • {exp.location}</h4>
                                
                                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                {exp.achievements.length > 0 && (
                                    <ul className={`text-xs text-slate-400 space-y-1.5 ${index % 2 === 1 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className={`mt-1 w-1 h-1 rounded-full bg-accent-500 shrink-0 ${index % 2 === 1 ? '' : 'md:order-2'}`}></span>
                                                <span className={index % 2 === 1 ? '' : 'md:text-right'}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                             </div>
                        </div>
                        
                        {/* Empty Spacer for alternating layout */}
                        <div className="hidden md:block md:w-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;