import React from 'react';
//Let's import images
import home1 from '../img/home1.png';
//Let's import our styled components
import {About, Description, Image, Hide} from '../styles';
//Let's import our Framer motion library
import {motion} from 'framer-motion';

const AboutSection = () => {
    /*
        Let's create our variants. Framer Motion variables
    */

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>

                <p>Contact us for any photography or videography ideas you have.
                    We have professionals with amazing skills.
                </p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="Random guy with a camera" />
            </Image>
        </About>
    );
}

export default AboutSection;