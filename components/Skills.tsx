import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
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
    <section id="expertise" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical & Domain <span className="text-primary-400">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A unique combination of hardcore engineering operations and modern data science capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Tech Stack Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Data Science Toolkit
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={techData} margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                    {techData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Domain Knowledge Radar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
              Engineering Operations
            </h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={domainData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Proficiency" dataKey="A" stroke="#8b5cf6" strokeWidth={3} fill="#8b5cf6" fillOpacity={0.3} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Skills in Action - Live Telemetry Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border border-slate-800 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Live Engine Simulation
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary-400" />
            Skills in Action: Telemetry Analytics
          </h3>
          <p className="text-slate-400 text-sm mb-8 max-w-2xl">
            Simulating real-time sensor data from heavy machinery. Demonstrating the ability to process, visualize, and extract patterns from high-frequency industrial IOT streams.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Simulation Speed</span>
              <div className="flex gap-2">
                {[5000, 3000, 1000].map(speed => (
                  <button
                    key={speed}
                    onClick={() => setSimSpeed(speed)}
                    aria-pressed={simSpeed === speed}
                    className={`px-3 py-1 rounded text-[10px] font-bold transition-all border ${simSpeed === speed
                        ? 'bg-primary-600 border-primary-500 text-white'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                  >
                    {speed === 5000 ? 'Slow' : speed === 3000 ? 'Normal' : 'Fast'}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Load Intensity</span>
              <div className="flex gap-2">
                {[0.5, 1, 2].map(level => (
                  <button
                    key={level}
                    onClick={() => setIntensity(level)}
                    aria-pressed={intensity === level}
                    className={`px-3 py-1 rounded text-[10px] font-bold transition-all border ${intensity === level
                        ? 'bg-primary-600 border-primary-500 text-white'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                  >
                    {level === 0.5 ? 'Low' : level === 1 ? 'Medium' : 'High'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={liveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={false}
                  name="Vibration (Hz)"
                  animationDuration={300}
                />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#f43f5e"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  name="Bearing Temp (°C)"
                  animationDuration={300}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
