import React from 'react';
import { HiExternalLink, HiOutlineStar } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import LoaderSpinner from '../../../../components/CommonComponents/LoaderSpinner/LoaderSpinner';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const CoinDetails = () => {
    let location = useLocation();
    const coinData = location.state?.coinData;
    console.log(coinData);
    if (!coinData) {
        return <div>Page not found!</div>
    }
    const selectedDuration = '1D';
    return (
        <div className='blur-content bg-transparent border border-[#0fcfcf4b] rounded-md p-5'>
            <div className="details-header flex  justify-between ">
                <div className="coin-det flex items-center gap-3">
                    <img className='w-9' src={coinData.image} alt="" />
                    <div>
                        <h3 className='font-extrabold text-lg '>{coinData.name}</h3>
                        <p className='text-gray'>Network here</p>
                    </div>
                </div>
                <div className="coin-info flex items-center gap-4">
                    <Link className='max-md:hidden py-2 px-3 rounded-md flex items-center gap-1 bg-transparent hover:bg-secondaryHover hover:text-white border border-[#0fcfcf] text-secondary shadow-[1px_1px_10px_#101825] hover:shadow-[1px_1px_20px_#101825] duration-200'>Add to MetaMask <img src="/images/metamask-logo.png" alt="" className='w-5' /></Link>
                    <Link to={`https://etherscan.io/address/${coinData.id}`} target='_blank' className=' py-2 px-3 rounded-md flex items-center gap-1 bg-transparent hover:bg-secondaryHover hover:text-white border border-[#0fcfcf] text-secondary shadow-[1px_1px_10px_#101825] hover:shadow-[1px_1px_20px_#101825] duration-200'>View on Block Explorer <HiExternalLink /></Link>
                </div>
            </div>
            <div className="coin-details-content mt-10 ">
                <div className="flex justify-between items-start max-sm:flex-col gap-5">
                    <div>
                        <h2 className='text-white font-bold text-2xl mb-2'>${coinData.current_price.toFixed(2)}</h2>
                        <div className={`flex gap-2 ${coinData.price_change_percentage_24h.toString().startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                            <p className='flex items-center '>{coinData.price_change_24h.toString().startsWith('-') ? <FaCaretDown /> : <FaCaretUp  />} ${coinData.price_change_24h.toFixed(4)}</p>
                            <p className='flex items-center'>({coinData.price_change_percentage_24h.toString().startsWith('-') ? '' : '+' }{coinData.price_change_percentage_24h.toFixed(3)}%)</p>
                            <p className='text-gray'>from last 24h</p>
                        </div>
                    </div>
                    <div className="token-interval  rounded-md  p-1 flex items-center gap-1 text-light">
                        <button onClick={() => handleDuration("1D")} className={`${selectedDuration == "1D" && 'bg-[#182b47]'} px-4 rounded-md`}>1D</button>
                        <button onClick={() => handleDuration("7D")} className={`${selectedDuration == "7D" && 'bg-[#182b47]'} px-4 rounded-md`}>7D</button>
                        <button onClick={() => handleDuration("1M")} className={`${selectedDuration == "1M" && 'bg-[#182b47]'} px-4 rounded-md`}>1M</button>
                        <button onClick={() => handleDuration("1Y")} className={`${selectedDuration == "1Y" && 'bg-[#182b47]'} px-4 rounded-md`}>1Y</button>
                        <button onClick={() => handleDuration("All")} className={`${selectedDuration == "All" && 'bg-[#182b47]'} px-4 rounded-md`}>All</button>
                    </div>
                </div>
                <div className='text-center flex flex-col items-center my-14 py-20 border-y border-gray-700 border-opacity-50'>
                    <LoaderSpinner />
                    <b className='text-light mt-5'>Price chart is not available</b>
                    <p className='text-gray'>The price chart for {coinData.name} is not available at the moment</p>
                </div>
                <div className='grid grid-cols-4 justify-around gap-8 max-md:grid-cols-3 max-sm:grid-cols-2'>
                    <div>
                        <p className='text-gray mb-2'>Market cap</p>
                        <p className='font-semibold'>${coinData.market_cap}</p>
                    </div>
                    <div>
                        <p className='text-gray mb-2'>Total volume (24h)</p>
                        <p className='font-semibold'>${coinData.total_volume}</p>
                    </div>
                    <div>
                        <p className='text-gray mb-2'>Circulating supply</p>
                        <p className='font-semibold'>${coinData.circulating_supply}</p>
                    </div>
                    <div>
                        <p className='text-gray mb-2'>Total supply</p>
                        <p className='font-semibold'>${coinData.total_supply}</p>
                    </div>
                    <div>
                        <p className='text-gray mb-2'>Max supply</p>
                        <p className='font-semibold'>${coinData.max_supply || ' N/A'}</p>
                    </div>
                    <div>
                        <p className='text-gray mb-2'>All-time high</p>
                        <p className='font-semibold'>${coinData.ath}</p>
                    </div>
                    <div>
                        <p className='text-gray mb-2'>All-time low</p>
                        <p className='font-semibold'>${coinData.atl}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;
