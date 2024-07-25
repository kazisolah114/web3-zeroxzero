import React, { useEffect, useState } from 'react';
import './Staking.css';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { HiChevronUpDown, HiMiniListBullet, HiOutlineSquares2X2 } from "react-icons/hi2";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import asset from './abi.json';
import { ethers } from 'ethers';

const Staking = () => {
    const [stakingData, setStakingData] = useState([]);
    const provider = new ethers.JsonRpcProvider(process.env.VITE_APP_RPC_URL);
    const stakingContract = new ethers.Contract(process.env.VITE_APP_STAKING_ADDRESS, asset.abi, provider);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        fetch('/staking.json')
            .then(res => res.json())
            .then(data => {
                setStakingData(data.stakingData);
            })
        }, []);
        
    useEffect(() => {
        if (stakingData.length > 0 && !flag) {
            getPoolData();
            setFlag(true);
        }
    }, [stakingData]);

    const [isDefault, setIsDefault] = useState(true);

    const handleDefaultSort = () => {
        setIsDefault(!isDefault);

        if (isDefault) {
            const sortedData = [...stakingData].sort((a, b) => b.apr_percentage - a.apr_percentage);
            setStakingData(sortedData);
        } else {
            fetch('/staking.json')
                .then(res => res.json())
                .then(data => {
                    setStakingData(data.stakingData);
                });
        }
    }

    const [viewMode, setViewMode] = useState("block");
    const handleViewMode = (view) => {
        setViewMode(view);
    }

    const getPoolData = async () => {
        const poolEtbs = await stakingContract.poolBalances(0);
        const pool0x0 = await stakingContract.poolBalances(1);
        const totalAllocPoint = await stakingContract.totalAllocPoint();
        const poolInfo0x0 = await stakingContract.poolInfo(1);
        const poolInfoEth = await stakingContract.poolInfo(0);
        let data = stakingData.map(item => {
            if (item.id == "0x0com"){
                item.pool_value = (parseInt(pool0x0) / Math.pow(10, 18)).toFixed(2);
                item.apr_percentage = parseInt(poolInfo0x0.allocPoint) * 100 / parseInt(totalAllocPoint);
            }
            if (item.id == "ethbits") {
                item.pool_value = (parseInt(poolEtbs) / Math.pow(10, 12)).toFixed(2);
                item.apr_percentage = parseInt(poolInfoEth.allocPoint) * 100 / parseInt(totalAllocPoint);
            }
            return item;
        })

        console.log(data);
        setStakingData(data);
        // console.log((parseInt(pool0x0) / Math.pow(10, 18)).toFixed(2));
        // console.log((parseInt(poolEtbs) / Math.pow(10, 12)).toFixed(2))
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Staking | 0x0.com</title>
                <link rel='canonical' href="https://0x0.com" />
            </Helmet>
            <div className="staking-sorter flex items-center justify-between mb-10 uppercase font-semibold">
                <div>
                    <h3 onClick={handleDefaultSort} className='cursor-pointer text-md flex items-center text-secondary gap-1'><span className='text-secondary text-xl font-bold'><HiChevronUpDown /></span>{isDefault ? "Default" : "Highest APR"}</h3>
                </div>
                <div className='view flex items-center gap-5 '>
                    <h3 onClick={() => handleViewMode("block")} className={`cursor-pointer ${viewMode == 'block' && 'text-secondary'} text-md flex items-center  gap-2`}><span><HiOutlineSquares2X2 className='text-secondary text-xl font-bold' /></span> Block View</h3>
                    <h3 onClick={() => handleViewMode("list")} className={`cursor-pointer text-md ${viewMode == 'list' && 'text-secondary'} flex items-center gap-2`}><span><HiMiniListBullet className='text-secondary text-xl font-bold' /></span> List View</h3>
                </div>
            </div>
            {viewMode == 'block' ?
                <div className="staking-items">
                    {
                        stakingData.map((item) =>
                            <div key={item.id} className={`staking-item ${item.apr_percentage >= 20 && 'top'} py-10 rounded-md relative`}>
                                <BackgroundShadow customShadow="0px 0px 400px 60px #10B8B9" />
                                <div className='mb-5 pb-5 border-b border-gray-600 border-opacity-80'>
                                    <img className='w-16 mx-auto' src={item.staking_with_logo} alt="" />
                                    <h2 className='mt-4 font-bold text-xl text-light uppercase'>{item.staking_with_abr} to {item.staking_for_abr}</h2>
                                </div>
                                <div className='px-5 flex flex-col gap-4'>
                                    <h3 className='flex justify-between  text-light'>Stake With <span className=' text-secondary font-semibold text-md'>{item.staking_with}</span></h3>
                                    <h3 className='flex justify-between  text-light'>Stake For <span className=' text-secondary font-semibold text-md'>{item.staking_for}</span></h3>
                                    <h3 className='flex justify-between  text-light'>Staking APR <span className=' text-secondary font-semibold text-md'>{item.apr_percentage}%</span></h3>
                                    <h3 className='flex justify-between  text-light'>Pool Value <span className=' text-secondary font-semibold text-md'>{item.pool_value} {item.staking_with_abr}</span></h3>
                                    <Link to={`${item.id}`} className='bg-secondary hover:bg-secondaryHover  w-full p-3 rounded-lg mt-10 font-semibold mx-auto duration-200'>View Details</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
                :
                <div className="staking-items-list">
                    {
                        stakingData.map((item) =>
                            <div key={item.id} className={`staking-item  ${item.apr_percentage >= 20 && 'top'} py-5 px-5 rounded-md `}>
                                <div className='flex items-center gap-5 '>
                                    <img className='w-12' src={item.staking_with_logo} alt="" />
                                    <h2 className=' font-semibold text-lg text-light uppercase'>{item.staking_with_abr} to {item.staking_for_abr}</h2>
                                </div>
                                <div className='lists-btn flex items-center justify-between gap-8'>
                                    <div className='lists flex justify-start items-center gap-4'>
                                        <h3 className='flex gap-2 text-light'>Stake With: <span className=' text-secondary font-semibold text-md'>{item.staking_with}</span></h3>
                                        <h3 className='flex  gap-2 text-light'>Stake For: <span className=' text-secondary font-semibold text-md'>{item.staking_for}</span></h3>
                                        <h3 className='temp flex  gap-2 text-light'>Staking APR: <span className=' text-secondary font-semibold text-md'>{item.apr_percentage}%</span></h3>
                                        <h3 className='temp flex  gap-2 text-light'>Pool Value: <span className=' text-secondary font-semibold text-md'>{item.pool_value} {item.staking_with_abr}</span></h3>
                                    </div>
                                    <div>
                                        <Link to={`${item.id}`} className='bg-secondary text-center hover:bg-secondaryHover  w-40 p-3 rounded-lg font-semibold mx-auto duration-200'>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default Staking;
