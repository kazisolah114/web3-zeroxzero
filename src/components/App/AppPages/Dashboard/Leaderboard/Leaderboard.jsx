import React, { useEffect, useState } from 'react';
import BackgroundShadow from '../../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import { HiEye, HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import './Leaderboard.css';
import { Link } from 'react-router-dom';
import AppSectionHeader from '../../../../CommonComponents/AppSectionHeader/AppSectionHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import useLeaderboard from '../../../../../states/hooks/useLeaderboard';

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

    const leaderboardData = useLeaderboard();

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
            <AppSectionHeader header={"Some of our top performers"} details={"Find out the top performers at 0x0 from last one month or 15 days and track any desired wallet"} defaultBtn={"Monthly"} secondBtn={"Weekly"} />
            <div className="leaderboard relative flex justify-between flex-wrap">
                {
                    leaderboardData.map((leaderboard, index) => <div key={index} className='item border border-[#0fcfcfb7]  py-4 px-4 rounded-md'>
                        <h4 className='bg-[#122036] text-light font-bold p-3 w-40 text-center rounded-md'><Link to={leaderboard.base_address}>{leaderboard.base}</Link> / <Link to={leaderboard.target_address}>{leaderboard.target}</Link></h4>
                        <div className='mt-5 flex flex-col justify-center'>
                            <div className='leaderboard-table-head text-light bg-[#122036] rounded-md py-3 px-4'>
                                <p>#</p>
                                <p className='mr-12'>Wallet Address</p>
                                <p>Profit</p>
                                <p className='mx-auto'>Track</p>
                            </div>
                            {
                                leaderboard.data.slice(0, 10).map((item, index) => <div key={index} className='leaderboard-table-content border-b border-slate-800   text-light  py-4 px-4'>
                                    <p>{index + 1}</p>
                                    <Link to={item.wallet_address} target="_blank" className=''>{item.wallet_address.substring(0, 6)}...{item.wallet_address.substring(item.wallet_address.length - 6)}</Link>
                                    <p className={`${item.profit_perc.toString().startsWith("-") ? 'text-red-400' : 'text-green-400'}`}>{item.profit_perc.toFixed(2)}%</p>
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
                    </div>)
                }

            </div>
        </div>
    );
};

export default Leaderboard;