import React from 'react';
//Let's import the About section component
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

const AboutUs = () => {
    return (
        <>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </>
    );
}

export default AboutUs;