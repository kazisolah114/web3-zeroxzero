import React, { useEffect, useState } from 'react';
import './NewUniswapToken.css'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const NewUniswapTokens = () => {
    const [marketUpdate, setMarketUpdate] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setMarketUpdate(data);
                    setLoading(false);
                } else {
                    setLoading(true);
                }
            })
            .catch(err => {
                console.log(err)
                setLoading(true);
            })
    }, [])
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredCoins = marketUpdate.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <div className="new-tokens-header market-update-top mb-10 flex items-center justify-between">
                <h2 className='text-2xl text-white font-bold'>New Uniswap Listings</h2>
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
            {loading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-y-5 gap-x-5'>
                        <Skeleton height={"160px"} width={""} count={4} className='w-auto mb-3' />
                        <Skeleton height={"160px"} width={""} count={4} className='w-auto mb-3' />
                        <Skeleton height={"160px"} width={""} count={4} className='w-auto mb-3' />
                    </div>
                </SkeletonTheme>
                :
                <div className='carousel p-5 bg-[#122036] rounded-md grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-y-5 gap-x-5'>
                    {
                        filteredCoins.map((item, index) => <div className='carousel-item cursor-pointer w-auto text-light bg-gray-900 px-5 py-7 flex  flex-col gap-3 rounded-md' key={index}>
                            <div className='flex items-center gap-3'>
                                <img className='w-7' src={item.image} alt="" />
                                <h5 className='font-semibold text-lg'>{item.name}</h5>
                                <span className='uppercase font-semibold text-gray '>{item.symbol} / usd</span>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>USD {item.current_price}</h2>
                            </div>
                            <div className='flex items-center gap-3'>
                                <p className='text-gray'>${item.ath}</p>
                                <span className={`${item.ath_change_percentage < 0 ? 'bg-red-500' : 'bg-green-500'} rounded-full px-2`}>{item.ath_change_percentage.toFixed(2)}%</span>
                            </div>
                        </div>)
                    }
                </div>
            }

        </div>
    );
};

export default NewUniswapTokens;