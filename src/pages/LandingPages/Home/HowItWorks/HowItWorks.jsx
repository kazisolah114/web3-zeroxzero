import React from 'react';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';
import './HowItWorks.css'

const HowItWorks = () => {
    const items = [
        { image: "/images/btc-wallet.png", step: "STEP 1", title: "Connect Wallet", desc: "Connect wallet to get AI-driven alerts for potential successful projects" },
        { image: "/images/crypto-comparison.png", step: "STEP 2", title: "Get Trading Alerts", desc: "Connect your telegram in order to get real time trade alerts" },
        { image: "/images/btc-cloud.png", step: "STEP 3", title: "Start Trading", desc: "Sit back and wait for alerts for position you can open and liquidate" },
        { image: "/images/btc-mining.png", step: "STEP 4", title: "Earn Money", desc: "Unlock your financial potential with our AI-driven trading platform" }
    ]
    return (
        <div className='how-it-works py-24 container'  data-aos="fade-up" data-aos-duration="1000">
            <SectionHeader sectionTitle={"How We_ Work"} sectionDesc={"We work together effectively, using clear processes to achieve outstanding outcomes"} />
            <div className="howitworks-content grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {
                    items.map((item, index) => <div key={index} className='howitworks-item text-center flex flex-col items-center'>
                        <img className='how-image' src={item.image} alt="" />
                        <span className='text-gray text-sm mt-3'>{item.step}</span>
                        <h3 className='text-white font-bold mt-1 mb-2 text-xl'>{item.title}</h3>
                        <p className='text-gray w-3/4'>{item.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HowItWorks;