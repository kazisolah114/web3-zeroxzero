import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';
import './TokenStats.css';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const TokenStats = () => {
    const [ZeroxStats, setZeroxStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://statboard.0x0.com/api/token/all`)
            .then(res => res.json())
            .then(data => {
                setZeroxStats(data);
                setIsLoading(false);
            })
    }, [])

    const [selectedButton, setSelectedButton] = useState("coinstats");
    const [flipLogo, setFlipLogo] = useState(false);
    const handleSelectedButton = (button) => {
        setSelectedButton(button);
        setFlipLogo(!flipLogo);
    }

    const [flip, setFlip] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (imageRef.current) {
                const { left, top, width, height } = imageRef.current.getBoundingClientRect();
                const offsetX = e.clientX - left;
                const offsetY = e.clientY - top;
                const centerX = width / 2;
                const centerY = height / 2;

                const x = (offsetX - centerX) / centerX;
                const y = (offsetY - centerY) / centerY;

                setFlip({
                    x,
                    y,
                });
            }
        };

        const handleMouseLeave = () => {
            setFlip({ x: 0, y: 0 });
        };

        if (imageRef.current) {
            imageRef.current.addEventListener('mousemove', handleMouseMove);
            imageRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener('mousemove', handleMouseMove);
                imageRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);


    return (
        <div className='token-stats py-24 container' 
        data-aos="fade-up" data-aos-duration="1000"
        >
            <SectionHeader sectionTitle={"0x0 Token Stats_"} sectionDesc={"Explore the latest 0x0 Token Stats, revealing key metrics and trends to understand the token's performance and community engagement"} />
            <div className="toggler p-[5px] mt-10 mx-auto bg-[#122036] w-[fit-content] rounded-full flex justify-between items-center">
                <button onClick={() => handleSelectedButton("coinstats")} className={`text-secondary ${selectedButton == "coinstats" && "bg-gray-700"} rounded-full w-40 px-2 py-3 font-semibold transition duration-300 ease-in-out`}>Coin Stats</button>
                <button onClick={() => handleSelectedButton("airdrop")} className={`text-secondary ${selectedButton == "airdrop" && "bg-gray-700"} rounded-full w-40 px-2 py-3 font-semibold transition duration-300 ease-in-out`}>Airdrop</button>
            </div>
            <div className="token-stats-content mt-10">
                {selectedButton == 'coinstats' ?
                    <div className="coins-stats">
                        {isLoading ?
                            <SkeletonTheme baseColor="#191a24" highlightColor="#44444430">
                                <Skeleton className='py-3 my-2' count={5} />
                            </SkeletonTheme>
                            :
                            <ul>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Token Name<span className='text-light font-semibold'>{ZeroxStats.tokenName}</span></li>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Transfers<span className='text-light font-semibold'>{ZeroxStats.transfers}</span></li>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Unique Wallets<span className='text-light font-semibold'>{ZeroxStats?.unique_wallets || 'N/A'}</span></li>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Staked Tokens<span className='text-light font-semibold'>
                                    {(function (num) {
                                        if (num >= 1e6 && num < 1e9) {
                                            return Math.floor(num / 1e6) + 'M';
                                        } else if (num >= 1e9) {
                                            let millionPart = Math.floor((num % 1e9) / 1e6);
                                            return millionPart + 'M';
                                        }
                                        return num.toString();
                                    })(ZeroxStats.staked_token)}
                                </span></li>
                                <li className='text-gray flex items-center justify-between'>Number of Stakers<span className='text-light font-semibold'>{ZeroxStats.number_of_stakers || 'N/A'}</span></li>
                            </ul>
                        }
                        <div className={`relative zerox-logo ${selectedButton == 'coinstats' && 'flip'}`}>
                            <BackgroundShadow customShadow="0px 0px 150px 60px #10B8B9" />
                            <img
                                ref={imageRef}
                                className="w-full"
                                src="/images/0x0-logo-head.png"
                                alt=""
                                style={{
                                    transform: `rotateX(${flip.y * 60}deg) rotateY(${flip.x * 60}deg)`,
                                    transition: 'transform 0.5s ease',
                                }}
                            />
                        </div>
                        {isLoading ?
                            <SkeletonTheme baseColor="#191a24" highlightColor="#44444430">
                                <Skeleton className='py-3 my-2' count={5} />
                            </SkeletonTheme>
                            :
                            <ul>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>USD Price<span className='text-light font-semibold'>${ZeroxStats.usdPrice?.toFixed(5)}</span></li>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Liquid Token<span className='text-light font-semibold'>
                                    {(function (num) {
                                        if (num >= 1e9) {
                                            let millionPart = Math.floor((num % 1e9) / 1e6);
                                            return millionPart + 'M';
                                        } else if (num >= 1e6) {
                                            return Math.floor(num / 1e6) + 'M';
                                        }
                                        return num.toString();
                                    })(ZeroxStats.liquid_token)}
                                </span></li>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Native Price Name<span className='text-light font-semibold'>{ZeroxStats.nativePriceName}</span></li>
                                <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Native Price Value<span className='text-light font-semibold'>
                                    {(function (num) {
                                        if (num >= 1e9) {
                                            let millionPart = Math.floor((num % 1e9) / 1e6);
                                            return millionPart + 'M';
                                        } else if (num >= 1e6) {
                                            return Math.floor(num / 1e6) + 'M';
                                        }
                                        return num.toString();
                                    })(ZeroxStats.nativePriceValue)}
                                </span></li>
                                <li className='text-gray flex items-center justify-between'>Token Decimals<span className='text-light font-semibold'>{ZeroxStats.nativePriceDecimals}</span></li>
                            </ul>
                        }
                    </div>
                    :
                    <div className="airdrop coins-stats">
                        <ul>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Airdrop Wallet<span className='text-light font-semibold cursor-pointer' onClick={() => {navigator.clipboard.writeText(`0x2d2a04422dc3888b912B6e76a0e2b4adc580028d`)}}>0x2d2a0442...adc580028d</span></li>
                            <li className='text-gray flex items-center justify-between'>Airdrop Balance<span className='text-light font-semibold'>100,000</span></li>
                        </ul>
                        <div className={`relative zerox-logo ${selectedButton === 'airdrop' && 'flip-two'}`}>
                            <BackgroundShadow customShadow="0px 0px 150px 60px #10B8B9" />
                            <img
                                ref={imageRef}
                                className="w-full"
                                src="/images/0x0-logo-head.png"
                                alt=""
                                style={{
                                    transform: `rotateX(${flip.y * 60}deg) rotateY(${flip.x * 60}deg)`,
                                    transition: 'transform 0.5s ease',
                                }}
                            />
                        </div>
                        <ul>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Airdrop Distributed<span className='text-light font-semibold'>20,000</span></li>
                            <li className='text-gray flex items-center justify-between'>Airdrop Goal<span className='text-light font-semibold'>50,000</span></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default TokenStats;