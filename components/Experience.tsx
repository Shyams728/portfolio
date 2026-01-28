import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Experience } from '../types';

import { experiences } from '../constants';


const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-industrial-steel/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tighter">
            CAREER <span className="text-industrial-orange">PIPELINE</span>
          </h2>
          <p className="text-slate-400 font-sans text-lg max-w-2xl mx-auto">
            Operational trajectory from heavy industrial maintenance to advanced data science.
          </p>
        </div>

        <div className="relative">
          {/* Gantt Chart Header (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 gap-4 mb-8 border-b border-slate-800 pb-4 text-[10px] font-industrial font-bold uppercase tracking-[0.2em] text-slate-500">
            <div className="col-span-3">Activity / Role</div>
            <div className="col-span-2">Organization</div>
            <div className="col-span-7 flex justify-between">
              <span>2010</span>
              <span>2012</span>
              <span>2014</span>
              <span>2016</span>
              <span>2018</span>
              <span>2020</span>
              <span>2022</span>
              <span>2024</span>
              <span>PRESENT</span>
            </div>
          </div>

          <div className="space-y-12 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Mobile View */}
                <div className="md:hidden flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-sm border-2 ${exp.type === 'work' ? 'border-industrial-orange bg-industrial-orange/10 text-industrial-orange' : 'border-industrial-blue bg-industrial-blue/10 text-industrial-blue'} flex items-center justify-center`}>
                      {exp.type === 'work' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                    </div>
                    <div className="w-0.5 flex-grow bg-slate-800 my-2"></div>
                  </div>
                  <div className="pb-10">
                    <span className="text-[10px] font-industrial font-bold text-industrial-yellow uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-xl font-heading font-bold text-white mt-1 uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-slate-400 text-sm mb-4 font-sans">{exp.company} • {exp.location}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 font-sans">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-slate-400 font-sans">
                          <div className="w-1.5 h-1.5 mt-1.5 bg-industrial-orange rotate-45 shrink-0"></div>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop View - Gantt Style Bar */}
                <div className="hidden md:grid grid-cols-12 gap-6 items-start hover:bg-slate-900/40 p-4 transition-colors rounded-sm border border-transparent hover:border-slate-800 group/item">
                  <div className="col-span-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-8 ${exp.type === 'work' ? 'bg-industrial-orange' : 'bg-industrial-blue'}`}></div>
                      <div>
                        <h3 className="text-sm font-heading font-bold text-white uppercase tracking-tight group-hover/item:text-industrial-orange transition-colors">{exp.role}</h3>
                        <span className="text-[9px] font-industrial text-slate-500 uppercase tracking-widest">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-xs font-sans text-slate-400">{exp.company}</span>
                  </div>
                  <div className="col-span-7">
                    <div className="space-y-4">
                      <div className="h-4 w-full bg-slate-900/50 rounded-none relative overflow-hidden flex items-center px-4 border border-slate-800">
                        {/* Simulation of a Gantt bar based on index for variety */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`absolute inset-y-0 h-full origin-left ${exp.type === 'work' ? 'bg-industrial-orange/20 border-r-2 border-industrial-orange' : 'bg-industrial-blue/20 border-r-2 border-industrial-blue'}`}
                          style={{
                            left: exp.period.includes('Present') ? '70%' : `${index * 15}%`,
                            width: exp.period.includes('Present') ? '30%' : '20%'
                          }}
                        ></motion.div>
                        <span className="text-[9px] font-industrial font-bold text-slate-500 uppercase tracking-widest relative z-10 group-hover/item:text-white transition-colors">
                          Operational Log: {exp.type === 'work' ? 'Industrial Field' : 'Technical Development'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <p className="text-xs text-slate-400 leading-relaxed font-sans col-span-1">
                          {exp.description}
                        </p>
                        <div className="col-span-1">
                          {exp.achievements.length > 0 && (
                            <div className="space-y-1">
                              {exp.achievements.slice(0, 2).map((ach, i) => (
                                <div key={i} className="flex items-start gap-2 text-[10px] text-slate-500 font-sans group-hover/item:text-slate-300 transition-colors">
                                  <div className="w-1 h-1 mt-1 bg-industrial-yellow shrink-0"></div>
                                  <span>{ach}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Activity Legend */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-industrial-orange"></div>
              <span className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest">Field Engineering / Work</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-industrial-blue"></div>
              <span className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest">Data Science / Education</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-industrial-yellow"></div>
              <span className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest">Milestone Achieved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;