import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, Settings, BarChart3, Download, Github, Linkedin, Mail, TrendingUp, Zap, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const metrics = [
    { icon: <TrendingUp className="w-4 h-4" />, label: 'OPTIMIZATION_UPLIFT', value: '+18%' },
    { icon: <Zap className="w-4 h-4" />, label: 'DEPLOYED_PROJECTS', value: '45+' },
    { icon: <Target className="w-4 h-4" />, label: 'PREDICTIVE_ACCURACY', value: '96%' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-industrial-steel">
      {/* Panoramic Background with Parallax effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="photos/phanoramic background photo.jpg"
          alt="Industrial Background"
          className="w-full h-full object-cover blur-[2px]"
        />
        {/* Sophisticated Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-steel via-industrial-steel/40 to-industrial-steel" />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-steel via-industrial-steel/60 to-transparent" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
      </motion.div>

      <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Metrics Ticker */}
            <div className="mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMetric}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-sm"
                >
                  <div className="text-industrial-orange">
                    {metrics[currentMetric].icon}
                  </div>
                  <span className="text-[10px] font-industrial text-slate-500 uppercase tracking-widest">
                    {metrics[currentMetric].label}
                  </span>
                  <span className="text-sm font-heading font-black text-industrial-orange">
                    {metrics[currentMetric].value}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Status Panel Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-industrial-orange/30 bg-industrial-steel/80 backdrop-blur-md mb-8 group shadow-[0_0_15px_rgba(255,107,53,0.1)]">
              <div className="flex h-3 w-3 relative">
                <span className="animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </div>
              <span className="text-industrial-orange font-industrial text-sm tracking-wider uppercase font-bold">
                System Online: Available to Optimize <span className="animate-pulse">_</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter mb-4 leading-[0.9] text-white">
              INDUSTRIAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange via-industrial-yellow to-industrial-orange">
                DATA SCIENTIST
              </span>
            </h1>

            <p className="font-industrial text-xl text-industrial-orange/80 mb-6 tracking-widest uppercase">
              Shyamsundar Dharwad
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl font-sans">
              Bridging Heavy Industry with Data Science. 5+ years of hands-on experience in Construction & Mining machinery, now transforming sensors into <span className="text-industrial-yellow font-semibold">Maintenance Intelligence</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-4 bg-industrial-orange text-white font-bold rounded-sm hover:bg-industrial-orange/90 transition-all uppercase tracking-widest shadow-[0_4px_0_0_#CC552B] active:translate-y-1 active:shadow-none"
              >
                Launch Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 px-8 py-4 border-2 border-slate-700 text-white font-bold rounded-sm hover:bg-slate-800 transition-all hover:border-industrial-yellow/50 uppercase tracking-widest"
              >
                Work Order
              </a>
              <a
                href="docs/data science shyam resume.pdf"
                download
                className="flex items-center gap-3 px-8 py-4 border-2 border-industrial-orange/50 text-industrial-orange font-bold rounded-sm hover:bg-industrial-orange/10 transition-all uppercase tracking-widest group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Resume
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-slate-400">
              <a href="https://github.com/Shyams728" target="_blank" rel="noreferrer" className="hover:text-industrial-orange transition-all transform hover:scale-110">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/shyamsundar-dharwad-052690aa/" target="_blank" rel="noreferrer" className="hover:text-industrial-blue transition-all transform hover:scale-110">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="mailto:shyamsundardharwad@gmail.com" className="hover:text-industrial-yellow transition-all transform hover:scale-110">
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Gauges/Meters visualization would go here, for now keeping the circle but style it more industrial */}
              <div className="absolute inset-0 m-auto w-64 h-64 bg-industrial-steel/80 border-2 border-slate-700 rounded-lg flex items-center justify-center backdrop-blur-md z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="text-center relative z-10">
                  <div className="text-6xl font-heading font-bold text-industrial-orange mb-1">5+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-[0.3em] font-industrial">Years Ops</div>
                </div>
                {/* Subtle scanning line effect */}
                <div className="absolute inset-0 w-full h-1 bg-industrial-orange/20 animate-[scan_3s_ease-in-out_infinite]"></div>
              </div>

              {/* Orbital Icons styled as components */}
              {[
                { Icon: Settings, color: 'text-industrial-orange', delay: 0, angle: 0 },
                { Icon: Database, color: 'text-industrial-yellow', delay: 5, angle: 120 },
                { Icon: BarChart3, color: 'text-industrial-blue', delay: 10, angle: 240 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-full rounded-full pointer-events-none"
                  style={{ transform: `rotate(${item.angle}deg)` }}
                >
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-industrial-steel border-2 border-slate-700 rounded-sm flex items-center justify-center ${item.color} shadow-lg pointer-events-auto`}>
                    <item.Icon className="w-8 h-8" />
                  </div>
                </motion.div>
              ))}

              {/* Terminal Snippet */}
              <div className="absolute -right-8 top-1/4 w-72 bg-[#0d0d17] rounded-md border border-slate-700 shadow-2xl z-30 transform rotate-2 hover:rotate-0 transition-all duration-500 overflow-hidden">
                <div className="bg-[#1e1e2e] px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest ml-2">optimizer.py</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <pre className="text-slate-300">
                    <span className="text-pink-500">def</span> <span className="text-blue-400">optimize_uptime</span>(data):{'\n'}
                    {'  '}metrics = analyze_logs(data){'\n'}
                    {'  '}<span className="text-pink-500">return</span> metrics.predict(<br />
                    {'    '}<span className="text-industrial-yellow">'failure_risk'</span><br />
                    {'  '})
                  </pre>
                  {/* Blinking cursor */}
                  <div className="inline-block w-2 h-4 bg-industrial-orange animate-pulse ml-1 translate-y-0.5"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-orange/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;