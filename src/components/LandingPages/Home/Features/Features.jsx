import React from 'react';
import SectionHeader from '../../../CommonComponents/SectionHeader/SectionHeader';
import { HiArrowLongRight, HiArrowSmallRight, HiCheckBadge, HiCpuChip, HiMiniCube, HiShieldCheck } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Features = () => {
    const features = [
        { icon: <HiShieldCheck  />, title: "Protected Security", desc: "Do transection with the highest security and chill out. Join 0x0 today to get the best AI-driven trading alerts", link: "/" },
        { icon: <HiMiniCube  />, title: "Cryptocurrency Variety", desc: "Do transection with the highest security and chill out. Join 0x0 today to get the best AI-driven trading alerts", link: "/" },
        { icon: <HiCpuChip  />, title: "AI-driven Trading Alerts", desc: "Do transection with the highest security and chill out. Join 0x0 today to get the best AI-driven trading alerts", link: "/" },
        { icon: <HiCheckBadge  />, title: "Learn Best Practice", desc: "Do transection with the highest security and chill out. Join 0x0 today to get the best AI-driven trading alerts", link: "/" },
    ]
    return (
        <div className='features-section py-24 container' data-aos="flip-left"
         data-aos-duration="1000">
            <SectionHeader sectionTitle={"Our Amazing Features_"} sectionDesc={"Discover our amazing features designed to simplify your experience and enhance your outcomes"} />
            <div className="features flex items-center justify-between gap-8 " >
                {
                    features.map((feature, index) => <div key={index} className='bg-[#1d212f87] py-10 px-7 rounded-md '>
                        <span className='text-3xl w-12 h-12 rounded-full text-light flex items-center justify-center bg-[#0fcfcf73]'>{feature.icon}</span>
                        <h3 className='mt-5 mb-3 text-light font-semibold text-xl'>{feature.title}</h3>
                        <p className='text-gray mb-8 w-[80%]'>{feature.desc}</p>
                        <Link className='flex items-center gap-2 w-36 hover:gap-4 text-secondary duration-200'>See Explained <HiArrowLongRight /></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;