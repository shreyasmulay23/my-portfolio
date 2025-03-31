'use client';

import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#1d1836',
                color: '#fff',
                boxShadow: '8px 8px #A5158C',
                borderRadius: '1rem',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
            date={experience.year}
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
                    <h3 className="text-white text-[24px] font-bold">{experience.company}</h3>
                    <p
                        className="text-secondary text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        {experience.title}
                    </p>
                    <span className="text-white-100 text-[14px]">{experience.description}</span>
                </div>
            </motion.div>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;