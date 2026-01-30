import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { insights } from '../constants';

const Insights: React.FC = () => {
    return (
        <section id="insights" className="py-24 bg-industrial-steel/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-industrial-concrete dark:text-white mb-4 tracking-tighter transition-colors">
                        INDUSTRIAL <span className="text-industrial-orange">INSIGHTS</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 font-sans text-lg max-w-2xl transition-colors">
                        Thought leadership at the intersection of Operations Engineering and Data Science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={insight.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-industrial-steel/40 border border-slate-200 dark:border-slate-800 hover:border-industrial-orange/40 transition-all rounded-sm group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-industrial-orange/10 text-industrial-orange rounded-sm">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-industrial text-slate-500 uppercase tracking-widest">{insight.date} // {insight.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-industrial-concrete dark:text-white mb-4 group-hover:text-industrial-orange transition-colors italic">
                                "{insight.title}"
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 font-sans leading-relaxed transition-colors">
                                {insight.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs font-industrial font-bold text-industrial-orange group-hover:gap-4 transition-all">
                                READ_FULL_ARTICLE <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
