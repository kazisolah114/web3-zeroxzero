import React, { useContext } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { Helmet } from 'react-helmet';
import HowItWorks from '../HowItWorks/HowItWorks';
import WhyUs from '../WhyUS/WhyUs';
import Features from '../Features/Features';
import AboutUs from '../AboutUs/AboutUs';
import OurVision from '../OurVision/OurVision';
import HighFlyers from '../HighFlyers/HighFlyers';
import Testimonials from '../Testimonials/Testimonials';
import RoadmapSection from '../RoadmapSection/RoadmapSection';
import JoinCommunity from '../JoinCommunity/JoinCommunity';
import TokenStats from '../TokenStats/TokenStats';
import BlogsSection from '../BlogsSection/BlogsSection';
import Publications from '../Publications/Publications';
import FeaturedOn from '../FeaturedOn/FeaturedOn';

const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>0x0 - AI Powered Trade Alerts</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <HeroSection />
            {/* <FeaturedOn /> */}
            <HowItWorks  />
            <TokenStats />
            <Features />
            <AboutUs />
            <WhyUs />
            <HighFlyers />
            <RoadmapSection />
            <Publications />
            <OurVision />
            <JoinCommunity />
            <Testimonials />
            <BlogsSection />
        </div>
    );
};

export default Home;