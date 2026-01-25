import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Instagram, ArrowRight } from 'lucide-react';

const SectionLabel = ({ children }) => (
    <div className="flex items-center gap-3 mb-12">
        <div className="w-2 h-2 bg-white flex-shrink-0" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">{children}</span>
        <div className="h-[1px] flex-1 bg-white/10" />
    </div>
);

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (status.type === 'error') {
            setStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !validateEmail(formData.email) || !formData.message.trim()) {
            setStatus({ type: 'error', message: 'DATA_VALIDATION_FAILED: Check all fields.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            // await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

            setStatus({
                type: 'success',
                message: 'TRANSMISSION_SUCCESSFUL: Handshake established.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'LINK_FAILURE: Use manual override @ muhammedsaalim005@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                    {/* Left side: Information */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <SectionLabel>Signal Transmission</SectionLabel>
                            <h2 className="text-7xl md:text-8xl lg:text-9xl font-['Outfit'] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                                GET <br />
                                <span className="text-white/10">IN</span> <br />
                                TOUCH.
                            </h2>
                            <p className="font-['Outfit'] font-light text-white/40 text-lg leading-relaxed max-w-sm mb-12">
                                Currently accepting high-impact architectural challenges. Initial response time: &lt; 24h.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="font-mono text-[10px] uppercase tracking-widest text-white/20 mb-4">Direct Link</div>
                                <a href="mailto:muhammedsaalim005@gmail.com" className="text-2xl md:text-3xl font-['Outfit'] font-light hover:text-white/60 transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-white/40">
                                    muhammedsaalim005@gmail.com
                                </a>
                            </div>

                            <div className="flex gap-12 pt-8">
                                <a href="https://github.com/mohmdsaalim" className="flex items-center gap-2 group">
                                    <Github size={18} className="text-white/40  transition-colors" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 ">GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/muhammed-saalim-k-m-5714a2367/" className="flex items-center gap-2 group">
                                    <Linkedin size={18} className="text-white/40  transition-colors" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">LinkedIn</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 group">
                                    <Instagram size={18} className="text-white/40  transition-colors" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 ">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Form */}
                    <div className="lg:col-span-7">
                        <SectionLabel>Packet Assembly</SectionLabel>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                            <div className="group border-b border-white/10 focus-within:border-white transition-colors py-4">
                                <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 group-focus-within:text-white/60">01_Sender_Identity</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter full name"
                                    className="w-full bg-transparent border-none outline-none font-['Outfit'] text-2xl py-2 text-white placeholder:text-white/5"
                                />
                            </div>

                            <div className="group border-b border-white/10 focus-within:border-white transition-colors py-4">
                                <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 group-focus-within:text-white/60">02_Return_Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                    className="w-full bg-transparent border-none outline-none font-['Outfit'] text-2xl py-2 text-white placeholder:text-white/5"
                                />
                            </div>

                            <div className="group border-b border-white/10 focus-within:border-white transition-colors py-4">
                                <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/20 group-focus-within:text-white/60">03_Payload_Content</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Brief technical requirements or message"
                                    rows="4"
                                    className="w-full bg-transparent border-none outline-none font-['Outfit'] text-2xl py-2 text-white placeholder:text-white/5 resize-none"
                                />
                            </div>

                            {status.message && (
                                <div className={`font-mono text-[10px] tracking-widest uppercase ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-12 py-6 bg-white text-black font-mono text-[11px] uppercase tracking-[0.5em] hover:bg-white/90 transition-all flex items-center justify-center gap-4 group"
                            >
                                {isSubmitting ? 'Processing...' : 'Execute_Transmission'}
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 font-mono text-[9px] text-white/10 uppercase tracking-widest text-right">
                            Protocol: HTTPS/TLS_1.3 <br />
                            Encryption: AES-256
                        </div>
                    </div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute -bottom-20 -left-10 pointer-events-none select-none h-full justify-center opacity-[0.02]">
                <span className="font-['Outfit'] text-[25vw] font-black leading-none">saalim</span>
            </div>
        </section>
    );
};

export default Contact;
