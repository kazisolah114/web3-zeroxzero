import React, { useEffect, useState } from 'react';
import './UserProfile.css'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import TrackingList from './TrackingList';
import { useUserContext } from '../../../../ContextAPI/UserContext';
import { HiBadgeCheck } from 'react-icons/hi';

const UserProfile = () => {
    const notify = () => toast.success('Wallet has been copied!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const { wallet, balance } = useUserContext();
    const handleWalletCopy = () => {
        notify();
    }

    const [tokenPrice, setTokenPrice] = useState(null);
    useEffect(() => {
        fetch('https://statboard.0x0.com/api/token/price')
            .then(res => res.json())
            .then(data => {
                setTokenPrice(data);
            })
    }, [])

    let status = 'unverified'

    return (
        <div className='user-profile'>
            <div className="user-profile-content">
                <div className="manage-profile ">
                    <div className='account bg-[#122036] p-5 rounded-md'>
                        <div className='flex items-center gap-2'>
                            <HiBadgeCheck className='text-[#0199E4] text-2xl' />
                            <h2 className='text-light font-semibold'>Profile Status</h2>
                            <button className={`${status == 'verified' ? 'bg-[#0199E4]' : 'bg-[#EF3847]'} rounded-full w-24 py-[2px] border border-gray-200`}>{status == 'verified' ? 'Verified': 'Unverified'}</button>
                        </div>
                        <div className="wallet mt-5">
                            <h2 className=' text-light font-semibold mb-2'>Wallet Address</h2>
                            <div className='address flex items-center  gap-3 bg-slate-800 p-3 rounded-md'>
                                <img src="/images/metamask-logo.png" alt="" />
                                <p onClick={() => {
                                    handleWalletCopy();
                                    navigator.clipboard.writeText(`${wallet}`)
                                }} className='flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer md:hidden'>{wallet?.substring(0, 9)}...{wallet?.substring(wallet?.length - 9)} <HiOutlineDocumentDuplicate /></p>
                                <p onClick={() => {
                                    handleWalletCopy();
                                    navigator.clipboard.writeText(`${wallet}`)
                                }} className='md:flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer hidden'>{wallet} <HiOutlineDocumentDuplicate /></p>
                            </div>
                            <ToastContainer />
                        </div>
                        <div className="balance mt-5">
                            <h2 className=' text-light font-semibold mb-2'>Wallet Balance (ETH)</h2>
                            <div className='address flex items-center gap-3 bg-slate-800 p-3 rounded-md'>
                                <img className='w-6' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                                <p className='font-semibold'>{Number(balance).toFixed(5)} ETH</p>
                            </div>
                        </div>
                        <div className="balance-usd mt-5">
                            <h2 className=' text-light font-semibold mb-2'>Wallet Balance (USD)</h2>
                            <div className='address flex items-center gap-3 bg-slate-800 p-3 rounded-md'>
                                <img className='w-6' src="/images/dollar-icon-1.png" alt="" />
                                <p className='font-semibold'>{(tokenPrice?.price?.usdPrice ?? 0).toFixed(5) || 0.00} USD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="socials-and-rewards">
                    <div className="socials bg-[#122036] p-5 rounded-md">
                        <div className="item cursor-pointer flex items-center gap-5 justify-center border border-gray-500 hover:bg-[#0FCFCF] hover:border-transparent duration-200 rounded-full p-3">
                            <img className='w-10  rounded-md' src="/images/twitter.png" alt="" />
                            <p className='font-bold text-lg'>Authorize X / Twitter</p>
                        </div>
                        <div className="item cursor-pointer mt-5 flex items-center gap-5 justify-center border border-gray-500 hover:bg-[#0FCFCF] hover:border-transparent duration-200 rounded-full p-3">
                            <img className='w-10 rounded-md' src="/images/telegram.png" alt="" />
                            <p className='font-bold text-lg'>Authorize Telegram</p>
                        </div>
                    </div>
                    <div className="rewards bg-[#122036] p-5 rounded-md mt-5">
                        <h2 className='text-lg text-light font-semibold mb-5 pb-[7px]  border-b border-gray-500'>Rewards</h2>
                        <p className='text-center text-gray pb-10'>You have no rewards yet😕. Retweet to earn some, now!</p>
                    </div>
                </div>
            </div>
            <div className="tracking-list rounded-md mt-10">
                <TrackingList />
            </div>


        </div>
    );
};

export default UserProfile;