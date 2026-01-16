import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../constants';

const CertificatesSection: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

    return (
        <section id="certifications" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Verified <span className="text-primary-400">Certifications</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Professional credentials and skill validations from globally recognized institutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedCert(cert)}
                            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group glass border border-slate-800 hover:border-primary-500/50 transition-all duration-500"
                        >
                            {/* Face: Scan Code */}
                            <div className="absolute inset-0 p-8 flex items-center justify-center bg-white/5 group-hover:scale-90 transition-transform duration-500">
                                <img
                                    src={cert.url}
                                    alt={cert.title}
                                    className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            {/* Hover Overlay: Flash Card Effect */}
                            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award className="w-4 h-4 text-primary-400" />
                                        <span className="text-[10px] uppercase tracking-widest text-primary-400 font-bold">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                    <h4 className="text-white font-bold text-sm mb-4 leading-tight">
                                        {cert.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-slate-300 font-medium group/btn">
                                        View Details <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox for Certificates */}
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
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl w-full glass p-6 md:p-12 rounded-3xl border border-slate-800 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className="bg-white p-8 rounded-2xl shadow-inner">
                                    <img
                                        src={selectedCert.url}
                                        alt={selectedCert.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <span className="text-primary-400 text-sm font-bold uppercase tracking-widest">{selectedCert.issuer}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{selectedCert.title}</h3>

                                    <div className="space-y-6">
                                        <p className="text-slate-400 leading-relaxed">
                                            This professional certification validates the required competencies and technical proficiency in the specified domain.
                                            The credential has been verified and issued following rigorous assessment.
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            <a
                                                href={selectedCert.verifyLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/20"
                                            >
                                                Verify Credential <ExternalLink className="w-5 h-5" />
                                            </a>
                                            <button
                                                onClick={() => setSelectedCert(null)}
                                                className="px-8 py-4 bg-slate-800 text-slate-300 font-bold rounded-xl hover:bg-slate-700 transition-all"
                                            >
                                                Close Preview
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
