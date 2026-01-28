import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../constants';

const CertificatesSection: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

    return (
        <section id="certifications" className="py-24 bg-industrial-steel/60">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 tracking-tighter uppercase">
                        OPERATIONAL <span className="text-industrial-orange">CERTIFICATION</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-sans">
                        Professional credentials and technical skill validations in Data Science, Operations & SAP.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedCert(cert)}
                            className="relative aspect-square rounded-none overflow-hidden cursor-pointer group bg-[#1e1e2e]/40 border border-slate-800 hover:border-industrial-orange transition-all duration-500"
                        >
                            {/* Face: Logo */}
                            <div className="absolute inset-0 p-8 flex items-center justify-center bg-white/[0.02] group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src={cert.url}
                                    alt={cert.title}
                                    className="w-full h-full object-contain filter invert opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award className="w-4 h-4 text-industrial-orange" />
                                        <span className="text-[10px] uppercase font-industrial font-bold tracking-[0.2em] text-industrial-orange">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                    <h4 className="text-white font-heading font-bold text-sm mb-4 leading-tight uppercase tracking-tight">
                                        {cert.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-[10px] font-industrial font-bold uppercase tracking-widest text-white group/btn">
                                        Access Buffer <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-xl p-4 md:p-8 flex items-center justify-center"
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-industrial-orange transition-colors p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl w-full bg-industrial-steel p-6 md:p-12 rounded-none border-2 border-slate-800 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-industrial-orange/20 animate-pulse"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="bg-white p-6 rounded-none shadow-inner border border-slate-200">
                                    <img
                                        src={selectedCert.url}
                                        alt={selectedCert.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-industrial-orange/10 flex items-center justify-center text-industrial-orange border border-industrial-orange/30">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <span className="text-industrial-orange text-[10px] font-industrial font-bold uppercase tracking-[0.2em]">{selectedCert.issuer}</span>
                                    </div>
                                    <h3 className="text-3xl font-heading font-black text-white mb-6 uppercase tracking-tight leading-none">{selectedCert.title}</h3>

                                    <div className="space-y-6">
                                        <p className="text-slate-400 font-sans text-sm leading-relaxed">
                                            SYSTEM_LOG: Technical competency validated. Credential hash verified through secure protocol. Issuer node confirmed as <span className="text-white">{selectedCert.issuer}</span>.
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <a
                                                href={selectedCert.verifyLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-3 px-8 py-4 bg-industrial-orange text-slate-950 font-industrial font-bold tracking-widest uppercase hover:bg-industrial-orange-light transition-all shadow-lg"
                                            >
                                                Verify Credential <ExternalLink className="w-5 h-5" />
                                            </a>
                                            <button
                                                onClick={() => setSelectedCert(null)}
                                                className="px-8 py-4 bg-slate-900 text-slate-400 font-industrial font-bold tracking-widest uppercase hover:text-white transition-all border border-slate-800"
                                            >
                                                Close Buffer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CertificatesSection;
