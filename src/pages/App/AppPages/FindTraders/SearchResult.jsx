import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import useLeaderboard from '../../../../states/hooks/useLeaderboard';
import Loader from '../../../../components/CommonComponents/Loader/Loader';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchResult = ({ leaderboardData, isLoading }) => {

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
        <div>
            {isLoading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430">
                    <div>
                        <div className='mb-3 mt-8'>
                            <Skeleton height={"40px"} />
                        </div>
                        <div className=''>
                            <Skeleton className='mb-1' count={10} height={"40px"} />
                        </div>
                    </div>
                </SkeletonTheme>
                :
                <div className='search-result '>
                    <ToastContainer />
                    <div className='mt-5 flex flex-col justify-center '>
                        <div className='search-table-head text-light bg-[#122036] px-[30px] py-5 rounded-md '>
                            <p>#</p>
                            <p className='mr-12'>Wallet Address</p>
                            <p>Target Coin Volume</p>
                            <p>Profit Percentage</p>
                            <p className='mx-auto text-center'>Track Wallet</p>
                        </div>
                        {
                            leaderboardData[0]?.data.slice(0, 10).map((item, index) => <div className='search-table-content  border-b border-slate-800   text-light  px-[30px] py-5'>

                                <p>{index + 1}</p>

                                <Link to={item.wallet_address} target="_blank" className=''>{item.wallet_address.substring(0, 6)}...{item.wallet_address.substring(item.wallet_address.length - 6)}</Link>
                                <p>{item.target_coin_volume}</p>
                                <p className={`${item.profit_perc.toString().startsWith("-") ? 'text-red-400' : 'text-green-400'}`}>{item.profit_perc.toFixed(5)}%</p>
                                <p onClick={() => handleTrackWallet(item.wallet_address)} className='mx-auto cursor-pointer'>
                                    {trackingList.includes(item.wallet_address) ?
                                        <HiOutlineEyeSlash className='text-2xl text-secondary' />
                                        :
                                        <HiOutlineEye className='text-2xl' />
                                    }

                                </p>
                            </div>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchResult;