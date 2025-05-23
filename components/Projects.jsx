'use client';

import { useState } from 'react';
import { LuExternalLink, LuGithub } from 'react-icons/lu';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import { projectsData } from '../app/data/projects';
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai';
import { gradientText } from '../app/utils/gradients';
import { PiVideoCameraFill } from 'react-icons/pi';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-ivory dark:bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-3xl md:text-4xl font-bold text-center mb-16 block bg-clip-text text-transparent animate-gradient leading-normal ${gradientText}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -8 }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative card-background card-shadow text-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-fuchsia-500">{project.title}</h3>
                                <p className="mb-4 text-black dark:text-gray-400">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-indigo-100 text-fuchsia-500 rounded-full text-sm font-semibold"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.github && (<a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <AiOutlineGithub className="w-5 h-5"/>
                                        Code
                                    </a>)}
                                    {project.live && (<a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <LuExternalLink className="w-5 h-5"/>
                                        Live Demo
                                    </a>)}
                                    {project.demoVideos && (<a
                                        href={project.demoVideos}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <PiVideoCameraFill className="w-5 h-5"/>
                                        Demo Videos
                                    </a>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}