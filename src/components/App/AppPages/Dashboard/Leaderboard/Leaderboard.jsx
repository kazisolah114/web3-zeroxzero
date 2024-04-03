import React, { useEffect, useState } from 'react';
import BackgroundShadow from '../../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import { HiEye, HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import './Leaderboard.css';
import { Link } from 'react-router-dom';
import AppSectionHeader from '../../../../CommonComponents/AppSectionHeader/AppSectionHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


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

    // Handle Leaderboard
    const [leaderboardData, setLeaderboardData] = useState([]);
    useEffect(() => {
        fetch("/leaderboard.json")
            .then(res => res.json())
            .then(data => {
                setLeaderboardData(data);
            })
    }, [])

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



    console.log("Tracking List:", trackingList);
    return (
        <div className='leaderboard-main '>

            <ToastContainer />
            <AppSectionHeader header={"Some of our top performers"} details={"Find out the top performers at 0x0 from last one month or 15 days and track any desired wallet"} defaultBtn={"Monthly"} secondBtn={"Quarterly"} />
            <div className="leaderboard relative flex items-center justify-between flex-wrap">
                {
                    leaderboardData.map((leaderboard, index) => <div key={index} className='item border border-[#0fcfcfb7]  py-4 px-4 rounded-md'>
                        <h4 className='bg-[#122036] text-light font-bold p-3 w-36 text-center rounded-md'><Link to={leaderboard.exchange_against}>{leaderboard.exchange_against}</Link> / <Link to={leaderboard.exchange_with}>{leaderboard.exchange_with}</Link></h4>
                        <div className='mt-5 flex flex-col justify-center'>
                            <div className='leaderboard-table-head text-light bg-[#122036] rounded-md py-3 px-4'>
                            {/* <BackgroundShadow customShadow="0px 0px 500px 40px #10B8B9" /> */}
                                <p>#</p>
                                <p className='mr-12'>Wallet Address</p>
                                <p>Profit</p>
                                <p className='mx-auto'>Track</p>
                            </div>
                            {
                                leaderboard.data.map((item, index) => <div className='leaderboard-table-content border-b border-slate-800   text-light  py-4 px-4'>
                                    <p>{index + 1}</p>
                                    <Link to={item.address} target="_blank" className=''>{item.address.substring(0, 6)}...{item.address.substring(item.address.length - 6)}</Link>
                                    <p className={`${item.profit_percentage.startsWith("+") ? 'text-green-400' : 'text-red-400'}`}>{item.profit_percentage}%</p>
                                    <p onClick={() => handleTrackWallet(item.address)} className='mx-auto cursor-pointer'>
                                        {trackingList.includes(item.address) ?
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