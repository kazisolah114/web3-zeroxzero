import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const TrackingList = () => {
    const leaderboard = [
        {
            "id": 14307053,
            "address": "0xJBCD17045464924234",
            "pair": "WETH/GAS"
        },
        {
            "id": 2957460034,
            "address": "0xABCD45671704454234",
            "pair": "PORTAL/GAS"
        },
        {
            "id": 35406004,
            "address": "0xEFGH844556024378",
            "pair": "WETH/GAS"
        },
        {
            "id": 434660053,
            "address": "0xJBCD902392654454",
            "pair": "WETH/CHAT"
        },
        {
            "id": 506000434,
            "address": "0xABCD155345632634",
            "pair": "0x0/GAS"
        },
        {
            "id": 60454064,
            "address": "0xEFGH67F452845678",
            "pair": "ETBS/GAS"
        },
        {
            "id": 40346553,
            "address": "0xJBCD92392644654",
            "pair": "WETH/CHAT"
        },
        {
            "id": 50602034,
            "address": "0xABCD125534563234",
            "pair": "0x0/GAS"
        },
        {
            "id": 6204034,
            "address": "0xABCD155345639234",
            "pair": "0x0/GAS"
        },
        {
            "id": 60454240,
            "address": "0xEFGH67F415845678",
            "pair": "ETBS/GAS"
        }

    ];

    const notify = () => toast.success('Wallet removed from the tracking list!', {
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


    const [trackingList, setTrackingList] = useState(leaderboard);
    console.log(trackingList);
    const handleTrackedWallet = (wallet) => {
        console.log(wallet)
        const sortedWallets = trackingList.filter(item => item.address !== wallet);
        setTrackingList(sortedWallets);

    }
    return (
        <div className='tracking-list search-result '>

            <ToastContainer />
            <div className='mt-5 flex flex-col justify-center '>
                <div className='search-table-head text-light bg-[#122036] px-[30px] py-5 rounded-md '>
                    <p>#</p>
                    <p className='mr-12'>Wallet Address</p>
                    <p>Pair</p>
                    <p className='mx-auto'>Untrack Wallet</p>
                </div>
                {trackingList.length > 0 ?
                    <div>
                        {
                            trackingList.map((item, index) => <div key={index} className='search-table-content  border-b border-slate-800   text-light  px-[30px] py-5'>
                                <p>{index + 1}</p>
                                <Link to={item.address} target="_blank" className=''>{item.address}</Link>
                                <p>{item.pair}</p>
                                <p onClick={() => handleTrackedWallet(item.address)} className='mx-auto cursor-pointer'>
                                    <HiOutlineEyeSlash className='text-2xl  text-secondary' />
                                </p>
                            </div>)
                        }
                    </div>
                    :
                    <p className='text-center text-gray pb-10 mt-5'>You are not tracking any wallet yet😕</p>
                }
            </div>
        </div>
    );
};

export default TrackingList;