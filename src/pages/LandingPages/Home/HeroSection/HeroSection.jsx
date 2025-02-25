import React, { useEffect, useRef } from 'react';
import './HeroSection.css'
import Animations from './Animations';
import { HiArrowSmRight, HiOutlineArrowRight } from "react-icons/hi";
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ParticleLights from './ParticleLights';

const HeroSection = () => {

    return (
        <div className='hero-section relative'>
            <ParticleLights />
            <div className="hero-container container flex items-center justify-between gap-10">
                <div className="hero-texts  w-[50%]" 
                data-aos="flip-left" data-aos-duration="1000"
                >
                    <h1 className='hero-header text-white font-extrabold text-4xl mb-6 '>Blockchain based <span className='text-secondary'>Copy Trading</span> using public blockchain ledgers and powered by AI technology</h1>
                    <p className='text-gray mb-10' >
                        We scan the blockchain to spot successful traders, using AI to rate them. If a trader scores above 8, we analyze their trades rigorously. When they invest in a project approved by our AI tool, we provide you with details to open a position. Selling prompts a timely notification</p>
                    <div className='hero-buttons mt-10 flex gap-2 items-center relative' 
                    data-aos="fade-up" data-aos-duration="1000"
                    >
                        <BackgroundShadow customShadow="0px 0px 150px 40px #10B8B9" />
                        <Link className='w-48 text-center primary-button hover:bg-[#12afaf] duration-200' to={`/app/leaderboard`}>Connect MetaMask</Link>
                        <Link to={'https://www.coinstore.com/#/spot/0X0USDT'} target='_blank' className='w-48 text-center hero-find-more flex justify-center items-center gap-2 hover:text-secondary duration-200 rounded-full'>Trade 0x0 Token <HiOutlineArrowRight /></Link>
                    </div>

                </div>
                <Animations />
            </div>
        </div>
    );
};

export default HeroSection;