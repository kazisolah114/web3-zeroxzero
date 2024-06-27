import React from 'react';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';
import { HiArrowLongRight, HiArrowSmallRight, HiCheckBadge, HiCpuChip, HiMiniCube, HiShieldCheck } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Features = () => {
    const features = [
        { icon: <HiShieldCheck  />, title: "Protected Security", desc: "Conduct transactions with the highest level of security and peace of mind. Join 0x0 today to benefit from our state-of-the-art encryption and multi-layer protection protocols, ensuring your assets and data remain safe", link: "/" },
        { icon: <HiMiniCube  />, title: "Cryptocurrency Variety", desc: "Access a wide range of cryptocurrencies and trading pairs. With 0x0, you can diversify your portfolio and take advantage of opportunities across multiple blockchain networks, all from one intuitive platform", link: "/" },
        { icon: <HiCpuChip  />, title: "AI-driven Trading Alerts", desc: "Receive timely, data-backed trading signals powered by our advanced AI algorithms. Stay ahead of the market with 0x0's intelligent alerts that analyze vast amounts of blockchain data to identify profitable trading opportunities", link: "/" },
        { icon: <HiCheckBadge  />, title: "Learn Best Practice", desc: "Enhance your trading skills with 0x0's educational resources and AI-generated insights. Our platform not only provides alerts but also helps you understand the rationale behind successful trades, fostering continuous learning and improvement", link: "/" },
    ]
    return (
        <div className='features-section py-24 container' data-aos="fade-up"
         data-aos-duration="1000">
            <SectionHeader sectionTitle={"Our Amazing Features_"} sectionDesc={"Discover our amazing features designed to simplify your experience and enhance your outcomes"} />
            <div className="features grid grid-cols-4 items-center justify-between gap-6 " >
                {
                    features.map((feature, index) => <div key={index} className='h-full bg-[#1d212f87] py-10 px-7 rounded-md flex flex-col'>
                        <span className='text-3xl w-12 h-12 rounded-full text-light flex items-center justify-center bg-[#0fcfcf73]'>{feature.icon}</span>
                        <h3 className='mt-5 mb-3 text-light font-semibold text-xl'>{feature.title}</h3>
                        <p className='text-gray mb-5 flex-grow'>{feature.desc}</p>
                        <Link className='flex items-center gap-2 w-36 hover:gap-4 text-secondary duration-200'>See Explained <HiArrowLongRight /></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;