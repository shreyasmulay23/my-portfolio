import { AnimatePresence, motion } from 'framer-motion';
import { LuExternalLink, LuX } from 'react-icons/lu';
import { AiOutlineGithub } from 'react-icons/ai';
import { PiVideoCameraFill } from 'react-icons/pi';


export default function ProjectModal({ project, isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-ivory dark:bg-primary text-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                            <LuX className="w-5 h-5 cursor-pointer" color={'black'}/>
                        </button>

                        <div className="aspect-video w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-t-xl"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-fuchsia-500 mb-2">{project.title}</h3>
                            <p className="text-black dark:text-gray-400 mb-4 text-justify">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            {project.details && (
                                <div className="space-y-6">
                                    {project.details.problem && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-fuchsia-500 mb-2">Problem</h4>
                                            <p className="text-black dark:text-gray-400 text-justify">{project.details.problem}</p>
                                        </div>
                                    )}

                                    {project.details.solution && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-fuchsia-500 mb-2">Solution</h4>
                                            <p className="text-black dark:text-gray-400 text-justify">{project.details.solution}</p>
                                        </div>
                                    )}

                                    {project.details.features && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-fuchsia-500 mb-2">Key
                                                Features</h4>
                                            <ul className="list-disc list-inside space-y-1 text-black dark:text-gray-400">
                                                {project.details.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.details.impact && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-fuchsia-500 mb-2">Impact</h4>
                                            <p className="text-black dark:text-gray-400 text-justify">{project.details.impact}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="flex gap-4 mt-6 pt-6 border-t">
                                {project.github && (<a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-800  hover:text-white transition-colors"
                                >
                                    <AiOutlineGithub className="w-5 h-5"/>
                                    View Code
                                </a>)}

                                {project.live && (<a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <LuExternalLink className="w-5 h-5"/>
                                    Live Demo
                                </a>)}
                                {project.demoVideos && (<a
                                    href={project.demoVideos}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-800  hover:text-white transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <PiVideoCameraFill className="w-5 h-5"/>
                                    Demo Videos
                                </a>)}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}