import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Email validation regex
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
        // Clear error when user starts typing
        if (status.type === 'error') {
            setStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim()) {
            setStatus({ type: 'error', message: 'Please enter your name' });
            return;
        }

        if (!validateEmail(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address' });
            return;
        }

        if (!formData.message.trim()) {
            setStatus({ type: 'error', message: 'Please enter a message' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // EmailJS configuration
            // TODO: Replace these with your actual EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });

            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly at muhammedsaalim005@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-black text-white py-16 px-6 md:px-24 border-t border-white/5 relative z-10">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="block font-mono text-xs uppercase tracking-[0.4em] text-zinc-600 mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-800"></span>
                        Get in Touch
                    </span>
                    <h2 className="text-5xl font-thin tracking-tight text-white mb-6">
                        Contact
                    </h2>
                    <p className="text-zinc-500 font-light leading-relaxed text-sm max-w-xl">
                        Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-mono text-zinc-400 mb-2 uppercase tracking-wide">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors font-light"
                            placeholder="Your name"
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-mono text-zinc-400 mb-2 uppercase tracking-wide">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors font-light"
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-mono text-zinc-400 mb-2 uppercase tracking-wide">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors font-light resize-none"
                            placeholder="Your message..."
                            disabled={isSubmitting}
                        ></textarea>
                    </div>

                    {/* Status Message */}
                    {status.message && (
                        <div className={`text-sm font-light ${status.type === 'success' ? 'text-green-400' : 'text-red-400'
                            }`}>
                            {status.message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative px-8 py-3 border border-zinc-700 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {/* Direct Email */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-zinc-500 font-light text-sm">
                        Or email me directly at{' '}
                        <a
                            href="mailto:muhammedsaalim005@gmail.com"
                            className="text-white hover:text-zinc-300 transition-colors underline"
                        >
                            muhammedsaalim005@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
