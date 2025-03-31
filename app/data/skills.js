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

export const skills = [
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