import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineMagnifyingGlass, HiOutlineStar, HiStar } from "react-icons/hi2";
import './MarketStatistics.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../../ContextAPI/UserContext';
import { DiSnapSvg } from 'react-icons/di';


const MarketStatistics = () => {
    const [marketUpdate, setMarketUpdate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMarket, setSelectedMarket] = useState('All Tokens');
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=7d`)
            .then(res => res.json())
            .then(data => {
                setMarketUpdate(data);
                setIsLoading(false);
            });
    }, []);

    // Fetch watchlist from localStorage when the component mounts
    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('starred_wallets')) || [];
        setWatchlist(storedWatchlist);
    }, []);

    // Update filteredCoins whenever marketUpdate, searchTerm, selectedMarket, or watchlist changes
    useEffect(() => {
        let coins = marketUpdate.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedMarket === 'Trending') {
            coins = coins.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        } else if (selectedMarket === 'Top Market Cap') {
            coins = coins.sort((a, b) => b.market_cap - a.market_cap);
        } else if (selectedMarket === 'Watchlist') {
            coins = watchlist;
        }

        setFilteredCoins(coins);
    }, [marketUpdate, searchTerm, selectedMarket, watchlist]);

    const handleAddWatchlist = (coin) => {
        const storedWatchlist = JSON.parse(localStorage.getItem('starred_wallets')) || [];

        // Check for duplicates
        if (!storedWatchlist.some(item => item.id === coin.id)) {
            const updatedWatchlist = [...storedWatchlist, coin];
            localStorage.setItem('starred_wallets', JSON.stringify(updatedWatchlist));
            setWatchlist(updatedWatchlist);
        }
    };

    const handleRemoveWatchlist = (coin) => {
        const storedWatchlist = JSON.parse(localStorage.getItem('starred_wallets')) || [];
        const updatedWatchlist = storedWatchlist.filter(item => item.id !== coin.id);
        localStorage.setItem('starred_wallets', JSON.stringify(updatedWatchlist));
        setWatchlist(updatedWatchlist);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSelectedMarket = (value) => {
        setSelectedMarket(value);
    };


    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e, coin) => {
        e.stopPropagation();
        setClicked(true);
        if (watchlist.some(item => item.id === coin.id)) {
            handleRemoveWatchlist(coin);
        } else {
            handleAddWatchlist(coin);
        }
    };

    const handleLinkClick = (e, coin) => {
        if (clicked) {
            e.preventDefault();
            setClicked(false);
        } else {
            navigate(`${coin.id}`, { state: { coinData: coin } });
        }
    };



    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Market Stats | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <div className='market-update'>
                <div className="market-update-top mb-10 flex items-center justify-between">
                    <h2 className='text-2xl text-light font-bold'>Market Statistics</h2>
                    <div className='flex items-center gap-3 rounded-full text-light py-3 px-4 bg-[#122036]'>
                        <HiOutlineMagnifyingGlass />
                        <input
                            type="text"
                            onChange={handleSearch}
                            value={searchTerm}
                            placeholder='Search Coin'
                            className='outline-none bg-transparent md:w-auto w-32'
                        />
                    </div>
                </div>
                <div>
                    <ul className='flex sm:items-center sm:gap-5 gap-0 mb-5 border-b  border-gray-700 border-opacity-80'>
                        <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'All Tokens' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => handleSelectedMarket('All Tokens')}>All Tokens</li>
                        <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Trending' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => handleSelectedMarket('Trending')}>Trending</li>
                        <li className={`max-sm:hidden font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Top Market Cap' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => handleSelectedMarket('Top Market Cap')}>Top Market Cap</li>
                        <li className={`sm:hidden font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Top Market Cap' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => handleSelectedMarket('Top Market Cap')}>Market Cap</li>
                        <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Watchlist' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => handleSelectedMarket('Watchlist')}>Watchlist</li>
                    </ul>
                </div>
                {isLoading ?
                    <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                        <Skeleton height={"40px"} count={1} className='mb-3' />
                        <Skeleton height={"35px"} count={20} className='mt-3' />
                    </SkeletonTheme>
                    :
                    <div className="market-update-table">
                        <div className={`market-update-header grid grid-cols-[30px_2fr_1fr_1fr_1fr_180px] max-lg:grid-cols-[30px_2fr_1fr_1fr_1fr] max-md:grid-cols-[30px_1fr_1fr_1fr] max-sm:grid-cols-[30px_1fr_auto] max-sm:justify-between gap-5 items-center font-semibold px-5 text-gray py-4 duration-200 border-b  border-gray-700 border-opacity-80 ${selectedMarket == 'Watchlist' && watchlist && 'hidden'}`}>
                            <p></p>
                            <p>Name</p>
                            <p>Current Price</p>
                            <p className='max-sm:hidden'>24hr Percentage</p>
                            <p className='max-md:hidden'>7d Percentage</p>
                            <p className='max-lg:hidden'>Market Cap</p>
                        </div>
                        <div>
                            {selectedMarket === 'Watchlist' && watchlist.length < 1
                                ?
                                <div className='flex flex-col gap-2 items-center mt-20'>
                                    <p><HiOutlineStar className='text-2xl text-gray mb-4' /></p>
                                    <h3 className='text-xl font-bold'>No token in watchlist!</h3>
                                    <p className='text-gray'>Look for a token and start it to add it to the watchlist</p>
                                </div>
                                :
                                <div>
                                    {filteredCoins.map((coin, index) => (
                                        <div
                                            className='table-content grid grid-cols-[30px_2fr_1fr_1fr_1fr_180px] max-lg:grid-cols-[30px_2fr_1fr_1fr_1fr] max-md:grid-cols-[30px_1fr_1fr_1fr] max-sm:grid-cols-[30px_1fr_auto] max-sm:justify-between gap-5 items-center cursor-pointer px-5 text-light py-5 duration-200 border-b border-gray-700 border-opacity-50 last:border-none z-[-1]'
                                            key={index}
                                            onClick={(e) => handleLinkClick(e, coin)}
                                        >
                                            {/* Star icon */}
                                            <div
                                                onClick={(e) => handleClick(e, coin)}
                                                className='bg-transparent border-none p-0 m-0'
                                            >
                                                {watchlist.some(item => item.id === coin.id)
                                                    ? <HiStar className='text-[22px] cursor-pointer text-secondary' />
                                                    : <HiOutlineStar className='text-[22px] cursor-pointer text-gray' />
                                                }
                                            </div>

                                            {/* Coin details */}
                                            <div className='flex items-center gap-3 max-lg:gap-4'>
                                                <img className='w-5 max-lg:w-8' src={coin.image} alt={coin.name} />
                                                <p className='flex items-center max-lg:flex-col-reverse max-lg:items-start max-lg:gap-1 text-left gap-3 font-semibold'>
                                                    {coin.name} <span className='text-sm uppercase text-gray'>{coin.symbol}</span>
                                                </p>
                                            </div>

                                            {/* Price */}
                                            <p>${coin.current_price.toFixed(2)}</p>

                                            {/* 24h percentage change */}
                                            <p className={`max-sm:hidden ${parseFloat(coin.price_change_percentage_24h) < 0 ? "text-red-400" : "text-green-400"}`}>
                                                {parseFloat(coin.price_change_percentage_24h) < 0 ? "" : "+"}
                                                {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%
                                            </p>

                                            {/* 7d percentage change */}
                                            <p className={`max-md:hidden ${parseFloat(coin.price_change_percentage_7d_in_currency) < 0 ? "text-red-400" : "text-green-400"}`}>
                                                {parseFloat(coin.price_change_percentage_7d_in_currency) < 0 ? "" : "+"}
                                                {parseFloat(coin.price_change_percentage_7d_in_currency).toFixed(2)}%
                                            </p>

                                            {/* Market cap */}
                                            <p className='max-lg:hidden'>${coin.market_cap.toLocaleString()}</p>
                                        </div>
                                    ))}


                                </div>
                            }
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default MarketStatistics;