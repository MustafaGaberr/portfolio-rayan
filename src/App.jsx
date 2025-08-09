import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsCarousel from './components/ProjectsCarousel';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import SiteNavbar from './components/SiteNavbar';
import SiteFooter from './components/SiteFooter';
import './App.css';

function App() {
    return (
        <div className="App">
            <SiteNavbar />
            <Hero />
            <About />
            <ProjectsCarousel />
            <Partners />
            <Testimonials />
            <Contact />
            <SiteFooter />
        </div>
    );
}

export default App;