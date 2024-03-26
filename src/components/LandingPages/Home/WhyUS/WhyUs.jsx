import React from 'react';
import { HiOutlineEye, HiOutlineGlobe, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import { TypeAnimation } from 'react-type-animation';

const WhyUs = () => {
    return (
        <div className='whyus-section py-24 container'>
            <div className="whyus-content gap-5 flex items-center justify-between">
                <div className="image-cont w-full relative" data-aos="fade-right" data-aos-duration="1000">
                    <img className='' src="/images/globe-crypto.png" alt="" />
                    <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                    <div className="countries absolute top-20 left-10 bg-[#090808e0] rounded-md w-[135px] h-[55px] flex items-center gap-3 p-2">
                        <HiOutlineGlobe className='text-2xl text-green-500' />
                        <div>
                            <h5 className='font-bold text-white'>132+</h5>
                            <p className='text-gray'>Countries</p>
                        </div>
                    </div>
                    <div className="countries absolute top-96 left-32 bg-[#090808e0] rounded-md w-[135px] h-[55px] flex items-center gap-3 p-2">
                        <HiOutlineUserGroup className='text-2xl text-blue-500' />
                        <div>
                            <h5 className='font-bold text-white'>30k+</h5>
                            <p className='text-gray'>Traders</p>
                        </div>
                    </div>
                    <div className="countries absolute top-60 left-96 bg-[#090808e0] rounded-md w-[150px] h-[55px] flex items-center gap-3 p-2">
                        <HiOutlineRefresh className='text-2xl text-red-500' />
                        <div>
                            <h5 className='font-bold text-white'>88k+</h5>
                            <p className='text-gray'>Trading Pairs</p>
                        </div>
                    </div>
                </div>
                <div className="info-cont w-full" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='text-light text-5xl font-bold mb-6 leading-[60px]'>
                        <TypeAnimation
                            sequence={[
                                'The best AI-driven crypto trading alert platform',
                                1000,
                                'Get the most reliable trading alerts with us',
                                1000,
                                'Be a part of our global community at no cost',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray '>With 0x0.com you can get the best AI-driven trading alerts. We have a huge community from all around the world constantly working with us.</p>
                    <div className="reasons-list mt-10 ">
                        <div className='flex items-center gap-7 mb-4'>
                            <div className='bg-[#1D1F25] w-[75px] h-[75px] flex items-center justify-center rounded-md'><HiOutlineEye className='text-pink-900 font-extralight text-2xl' /></div>
                            <div>
                                <h4 className='text-white font-semibold text-lg mb-2'>Clarity</h4>
                                <p className='text-gray  w-[70%]'>We help you make sense of the coins, the terms, the dense charts and market changes.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-7 mb-4'>
                            <div className='bg-[#1D1F25] w-[75px] h-[75px] flex items-center justify-center rounded-md'><HiOutlineShieldCheck className='text-green-700 font-extralight text-2xl' /></div>
                            <div>
                                <h4 className='text-white font-semibold text-lg mb-2'>Confidence</h4>
                                <p className='text-gray  w-[70%]'>We help you make sense of the coins, the terms, the dense charts and market changes.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-7'>
                            <div className='bg-[#1D1F25] w-[75px] h-[75px] flex items-center justify-center rounded-md'><HiOutlineUserGroup className='text-blue-800 font-extralight text-2xl' /></div>
                            <div>
                                <h4 className='text-white font-semibold text-lg mb-2'>Strong Community</h4>
                                <p className='text-gray  w-[70%]'>We help you make sense of the coins, the terms, the dense charts and market changes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;