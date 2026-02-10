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
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Get in <span className="text-primary-400">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hello? Feel free to reach out.
                        I'm always open to discussing new opportunities and industrial collaborations.
                    </p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <User className="w-4 h-4" /> Full Name
                                </label>
                                <input
                                    id="name"
                                    {...register('name', { required: 'Name is required' })}
                                    placeholder="Shyamsundar D"
                                    autoComplete="name"
                                    aria-invalid={errors.name ? 'true' : 'false'}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    className={`w-full bg-slate-900/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all`}
                                />
                                {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>}
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> Email Address
                                </label>
                                <input
                                    id="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                    })}
                                    placeholder="shyam@example.com"
                                    autoComplete="email"
                                    aria-invalid={errors.email ? 'true' : 'false'}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className={`w-full bg-slate-900/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all`}
                                />
                                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Subject Field */}
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                            <input
                                id="subject"
                                {...register('subject', { required: 'Subject is required' })}
                                placeholder="Project Inquiry"
                                aria-invalid={errors.subject ? 'true' : 'false'}
                                aria-describedby={errors.subject ? 'subject-error' : undefined}
                                className={`w-full bg-slate-900/50 border ${errors.subject ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all`}
                            />
                            {errors.subject && <p id="subject-error" className="text-red-500 text-xs mt-1" role="alert">{errors.subject.message}</p>}
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" /> Your Message
                            </label>
                            <textarea
                                id="message"
                                {...register('message', { required: 'Message is required' })}
                                rows={5}
                                placeholder="Tell me more about your project..."
                                aria-invalid={errors.message ? 'true' : 'false'}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                                className={`w-full bg-slate-900/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none`}
                            />
                            {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{errors.message.message}</p>}
                        </div>

                        {/* ARIA Live Region for Status */}
                        <div className="sr-only" aria-live="polite">
                            {status === 'sending' && "Sending message..."}
                            {status === 'success' && "Message sent successfully!"}
                            {status === 'error' && "Something went wrong. Please try again."}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl ${status === 'success'
                                ? 'bg-green-600 text-white'
                                : status === 'error'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-primary-600 hover:bg-primary-500 text-white shadow-primary-600/20'
                                }`}
                        >
                            {status === 'idle' && (
                                <>
                                    <Send className="w-5 h-5" /> Send Message
                                </>
                            )}
                            {status === 'sending' && (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            )}
                            {status === 'success' && (
                                <>
                                    <CheckCircle className="w-5 h-5" /> Message Sent Successfully!
                                </>
                            )}
                            {status === 'error' && (
                                <>
                                    <AlertCircle className="w-5 h-5" /> Something went wrong.
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
