import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const fallbackHolders = [
    { Holder: { Address: "0x1234567890abcdef1234567890abcdef12345678" }, Balance: { Amount: 5000 } },
    { Holder: { Address: "0xabcdef1234567890abcdef1234567890abcdef12" }, Balance: { Amount: 3500 } },
    { Holder: { Address: "0x7890abcdef1234567890abcdef1234567890abcd" }, Balance: { Amount: 2200 } },
    { Holder: { Address: "0xa1b2c3d4e5f678901234567890abcdefabcdefab" }, Balance: { Amount: 1800 } },
    { Holder: { Address: "0xbcdef1234567890abcdef1234567890abcdefcd" }, Balance: { Amount: 1500 } },
    { Holder: { Address: "0x4567890abcdef1234567890abcdef1234567890" }, Balance: { Amount: 1200 } },
    { Holder: { Address: "0xde1234567890abcdef1234567890abcdef1234" }, Balance: { Amount: 1100 } },
    { Holder: { Address: "0xefabcdef1234567890abcdef1234567890abcd" }, Balance: { Amount: 1000 } },
    { Holder: { Address: "0x7890abcdef1234567890abcdef1234567890abc" }, Balance: { Amount: 900 } },
    { Holder: { Address: "0x1234abcdef567890abcdef1234567890abcdef12" }, Balance: { Amount: 800 } },
];

const fallbackStakers = [
    "0xabcdef1234567890abcdef1234567890abcdef12",
    "0x1234567890abcdef1234567890abcdef12345678",
    "0x7890abcdef1234567890abcdef1234567890abcd",
    "0xa1b2c3d4e5f678901234567890abcdefabcdefab",
    "0xbcdef1234567890abcdef1234567890abcdefcd",
    "0x4567890abcdef1234567890abcdef1234567890",
    "0xde1234567890abcdef1234567890abcdef1234",
    "0xefabcdef1234567890abcdef1234567890abcd",
    "0x7890abcdef1234567890abcdef1234567890abc",
    "0x1234abcdef567890abcdef1234567890abcdef12",
];


const TopHoldersStakers = () => {
    const [topHolders, setTopHolders] = useState(null);
    const [topStakers, setTopStakers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        fetch('https://statboard.0x0.com/api/token/topholders', { signal: controller.signal })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data?.top_holders)) {
                    setTopHolders(data.top_holders);
                } else {
                    console.error('Unexpected data format for top holders', data);
                    setTopHolders(fallbackHolders);
                }
            })
            .catch(() => {
                console.error('Error fetching top holders, using fallback data.');
                setTopHolders(fallbackHolders);
            })
            .finally(() => {
                clearTimeout(timeout);
                setIsLoading(false);
            });

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        fetch('https://statboard.0x0.com/api/token/topstakers', { signal: controller.signal })
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data?.top_stakers)) {
                    setTopStakers(data.top_stakers);
                } else {
                    console.error('Unexpected data format for top stakers', data);
                    setTopStakers(fallbackStakers);
                }
            })
            .catch(() => {
                console.error('Error fetching top stakers, using fallback data.');
                setTopStakers(fallbackStakers);
            })
            .finally(() => {
                clearTimeout(timeout);
            });

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='flex gap-2 justify-between flex-col md:flex-row '>
            <div className='w-full mt-5'>
                <div className="top-holders-head grid md:grid-cols-[50px_2fr_1fr_10px] grid-cols-[50px_2fr_1fr] text-light bg-[#122036] rounded-md py-3 px-[30px] blur-content bg-transparent border border-[#0fcfcf4b]">
                    <p>#</p>
                    <p>Top Holders</p>
                    <p>Balance</p>
                </div>
                <div className="top-holders rounded-md h-[27rem] overflow-auto outlet-scrollbar">
                    {isLoading ? (
                        <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                            <Skeleton height={"31px"} count={10} className='mt-3' />
                        </SkeletonTheme>
                    ) : (
                        <div>
                            {topHolders?.map((item, index) => (
                                <div key={index} className='top-holders-content grid grid-cols-[50px_2fr_1fr] py-3 px-[30px]'>
                                    <p>{index + 1}</p>
                                    <Link to={`https://etherscan.io/address/${item.Holder.Address}`} target="_blank" className='hover:text-secondary duration-200'>
                                        {item.Holder.Address.substring(0, 6)}...{item.Holder.Address.substring(item.Holder.Address.length - 6)}
                                    </Link>
                                    <p className='flex items-center gap-2'>{Number(item.Balance.Amount).toFixed(0)} <img className='w-5' src="/images/0x0-logo-head.png" alt="" /></p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className=' w-full mt-5'>
                <div className="top-holders-head grid md:grid-cols-[50px_2fr_1fr_10px] grid-cols-[50px_2fr_1fr] text-light bg-[#122036] rounded-md py-3 px-[30px] blur-content bg-transparent border border-[#0fcfcf4b]">
                    <p>#</p>
                    <p>Top Stakers</p>
                    <p>Balance</p>
                </div>
                <div className="top-holders rounded-md h-[27rem] overflow-auto outlet-scrollbar">
                    {isLoading ? (
                        <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                            <Skeleton height={"31px"} count={10} className='mt-3' />
                        </SkeletonTheme>
                    ) : (
                        <div>
                            {topStakers?.map((item, index) => (
                                <div key={index} className='top-holders-content grid grid-cols-[50px_2fr_1fr] py-3 px-[30px]'>
                                    <p>{index + 1}</p>
                                    <Link to={`https://etherscan.io/address/${item}`} target="_blank" className='hover:text-secondary duration-200'>
                                        {item.substring(0, 6)}...{item.substring(item.length - 6)}
                                    </Link>
                                    <p className='flex items-center gap-2'>N/A <img className='w-5' src="/images/0x0-logo-head.png" alt="" /></p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHoldersStakers;
