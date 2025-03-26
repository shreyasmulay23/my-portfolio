"use client";
import { motion } from "framer-motion";
import FloatingShapes from './FloatingShapes';

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
            {/* 3D Wavy Background Effect */}
            <div className="animated-bg"></div>

            {/* Floating 3D Shapes in Background */}
            <FloatingShapes />


            {/* Name with Smooth Fade-in Animation */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-extrabold tracking-wide text-center text-white relative z-10"
            >
                Hi, I'm <span className="text-blue-400">Shreyas Mulay</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg md:text-2xl mt-4 text-gray-300 text-center relative z-10"
            >
                Senior Frontend Engineer | AI & 3D Web | Performance Optimization
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-6 flex gap-6 relative z-10"
            >
                <a
                    href="/resume.pdf"
                    className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md
                     hover:bg-blue-700 transition-all duration-300"
                >
                    Download Resume
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border-2 border-gray-400 text-gray-300 font-bold text-lg rounded-lg
                     hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
