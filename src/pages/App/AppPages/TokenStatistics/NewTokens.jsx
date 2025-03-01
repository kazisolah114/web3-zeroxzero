import React, { useEffect, useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const fallbackTokens = [
    { _id: '1', name: 'TokenA', logo: '', prices: [{ priceUSD: '1.23' }], "24h_percent": 5.2 },
    { _id: '2', name: 'TokenB', logo: '', prices: [{ priceUSD: '0.89' }], "24h_percent": -3.1 },
    { _id: '3', name: 'TokenC', logo: '', prices: [{ priceUSD: '2.45' }], "24h_percent": 1.7 },
    { _id: '4', name: 'TokenD', logo: '', prices: [{ priceUSD: '0.67' }], "24h_percent": -0.9 },
    { _id: '5', name: 'TokenE', logo: '', prices: [{ priceUSD: '3.76' }], "24h_percent": 4.5 },
    { _id: '6', name: 'TokenF', logo: '', prices: [{ priceUSD: '1.15' }], "24h_percent": -2.3 },
    { _id: '7', name: 'TokenG', logo: '', prices: [{ priceUSD: '5.12' }], "24h_percent": 6.8 },
    { _id: '8', name: 'TokenH', logo: '', prices: [{ priceUSD: '0.45' }], "24h_percent": -1.2 },
    { _id: '9', name: 'TokenI', logo: '', prices: [{ priceUSD: '2.90' }], "24h_percent": 3.0 },
];

const NewTokens = () => {
    const [newTokens, setNewTokens] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchNewTokens = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`https://statboard.0x0.com/api/token/list?method=month&page=1&limit=9`);
                const data = await response.json();
                console.log(data);
                if (data.data.length > 0) {
                    setNewTokens(data.data);
                } else {
                    setNewTokens(fallbackTokens);
                }
            } catch (error) {
                console.error('Error fetching new tokens:', error);
                setNewTokens(fallbackTokens);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNewTokens();
    }, []);

    return (
        <div className='bg-[#122036] rounded-md py-3 px-5 mt-5 blur-content bg-transparent border border-[#0fcfcf4b]'>
            <h2 className='font-semibold text-xl mb-7'>New Uniswap Tokens</h2>
            {isLoading ? <LoadingSkeleton /> : <TokenList newTokens={newTokens} />}
        </div>
    );
};

const LoadingSkeleton = () => (
    <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
        <Skeleton height={'35px'} count={9} className='mt-3' />
    </SkeletonTheme>
);

const TokenList = ({ newTokens }) => (
    <>
        <ul>
            {newTokens.map(token => {
                const latestPrice = token.prices[token.prices.length - 1]; // Get the latest price
                return (
                    <li key={token._id} className='group grid grid-cols-[3fr_2fr] items-center cursor-pointer text-light mb-2 pb-3 border-b border-gray-700 border-opacity-80 last:border-none'>
                        <div className='flex items-center gap-2'>
                            <img className='w-4' src={token?.logo || 'https://cdn-icons-png.flaticon.com/512/16/16096.png'} alt="logo" />
                            <p className='text-gray group-hover:text-white duration-200'>{token.name.slice(0, 13)}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            {latestPrice ?
                                <p className=''>${Number(latestPrice.priceUSD).toFixed(2)}</p>
                                :
                                <p className=''>$N/A</p>
                            }
                            <p className={`${token['24h_percent']?.toString().startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{token['24h_percent']?.toString().startsWith('-') || <span className='text-[10px] -mr-1'>+</span>} {token['24h_percent']?.toFixed(2) || 'N/A'}%</p>
                        </div>
                    </li>
                );
            })}
        </ul>

        <Link to="/explore-more">
            <button className='text-secondary text-sm underline flex items-center gap-1 hover:text-[#65ffffeb] duration-200'>
                Explore More <HiOutlineExternalLink />
            </button>
        </Link>
    </>
);

export default NewTokens;
