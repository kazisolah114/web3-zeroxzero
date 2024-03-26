import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSort } from "react-icons/fa";
import './Staking.css';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import { HiArrowNarrowLeft } from "react-icons/hi";

const StakingDetails = () => {
    const [filteredStaking, setFilteredStaking] = useState([]);
    const { id } = useParams();
    const [stakeToggle, setStakeToggle] = useState("stake");
    useEffect(() => {
        fetch('/staking.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.stakingData.find(item => item.id === id);
                setFilteredStaking(filteredData);
            })
    }, [id]);

    const handleStakeToggle = (value) => {
        setStakeToggle(value);
    }
    const navigate = useNavigate();
    const handleStakeGoback = () => {
        navigate("/app/staking")
    }

    console.log("Filtered Data", filteredStaking);
    console.log(stakeToggle)

    return (
        <div>
            <div className="staking-details-content ">
                <div className="stake-goback-btn mb-10">
                    <button onClick={handleStakeGoback} className='group bg-secondaryHover hover:bg-secondary duration-200 w-28 h-9 rounded-md text-2xl flex justify-center items-center'>
                        <HiArrowNarrowLeft className='group-hover:mr-10 transition-all duration-200' />
                    </button>
                </div>
                <div className="staking-info">
                    <div className="item relative">
                        <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                        <div className=' pb-5 mb-[60px]'>
                            <h4 className='text-gray text-lg'>{filteredStaking.staking_with_abr}</h4>
                            <div className='flex flex-col text-center items-center'>
                                <img className='w-[80px] h-[80px] mt-2 mb-4 ' src={filteredStaking.staking_with_logo} alt="" />
                                <h2 className='font-semibold text-light text-xl uppercase'>{filteredStaking.apr_percentage}% APR</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold text-light mb-6'>CALCULATE EARNING</h2>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Daily <span className='text-light'>0.00 {filteredStaking.staking_for_abr}</span></p>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Monthly <span className='text-light'>0.00 {filteredStaking.staking_for_abr}</span></p>
                            <p className='text-gray flex items-center justify-between ' >Yearly <span className='text-light'>0.00 {filteredStaking.staking_for_abr}</span></p>
                        </div>
                    </div>
                    <div className="item relative">
                        <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                        <div className=' border-b border-gray-700 border-opacity-80 '>
                            <button onClick={() => handleStakeToggle("stake")} className={`${stakeToggle === "stake" && 'border-b border-[#0FCFCF] text-secondary'}  pb-2 w-3/6 font-semibold uppercase text-lg tracking-[2px] text-text`}>Stake</button>
                            <button onClick={() => handleStakeToggle("unstake")} className={`${stakeToggle == "unstake" && 'border-b border-[#0FCFCF] text-secondary'} pb-2 w-3/6 font-semibold uppercase text-lg tracking-[2px] text-light`}>UnStake</button>
                        </div>
                        <div className='mt-32 '>
                            <p className='text-gray text-center'>Enter the amount you want to {stakeToggle == "stake" ? "stake" : "unstake"}</p>
                            <div className='mt-10 pb-3 flex items-center justify-between border-b border-gray-700 border-opacity-80'>
                                <img className='w-6' src={filteredStaking.staking_with_logo} alt="" />
                                <input className='staking-input  outline-none text-center' type="number" placeholder="0.00" />
                                <span className='cursor-pointer'><FaSort /></span>
                            </div>
                            <div className='flex items-center justify-between mt-2 text-gray text-sm'>
                                <p>IN USD: 0.00</p>
                                {stakeToggle == "stake" ? <p>WALLET BALANCE: 0.00</p> : <p>STAKED BALANCE: 0.00</p>}

                            </div>
                        </div>
                        <div className='mt-20'>
                            {stakeToggle == "stake" ?
                                <buton className="bg-secondaryHover flex justify-center  py-3 rounded-md font-bold cursor-pointer hover:bg-secondary duration-200 ">Stake Now</buton>
                                :
                                <buton className="bg-secondaryHover flex justify-center  py-3 rounded-md font-bold cursor-pointer hover:bg-secondary duration-200 ">Unstake Now</buton>}
                        </div>
                    </div>
                    <div className="item ">
                        <div className='mb-48'>
                            <h2 className='text-lg font-semibold text-light mb-6'>YOUR BALANCE</h2>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Staked Amount <span className='text-light'>0.00 {filteredStaking.staking_with_abr}</span></p>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Earned Rewards <span className='text-light'>0.00 {filteredStaking.staking_for_abr}</span></p>
                            <p className='text-gray flex items-center justify-between ' >Pool Share <span className='text-light'>0.00 %</span></p>
                        </div>
                        <div className=''>

                            <buton className="bg-[#ddc445] text-dark flex justify-center  py-3 rounded-md font-bold cursor-pointer hover:bg-[#F8D735] duration-200 ">Claim Now</buton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingDetails;
