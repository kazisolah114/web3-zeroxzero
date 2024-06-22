import React from 'react';
import './HeroSection.css'
import Animations from './Animations';
import { HiArrowSmRight, HiOutlineArrowRight } from "react-icons/hi";
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            {/* <video playsInline autoplay="true" muted  loop className="hero-video">
                <source src="https://tectum.io/wp-content/uploads/2023/10/tectum-site_hero-screen-1.mp4" type="video/mp4" />
            </video> */}
            <div className="hero-container container flex items-center justify-between">
                <div className="hero-texts  w-[50%]" data-aos="flip-left" data-aos-duration="1000">

                    <h1 className='hero-header text-white font-extrabold text-4xl mb-6 '>Blockchain based <span className='text-secondary'>Copy Trading</span> using public blockchain ledgers and powered by AI technology</h1>
                    <p className='text-gray mb-10'>
                        We scan the blockchain to spot successful traders, using AI to rate them. If a trader scores above 8, we analyze their trades rigorously. When they invest in a project approved by our AI tool, we provide you with details to open a position. Selling prompts a timely notification</p>
                    <div className='hero-buttons mt-10 flex gap-2 items-center relative' data-aos="fade-up">
                        <BackgroundShadow customShadow="0px 0px 150px 40px #10B8B9" />
                        <Link className='w-48 text-center primary-button hover:bg-[#12afaf] duration-200' to={`${import.meta.env.VITE_APP_BASE_URL}`}>Connect MetaMask</Link>
                        <Link to={'https://flooz.xyz/swap?network=eth&tokenAddress=0xb8fda5aee55120247f16225feff266dfdb381d4c'} target='_blank' className='w-48 text-center hero-find-more flex justify-center items-center gap-2 hover:text-secondary duration-200 '>Trade 0x0 Token <HiOutlineArrowRight /></Link>
                    </div>

                </div>
                <Animations />
            </div>
        </div>
    );
};

export default HeroSection;