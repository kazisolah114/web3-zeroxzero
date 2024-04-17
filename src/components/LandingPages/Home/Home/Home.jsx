"use client";
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
import RoadmapSection from '../RoadmapSection/RoadmapSection';
import JoinCommunity from '../JoinCommunity/JoinCommunity';
import TokenStats from '../TokenStats/TokenStats';
import Documents from '../Documents/Documents';
import BlogsSection from '../BlogsSection/BlogsSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>0x0 - AI Powered Trade Alerts</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <HeroSection />
            <HowItWorks  />
            <TokenStats />
            <Features />
            <AboutUs />
            <WhyUs />
            <HighFlyers />
            <RoadmapSection />
            <OurVision />
            <JoinCommunity />
            <Testimonials />
            <BlogsSection />
        </div>
    );
};

export default Home;