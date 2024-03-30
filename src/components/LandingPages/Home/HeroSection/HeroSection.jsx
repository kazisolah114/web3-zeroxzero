import React from 'react';
import './HeroSection.css'
import Animations from './Animations';
import { HiArrowSmRight, HiOutlineArrowRight } from "react-icons/hi";
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <video playsInline autoplay="true" muted  loop className="hero-video">
                {/* <source src="/public/images/blac-dance.mp4" type="video/mp4" /> */}
                {/* <source src="https://static.videezy.com/system/resources/previews/000/040/199/original/bg_0005.mp4" type="video/mp4" /> */}
                <source src="https://tectum.io/wp-content/uploads/2023/10/tectum-site_hero-screen-1.mp4" type="video/mp4" />
            </video>
            <div className="hero-container container flex items-center justify-between">
                <div className="hero-texts  w-[50%]" data-aos="flip-left" data-aos-duration="1000">

                    <h1 className='hero-header text-white font-extrabold text-4xl mb-6 w-[85%]'>AI-driven <span className='text-secondary'>Alerts</span> for Trading Trends and Potential Successful Projects</h1>
                    <p className='text-gray mb-10'>Developing a privacy-centric infobiotics application to provide tailored recommendations for traders and fleets, enabling early identification of successful projects. The worlds first AI focused copy trading application.</p>
                    <div className='hero-buttons flex items-center  relative' data-aos="fade-up">
                        <BackgroundShadow customShadow="0px 0px 150px 40px #10B8B9" />
                        <button className='primary-button mr-2 hover:bg-[#12afaf] duration-200'>CONNECT WALLET</button>
                        <button className='hero-find-more flex items-center gap-2 '>TRADE 0X0COM <HiOutlineArrowRight /></button>
                    </div>

                </div>
                <Animations />
            </div>
            {/* <img src="https://www.programming-hero.com/_next/image?url=%2Fbanner%2Fcity.png&w=1920&q=75" alt="" /> */}
        </div>
    );
};

export default HeroSection;