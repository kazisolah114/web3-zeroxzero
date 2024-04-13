import React from 'react';
import './RoadmapItems.css'

const RoadmapItems = () => {
    const roadmapItems = [
        { year: "2021", period: "Q1/Q2", achivements: "Sandbox Land Purchased", status: "done" },
        { year: "2022", period: "Q3", achivements: "Otherdeeds Land Purchased", status: "done" },
        { year: "2022", period: "Q4", achivements: "0x0.com Launch with defi copy trading alerts crypto.com Land Purchased", status: "done" },
        { year: "2023", period: "Q1", achivements: "NFT mint, NFT Staking Live, NFT Treasure hunts with prizes up to 50k USD", status: "progressing" },
        { year: "2023", period: "Q2", achivements: "NFT Revealed", status: "progressing" },
        { year: "2023", period: "Q3", achivements: "0x0 Virtual Head Quarters, Established Sand Box - Asset insights, detailed progress, recommended virtual asset portfolio, alerts of recommended assets based on your scanners", status: "next" },
        { year: "2023", period: "Q4", achivements: "Virtual asset futures game", status: "next" },
        { year: "2024", period: "Q1", achivements: "1st CEX's", status: "next" },
        { year: "2024", period: "Q2", achivements: "BETA version AI based technology ratings and organic growth models", status: "next" },
        { year: "2024", period: "Q3", achivements: "Trader evaluation based on linked wallets(traders hall of Fame and Trader Finder)", status: "next" },
        { year: "2024", period: "Q3", achivements: "NFT Drop(NFT's to be used within the metaverse and to access advanced features on our web page, staking boosts)", status: "next" },
        { year: "2024", period: "Q4", achivements: "AI based technology ratings and organic growth models", status: "next" },
        { year: "2025", period: "Q1", achivements: "Decentralised Copy Trading(only the transactions need to be granted by the copier and all the positions tracked and can be closed at anytime)", status: "next" },
    ]
    console.log(roadmapItems)
    return (
        <div className='roadmap-items flex justify-between overflow-hidden'>
            {
                roadmapItems.map((item, index) => <div key={index} className='item flex items-center flex-col mr-[50px]'>
                    <div className={`elipse relative z-10 border-2 border-white  w-20 h-20 rounded-full flex text-center justify-center ${item.status === "done" ? "bg-green-500" : item.status === "progressing" ? "bg-blue-500" : item.status === "next" ? "bg-red-500" : ""} flex flex-col`}>
                        <h2 className='font-extrabold text-xl text-light'>{item.year}</h2>
                        <span className='text-gray '>{item.period}</span>
                    </div>
                    <div className="achivements">
                            <p>{item.achivements}</p>
                        </div>
                </div>)
            }
        </div>

    );
};

export default RoadmapItems;
