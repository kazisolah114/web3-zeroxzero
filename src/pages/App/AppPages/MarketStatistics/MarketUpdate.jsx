import React, { useEffect, useState } from 'react';
import { HiOutlineMagnifyingGlass, HiOutlineStar } from "react-icons/hi2";
import './MarketStatistics.css';
import CoinChart from './CoinChart';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const MarketUpdate = () => {
    const [marketUpdate, setMarketUpdate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => {
                setMarketUpdate(data);
                setIsLoading(false);
            })
    }, [])

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredCoins = marketUpdate.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [selectedMarket, setSelectedMarket] = useState('All Tokens');

    const [modalCoinData, setModalCoinData] = useState(null);
    const handleShowModal = (coin) => {
        setModalCoinData(coin);
    }
    console.log(modalCoinData)


    return (


        <div className='market-update relative'>
            {/* <CoinChart modalCoinData={modalCoinData} setModalCoinData={setModalCoinData} /> */}
            <div className="market-update-top mb-10 flex items-center justify-between">
                <h2 className='text-2xl text-white font-bold'>Market Statistics</h2>
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
                    <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'All Tokens' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => setSelectedMarket('All Tokens')}>All Tokens</li>
                    <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Trending' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => setSelectedMarket('Trending')}>Trending</li>
                    <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Top Market Cap' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => setSelectedMarket('Top Market Cap')}>Top Market Cap</li>
                    <li className={`font-bold cursor-pointer w-32 py-3 text-center ${selectedMarket == 'Watchlist' && 'text-secondary border-b-2  border-[#12AFAF]'}`} onClick={() => setSelectedMarket('Watchlist')}>Watchlist</li>
                </ul>
            </div>
            {isLoading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <Skeleton height={"40px"} count={1} className='mb-3' />
                    <Skeleton height={"35px"} count={20} className='mt-3' />
                </SkeletonTheme>
                :
                <div className="market-update-table">
                    <div className="market-update-header font-semibold px-5 text-gray py-4 duration-200 border-b  border-gray-700 border-opacity-80">
                        <p></p>
                        <p>Name</p>
                        <p>Current Price</p>
                        <p>24hr Percentage</p>
                        <p>7d Percentage</p>
                        <p>Volume (24hr)</p>
                        <p>Market Cap</p>
                    </div>
                    {
                        filteredCoins.map((coin, index) => (
                            <div onClick={() => handleShowModal(coin)} className='table-content cursor-pointer px-5 text-light py-5 duration-200 border-b  border-gray-700 border-opacity-50 last:border-none' key={index}>
                                <p className=''><HiOutlineStar className='text-[22px] cursor-pointer text-gray' /></p>
                                <p className='flex items-center text-left gap-3 font-semibold'><img className='w-5' src={coin.image} alt="" /> {coin.name} <span className='text-sm uppercase text-gray'>{coin.symbol}</span></p>

                                <p>${coin.current_price.toFixed(2)}</p>
                                <p className={parseFloat(coin.price_change_percentage_24h) < 0 ? "text-red-400" : "text-green-400"}>
                                    {parseFloat(coin.price_change_percentage_24h) < 0 ? "" : "+"}
                                    {parseFloat(coin.price_change_percentage_24h).toFixed(2)}%
                                </p>
                                <p>N/A</p>
                                <p>N/A</p>
                                <p>${coin.market_cap.toLocaleString()}</p>
                            </div>
                        ))
                    }
                </div>
            }

        </div>


    );
};

export default MarketUpdate;
