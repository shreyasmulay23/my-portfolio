import AboutMe from '../components/AboutMe';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import HeroSection from '../components/HeroSection';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <AboutMe/>
            <Timeline/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}
