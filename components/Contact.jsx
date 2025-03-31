'use client';

import { motion } from 'framer-motion';
import { LuMail, LuMapPin } from "react-icons/lu";


export default function Contact() {
    return (
        <section className="py-20 bg-gray-900" id={'contact'}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        Get in Touch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <LuMail className="w-6 h-6 text-blue-400"/>
                                    <div>
                                        <p className="text-gray-400">Email</p>
                                        <a href="mailto:shreyasmulay23@gmail.com"
                                           className="text-white hover:text-blue-400">
                                            shreyasmulay23@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <LuMapPin className="w-6 h-6 text-blue-400"/>
                                    <div>
                                        <p className="text-gray-400">Location</p>
                                        <p className="text-white">Pune, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}