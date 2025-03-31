import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Timeline/>
            <Projects/>
            {/*<Projects_1 />*/}
            <Contact/>
        </div>
    );
}
