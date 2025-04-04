'use client';

import { LuMail, LuMapPin, LuSend } from 'react-icons/lu';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../app/utils/animations';
import { gradientText } from '../app/utils/gradients';

export default function Contact() {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        try {
            setIsSubmitting(true);
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            toast.success('Message sent successfully!');
            formRef.current.reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-ivory dark:bg-primary">
            <Toaster position="top-right"/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`block bg-clip-text text-transparent animate-gradient leading-normal text-center mb-16 text-3xl md:text-4xl font-bold ${gradientText}`}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-bold text-fuchsia-500">Let's talk about everything!</h3>
                        <p className="text-black dark:text-white">
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <LuMail className="w-6 h-6 text-blue-400"/>
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <a href="mailto:shreyasmulay23@gmail.com"
                                       className="text-black dark:text-white hover:text-blue-400">
                                        shreyasmulay23@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <LuMapPin className="w-6 h-6 text-blue-400"/>
                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <p className="text-black dark:text-white">Pune, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        variants={fadeInUp}
                    >
                        <div>
                            <label htmlFor="name" className="block text-black dark:text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-4 py-2 bg-ivory dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-black dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-black dark:text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_name"
                                id="email"
                                required
                                className="w-full px-4 py-2 bg-ivory dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-black dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-black dark:text-white mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full px-4 py-2 bg-ivory dark:bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-black dark:text-white"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                'Sending...'
                            ) : (
                                <>
                                    Send Message
                                    <LuSend className="w-5 h-5"/>
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}