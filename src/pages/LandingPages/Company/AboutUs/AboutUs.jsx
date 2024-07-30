import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import FeaturedOn from '../../Home/FeaturedOn/FeaturedOn';
import { HiGlobeAlt, HiLockClosed, HiMiniRocketLaunch, HiUserGroup } from 'react-icons/hi2';

const AboutUs = () => {
    return (
        <div className="aboutus-page py-24">
            <div className='container max-md:text-center'>
                <SectionHeader header={"About 0x0"} brief={"Learn more about 0x0.com"} />
                <Link to="/support" className='text-white bg-linear px-10 py-3 bg-secondary hover:bg-secondaryHover duration-200  font-semibold rounded-md'>Contact us</Link>
            </div>
            <div className="aboutus container max-md:text-center">
                <div className="who-we-are flex gap-10 justify-between items-center my-32 max-xl:flex-col ">
                    <div className='w-2/4 max-xl:w-full'>
                        <h2 className='text-5xl text-secondary text-linear font-bold mb-7'>Who we are</h2>
                        <p className='text-gray mb-3'>We address a critical issue in copy trading. While copy trading is not a new concept, centralized copy trading platforms pose risks of market manipulation, particularly with low-volume tokens. At 0x0, traders are unaware they're being followed, ensuring trades are solely based on blockchain data, mitigating manipulation risks. 0x0 is a game-changing decentralized trading app that harnesses the power of cutting-edge algorithms to detect profitable trading patterns for you.</p>
                        <p className='text-gray mb-3'>0x0.com aims to establish itself in three main Metaverses: Sandbox, The Other Side, and Crypto.com. They will analyze transactions within the Metaverses and provide alerts on which people are making the most profit and the popularity increases of specific assets. The high flyers will be required to interact with this functionality, gain information, and have their own game within each Metaverse.</p>
                        <p className='text-gray'>Join us and revolutionize your approach to investing. With our transparent and experienced team, rest assured, your financial journey is in good hands. Get ready to step into a future of effortless trading.</p>
                    </div>
                    <div className='flex justify-end max-xl:justify-center w-2/4 max-xl:w-full laptop'>
                        <img src="/images/lap-app-2.png" alt="" className='w-full' />
                    </div>
                </div>
                <div className="our-achivements flex flex-row-reverse gap-10 justify-between items-center my-32 max-xl:flex-col">
                    <div className='w-2/4 text-right max-md:text-center max-xl:w-full'>
                        <h2 className='text-5xl text-secondary font-bold mb-7 text-linear'>Our achivements</h2>
                        <p className='text-gray mb-3 '>Empowering individuals worldwide to engage in seamless and secure cryptocurrency trading experiences we are expanding everyday and some of our achivements so far are</p>
                        <div className='achivements grid grid-cols-2 gap-y-5 gap-x-10 text-start mt-10 max-sm:grid-cols-1'>
                            <div className='flex gap-5 items-center max-sm:justify-center bg-linear px-3 py-5 rounded-md'>
                                <div>
                                    <HiUserGroup className='text-secondary text-7xl ' />
                                </div>
                                <div>
                                    <h1 className='text-white text-4xl font-extrabold mb-1 '>3520</h1>
                                    <p className='text-light text-xl'>Token holders</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center max-sm:justify-center bg-linear px-3 py-5 rounded-md'>
                                <div>
                                    <HiLockClosed className='text-secondary text-7xl ' />
                                </div>
                                <div>
                                    <h1 className='text-white text-4xl font-extrabold mb-1 '>10,3800</h1>
                                    <p className='text-light text-xl'>Staked tokens</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center max-sm:justify-center bg-linear px-3 py-5 rounded-md'>
                                <div>
                                    <HiMiniRocketLaunch className='text-secondary text-7xl ' />
                                </div>
                                <div>
                                    <h1 className='text-white text-4xl font-extrabold mb-1 '>83,9800</h1>
                                    <p className='text-light text-xl'>Liquid Tokens</p>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center max-sm:justify-center bg-linear px-3 py-5 rounded-md'>
                                <div>
                                    <HiGlobeAlt className='text-secondary text-7xl ' />
                                </div>
                                <div>
                                    <h1 className='text-white text-4xl font-extrabold mb-1 '>07</h1>
                                    <p className='text-light text-xl'>Worldwide events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start max-xl:justify-center w-2/4 max-xl:w-full'>
                        <img src="/images/eth-circle.png" alt="" className='w-full ' />
                    </div>
                </div>
                <div className="who-we-are flex gap-10 justify-between items-center max-xl:flex-col">
                    <div className='w-2/4 max-xl:w-full '>
                        <h2 className='text-5xl text-secondary text-linear font-bold mb-7'>Our goals and targets</h2>
                        <p className='text-gray mb-3'>Later this year, we're rolling out an app you can download. It's like a wallet that does your trading for you, giving you more free time. Just put money in, choose how much you want to trade, and relax while the best traders in the world handle the rest. No more hours of research or getting misled by YouTube videos trying to manipulate the market. We're a completely transparent group with years of experience in this field. Stay tuned for our $30 million launch!</p>
                        <p className='text-gray'>Our app is designed with user-friendliness and security at its core, ensuring a seamless experience for investors of all levels. Whether you're a seasoned trader or just starting out, our platform provides the tools and support you need to succeed. You'll have access to real-time updates, detailed performance reports, and the ability to track your investments anytime, anywhere. Plus, with our robust security measures, your assets and personal information are protected around the clock. Join us and discover the ease and peace of mind that comes with automated trading. The future of investing is here, and it's never been more accessible.</p>
                    </div>
                    <div className='flex justify-end max-xl:justify-center w-2/4 max-xl:w-full'>
                        <img src="/images/target-3.png" alt="" className='w-full ' />
                    </div>
                </div>
            </div>
            <div className='mt-64 bg-slate-800 '>
                <FeaturedOn />
            </div>
        </div>
    );
};

export default AboutUs;