import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Contact_1 from '../components/Contact_1';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Timeline/>
            <Projects/>
            {/*<Contact_1/>*/}
            <Contact/>
            <Footer/>
        </div>
    );
}
