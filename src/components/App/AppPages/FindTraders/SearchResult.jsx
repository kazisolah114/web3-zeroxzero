import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const SearchResult = () => {
    const leaderboard = [
        {
            "id": 143753,
            "address": "0xJBCD174564924234",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+658.22"
        },
        {
            "id": 29574634,
            "address": "0xABCD456717444234",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+828.22"
        },
        {
            "id": 354064,
            "address": "0xEFGH84455684378",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+162.39"
        },
        {
            "id": 4346653,
            "address": "0xJBCD9239264454",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+4.55"
        },
        {
            "id": 5060434,
            "address": "0xABCD15534563234",
            "target_coin_volume": "0.002818",
            "profit_percentage": "-8.22"
        },
        {
            "id": 60454064,
            "address": "0xEFGH67F45845678",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+162.39"
        },
        {
            "id": 754064,
            "address": "0xEFGH524556236278",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+192.39"
        },
        {
            "id": 8060434,
            "address": "0xABCD15423456234",
            "target_coin_volume": "0.002818",
            "profit_percentage": "-0.22"
        },
        {
            "id": 90454064,
            "address": "0xEFGH34566784178",
            "target_coin_volume": "0.002818",
            "profit_percentage": "+162.39"
        },
        {
            "id": 1054064,
            "address": "0xEFGH84455486SS8",
            "target_coin_volume": "0.002818",
            "profit_percentage": "-2.39"
        }

    ];

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
    console.log(leaderboard);
    return (
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
                    leaderboard.map((item, index) => <div className='search-table-content  border-b border-slate-800   text-light  px-[30px] py-5'>

                        <p>{index + 1}</p>

                        <Link to={item.address} target="_blank" className=''>{item.address.substring(0, 6)}...{item.address.substring(item.address.length - 6)}</Link>
                        <p>{item.target_coin_volume}</p>
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
        </div>
    );
};

export default SearchResult;