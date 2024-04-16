import React from 'react';
import SectionHeader from '../../../CommonComponents/SectionHeader/SectionHeader';
import './HowItWorks.css'

const HowItWorks = () => {
    const items = [
        { image: "/images/btc-wallet.png", step: "STEP 1", title: "Connect Wallet", desc: "Connect your wallet to get AI-driven alerts for trading trends and potential successful projects" },
        { image: "/images/crypto-comparison.png", step: "STEP 2", title: "Explore Crypto", desc: "Connect your wallet to get AI-driven alerts for trading trends and potential successful projects" },
        { image: "/images/btc-cloud.png", step: "STEP 3", title: "Start Trading", desc: "Connect your wallet to get AI-driven alerts for trading trends and potential successful projects" },
        { image: "/images/btc-mining.png", step: "STEP 4", title: "Earn Money", desc: "Connect your wallet to get AI-driven alerts for trading trends and potential successful projects" }
    ]
    return (
        <div className='how-it-works py-24 container'  data-aos="fade-up" data-aos-duration="1000">
            <SectionHeader sectionTitle={"How We_ Work"} sectionDesc={"Lorem ipsum dolor semet is a world class game ipsum leto Lorem ipsum dolor semet is a world class game ipsum leto lorem"} />
            <div className="howitworks-content flex gap-10 items-center justify-between" >
                {
                    items.map((item, index) => <div key={index} className='howitworks-item text-center flex flex-col items-center'>
                        <img className='how-image' src={item.image} alt="" />
                        <span className='text-gray text-sm mt-3'>{item.step}</span>
                        <h3 className='text-white font-bold mt-1 mb-2 text-xl'>{item.title}</h3>
                        <p className='text-gray w-[85%]'>{item.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HowItWorks;