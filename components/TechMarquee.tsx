import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    'Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'PyTorch', 'TensorFlow',
    'Streamlit', 'SQL', 'MongoDB', 'Power BI', 'Tableau', 'Git', 'SAP HANA', 'Excel/VBA'
];

const TechMarquee: React.FC = () => {
    return (
        <div className="py-12 bg-slate-900/30 overflow-hidden border-y border-slate-800/50">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-12 items-center"
                >
                    {/* First set of technologies */}
                    {technologies.map((tech, idx) => (
                        <span key={idx} className="text-2xl md:text-3xl font-bold text-slate-700 hover:text-primary-500/50 transition-colors cursor-default select-none uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                    {/* Repeat set for seamless loop */}
                    {technologies.map((tech, idx) => (
                        <span key={`dup-${idx}`} className="text-2xl md:text-3xl font-bold text-slate-700 hover:text-primary-500/50 transition-colors cursor-default select-none uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechMarquee;
