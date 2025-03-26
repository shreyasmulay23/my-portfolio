import Hero from '../components/Hero';
import Canvas3D from '../components/Canvas3D';
import AboutMe from '../components/AboutMe';
import ParticlesBackground from '../components/ParticlesBackground';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <div>
            {/*<Canvas3D />*/}
            {/*<ParticlesBackground />*/}
            <Hero />
            <AboutMe />
            <Projects />
            <Contact/>
        </div>
    );
}
