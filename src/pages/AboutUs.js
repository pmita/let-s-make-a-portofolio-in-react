import React from 'react';
//Let's import the About section component
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
//Let's import our motion animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;