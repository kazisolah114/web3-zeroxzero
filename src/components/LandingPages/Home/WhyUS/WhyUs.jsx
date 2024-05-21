import React from 'react';
import { HiOutlineEye, HiOutlineGlobe, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import { TypeAnimation } from 'react-type-animation';
import SectionHeader from '../../../CommonComponents/SectionHeader/SectionHeader';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='whyus-section py-24 container'>
            <SectionHeader sectionTitle={"Why_ Us"} sectionDesc={"Choose us for our unparalleled expertise, dedication to quality, and commitment to exceeding your expectations"} />
            <div className="whyus-content gap-10 flex justify-between">
                <div className="info-cont w-full" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='text-light text-5xl font-bold mb-6 leading-[60px]'>
                        <TypeAnimation
                            sequence={[
                                'AI-Powered trade alerts',
                                1000,
                                'Decentralized trading app',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray mb-5 text-justify'>
                        Later this year, we're rolling out an app you can download. It's like a wallet that does your trading for you, giving you more free time. Just put money in, choose how much you want to trade, and relax while the best traders in the world handle the rest. No more hours of research or getting misled by YouTube videos trying to manipulate the market. We're a completely transparent group with years of experience in this field. Stay tuned for our $30 million launch!</p>
                        <p className='text-gray mb-5 text-justify'>Our app is designed with user-friendliness and security at its core, ensuring a seamless experience for investors of all levels. Whether you're a seasoned trader or just starting out, our platform provides the tools and support you need to succeed. You'll have access to real-time updates, detailed performance reports, and the ability to track your investments anytime, anywhere. Plus, with our robust security measures, your assets and personal information are protected around the clock. Join us and discover the ease and peace of mind that comes with automated trading. The future of investing is here, and it's never been more accessible.</p>
                    <p className='text-gray text-justify'>Join us and revolutionize your approach to investing. With our transparent and experienced team, rest assured, your financial journey is in good hands. Get ready to step into a future of effortless trading.</p>
                    <button className='mt-10 bg-secondaryHover hover:bg-secondary duration-200 w-36 h-11 rounded '>Learn More</button>
                </div>
                <div className="reasons-lists w-5/6 ">
                    <div className="list relative top-6 hover:top-3 duration-300">
                        <span><HiOutlineShieldCheck /></span>
                        <h2>Confidence</h2>
                        <p>Rely on our proven track record and expertise for profitable trades with peace of mind</p>
                    </div>
                    <div className="list relative top-0 hover:-top-3 duration-300">
                        <span><HiOutlineEye /></span>
                        <h2>Clarity</h2>
                        <p>Gain clear and concise insights to navigate the cryptocurrency markets confidently</p>
                    </div>
                    <div className="list relative top-6 hover:top-3 duration-300">
                        <span><HiOutlineRefresh /></span>
                        <h2>Realiability</h2>
                        <p>Trust our platform's consistent performance and timely alerts for successful trading outcomes</p>
                    </div>
                    <div className="list relative top-0 hover:-top-3 duration-300">
                        <span><HiOutlineUserGroup /></span>
                        <h2>Strong Community</h2>
                        <p>Become part of our thriving community, where traders collaborate and support each other towards financial success</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;