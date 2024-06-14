import React, { useState } from 'react';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import './MarketStatistics.css';
import CoinChart from './CoinChart';

const MarketUpdate = ({ marketUpdate }) => {
    console.log(marketUpdate);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCoins = marketUpdate.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [modalCoinData, setModalCoinData] = useState(null);
    const handleShowModal = (coin) => {
        setModalCoinData(coin);
    }


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
            <div className="market-update-table">
                <div className="market-update-header font-semibold text-white mb-5 py-4 bg-[#122036] px-5 rounded-md">
                    <p>#</p>
                    <p>Name</p>
                    <p>Current Price</p>
                    <p>24h %</p>
                    <p>Market Cap</p>
                    <p></p>
                </div>
                {
                    filteredCoins.map((coin, index) => (
                        <div className='table-content px-5 text-light py-4 duration-200 border-b  border-gray-700 border-opacity-80' key={index}>
                            <p>{coin.market_cap_rank}</p>
                            <p className='flex items-center text-left gap-3'><img className='w-5' src={coin.image} alt="" /> {coin.name}</p>
                            <p>${coin.current_price}</p>
                            <p className={parseFloat(coin.price_change_24h) < 0 ? "text-red-400" : "text-green-400"}>
                                {parseFloat(coin.price_change_24h) < 0 ? "" : "+"}
                                {parseFloat(coin.price_change_24h).toFixed(2)}%
                            </p>
                            <p>${coin.market_cap}</p>
                            <button onClick={() => handleShowModal(coin)} className='border border-[#12AFAF] text-secondary duration-200 px-3 py-2 rounded-md font-semibold'>View Chart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MarketUpdate;
