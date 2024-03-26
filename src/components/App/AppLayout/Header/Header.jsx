import React, { useEffect, useState } from 'react';
import { HiOutlineLogout } from 'react-icons/hi';
import { HiOutlineCog6Tooth, HiOutlineUser } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
import './Header.css';

const Header = () => {
    const [userProfileClicked, setUserProfileClicked] = useState(false);

    const web3 = new Web3(window.ethereum);
    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(0);

    const handleConnectWallet = async () => {
        try {
            if (window.ethereum !== undefined) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                console.log("Address:", accounts[0]);
                setWallet(accounts[0])
            } else {
                console.log("Type mismatched:", typeof window.ethereum);
            }
        } catch (error) {
            console.log("Error with connecting wallet:", error)
        }

    }
    const handleDisconnectWallet = async () => {
        try {
            if (window.ethereum !== undefined) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    await window.ethereum.request({ method: 'eth_requestAccounts', params: [] });
                    console.log("Wallet has been disconnected!")
                    setWallet(null);
                } else {
                    console.log("There is no account to disconnect")
                }
            } else {
                console.log("Type mismatched")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const updateBalance = async () => {
            try {
                if (wallet) {
                    const balanceWei = await web3.eth.getBalance(wallet);
                    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
                    console.log(balanceEther)
                    setBalance(balanceEther);
                }
            } catch (error) {
                console.error('Error fetching balance', error);
            }
        };

        updateBalance();
    }, [wallet]);

    return (
        <div className='py-5 justify-between flex  px-5'>

            <div className="socials">
                <ul className='flex items-center gap-4'>
                    <h2 className='text-[20px] font-semibold text-light'>Follow us at</h2>
                    <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://twitter.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/twitter.svg" alt="" /></Link></li>
                    <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/facebook.svg" alt="" /></Link></li>
                    <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://www.instagram.com/0x0_official/?hl=en" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/instagram.svg" alt="" /></Link></li>
                    <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/discord.svg" alt="" /></Link></li>
                    <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9  inline-block rounded-full'><Link to="https://t.me/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/telegram.svg" alt="" /></Link></li>
                </ul>
            </div>
            {wallet ?
                <div className="user-details flex items-center  gap-4">
                    <div className="balance flex items-center gap-2  py-[6px] px-3 rounded-md border border-[#0fcfcfb7]">
                        <img className='w-5' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
                        <h4 className='font-semibold text-light'>{balance}0 ETH</h4>
                    </div>
                    <div className="account-info cursor-pointer flex items-center gap-2  py-[6px] px-3 rounded-md border border-[#0fcfcfb7]">
                        <img src="/images/metamask-logo.png" alt="" />
                        <h4 className='font-semibold text-light'>{`${wallet.substring(0, 5)}....${wallet.substring(wallet.length - 5)}`}</h4>
                    </div>
                    <div onClick={() => setUserProfileClicked(!userProfileClicked)} className={`user-profile z-10 relative border  border-[#0fcfcfb7] p-2 rounded-full cursor-pointer hover:border-[#0fcfcf] ${userProfileClicked && 'border-[#0fcfcf]'} duration-200`}>
                        <HiOutlineUser className='text-light text-[22px]' />
                        {userProfileClicked &&
                            <div className="user-options absolute w-52 top-[56px] -right-[2px] bg-[#383840] shadow-md shadow-slate-800 rounded-md">
                                <div className="ractangle w-8 h-8  absolute -top-[17px] right-0">

                                </div>
                                <ul>
                                    <li>
                                        <Link to="user-profile" className='group flex items-center gap-3 py-3 px-2 text-[#dfdfdf] hover:text-secondary duration-200 hover:bg-slate-800 rounded-t-md'>
                                            <HiOutlineUser className='text-[#dfdfdf] text-[22px] group-hover:text-secondary' />User Profile
                                        </Link>
                                    </li>
                                    <li onClick={handleDisconnectWallet} className='group flex items-center gap-3 py-3 px-2 cursor-pointer text-[#dfdfdf] hover:text-red-500 duration-200 hover:bg-slate-800 rounded-b-md'>
                                        <HiOutlineLogout className='text-[#dfdfdf] text-[22px] group-hover:text-red-500' />
                                        Disconnect Wallet
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                :
                <div className="connect-metamask ">
                    <button onClick={handleConnectWallet} className='text-light bg-secondary hover:bg-[#12AFAF] duration-200 py-2 px-4 rounded-md font-semibold'>Connect MetaMask</button>
                </div>
            }


        </div>
    );
};

export default Header;