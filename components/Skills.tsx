import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { Activity, Database } from 'lucide-react';
import { techData, domainData } from '../constants';

const Skills: React.FC = () => {
  const [liveData, setLiveData] = useState<{ time: string, value: number, temp: number }[]>([]);
  const [simSpeed, setSimSpeed] = useState(3000);
  const [intensity, setIntensity] = useState(1);

  useEffect(() => {
    const generatePoint = (i: number) => ({
      time: `${i % 24}:00`,
      value: 40 + (Math.random() * 20 + Math.sin(i / 2) * 10) * intensity,
      temp: 60 + (Math.random() * 10 + Math.cos(i / 3) * 5) * intensity
    });

    const initialData = Array.from({ length: 12 }, (_, i) => generatePoint(i));
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
    <section id="expertise" className="py-24 bg-industrial-steel/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-industrial-concrete dark:text-white mb-4 tracking-tighter transition-colors">
            OPERATIONAL <span className="text-industrial-orange">INTELLIGENCE</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans text-lg transition-colors">
            Engineering a nexus between hardcore field operations and advanced predictive analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          {/* Tech Stack - Industrial Gauges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-industrial-steel/40 p-8 border border-slate-200 dark:border-slate-800 rounded-sm relative transition-colors"
          >
            <div className="absolute top-0 right-0 w-16 h-1 bg-industrial-orange"></div>
            <h3 className="text-xl font-heading font-bold text-industrial-concrete dark:text-white mb-10 flex items-center gap-3 transition-colors">
              <span className="p-2 bg-industrial-orange/10 border border-industrial-orange/30 rounded-sm">
                <Database className="w-5 h-5 text-industrial-orange" />
              </span>
              CORE TECHNOLOGY STACK
            </h3>

            <div className="space-y-8">
              {techData.map((skill, i) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-industrial font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 transition-colors">{skill.name}</span>
                    <span className="text-xs font-mono text-industrial-yellow">{skill.value}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-900 border border-slate-800 flex items-center px-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-1.5 bg-gradient-to-r from-industrial-orange to-industrial-yellow relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-white shadow-[0_0_8px_white]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Domain Knowledge Radar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-industrial-steel/40 p-8 border border-slate-200 dark:border-slate-800 rounded-sm relative transition-colors"
          >
            <div className="absolute top-0 right-0 w-16 h-1 bg-industrial-blue"></div>
            <h3 className="text-xl font-heading font-bold text-industrial-concrete dark:text-white mb-8 flex items-center gap-3 transition-colors">
              <span className="p-2 bg-industrial-blue/10 border border-industrial-blue/30 rounded-sm">
                <Activity className="w-5 h-5 text-industrial-blue" />
              </span>
              DOMAIN PROFICIENCY
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={domainData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#004E89"
                    strokeWidth={3}
                    fill="#004E89"
                    fillOpacity={0.4}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0d0d17', borderColor: '#334155', color: '#fff', fontSize: '12px' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Skills in Action - HMI Telemetry Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black p-8 border-4 border-slate-900 overflow-hidden relative shadow-2xl"
        >
          {/* CRT Screen Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20"></div>

          <div className="absolute top-4 right-6 flex items-center gap-4 z-30">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Signal Status</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] font-mono font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-[pulse_0.5s_infinite]"></span>
                HMI ONLINE
              </div>
            </div>
          </div>

          <div className="relative z-30">
            <h3 className="text-xl font-heading font-extrabold text-industrial-orange mb-1 flex items-center gap-3">
              <div className="w-2 h-6 bg-industrial-orange"></div>
              SYSTEM TELEMETRY SIMULATOR
            </h3>
            <p className="text-slate-500 text-[10px] font-mono mb-8 uppercase tracking-[0.2em] ml-5">
              Processing High-Frequency Vibration & Thermal Vectors <span className="animate-pulse">_</span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-3">
                <div className="h-[280px] w-full bg-[#050505] border border-slate-800 p-2 rounded-sm relative group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={liveData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                      <XAxis dataKey="time" tick={{ fill: '#334155', fontSize: 9 }} axisLine={false} tickLine={false} />
                      <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#000', borderColor: '#FF6B35', borderRadius: '0px', padding: '10px' }}
                        labelStyle={{ color: '#FF6B35', fontWeight: 'bold', fontSize: '10px', marginBottom: '4px' }}
                        itemStyle={{ fontSize: '11px', color: '#fff' }}
                      />
                      <Line
                        type="stepAfter"
                        dataKey="value"
                        stroke="#FF6B35"
                        strokeWidth={2}
                        dot={false}
                        name="Vibrational Load"
                        animationDuration={0}
                      />
                      <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#F7B801"
                        strokeWidth={1.5}
                        dot={false}
                        strokeDasharray="4 2"
                        name="Thermal Flux"
                        animationDuration={0}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  {/* Scan line animation */}
                  <div className="absolute inset-0 w-full h-[1px] bg-industrial-orange/5 animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-sm transition-colors">
                  <span className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest block mb-4">Controller Panel</span>
                  <div className="space-y-5">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] text-slate-400 font-mono">SAMPLING RATE</span>
                      <div className="flex gap-1">
                        {[5000, 3000, 1000].map(speed => (
                          <button
                            key={speed}
                            onClick={() => setSimSpeed(speed)}
                            className={`flex-1 py-1.5 rounded-sm text-[9px] font-bold transition-all border ${simSpeed === speed
                              ? 'bg-industrial-orange border-industrial-orange text-white'
                              : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-white'
                              }`}
                          >
                            {speed === 5000 ? 'LOW' : speed === 3000 ? 'MED' : 'HIGH'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] text-slate-400 font-mono">FLUID LOAD</span>
                      <div className="flex gap-1">
                        {[0.5, 1, 2].map(level => (
                          <button
                            key={level}
                            onClick={() => setIntensity(level)}
                            className={`flex-1 py-1.5 rounded-sm text-[9px] font-bold transition-all border ${intensity === level
                              ? 'bg-industrial-yellow border-industrial-yellow text-slate-900'
                              : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-white'
                              }`}
                          >
                            {level === 0.5 ? '0.5x' : level === 1 ? '1.0x' : '2.0x'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-industrial-orange/10 border border-industrial-orange/30 rounded-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-industrial font-bold text-industrial-orange">PREDICTIVE STABILITY</span>
                    <span className="text-[11px] font-mono text-industrial-orange dark:text-white transition-colors">{(94 + Math.random() * 5).toFixed(1)}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-800">
                    <div className="h-full bg-industrial-orange animate-pulse" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
