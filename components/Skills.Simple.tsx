import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';
import { Gauge, Zap, Database, Code, BarChart3, Brain, Wrench, Shield, TrendingUp, Activity, Terminal, Cpu } from 'lucide-react';
import { techData, domainData } from '../constants';

// --- Components ---

const ScanlineEffect: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%]"></div>
        <motion.div
            initial={{ translateY: '-100%' }}
            animate={{ translateY: '100%' }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-industrial-orange/5 to-transparent opacity-30"
        />
    </div>
);

const CircularGauge: React.FC<{ value: number; color: string; label: string; icon: React.ReactNode }> = ({ value, color, label, icon }) => {
    const circumference = 2 * Math.PI * 42;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center group perspective-1000"
        >
            <div className="relative w-32 h-32 transition-transform duration-500 group-hover:rotate-y-12">
                <svg className="transform -rotate-90 w-32 h-32">
                    <defs>
                        <filter id={`glow-${label.replace(/\s+/g, '-')}`}>
                            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Background tick marks style */}
                    <circle cx="64" cy="64" r="42" stroke="currentColor" strokeWidth="2" fill="none" className="text-slate-800/50" strokeDasharray="2, 4" />

                    {/* Shadow circle */}
                    <circle cx="64" cy="64" r="42" stroke="black" strokeWidth="8" fill="none" className="opacity-20" />

                    {/* Progress circle */}
                    <motion.circle
                        cx="64"
                        cy="64"
                        r="42"
                        stroke={color}
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        strokeLinecap="butt"
                        filter={`url(#glow-${label.replace(/\s+/g, '-')})`}
                        className="transition-all duration-300"
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100/10 dark:bg-slate-900/40 rounded-full border border-slate-800/50 m-2 transition-colors">
                    <div className="text-industrial-orange/80 mb-0.5 group-hover:scale-110 group-hover:text-industrial-orange transition-all duration-300">
                        {icon}
                    </div>
                    <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-heading font-black text-industrial-concrete dark:text-white transition-colors">{value}</span>
                        <span className="text-[7px] font-mono text-slate-500 font-bold">%</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <div className="h-[1px] w-6 bg-industrial-orange/30 mx-auto mb-2 group-hover:w-12 transition-all"></div>
                <span className="text-[9px] font-industrial font-bold text-slate-600 dark:text-slate-400 uppercase tracking-[0.2em] block group-hover:text-industrial-orange transition-colors">
                    {label}
                </span>
            </div>
        </motion.div>
    );
};

const techIcons: { [key: string]: React.ReactNode } = {
    'Python': <Code className="w-5 h-5" />,
    'SQL/NoSQL': <Database className="w-5 h-5" />,
    'Power BI / Tableau': <BarChart3 className="w-5 h-5" />,
    'Pandas': <TrendingUp className="w-5 h-5" />,
    'Machine Learning': <Brain className="w-5 h-5" />,
};

const domainIcons: { [key: string]: React.ReactNode } = {
    'Maintenance': <Wrench className="w-5 h-5" />,
    'SAP/ERP': <Cpu className="w-5 h-5" />,
    'RCFA': <Activity className="w-5 h-5" />,
    'Logistics': <TrendingUp className="w-5 h-5" />,
    'Cost Control': <TrendingUp className="w-5 h-5" />,
    'Safety': <Shield className="w-5 h-5" />,
};

// --- Main Section ---

