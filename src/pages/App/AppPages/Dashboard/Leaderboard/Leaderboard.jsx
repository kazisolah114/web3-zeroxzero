import React, { useEffect, useState } from 'react';
import BackgroundShadow from '../../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { HiEye, HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import './Leaderboard.css';
import { Link } from 'react-router-dom';
import AppSectionHeader from '../../../../../components/CommonComponents/AppSectionHeader/AppSectionHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import useLeaderboard from '../../../../../states/hooks/useLeaderboard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Leaderboard = () => {
    const notify = () => toast.success('Wallet added to the tracking list!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });



    const leaderboard = useLeaderboard();
    const { leaderboards, setInterval, isLoading } = leaderboard;
    const [tracking, setTracking] = useState(false);
    const [trackingList, setTrackingList] = useState([]);
    const handleTrackWallet = (wallet) => {
        if (trackingList.includes(wallet)) {
            setTrackingList(trackingList.filter(item => item !== wallet));

        } else {
            setTrackingList([...trackingList, wallet]);
            setTracking(!tracking)
            notify();
        }

    }

    return (
        <div className='leaderboard-main '>
            <ToastContainer />
            <AppSectionHeader setInterval={setInterval} header={"Some of our top performers"} details={"Find out the top performers at 0x0 from last one month or 15 days and track any desired wallet"} defaultBtn={"Monthly"} secondBtn={"Weekly"} />
            {isLoading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <div className=" grid md:grid-cols-2 " style={{ gap: "30px" }}>
                        <div className='item'>
                            <h4 className='w-40 '><Skeleton height={"40px"} /></h4>
                            <div className='mt-5'>
                                <div className='mb-3'>
                                    <Skeleton height={"40px"} />
                                </div>
                                <div className=''>
                                    <Skeleton className='mb-1' count={10} height={"40px"} />
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <h4 className='w-40 '><Skeleton height={"40px"} /></h4>
                            <div className='mt-5'>
                                <div className='mb-3'>
                                    <Skeleton height={"40px"} />
                                </div>
                                <div className=''>
                                    <Skeleton className='mb-1' count={10} height={"40px"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SkeletonTheme>
                :
                <div className="leaderboard relative flex justify-between flex-wrap">
                    {
                        leaderboards.map((leaderboard, index) => (
                            <div key={index} className='item border border-[#0fcfcfb7] py-4 px-4 rounded-md'>
                                <h4 className='bg-[#122036] text-light font-bold p-3 w-40 text-center rounded-md'>
                                    <button>{leaderboard.token.toUpperCase()}</button> / <button>WETH</button>
                                </h4>
                                <div className='mt-5 flex flex-col justify-center'>
                                    <div className='leaderboard-table-head text-light bg-[#122036] rounded-md py-3 px-4'>
                                        <p>#</p>
                                        <p className='mr-12'>Wallet Address</p>
                                        <p>Profit</p>
                                        <p className='mx-auto'>Track</p>
                                    </div>
                                    {
                                        leaderboard.data.leaderboard.map((item, itemIndex) => (
                                            <div key={itemIndex} className='leaderboard-table-content border-b border-slate-800 text-light py-4 px-4'>
                                                <p>{itemIndex + 1}</p>
                                                <Link to={`https://etherscan.io/address/${item.wallet}`} target="_blank" className=''>
                                                    {item.wallet.substring(0, 6)}...{item.wallet.substring(item.wallet.length - 6)}
                                                </Link>
                                                <p className={`${item.profitPercent.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                                                    {item.profitPercent}
                                                </p>
                                                <p onClick={() => handleTrackWallet(item.wallet)} className='mx-auto cursor-pointer'>
                                                    {trackingList.includes(item.wallet) ?
                                                        <HiOutlineEyeSlash className='text-2xl text-secondary' />
                                                        :
                                                        <HiOutlineEye className='text-2xl' />
                                                    }
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            }
        </div>
    );
};

export default Leaderboard;