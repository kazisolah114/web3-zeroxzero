import React, { useEffect, useState } from 'react';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const StakingTotal = () => {
    const [stakingTotal, setStakingTotal] = useState([]);
    useEffect(() => {
        fetch('/staking.json')
            .then(res => res.json())
            .then(data => {
                setStakingTotal(data.stakingTotal);
            })
    }, [])
    return (
        <div className='mb-14 relative'>
            <div className="all-total flex items-center justify-between ">
            
                <div className='w-96 '>
                    <p className='text-md text-gray'>The total value of ETH staked so far</p>
                    <div className='flex items-center mt-2 justify-between bg-[#111111c4] border border-[#0FCFCF] border-opacity-50 p-5 rounded-md  text-2xl text-light'>
                        <img className='w-8' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                        <h2>{stakingTotal.total_staked_eth} ETH</h2>
                    </div>
                </div>
                <div className='w-96 '>
                    <p className='text-md text-gray'>The total value of USD staked so far</p>
                    <div className='flex items-center mt-2 justify-between bg-[#111111c4] border border-[#0FCFCF] border-opacity-50 p-5 rounded-md  text-2xl text-light'>
                        <span className='font-extrabold text-2xl text-slate-500'>$</span>
                        <h2>{stakingTotal.total_staked_usd} USD</h2>
                    </div>
                </div>
                
            </div>
            <div className="month-total flex items-center justify-between mt-6">
                <div className='w-96 '>
                    <p className='text-md text-gray'>Last one month total value of ETH staked so far</p>
                    <div className='flex items-center mt-2 justify-between bg-[#111111c4] border border-[#0FCFCF] border-opacity-50 p-5 rounded-md  text-2xl text-light'>
                        <img className='w-8' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                        <h2>{stakingTotal.last_month_staked_eth} ETH</h2>
                    </div>
                </div>
                <div className='w-96 '>
                    <p className='text-md text-gray'>Last one month total value of USD staked so far</p>
                    <div className='flex items-center mt-2 justify-between bg-[#111111c4] border border-[#0FCFCF] border-opacity-50 p-5 rounded-md  text-2xl text-light'>
                        <span className='font-extrabold text-2xl text-slate-500'>$</span>
                        <h2>{stakingTotal.last_month_staked_usd} USD</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingTotal;