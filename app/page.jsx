import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutMe />
            <Timeline/>
            <Projects />
            <Contact/>
        </div>
    );
}
