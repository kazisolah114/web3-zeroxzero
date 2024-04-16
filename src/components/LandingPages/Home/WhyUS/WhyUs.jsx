import React from 'react';
import { HiOutlineEye, HiOutlineGlobe, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import { TypeAnimation } from 'react-type-animation';
import SectionHeader from '../../../CommonComponents/SectionHeader/SectionHeader';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='whyus-section py-24 container'>
            <SectionHeader sectionTitle={"Why_ Us"} sectionDesc={"Lorem ipsum dolor semet is a world class game ipsum leto Lorem ipsum dolor semet is a world class game ipsum leto lorem"} />
            <div className="whyus-content gap-10 flex justify-between">
                <div className="info-cont w-full" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className='text-light text-5xl font-bold mb-6 leading-[60px]'>
                        <TypeAnimation
                            sequence={[
                                'AI-Powered Trade Alerts_',
                                1000,
                                'Unlock Your Trading_ Potential',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray mb-5 text-justify'>With 0x0.com you can get the best AI-driven trading alerts. We have a huge community from all around the world constantly working with us. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta ratione expedita consequuntur fugit. Deleniti aliquam, incidunt reprehenderit iusto in aspernatur natus perferendis mollitia culpa voluptate! Qui sed sapiente incidunt optio, recusandae nihil explicabo dolore sequi magnam doloremque velit vero aspernatur, impedit consequuntur tempore, ipsa nesciunt perspiciatis blanditiis quis aperiam!</p>
                    <p className='text-gray text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatum, at necessitatibus soluta officiis sequi quis reiciendis facilis odio quod!</p>
                    <button className='mt-10 bg-secondaryHover hover:bg-secondary duration-200 w-36 h-11 rounded '>Learn More</button>
                </div>
                <div className="reasons-lists w-5/6 ">
                    <div className="list relative top-6 hover:top-3 duration-300">
                        <span><HiOutlineShieldCheck /></span>
                        <h2>Confidence</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo eveniet id tempora.</p>
                    </div>
                    <div className="list relative top-0 hover:-top-3 duration-300">
                        <span><HiOutlineEye /></span>
                        <h2>Clarity</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo eveniet id tempora.</p>
                    </div>
                    <div className="list relative top-6 hover:top-3 duration-300">
                        <span><HiOutlineRefresh /></span>
                        <h2>Realiability</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo eveniet id tempora.</p>
                    </div>
                    <div className="list relative top-0 hover:-top-3 duration-300">
                        <span><HiOutlineUserGroup /></span>
                        <h2>Strong Community</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo eveniet id tempora.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;