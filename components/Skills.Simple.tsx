import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, Database, Code, BarChart3, Brain, Wrench, Shield, TrendingUp } from 'lucide-react';
import { techData, domainData } from '../constants';

// Circular Gauge Component
const CircularGauge: React.FC<{ value: number; color: string; label: string; icon: React.ReactNode }> = ({ value, color, label, icon }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center group"
        >
            {/* Circular Progress */}
            <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                    {/* Background circle */}
                    <circle
                        cx="64"
                        cy="64"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-slate-800"
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx="64"
                        cy="64"
                        r="45"
                        stroke={color}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_rgba(255,107,53,0.5)]"
                    />
                </svg>

                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-industrial-orange mb-1 group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <span className="text-2xl font-heading font-black text-white">{value}</span>
                    <span className="text-[8px] font-mono text-slate-500">%</span>
                </div>
            </div>

            {/* Label */}
            <div className="mt-4 text-center">
                <span className="text-[10px] font-industrial font-bold text-slate-400 uppercase tracking-[0.15em] block">
                    {label}
                </span>
            </div>
        </motion.div>
    );
};

// Icon mapping for tech skills
const techIcons: { [key: string]: React.ReactNode } = {
    'Python': <Code className="w-6 h-6" />,
    'SQL/NoSQL': <Database className="w-6 h-6" />,
    'Power BI / Tableau': <BarChart3 className="w-6 h-6" />,
    'Pandas': <TrendingUp className="w-6 h-6" />,
    'Machine Learning': <Brain className="w-6 h-6" />,
};

// Icon mapping for domain skills
const domainIcons: { [key: string]: React.ReactNode } = {
    'Maintenance': <Wrench className="w-5 h-5" />,
    'SAP/ERP': <Database className="w-5 h-5" />,
    'RCFA': <Gauge className="w-5 h-5" />,
    'Logistics': <TrendingUp className="w-5 h-5" />,
    'Cost Control': <BarChart3 className="w-5 h-5" />,
    'Safety': <Shield className="w-5 h-5" />,
};

const Skills: React.FC = () => {
    return (
        <section id="expertise" className="py-24 bg-industrial-steel/30 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-industrial-orange/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-industrial-blue/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-sm mb-6">
                        <Zap className="w-4 h-4 text-industrial-orange" />
                        <span className="text-[10px] font-industrial font-bold text-industrial-orange uppercase tracking-widest">
                            System Capabilities
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tighter">
                        OPERATIONAL <span className="text-industrial-orange">INTELLIGENCE</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-sans text-lg">
                        Engineering a nexus between hardcore field operations and advanced predictive analytics.
                    </p>
                </motion.div>

                {/* Technical Skills - Circular Gauges */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="h-[2px] w-12 bg-gradient-to-r from-industrial-orange to-transparent"></div>
                        <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                            Technical <span className="text-industrial-orange">Arsenal</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
                        {techData.map((skill, i) => (
                            <CircularGauge
                                key={skill.name}
                                value={skill.value}
                                color={skill.color}
                                label={skill.name}
                                icon={techIcons[skill.name] || <Code className="w-6 h-6" />}
                            />
                        ))}
                    </div>
                </div>

                {/* Domain Expertise - Industrial HMI Cards */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="h-[2px] w-12 bg-gradient-to-r from-industrial-orange to-transparent"></div>
                        <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight">
                            Domain <span className="text-industrial-orange">Expertise</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {domainData.map((domain, i) => (
                            <motion.div
                                key={domain.subject}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative bg-slate-900/50 border border-slate-800 p-6 group hover:border-industrial-orange transition-all duration-300 overflow-hidden"
                            >
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-2 h-2 bg-industrial-orange/50"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 bg-industrial-orange/50"></div>

                                {/* Scanning line effect */}
                                <div className="absolute inset-0 w-full h-[1px] bg-industrial-orange/20 animate-[scan_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 bg-slate-800 border border-slate-700 rounded-sm text-industrial-orange group-hover:bg-industrial-orange group-hover:text-slate-950 transition-colors">
                                        {domainIcons[domain.subject] || <Gauge className="w-5 h-5" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-industrial text-slate-500 uppercase tracking-widest mb-1">
                                            Proficiency
                                        </div>
                                        <div className="text-2xl font-heading font-black text-industrial-orange">
                                            {domain.A}%
                                        </div>
                                    </div>
                                </div>

                                <div className="text-sm font-industrial text-white uppercase tracking-wider">
                                    {domain.subject}
                                </div>

                                {/* Progress bar */}
                                <div className="mt-4 h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${domain.A}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                                        className="h-full bg-gradient-to-r from-industrial-orange to-industrial-yellow"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
