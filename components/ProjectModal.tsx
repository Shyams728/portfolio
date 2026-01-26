import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, Target, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                        <motion.div
                            layoutId={`project-${project.id}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-slate-900 border border-slate-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold text-primary-400 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    {project.stats && (
                                        <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                                            {project.stats.label}: {project.stats.value}
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                                    {project.title}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">
                                    <div className="md:col-span-2">
                                        <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-primary-400" /> Description
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {project.longDescription || project.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-primary-400" /> Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {(project.challenges || project.results) && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 p-6 rounded-xl bg-slate-800/30 border border-slate-800">
                                        {project.challenges && (
                                            <div>
                                                <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-orange-400" /> Key Challenges
                                                </h3>
                                                <ul className="space-y-2 text-slate-400 text-xs list-disc pl-4">
                                                    {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                        {project.results && (
                                            <div>
                                                <h3 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-green-400" /> Key Results
                                                </h3>
                                                <ul className="space-y-2 text-slate-400 text-xs list-disc pl-4">
                                                    {project.results.map((r, i) => <li key={i}>{r}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700"
                                    >
                                        <Github className="w-5 h-5" /> Code Repo
                                    </a>
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/20"
                                        >
                                            <ExternalLink className="w-5 h-5" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
