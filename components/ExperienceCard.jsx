'use client';

import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const ExperienceCard = ({ experience, index }) => {
    const { theme } = useTheme();
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: theme === 'dark' ? '#1d1836' : '#eef2ff',
                color: '#fff',
                boxShadow: `${index % 2 === 0 ? '-8px -8px #A5158C' : '8px 8px #A5158C'}`,
                borderRadius: '1rem',
                border: '1px solid rgb(29, 24, 54)'
            }}
            contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
            date={experience.year}
            dateClassName={'year-text-color'}
            iconStyle={{ background: '#A5158C' }}
            icon={
                <div className="flex  w-full h-full">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-full flex justicenter w-full"
                    >
                        {experience.icon === 'work' ? (
                            <LuBriefcase className="w-6 h-6 text-white"/>
                        ) : (
                            <LuGraduationCap className="w-6 h-6 text-white"/>
                        )}
                    </motion.div>
                </div>
            }
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col gap-3">
                    <h3 className="text-fuchsia-500 text-[24px] font-bold">{experience.company}</h3>
                    <p
                        className="text-black dark:text-white text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        {experience.title}
                    </p>
                    <span className="text-black dark:text-gray-400 text-[14px] text-justify">{experience.description}</span>
                </div>
            </motion.div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;