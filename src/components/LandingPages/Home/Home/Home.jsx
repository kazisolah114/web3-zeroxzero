import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { Helmet } from 'react-helmet';
import HowItWorks from '../HowItWorks/HowItWorks';
import WhyUs from '../WhyUS/WhyUs';
import Features from '../Features/Features';
import AboutUs from '../AboutUs/AboutUs';
import OurVision from '../OurVision/OurVision';
import HighFlyers from '../HighFlyers/HighFlyers';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | 0x0</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <HeroSection />
            <HowItWorks  />
            <WhyUs />
            <AboutUs />
            <Features />
            <HighFlyers />
            <OurVision />
            <Testimonials />
        </div>
    );
};

export default Home;