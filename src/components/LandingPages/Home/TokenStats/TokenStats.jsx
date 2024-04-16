import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from '../../../CommonComponents/SectionHeader/SectionHeader';
import './TokenStats.css';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const TokenStats = () => {
    const [selectedButton, setSelectedButton] = useState("coinstats");
    const [flipLogo, setFlipLogo] = useState(false);
    const handleSelectedButton = (button) => {
        setSelectedButton(button);
        setFlipLogo(!flipLogo);
    }
    const [tokenData, setTokenData] = useState({});
    useEffect(() => {
        fetch('/tokenstats.json')
            .then(res => res.json())
            .then(data => {
                setTokenData(data);
            })
    }, [])

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

        if (imageRef.current) {
            imageRef.current.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);


    return (
        <div className='token-stats py-24 container'>
            <SectionHeader sectionTitle={"0x0 Token Stats_"} sectionDesc={"Lorem ipsum dolor semet is a world class game ipsum leto Lorem ipsum dolor semet is a world class game ipsum leto lorem"} />
            <div className="toggler p-[5px] mt-10 mx-auto bg-[#122036] w-[fit-content] rounded-full flex justify-between items-center">
                <button onClick={() => handleSelectedButton("coinstats")} className={`text-secondary ${selectedButton == "coinstats" && "bg-gray-700"} rounded-full w-40 px-2 py-3 font-semibold transition duration-300 ease-in-out`}>Coin Stats</button>
                <button onClick={() => handleSelectedButton("airdrop")} className={`text-secondary ${selectedButton == "airdrop" && "bg-gray-700"} rounded-full w-40 px-2 py-3 font-semibold transition duration-300 ease-in-out`}>Airdrop</button>
            </div>
            <div className="token-stats-content mt-10">
                {selectedButton == 'coinstats' ?
                    <div className="coins-stats">
                        <ul>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Transfers<span className='text-light font-semibold'>{tokenData.transfers}</span></li>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Unique Wallets<span className='text-light font-semibold'>{tokenData.unique_wallets}</span></li>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Liquid Token<span className='text-light font-semibold'>{tokenData.liquid_token}</span></li>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Staked Tokens<span className='text-light font-semibold'>{tokenData.staked_token}</span></li>
                            <li className='text-gray flex items-center justify-between'>Number of Stakers<span className='text-light font-semibold'>{tokenData.number_of_stakers}</span></li>
                        </ul>
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
                        <ul>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Liquidity USDC to 0x0<span className='text-light font-semibold'>{tokenData.liquidity0x0USDC_0x0}</span></li>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Liquidity USDC to USDC<span className='text-light font-semibold'>{tokenData.liquidity0x0USDC_USDC}</span></li>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Native Price Name<span className='text-light font-semibold'>{tokenData.nativePriceName}</span></li>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Native Price Value<span className='text-light font-semibold'>{tokenData.nativePriceValue}</span></li>
                            <li className='text-gray flex items-center justify-between'>Token Decimals<span className='text-light font-semibold'>{tokenData.tokenDecimals}</span></li>
                        </ul>
                    </div>
                    :
                    <div className="airdrop coins-stats">
                        <ul>
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Airdrop Wallet<span className='text-light font-semibold'>0xT28029D02L73J17</span></li>
                            <li className='text-gray flex items-center justify-between'>Airdrop Balance<span className='text-light font-semibold'>10,000</span></li>
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
                            <li className='text-gray flex items-center justify-between border-b border-gray-600 border-opacity-50 pb-4 mb-4'>Airdrop Distributed<span className='text-light font-semibold'>3000</span></li>
                            <li className='text-gray flex items-center justify-between'>Airdrop Goal<span className='text-light font-semibold'>8000</span></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default TokenStats;