import React, { useEffect, useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const NewTokens = () => {
    const [newTokens, setNewTokens] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://statboard.0x0.com/api/token/list?method=month`)
            .then(res => res.json())
            .then(data => {
                setNewTokens(data.data);
                setIsLoading(false);
            })
    }, [])
    return (
        <div className='bg-[#122036] rounded-md py-3 px-5 mt-5'>
            <h2 className='font-semibold text-xl mb-7'>New Uniswap Tokens</h2>
            {isLoading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <Skeleton height={"35px"} count={10} className='mt-3' />
                </SkeletonTheme>
                :
                <div>
                    <ul>
                        {
                            newTokens.slice(0, 10).map(token => (
                                <li key={token._id} className='group flex justify-between items-center cursor-pointer text-light mb-2 pb-3 border-b border-gray-700 border-opacity-80 last:border-none'>
                                    <div className='flex items-center gap-2'>
                                        <img className='w-4' src="/images/0x0-logo-head.png" alt="" />
                                        <p className='text-gray group-hover:text-white duration-200'>{token.name.slice(0, 13)}</p>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <p>$0.029</p>
                                        <p className='text-green-500'>+8.32%</p>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                    <Link><button className='text-secondary underline flex items-center gap-1 hover:text-[#65ffffeb] duration-200'>Explore More <HiOutlineExternalLink /></button></Link>
                </div>
            }

        </div>
    );
};

export default NewTokens;