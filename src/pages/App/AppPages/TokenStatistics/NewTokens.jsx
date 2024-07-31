import React, { useEffect, useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const NewTokens = () => {
    const [newTokens, setNewTokens] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNewTokens = async () => {
            try {
                const response = await fetch(`https://statboard.0x0.com/api/token/list?method=month&page=1&limit=9`);
                const data = await response.json();
                if (data.data.length > 0) {
                    setNewTokens(data.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching new tokens:', error);
                setIsLoading(true);
            } finally {
                
            }
        };

        fetchNewTokens();
    }, []);

    return (
        <div className='bg-[#122036] rounded-md py-3 px-5 mt-5'>
            <h2 className='font-semibold text-xl mb-7'>New Uniswap Tokens</h2>
            {isLoading ? <LoadingSkeleton /> : <TokenList newTokens={newTokens} />}
        </div>
    );
};

const LoadingSkeleton = () => (
    <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
        <Skeleton height={"35px"} count={9} className='mt-3' />
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
