import React, { useEffect, useState } from 'react';
import './NewUniswapToken.css';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import TokenDetail from './TokenDetail';

const NewUniswapTokens = () => {
    const fallbackTokens = [
        { _id: '1', name: 'TokenA', symbol: 'TKA', logo: '', prices: [{ priceUSD: '1.23' }], "24h_percent": 5.2, existingAt: 1700000000 },
        { _id: '2', name: 'TokenB', symbol: 'TKB', logo: '', prices: [{ priceUSD: '0.89' }], "24h_percent": -3.1, existingAt: 1700000000 },
        { _id: '4', name: 'TokenC', symbol: 'TKC', logo: '', prices: [{ priceUSD: '2.45' }], "24h_percent": 1.3, existingAt: 1700000000 },
        { _id: '5', name: 'TokenD', symbol: 'TKD', logo: '', prices: [{ priceUSD: '1.45' }], "24h_percent": -1.7, existingAt: 1700000000 },
        { _id: '6', name: 'TokenE', symbol: 'TKE', logo: '', prices: [{ priceUSD: '2.25' }], "24h_percent": 1.1, existingAt: 1700000000 },
        { _id: '7', name: 'TokenF', symbol: 'TKF', logo: '', prices: [{ priceUSD: '2.62' }], "24h_percent": 1.6, existingAt: 1700000000 },
        { _id: '8', name: 'TokenG', symbol: 'TKG', logo: '', prices: [{ priceUSD: '0.35' }], "24h_percent": -3.4, existingAt: 1700000000 },
        { _id: '9', name: 'TokenH', symbol: 'TKH', logo: '', prices: [{ priceUSD: '2.63' }], "24h_percent": 5.1, existingAt: 1700000000 },
    ];

    const [newTokens, setNewTokens] = useState(fallbackTokens);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchingNewTokens = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://statboard.0x0.com/api/token/list?method=month&page=1&limit=20');
                if (!response.ok) {
                    throw new Error('The network response was not ok!');
                }
                const data = await response.json();
                setNewTokens(data.data.length > 0 ? data.data : fallbackTokens);
            } catch (err) {
                console.error('Error fetching new tokens:', err);
                setNewTokens(fallbackTokens);
            } finally {
                setLoading(false);
            }
        };

        fetchingNewTokens();
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const handleFilterToken = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTokens = newTokens.filter(token =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [tokenDetail, setTokenDetail] = useState(null);
    const handleTokenDetail = (coin) => {
        setTokenDetail(coin);
    };

    return (
        <div>
            <TokenDetail tokenDetail={tokenDetail} setTokenDetail={setTokenDetail} />
            <div className="new-tokens-header market-update-top mb-10 flex items-center justify-between">
                <h2 className='text-2xl text-light font-bold'>New Uniswap Listings</h2>
                <div className='flex items-center gap-3 rounded-full text-light py-3 px-4 bg-[#122036]'>
                    <HiOutlineMagnifyingGlass />
                    <input
                        type="text"
                        placeholder='Search Coin'
                        onChange={handleFilterToken}
                        className='outline-none bg-transparent md:w-auto w-32'
                    />
                </div>
            </div>
            {loading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <div className='grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                        <Skeleton height={"160px"} width={"100%"} count={6} className='w-auto mb-3 mr-3' />
                    </div>
                </SkeletonTheme>
            ) : (
                <div className='carousel p-5 bg-[#122036] rounded-md grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-5 gap-x-5'>
                    {filteredTokens.map((token, index) => {
                        const { name, symbol, logo, prices, '24h_percent': percentChange, existingAt } = token;
                        const listingDate = new Date(existingAt * 1000).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });

                        return (
                            <div onClick={() => handleTokenDetail(token)} className='carousel-item cursor-pointer w-auto text-light bg-gray-900 px-5 py-7 flex flex-col gap-3 rounded-md' key={index}>
                                <div className='flex items-center gap-3'>
                                    <img className='w-7' src={logo || 'https://cdn-icons-png.flaticon.com/512/16/16096.png'} alt='' />
                                    <h5 className='font-semibold text-lg'>{name.slice(0, 17)}</h5>
                                    <span className='uppercase font-semibold text-gray'>{symbol} / usd</span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <h2 className='text-xl font-bold'>USD {prices.length > 0 ? <span>{Number(prices[prices.length - 1]?.priceUSD)?.toFixed(5)}</span> : <span>N/A</span>}</h2>
                                    <span className={`flex items-center ${percentChange > 0 ? 'bg-green-500' : 'bg-red-500'} rounded-full px-2`}>
                                        {percentChange > 0 && <span className='text-sm'>+</span>}
                                        {percentChange?.toFixed(2) || 'N/A'}%
                                    </span>
                                </div>
                                <div>
                                    <p className='text-gray'>Listed on: {listingDate}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default NewUniswapTokens;
