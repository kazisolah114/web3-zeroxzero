import React, { useEffect, useState } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { HiOutlineChartBar } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../../ContextAPI/UserContext';

const ZeroxBalance = ({tokenPrice}) => {
    const perTokenPrice = tokenPrice?.price?.usdPrice;
    const {wallet, tokenBalance} = useUserContext();
    const [totalUsdPrice, setTotalUsdPrice] = useState(null);
    useEffect(() => {
        const handleTotalUsd = () => {
            setTotalUsdPrice(perTokenPrice * tokenBalance);
        }
        handleTotalUsd()
    }, [tokenBalance, tokenPrice])
    
    return (
        <div className="token-balance bg-[#122036] rounded-md py-3 px-5 mb-5 flex items-center justify-between">
            <div>
                <p className=' text-gray mb-3 flex items-center gap-2'><HiOutlineChartBar className='text-secondary' /> Total 0x0 balance</p>
                {wallet ?
                    <div className='flex md:items-center gap-1 md:gap-3 md:flex-row flex-col'>
                        <h2 className='text-2xl font-bold text-light flex items-center gap-1'><img className='w-6 relative top-[2px]' src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0xb8fda5aee55120247f16225feff266dfdb381d4c.png" alt="" /> {Number(tokenBalance).toFixed(2)} <span className='text-light text-base'>0x0</span></h2>
                        <span className='text-gray font-semibold'>(${totalUsdPrice?.toFixed(2) || 'N/A'})</span>
                    </div>
                    :
                    <p className='text-secondary'>Connect wallet to see balance!</p>
                }
            </div>
            <div>
                <Link to="https://app.uniswap.org/explore/tokens/ethereum/0xb8fda5aee55120247f16225feff266dfdb381d4c" target='_blank' className='w-40 h-11 flex justify-center items-center font-bold rounded-md  bg-[#233550] text-secondary shadow-[1px_1px_10px_#101825] hover:shadow-[1px_1px_20px_#101825] duration-200'>Buy 0x0 Now <HiOutlineExternalLink className='ml-2' /></Link>
            </div>
        </div>
    );
};

export default ZeroxBalance;