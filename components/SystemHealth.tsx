import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Database, Cpu } from 'lucide-react';

const SystemHealth: React.FC = () => {
    const [uptime, setUptime] = useState(0);
    const [status, setStatus] = useState('ONLINE');

    useEffect(() => {
        const timer = setInterval(() => {
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const metrics = [
        { label: 'ENGINE_CORE', value: 'ACTIVE', color: 'text-green-500', icon: Cpu },
        { label: 'DATA_PIPELINE', value: 'SYNCHRONIZED', color: 'text-industrial-orange', icon: Database },
        { label: 'SECURITY_PROTOCOL', value: 'ENFORCED', color: 'text-industrial-yellow', icon: ShieldCheck },
    ];

    return (
        <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-sm border-l-4 border-industrial-orange p-5 w-64 shadow-2xl transition-all duration-500 hover:border-l-industrial-yellow/80"
            >
                <div className="flex items-center justify-between mb-5 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-industrial-orange animate-pulse" />
                        <span className="text-[10px] font-industrial font-bold text-industrial-concrete dark:text-white tracking-widest uppercase transition-colors">CORE_TELEMETRY</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        <span className="text-[10px] font-mono text-green-500 font-bold uppercase">{status}</span>
                    </div>
                </div>

                <div className="space-y-3">
                    {metrics.map((m, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <m.icon className="w-3 h-3 text-slate-500" />
                                <span className="text-[9px] font-industrial text-slate-500 uppercase tracking-wider">{m.label}</span>
                            </div>
                            <span className={`text-[9px] font-mono font-bold ${m.color}`}>{m.value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-2 border-t border-slate-900 flex justify-between items-center">
                    <span className="text-[8px] font-industrial text-slate-600 uppercase">System Uptime</span>
                    <span className="text-[8px] font-mono text-slate-400">
                        {Math.floor(uptime / 3600).toString().padStart(2, '0')}:
                        {Math.floor((uptime % 3600) / 60).toString().padStart(2, '0')}:
                        {(uptime % 60).toString().padStart(2, '0')}
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default SystemHealth;
