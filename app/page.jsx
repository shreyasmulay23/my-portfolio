import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact/>
        </div>
    );
}
