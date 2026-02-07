import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Settings, BarChart3, Github, Linkedin, Mail } from 'lucide-react';
import TechMarquee from './TechMarquee';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 sm:pt-20 overflow-hidden bg-slate-950">
        {/* Panoramic Background with Parallax effect */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="photos/phanoramic background photo.jpg"
            alt="Industrial Background"
            className="w-full h-full object-cover"
          />
          {/* Sophisticated Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-1" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono mb-5 sm:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                System Online: Available for Hire
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-5 sm:mb-6 leading-tight text-white">
                Bridging <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-500 to-accent-500">
                  Heavy Industry
                </span> <br />
                with Data Science
              </h1>

              <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                I transform 5+ years of hands-on L&T Construction & Mining machinery experience into actionable business insights using Python, SAP, and Advanced Maintenance Analytics.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="group flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-all"
                >
                  View Analytics Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-all hover:border-primary-500/50"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-6 text-slate-400">
                <a href="https://github.com/Shyams728" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shyamsundar-dharwad-052690aa/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:shyamsundardharwad@gmail.com" className="hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center relative"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 m-auto w-48 h-48 bg-slate-800/50 rounded-full border border-slate-700 flex items-center justify-center backdrop-blur-md z-20 animate-float">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">5+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Years Exp</div>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-full rounded-full border border-dashed border-slate-700/50 z-10"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 border border-slate-600 rounded-lg flex items-center justify-center text-primary-400">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-slate-900 border border-slate-600 rounded-lg flex items-center justify-center text-accent-400">
                    <Database className="w-6 h-6" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 w-auto h-auto rounded-full border border-slate-700/30 z-10"
                >
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border border-slate-600 rounded-full flex items-center justify-center text-green-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                </motion.div>

                <div className="absolute -right-4 top-1/4 glass p-4 rounded-lg border-l-4 border-l-primary-500 z-30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <pre className="text-xs font-mono text-slate-300">
                    <span className="text-purple-400">def</span> <span className="text-blue-400">optimize_uptime</span>(data):{'\n'}
                    {'  '}metrics = analyze_logs(data){'\n'}
                    {'  '}return metrics.predict(<span className="text-green-400">'fail'</span>)
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <TechMarquee />
    </div>
  );
};

export default Hero;
