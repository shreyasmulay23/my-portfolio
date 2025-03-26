'use client';

import { motion } from 'framer-motion';
import {
    PiBracketsAngle,
    PiBrain,
    PiChartLineUp,
    PiCube,
    PiGitBranch,
    PiLockKey,
    PiPuzzlePiece,
    PiRocket
} from 'react-icons/pi';

const skills = [
    {
        icon: <PiBrain size={24}/>,
        title: 'AI & Interactive Web Development',
        description: 'Integrating AI-driven features and building immersive 3D web applications using ML models, Three.js, and WebGL.'
    },
    {
        icon: <PiCube size={24}/>,
        title: 'Component-Based & Scalable UI Development',
        description: 'Developing reusable, high-performance UI components with React, Web Components, and state management libraries.'
    },
    {
        icon: <PiRocket size={24}/>,
        title: 'High-Performance & Optimized Frontend',
        description: 'Enhancing speed with caching, lazy loading, API optimizations, and rendering performance improvements.'
    },
    {
        icon: <PiPuzzlePiece size={24}/>,
        title: 'Interactive UI & Motion Design',
        description: 'Enhancing user engagement with smooth animations, micro-interactions, and gesture-based UI using Framer Motion and GSAP.'
    },
    {
        icon: <PiBracketsAngle size={24}/>,
        title: 'Microservices & API Development',
        description: 'Designing efficient RESTful APIs, optimizing data flow, and ensuring seamless integration with microservices architecture.'
    },
    {
        icon: <PiLockKey size={24}/>,
        title: 'Secure Authentication & Payment Systems',
        description: 'Implementing OAuth-based authentication (Google, Apple, Discord) and secure payment gateways like Stripe.'
    },
    {
        icon: <PiGitBranch size={24}/>,
        title: 'Agile Development & DevOps',
        description: 'Following CI/CD practices, automated testing, and version control workflows for efficient software delivery.'
    },
    {
        icon: <PiChartLineUp size={24}/>,
        title: 'Cross-Platform & Mobile Optimization',
        description: 'Ensuring accessibility, responsiveness, and performance across devices with mobile-first development strategies.'
    }
];


export default function AboutMe() {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-gray-400 text-lg">
                        Experienced Frontend Engineer specializing in React, Web Components, and 3D web applications.
                        Passionate about building fast, scalable, and user-friendly digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-700 p-6 rounded-lg"
                        >
                            <div className="text-blue-400 mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {skill.title}
                            </h3>
                            <p className="text-gray-400">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}