import React from 'react';
import { motion } from 'framer-motion';
import { Database, Settings, Truck, Download } from 'lucide-react';
import { resumes } from '../constants';

const ResumesSection: React.FC = () => {
    const getIcon = (id: string) => {
        switch (id) {
            case 'r1': return <Database className="w-5 h-5" />;
            case 'r2': return <Settings className="w-5 h-5" />;
            case 'r3': return <Truck className="w-5 h-5" />;
            default: return <Database className="w-5 h-5" />;
        }
    };

    return (
        <section id="resumes" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">Resumes</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Download tailored versions of my resume based on your industry needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resumes.map((resume, index) => (
                        <motion.div
                            key={resume.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-slate-800 group hover:border-primary-500/30 transition-all flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                                {getIcon(resume.id)}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{resume.title}</h3>
                            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                                {resume.description}
                            </p>
                            <a
                                href={resume.file}
                                download
                                aria-label={`Download ${resume.title} resume`}
                                className="mt-auto w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all"
                            >
                                <Download className="w-4 h-4" />
                                Download PDF
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResumesSection;
