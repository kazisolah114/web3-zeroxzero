import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import FeaturedOn from '../../Home/FeaturedOn/FeaturedOn';

const AboutUs = () => {
    return (
        <div className="aboutus-page  py-24">
            <div className='container max-md:text-center'>
                <SectionHeader header={"About 0x0"} brief={"Learn more about 0x0.com"} />
                <Link to="/support" className='text-white px-10 py-3 bg-secondary hover:bg-secondaryHover duration-200  font-semibold rounded-md'>Contact us</Link>
            </div>
            <div className="aboutus container">
                <div className="who-we-are flex gap-10 justify-between items-center my-32 max-xl:flex-col ">
                    <div className='w-3/5 max-xl:w-full'>
                        <h2 className='text-5xl text-white font-bold mb-7'>Who we are</h2>
                        <p className='text-gray mb-3'>With the Alpha version of 0x0.com, users have the ability to discover and follow the most profitable Ethereum users. 0x0.com enables its users to identify profit per address over a specific period of time, while trading specific pairs. Additionally, 0x0.com users can purchase customized searches. Whenever 0X0.com identifies an Ethereum address that is generating significant profit, users receive alerts each time this address makes a trade. This provides 0X0.com users with an opportunity to copy trades on the Ethereum blockchain.
                        </p>
                        <p className='text-gray mb-3'>0x0.com aims to establish itself in three main Metaverses: Sandbox, The Other Side, and Crypto.com. They will analyze transactions within the Metaverses and provide alerts on which people are making the most profit and the popularity increases of specific assets. The high flyers will be required to interact with this functionality, gain information, and have their own game within each Metaverse.</p>
                        <p className='text-gray mb-'>Consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                    </div>
                    <div className='flex justify-end max-xl:justify-center w-2/5 max-xl:w-full'>
                        <img src="/images/lock.png" alt="" className='w-4/5 ' />
                    </div>
                </div>
                <div className="who-we-are flex flex-row-reverse gap-10 justify-between items-center my-32 max-xl:flex-col">
                    <div className='w-3/5 text-right max-xl:w-full'>
                        <h2 className='text-5xl text-white font-bold mb-7'>Our achivements</h2>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, ariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita arcearum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-'>Consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                    </div>
                    <div className='flex justify-start max-xl:justify-center w-2/5 max-xl:w-full'>
                        <img src="/images/icons.png" alt="" className='w-4/5 ' />
                    </div>
                </div>
                <div className="who-we-are flex gap-10 justify-between items-center max-xl:flex-col">
                    <div className='w-3/5 max-xl:w-full '>
                        <h2 className='text-5xl text-white font-bold mb-7'>Our goals and targets</h2>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, ariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita arcearum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-'>Consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                    </div>
                    <div className='flex justify-end max-xl:justify-center w-2/5 max-xl:w-full'>
                        <img src="/images/target-3.png" alt="" className='w-full ' />
                    </div>
                </div>
            </div>
            <div className='my-24 bg-slate-800'>
                <FeaturedOn />
            </div>
        </div>
    );
};

export default AboutUs;