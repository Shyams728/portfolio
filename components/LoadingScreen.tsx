import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap } from 'lucide-react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('INITIALIZING_SYSTEM');

    const loadingStages = [
        'INITIALIZING_SYSTEM',
        'LOADING_MODULES',
        'COMPILING_DATA',
        'OPTIMIZING_PERFORMANCE',
        'SYSTEM_READY'
    ];

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        const textInterval = setInterval(() => {
            setLoadingText(prev => {
                const currentIndex = loadingStages.indexOf(prev);
                return loadingStages[Math.min(currentIndex + 1, loadingStages.length - 1)];
            });
        }, 600);

        return () => {
            clearInterval(progressInterval);
            clearInterval(textInterval);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-industrial-steel flex items-center justify-center"
        >
            <div className="max-w-md w-full px-6">
                {/* Logo/Icon */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="relative"
                    >
                        <Settings className="w-20 h-20 text-industrial-orange" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-industrial-orange/20 blur-xl"
                        />
                    </motion.div>
                </div>

                {/* Loading Text */}
                <div className="text-center mb-8">
                    <motion.h2
                        key={loadingText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl font-industrial font-bold text-white uppercase tracking-widest mb-2"
                    >
                        {loadingText}
                    </motion.h2>
                    <div className="flex items-center justify-center gap-2 text-industrial-orange">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-mono">{progress}%</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-slate-900 border border-slate-800 overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-industrial-orange to-industrial-yellow"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Scanning line effect */}
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </div>

                {/* System Info */}
                <div className="mt-8 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                        <span>CORE_VERSION</span>
                        <span className="text-industrial-orange">v2.0.1</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-500">
                        <span>PROTOCOL</span>
                        <span className="text-industrial-orange">INDUSTRIAL_TECH</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
