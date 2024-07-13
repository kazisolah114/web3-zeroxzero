import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const CoinDetails = () => {
    let location = useLocation();
    const coinData = location.state?.coinData;
    console.log(coinData);
    if(!coinData) {
        return <div>Page not found!</div>
    }
    return (
        <div>
            <div className="details-header flex items-center justify-between">
                <div className="coin-det flex items-center gap-3">
                    <img className='w-9' src={coinData.image} alt="" />
                    <div>
                        <h3 className='font-extrabold text-lg '>{coinData.name}</h3>
                        <p className='text-gray'>Network here</p>
                    </div>
                </div>
                <div className="coin-info flex items-center gap-2">
                    <Link className='border border-gray-500 py-2 px-5 rounded-full text-gray flex items-center gap-1'>Add to MetaMask <img src="/images/metamask-logo.png" alt="" /></Link>
                    <Link className='border border-gray-500 py-2 px-5 rounded-full text-gray flex items-center gap-1'>View on block explorer <HiExternalLink /></Link>
                </div>
            </div>













    
            {/* <h2>Coin details page for {coinData.name}</h2>
            <img src={coinData.image} alt={`${coinData.name} logo`} />
            <p>Current Price: ${coinData.current_price}</p>
            <p>Market Cap: ${coinData.market_cap}</p>
            <p>Market Cap Rank: {coinData.market_cap_rank}</p>
            <p>24h High: ${coinData.high_24h}</p>
            <p>24h Low: ${coinData.low_24h}</p>
            <p>24h Volume: ${coinData.total_volume}</p>
            <p>Price Change (24h): ${coinData.price_change_24h}</p>
            <p>Price Change Percentage (24h): {coinData.price_change_percentage_24h}%</p>
            <p>Price Change Percentage (7d): {coinData.price_change_percentage_7d_in_currency}%</p>
            <p>All Time High (ATH): ${coinData.ath}</p>
            <p>ATH Change Percentage: {coinData.ath_change_percentage}%</p>
            <p>ATH Date: {new Date(coinData.ath_date).toLocaleDateString()}</p>
            <p>All Time Low (ATL): ${coinData.atl}</p>
            <p>ATL Change Percentage: {coinData.atl_change_percentage}%</p>
            <p>ATL Date: {new Date(coinData.atl_date).toLocaleDateString()}</p>
            <p>Circulating Supply: {coinData.circulating_supply}</p>
            <p>Total Supply: {coinData.total_supply}</p>
            <p>Max Supply: {coinData.max_supply}</p>
            <p>Fully Diluted Valuation: ${coinData.fully_diluted_valuation}</p>
            <p>Last Updated: {new Date(coinData.last_updated).toLocaleString()}</p> */}
        </div>
    );
};

export default CoinDetails;
