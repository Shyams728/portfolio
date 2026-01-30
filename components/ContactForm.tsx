import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare } from 'lucide-react';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setStatus('sending');
        try {
            const response = await fetch("https://formspree.io/f/xbdokdzn", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
                reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-industrial-steel relative overflow-hidden">
            {/* Industrial Textures */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-orange/10 border border-industrial-orange/30 text-industrial-orange text-[10px] font-industrial font-bold uppercase tracking-[0.2em] mb-4">
                        <span className="w-1.5 h-1.5 bg-industrial-orange animate-pulse"></span>
                        External Communications Protocol
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-industrial-concrete dark:text-white mb-4 tracking-tighter transition-colors">
                        ISSUE <span className="text-industrial-orange">WORK ORDER</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 font-sans max-w-xl mx-auto transition-colors">
                        Initiate a technical consultation or collaborative inquiry. All requests are prioritized by the optimization engine.
                    </p>
                </div>

                <div className="bg-industrial-steel border-2 border-slate-300 dark:border-slate-800 p-8 md:p-12 rounded-sm relative shadow-2xl transition-colors duration-500">
                    {/* Metal Panel Detail */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-industrial-orange -translate-x-1 -translate-y-1"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-industrial-orange translate-x-1 -translate-y-1"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-industrial-orange -translate-x-1 translate-y-1"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-industrial-orange translate-x-1 translate-y-1"></div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    <User className="w-3 h-3 text-industrial-orange" /> REQUESTOR_IDENTITY [FULL NAME]
                                </label>
                                <input
                                    {...register('name', { required: 'Identifier required' })}
                                    placeholder="Jane Doe"
                                    className={`w-full bg-slate-50 dark:bg-[#0d0d17] border ${errors.name ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-800'} rounded-none px-4 py-3 text-industrial-concrete dark:text-white font-mono text-sm placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:outline-none focus:border-industrial-orange transition-all`}
                                />
                                {errors.name && <p className="text-red-500 font-mono text-[10px] mt-1 uppercase">ERR: {errors.name.message}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    <Mail className="w-3 h-3 text-industrial-orange" /> COMMS_ENDPOINT [EMAIL]
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Endpoint required',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid syntax' }
                                    })}
                                    placeholder="jane@network.com"
                                    className={`w-full bg-slate-50 dark:bg-[#0d0d17] border ${errors.email ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-800'} rounded-none px-4 py-3 text-industrial-concrete dark:text-white font-mono text-sm placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:outline-none focus:border-industrial-orange transition-all`}
                                />
                                {errors.email && <p className="text-red-500 font-mono text-[10px] mt-1 uppercase">ERR: {errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Subject Field */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest">ORDER_SUBJECT [CATEGORY]</label>
                            <input
                                {...register('subject', { required: 'Subject required' })}
                                placeholder="Data Pipeline Optimization / Maintenance Consultation"
                                className={`w-full bg-slate-50 dark:bg-[#0d0d17] border ${errors.subject ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-800'} rounded-none px-4 py-3 text-industrial-concrete dark:text-white font-mono text-sm placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:outline-none focus:border-industrial-orange transition-all`}
                            />
                            {errors.subject && <p className="text-red-500 font-mono text-[10px] mt-1 uppercase">ERR: {errors.subject.message}</p>}
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-industrial font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <MessageSquare className="w-3 h-3 text-industrial-orange" /> MAINTENANCE_LOG [DESCRIPTION]
                            </label>
                            <textarea
                                {...register('message', { required: 'Log entry required' })}
                                rows={5}
                                placeholder="Detailed description of requirements, system constraints, and objectives..."
                                className={`w-full bg-slate-50 dark:bg-[#0d0d17] border ${errors.message ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-800'} rounded-none px-4 py-3 text-industrial-concrete dark:text-white font-mono text-sm placeholder:text-slate-400 dark:placeholder:text-slate-700 focus:outline-none focus:border-industrial-orange transition-all resize-none`}
                            />
                            {errors.message && <p className="text-red-500 font-mono text-[10px] mt-1 uppercase">ERR: {errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-4 rounded-none font-industrial font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all ${status === 'success'
                                ? 'bg-green-600 text-white'
                                : status === 'error'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-industrial-orange hover:bg-industrial-orange-light text-slate-950 shadow-[0_0_20px_rgba(255,107,53,0.2)]'
                                }`}
                        >
                            {status === 'idle' && (
                                <>
                                    <Send className="w-5 h-5" /> TRANSMIT_REQUEST
                                </>
                            )}
                            {status === 'sending' && (
                                <>
                                    <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                                    UPLOADING_BUFFER...
                                </>
                            )}
                            {status === 'success' && (
                                <>
                                    <CheckCircle className="w-5 h-5" /> SYSTEM: SUCCESS_STATUS
                                </>
                            )}
                            {status === 'error' && (
                                <>
                                    <AlertCircle className="w-5 h-5" /> SYSTEM: UPLOAD_FAILURE
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-industrial-steel border border-slate-300 dark:border-slate-800 rounded-sm transition-colors">
                        <span className="text-[9px] font-industrial text-slate-500 uppercase block mb-1">Response Time</span>
                        <span className="text-xs font-mono text-industrial-yellow">T-MINUS 24H</span>
                    </div>
                    <div className="p-4 bg-industrial-steel border border-slate-300 dark:border-slate-800 rounded-sm transition-colors">
                        <span className="text-[9px] font-industrial text-slate-500 uppercase block mb-1">Availability</span>
                        <span className="text-xs font-mono text-industrial-yellow">REMOTE / ON-SITE</span>
                    </div>
                    <div className="p-4 bg-industrial-steel border border-slate-300 dark:border-slate-800 rounded-sm transition-colors">
                        <span className="text-[9px] font-industrial text-slate-500 uppercase block mb-1">Direct Secure Line</span>
                        <span className="text-xs font-mono text-industrial-yellow">ENCRYPTED_SMTP</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
