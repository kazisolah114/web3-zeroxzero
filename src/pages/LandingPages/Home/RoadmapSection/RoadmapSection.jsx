import React from 'react';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';
import './Roadmap.css';
import { HiCheck, HiOutlineArchiveBoxXMark, HiOutlineBellAlert, HiOutlineChartBar, HiOutlineCheckBadge, HiOutlineCheckCircle, HiOutlineCpuChip, HiOutlineCurrencyDollar, HiOutlineGiftTop, HiOutlineRocketLaunch, HiOutlineShieldCheck, HiOutlineSquaresPlus, HiOutlineTrophy, HiOutlineViewColumns, HiOutlineWallet } from 'react-icons/hi2';

const RoadmapSection = () => {
    const roadmapItems = [
        { year: "2021", period: "Q1/Q2", achivements: "Sandbox Land Purchased", status: "done", icon: <HiOutlineCheckBadge /> },
        { year: "2022", period: "Q3", achivements: "Otherdeeds Land Purchased", status: "done", icon: <HiOutlineCheckCircle /> },
        { year: "2022", period: "Q4", achivements: "0x0.com launch with DeFi copy trading alerts crypto.com Land Purchased", status: "done", icon: <HiOutlineRocketLaunch /> },
        { year: "2023", period: "Q1", achivements: "NFTs mint, NFTs Staking Live, NFTs Treasure hunts with prizes up to 50k USD", status: "progressing", icon: <HiOutlineTrophy /> },
        { year: "2023", period: "Q2", achivements: "NFTs Revealed", status: "progressing", icon: <HiOutlineGiftTop /> },
        { year: "2023", period: "Q3", achivements: "0x0 Virtual Head Quarters, Established Sand Box - Asset insights, detailed progress, recommended virtual asset portfolio and alerts of recommended assets based on your scanner", status: "next", icon: <HiOutlineShieldCheck /> },
        { year: "2023", period: "Q4", achivements: "Virtual asset futures game", status: "next", icon: <HiOutlineSquaresPlus /> },
        { year: "2024", period: "Q1", achivements: "1st CEXs", status: "next", icon: <HiOutlineBellAlert /> },
        { year: "2024", period: "Q2", achivements: "BETA version AI based technology ratings and organic growth models", status: "next", icon: <HiOutlineCpuChip /> },
        { year: "2024", period: "Q3", achivements: "Trader evaluation based on linked wallets (traders Hall of Fame and Trader Finder)", status: "next", icon: <HiOutlineWallet /> },
        { year: "2024", period: "Q3", achivements: "NFT Drop (NFTs to be used within the metaverse and to access advanced features on our web page, staking boosts)", status: "next", icon: <HiOutlineViewColumns /> },
        { year: "2024", period: "Q4", achivements: "AI based technology ratings and organic growth models", status: "next", icon: <HiOutlineChartBar /> },
        { year: "2025", period: "Q1", achivements: "Decentralised Copy Trading (only the transactions need to be granted by the copier and all the positions tracked and can be closed at anytime)", status: "next", icon: <HiOutlineCurrencyDollar /> },
    ]
    return (
        <div className='roadmap-section py-24 container'>
            <div className="roadmap-content">
                <div className="text-element" 
                    data-aos="fade-right" data-aos-duration="1000"
                    >
                    <h1 className='text-3xl text-light font-bold mb-3'>0x0 Roadmap_ & Future Prospects</h1>
                    <p className='text-gray '>Have a look at some of the exciting milestones that we have planned to reach in the near future</p>
                    <button className='mt-10 bg-secondaryHover hover:bg-secondary duration-200 w-36 h-11 rounded '>Learn More</button>
                </div>
                <ul className="roadmap" 
                    data-aos="fade-up" data-aos-duration="1000"
                    >
                    {roadmapItems.map((item, index) => (
                        <li key={index} className="flex gap-6 mb-10 items-start">
                            <div className="z-10">
                                <span
                                    className={`${item.status === "done"
                                            ? "bg-green-500"
                                            : item.status === "progressing"
                                                ? "bg-secondaryHover"
                                                : item.status === "next"
                                                    ? "border bg-[#16161F]"
                                                    : ""
                                        } text-slate-100 text-xl w-8 h-8 flex items-center justify-center rounded-md`}
                                >
                                    {item.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="bg-gray-700 text-white font-semibold text-center w-32 p-1 rounded mb-3">
                                    {item.period} | {item.year}
                                </h3>
                                <p className="text-gray">{item.achivements}</p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default RoadmapSection;