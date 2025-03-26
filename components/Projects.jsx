'use client';

import {motion} from 'framer-motion';
import { AiFillGithub } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

const projects = [
    {
        title: 'Modern Web Application',
        description: 'Full-stack application built with React, Node.js and MongoDB',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com',
        live: 'https://example.com',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'E-commerce Platform',
        description: 'E-commerce solution with real-time inventory management',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com',
        live: 'https://example.com',
        tags: ['Next.js', 'Express', 'PostgreSQL']
    },
    {
        title: 'Data Analytics Dashboard',
        description: 'Interactive dashboard for data visualization and analysis',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com',
        live: 'https://example.com',
        tags: ['TypeScript', 'D3.js', 'Node.js']
    }
];

export default function Projects() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-4xl font-bold text-white mb-12 text-center"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.2}}
                            className="bg-gray-800 rounded-lg overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <AiFillGithub className="w-5 h-5"/>
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <LuExternalLink className="w-5 h-5"/>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}