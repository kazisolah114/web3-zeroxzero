import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSort } from "react-icons/fa";
import './Staking.css';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ethers } from 'ethers';
import asset from './abi.json';
import { useUserContext } from '../../../../ContextAPI/UserContext';

const StakingDetails = () => {
    const { wallet } = useUserContext();
    const [filteredStaking, setFilteredStaking] = useState([]);
    const { id } = useParams();
    const [stakeToggle, setStakeToggle] = useState("stake");
    const provider = new ethers.JsonRpcProvider(process.env.VITE_APP_RPC_URL);
    const stakingContract = new ethers.Contract(process.env.VITE_APP_STAKING_ADDRESS, asset.abi, provider);
    const zeroContract = new ethers.Contract(process.env.VITE_APP_OXO_ADDRESS, asset['0x0_abi'], provider);
    const ethbitContract = new ethers.Contract(process.env.VITE_APP_ETH_ADDRESS, asset.eth_abi, provider);
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState('Enter the amount you want to stake.');

    useEffect(() => {
        fetch('/staking.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.stakingData.find(item => item.id === id);
                setFilteredStaking(filteredData);
            })
    }, [id]);
    const [stakeData, setStakeData] = useState({
        staked: 0,
        staking_rewards: 0,
        wallet_balance: 0,
        pendingReward: 0,
        daily: 0,
        monthly: 0,
        annual: 0,
        apr: 0,
        pool_share: 0
    });

    useEffect(() => {
        getUserInfo();
    }, [wallet]);

    const handleSetAmount = (value) => {
        setAmount(value);
        console.log(parseFloat(value) + stakeData.staked)
        if (!value) value = 0;
        setStakeData({
            ...stakeData,
            daily: ((parseFloat(value) + parseFloat(stakeData.staked)) * parseFloat(stakeData.apr) / 365 / 100).toFixed(2),
            monthly: ((parseFloat(value) + parseFloat(stakeData.staked)) * parseFloat(stakeData.apr) / 12 / 100).toFixed(2),
            annual: ((parseFloat(value) + parseFloat(stakeData.staked)) * parseFloat(stakeData.apr) / 100).toFixed(2)
        })
    }

    const handleStakeToggle = (value) => {
        setStakeToggle(value);
        setError(`Enter the amount you want to ${value}`)
    }
    const navigate = useNavigate();
    const handleStakeGoback = () => {
        navigate("/app/staking")
    }

    const getUserInfo = async () => {
        if (wallet) {
            try {
                let response = {
                    amount: 0,
                    rewardDebt: 0
                };
                let poolInfo = {
                    accZeroxZeroPerShare: 0,
                    allocPoint: 0
                }
                let balance = 0, pending = 0;
                const totalAllocPoint = await stakingContract.totalAllocPoint();
                let poolBalance = 0;
                if (id == "0x0com") {
                    poolInfo = await stakingContract.poolInfo(1);
                    response = await stakingContract.userInfo(1, wallet);
                    balance = await zeroContract.balanceOf(wallet);
                    balance = (parseFloat(balance).toFixed(2) / Math.pow(10, 18)).toFixed(2);
                    pending = await stakingContract.pendingZeroxZero(1, wallet);
                    poolBalance = await stakingContract.poolBalances(1);
                }
                if (id == "ethbits") {
                    poolInfo = await stakingContract.poolInfo(0);
                    response = await stakingContract.userInfo(0, wallet);
                    balance = await ethbitContract.balanceOf(wallet);
                    balance = (parseFloat(balance).toFixed(2) / Math.pow(10, 12)).toFixed(2);
                    pending = await stakingContract.pendingZeroxZero(0, wallet);
                    poolBalance = await stakingContract.poolBalances(0);
                }
                const { amount, rewardDebt } = response;

                setStakeData({
                    ...stakeData,
                    wallet_balance: parseFloat(balance).toFixed(2),
                    staked: parseFloat(amount).toFixed(2),
                    staking_rewards: parseFloat(rewardDebt).toFixed(2),
                    pendingReward: (parseFloat(pending)).toFixed(2),
                    // daily: (parseInt(amount) * parseInt(poolInfo.allocPoint) / parseInt(totalAllocPoint) / 365).toFixed(2),
                    // monthly: (parseInt(amount) * parseInt(poolInfo.allocPoint) / parseInt(totalAllocPoint) / 12).toFixed(2),
                    // annual: (parseInt(amount) * parseInt(poolInfo.allocPoint) / parseInt(totalAllocPoint)).toFixed(2),
                    apr: (parseInt(poolInfo.allocPoint) * 100 / parseInt(totalAllocPoint)).toFixed(2),
                    pool_share: (parseInt(balance) * 100 / parseInt(poolBalance)).toFixed(2)

                });
            } catch (error) {
                console.log(error.message);
            }
        }
        else {
            setStakeData({
                ...stakeData,
                wallet_balance: 0,
                staked: 0,
                staking_rewards: 0,
                pendingReward: 0,
                daily: 0,
                monthly: 0,
                annual: 0,
                apr: 0
            });
        }
    }

    const handleStaking = async () => {
        if (wallet) {
            if (amount > 0) {
                if (parseFloat(amount).toFixed(2) <= parseFloat(stakeData.wallet_balance).toFixed(2)) {
                    if (id == "0x0com") {
                        await stakingContract.deposit(1, amount, wallet);
                    }
                    if (id == "ethbits") {
                        await stakingContract.deposit(0, amount, wallet);
                    }
                }
                else {
                    console.log("Your wallet balance is not sufficient for this trade.");
                    setError("Your wallet balance is not sufficient for this trade.")
                }
            }
            else {
                console.log("Please enter amount.");
                setError("Please enter amount.");
            }
        }
        else {
            console.log("Please connect wallet.");
            setError("Please connect wallet.")
        }
    }

    const handleUnStaking = async () => {
        if (wallet) {
            if (amount > 0) {
                if (parseFloat(amount).toFixed(2) <= stakeData.staked) {
                    if (id == "0x0com") {
                        await stakingContract.withdraw(1, amount, wallet);
                    }
                    if (id == "ethbits") {
                        await stakingContract.withdraw(0, amount, wallet);
                    }
                }
                else {
                    console.log("Your staked balance is not sufficient for this trade.");
                    setError("Your staked balance is not sufficient for this trade.")
                }
            }
            else {
                console.log("Please enter amount.");
                setError("Please enter amount.");
            }            
        }
        else {
            console.log("Please connect wallet.");
            setError("Please connect wallet.")
        }
    }

    const handleClaim = async () => {
        if (wallet) {
            if (amount > 0) {
                if (parseFloat(amount).toFixed(2) <= stakeData.pendingReward) {
                    if (id == "0x0com") {
                        await stakingContract.harvest(1, wallet);
                    }
                    if (id == "ethbits") {
                        await stakingContract.harvest(0, wallet);
                    }
                }
                else {
                    console.log("Your pending reward balance is not sufficient fot this trade.");
                }
            }
            else {
                console.log("Please enter amount.");
            }
        }
        else {
            console.log("Please connect wallet.");
        }
    }

    return (
        <div>
            <div className="staking-details-content ">
                <div className="stake-goback-btn mb-10">
                    <button onClick={handleStakeGoback} className='group bg-secondaryHover hover:bg-secondary duration-200 w-28 h-9 rounded-md text-2xl flex justify-center items-center'>
                        <HiArrowNarrowLeft className='group-hover:mr-10 transition-all duration-200' />
                    </button>
                </div>
                <div className="staking-info">
                    <div className="details item relative">
                        <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                        <div className=' pb-5 mb-[60px]'>
                            <h4 className='text-gray text-lg'>{filteredStaking.staking_with_abr}</h4>
                            <div className='flex flex-col text-center items-center'>
                                <img className='w-[80px] h-[80px] mt-2 mb-4 ' src={filteredStaking.staking_with_logo} alt="" />
                                <h2 className='font-semibold text-light text-xl uppercase'>{stakeData.apr}% APR</h2>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold text-light mb-6'>CALCULATE EARNING</h2>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Daily <span className='text-light'>{stakeData.daily} {filteredStaking.staking_for_abr}</span></p>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Monthly <span className='text-light'>{stakeData.monthly} {filteredStaking.staking_for_abr}</span></p>
                            <p className='text-gray flex items-center justify-between ' >Yearly <span className='text-light'>{stakeData.annual} {filteredStaking.staking_for_abr}</span></p>
                        </div>
                    </div>
                    <div className="staking-unstaking item relative">
                        <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                        <div className=' border-b border-gray-700 border-opacity-80 '>
                            <button onClick={() => handleStakeToggle("stake")} className={`${stakeToggle === "stake" && 'border-b border-[#0FCFCF] text-secondary'}  pb-2 w-3/6 font-semibold uppercase text-lg tracking-[2px] text-text`}>Stake</button>
                            <button onClick={() => handleStakeToggle("unstake")} className={`${stakeToggle == "unstake" && 'border-b border-[#0FCFCF] text-secondary'} pb-2 w-3/6 font-semibold uppercase text-lg tracking-[2px] text-light`}>UnStake</button>
                        </div>
                        <div className='mt-32 '>
                            <p className='text-gray text-center'>{error}</p>
                            <div className='mt-10 pb-3 flex items-center justify-between border-b border-gray-700 border-opacity-80'>
                                <img className='w-6' src={filteredStaking.staking_with_logo} alt="" />
                                <input className='staking-input  outline-none text-center' type="number" placeholder="0.00" onChange={e => handleSetAmount(e.target.value)}/>
                                <span className='cursor-pointer'><FaSort /></span>
                            </div>
                            <div className='flex items-center justify-between mt-2 text-gray text-sm'>
                                <p>IN USD: 0.00</p>
                                {stakeToggle == "stake" ? <p>WALLET BALANCE: {stakeData.wallet_balance}</p> : <p>STAKED BALANCE: {stakeData.staked}</p>}

                            </div>
                        </div>
                        <div className='mt-20'>
                            {stakeToggle == "stake" ?
                                <buton className="bg-secondaryHover flex justify-center  py-3 rounded-md font-bold cursor-pointer hover:bg-secondary duration-200 " onClick={handleStaking}>Stake Now</buton>
                                :
                                <buton className="bg-secondaryHover flex justify-center  py-3 rounded-md font-bold cursor-pointer hover:bg-secondary duration-200 " onClick={handleUnStaking}>Unstake Now</buton>}
                        </div>
                    </div>
                    <div className="total item ">
                        <div className='mb-48'>
                            <h2 className='text-lg font-semibold text-light mb-6'>YOUR BALANCE</h2>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Staked Amount <span className='text-light'>{stakeData.staked} {filteredStaking.staking_with_abr}</span></p>
                            <p className='text-gray flex items-center justify-between mb-4 pb-4 border-b border-gray-700 border-opacity-80' >Earned Rewards <span className='text-light'>{stakeData.staking_rewards} {filteredStaking.staking_for_abr}</span></p>
                            <p className='text-gray flex items-center justify-between ' >Pool Share <span className='text-light'>{stakeData.pool_share} %</span></p>
                        </div>
                        <div className=''>

                            <buton className="bg-[#ddc445] text-dark flex justify-center  py-3 rounded-md font-bold cursor-pointer hover:bg-[#F8D735] duration-200 " onClick={handleClaim}>Claim Now</buton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingDetails;