const Skills: React.FC = () => {
    const [liveData, setLiveData] = useState<{ time: string, value: number, temp: number }[]>([]);
    const [simSpeed, setSimSpeed] = useState(3000);
    const [intensity, setIntensity] = useState(1);

    useEffect(() => {
        const generatePoint = (i: number) => ({
            time: `${i % 24}:00`,
            value: 40 + (Math.random() * 25 + Math.sin(i / 2) * 15) * intensity,
            temp: 65 + (Math.random() * 12 + Math.cos(i / 3) * 8) * intensity
        });

        const initialData = Array.from({ length: 15 }, (_, i) => generatePoint(i));
        setLiveData(initialData);

        const interval = setInterval(() => {
            setLiveData(prev => {
                const lastTimeStr = prev[prev.length - 1].time;
                const nextTime = (parseInt(lastTimeStr) + 1) % 24;
                return [...prev.slice(1), generatePoint(nextTime)];
            });
        }, simSpeed);

        return () => clearInterval(interval);
    }, [simSpeed, intensity]);

    return (
        <section id="expertise" className="py-24 bg-industrial-steel/40 relative overflow-hidden border-y border-slate-200 dark:border-slate-900/50 transition-colors">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-industrial-orange/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-industrial-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 glass border border-slate-300 dark:border-slate-800 rounded-sm mb-8 shadow-inner overflow-hidden relative transition-colors">
                        <div className="absolute inset-0 bg-industrial-orange/5 animate-pulse"></div>
                        <Terminal className="w-4 h-4 text-industrial-orange relative z-10" />
                        <span className="text-[10px] font-industrial font-bold text-industrial-orange uppercase tracking-[0.3em] relative z-10">
                            SYSTEM_CAPABILITIES_REPORT
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-industrial-orange animate-ping ml-2"></div>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-heading font-black text-industrial-concrete dark:text-white mb-6 tracking-tighter uppercase transition-colors">
                        OPERATIONAL <span className="text-industrial-orange underline decoration-industrial-orange/20 decoration-8 underline-offset-8">INTELLIGENCE</span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-sans text-xl leading-relaxed transition-colors">
                        At the intersection of heavy industry and predictive analytics, I engineer systems that transform raw vibrational and thermal vectors into actionable operational foresight.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    {/* LEFT COLUMN: Gauges */}
                    <div className="lg:col-span-5 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-[3px] w-16 bg-industrial-orange"></div>
                                <h3 className="text-3xl font-heading font-black text-industrial-concrete dark:text-white uppercase tracking-tight transition-colors">
                                    TECH <span className="text-industrial-orange">ARSENAL</span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
                                {techData.map((skill) => (
                                    <CircularGauge
                                        key={skill.name}
                                        value={skill.value}
                                        color={skill.color}
                                        label={skill.name}
                                        icon={techIcons[skill.name] || <Code className="w-5 h-5" />}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* DOMAIN EXPERTISE */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="pt-8 border-t border-slate-800/50"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-[3px] w-16 bg-industrial-blue"></div>
                                <h3 className="text-3xl font-heading font-black text-industrial-concrete dark:text-white uppercase tracking-tight transition-colors">
                                    DOMAIN <span className="text-industrial-blue">MASTERY</span>
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {domainData.map((domain, i) => (
                                    <motion.div
                                        key={domain.subject}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="glass border-l-2 border-slate-300 dark:border-slate-800 p-5 group hover:bg-slate-50 dark:hover:bg-slate-900 transition-all hover:border-industrial-orange"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="p-2 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-sm text-slate-500 dark:text-slate-400 group-hover:text-industrial-orange transition-colors">
                                                {domainIcons[domain.subject] || <Gauge className="w-5 h-5" />}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-1">UNIT_PROFICIENCY</div>
                                                <div className="text-lg font-heading font-black text-industrial-concrete dark:text-white group-hover:text-industrial-orange transition-colors">{domain.A}%</div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] font-industrial text-slate-600 dark:text-slate-300 uppercase tracking-widest font-bold transition-colors">{domain.subject}</div>
                                        <div className="mt-3 h-1 w-full bg-slate-800 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${domain.A}%` }}
                                                viewport={{ once: true }}
                                                className="h-full bg-slate-500 group-hover:bg-industrial-orange transition-all duration-500"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Telemetry Simulator */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass rounded-sm border-[6px] border-slate-300 dark:border-slate-900 shadow-2xl relative overflow-hidden group/hmi transition-colors"
                        >
                            <ScanlineEffect />

                            <div className="p-8 relative z-30">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <h3 className="text-2xl font-heading font-black text-industrial-orange mb-2 flex items-center gap-3">
                                            <Activity className="w-6 h-6 animate-pulse" />
                                            HMI TELEMETRY_STREAMING
                                        </h3>
                                        <p className="text-slate-500 text-[9px] font-mono uppercase tracking-[0.3em]">
                                            Source: Predictive Maintenance Node 042 // {new Date().toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-mono font-bold uppercase flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                                            UPLINK_STABLE
                                        </div>
                                        <span className="text-[8px] font-mono text-slate-600 uppercase">Buffer: 4.2ms</span>
                                    </div>
                                </div>

                                {/* Main Chart Area */}
                                <div className="h-[320px] w-full bg-slate-950/50 border border-slate-800 rounded-sm p-4 relative mb-10 overflow-hidden group">
                                    {/* Background grid markings */}
                                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-10">
                                        {Array.from({ length: 30 }).map((_, i) => (
                                            <div key={i} className="border-[0.5px] border-slate-700"></div>
                                        ))}
                                    </div>

                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={liveData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" vertical={false} />
                                            <XAxis dataKey="time" hide />
                                            <YAxis hide domain={['dataMin - 20', 'dataMax + 20']} />
                                            <RechartsTooltip
                                                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid #FF6B35', borderRadius: '0px', padding: '12px' }}
                                                labelStyle={{ display: 'none' }}
                                                itemStyle={{ fontSize: '10px', color: '#fff', textTransform: 'uppercase', fontFamily: 'monospace' }}
                                            />
                                            <Line
                                                type="stepAfter"
                                                dataKey="value"
                                                stroke="#FF6B35"
                                                strokeWidth={2}
                                                dot={false}
                                                name="Vibrational_Vector"
                                                animationDuration={0}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="temp"
                                                stroke="#38bdf8"
                                                strokeWidth={1.5}
                                                dot={false}
                                                strokeDasharray="4 2"
                                                name="Thermal_Flux"
                                                animationDuration={0}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Console Controls */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-5 glass border border-slate-300 dark:border-slate-800 rounded-sm transition-colors">
                                        <div className="text-[10px] font-industrial font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                                            <span>Sim_Controller</span>
                                            <Settings className="w-3 h-3 animate-spin-slow" />
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-[8px] text-slate-600 dark:text-slate-500 font-mono mb-2 uppercase transition-colors">Sampling_Rate</div>
                                                <div className="flex gap-2">
                                                    {[5000, 3000, 1000].map(speed => (
                                                        <button
                                                            key={speed}
                                                            onClick={() => setSimSpeed(speed)}
                                                            className={`flex-1 py-1.5 text-[9px] font-mono font-bold border transition-all ${simSpeed === speed
                                                                ? 'bg-industrial-orange border-industrial-orange text-slate-950'
                                                                : 'bg-slate-950 border-slate-800 text-slate-600 hover:text-industrial-orange'
                                                                }`}
                                                        >
                                                            {speed === 5000 ? '0.2Hz' : speed === 3000 ? '0.5Hz' : '1.0Hz'}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-[8px] text-slate-500 font-mono mb-2 uppercase">Amplitude_Gain</div>
                                                <div className="flex gap-2">
                                                    {[0.5, 1, 2].map(level => (
                                                        <button
                                                            key={level}
                                                            onClick={() => setIntensity(level)}
                                                            className={`flex-1 py-1.5 text-[9px] font-mono font-bold border transition-all ${intensity === level
                                                                ? 'bg-industrial-blue border-industrial-blue text-slate-950'
                                                                : 'bg-slate-950 border-slate-800 text-slate-600 hover:text-industrial-blue'
                                                                }`}
                                                        >
                                                            {level}x
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="p-5 bg-industrial-orange/5 border border-industrial-orange/20 rounded-sm flex-1">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-[9px] font-industrial font-bold text-industrial-orange uppercase tracking-widest">Stability_Index</span>
                                                <span className="text-xl font-mono font-black text-industrial-orange dark:text-white transition-colors">{(96.8 + Math.random() * 2).toFixed(1)}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-slate-900 rounded-full p-0.5 overflow-hidden">
                                                <motion.div
                                                    animate={{ width: ['92%', '98%', '94%', '97%'] }}
                                                    transition={{ duration: 4, repeat: Infinity }}
                                                    className="h-full bg-industrial-orange glow-industrial-orange"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-3 bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 flex items-center justify-between transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-industrial-orange animate-pulse"></div>
                                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Auto_Diagnostic</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-green-500 font-bold uppercase">Ready</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative serial number */}
                            <div className="absolute top-2 right-2 opacity-10 font-mono text-[8px] text-white">CN-DS-PR-042/X9</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Settings: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export default Skills;
