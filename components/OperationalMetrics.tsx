import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Factory, Zap, Target, ShieldCheck } from 'lucide-react';

const AnimatedCounter: React.FC<{ value: number, duration?: number, suffix?: string }> = ({ value, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const totalSteps = 100;
            const increment = end / totalSteps;
            const stepTime = (duration * 1000) / totalSteps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const OperationalMetrics: React.FC = () => {
    const stats = [
        { label: "OPTIMIZATION_UPLIFT", value: 18, suffix: "%", icon: <Zap className="w-5 h-5" />, color: "text-industrial-orange" },
        { label: "DEPLOYED_PROJECTS", value: 45, suffix: "+", icon: <Factory className="w-5 h-5" />, color: "text-industrial-blue" },
        { label: "PREDICTIVE_ACCURACY", value: 96, suffix: "%", icon: <Target className="w-5 h-5" />, color: "text-industrial-yellow" },
        { label: "SAFETY_COMPLIANCE", value: 100, suffix: "%", icon: <ShieldCheck className="w-5 h-5" />, color: "text-industrial-concrete dark:text-white" },
    ];

    return (
        <section className="py-20 bg-industrial-steel/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`mb-4 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm relative group-hover:border-industrial-orange transition-colors ${stat.color}`}>
                                {stat.icon}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-industrial-orange/50"></div>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-heading font-black text-industrial-concrete dark:text-white mb-2 tracking-tighter transition-colors">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <span className="text-[9px] font-industrial font-bold text-slate-600 dark:text-slate-500 uppercase tracking-[0.2em] transition-colors">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OperationalMetrics;
