import React from 'react';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaCog, FaCoins, FaRetweet, FaTwitter } from "react-icons/fa";
import './FreeCoins.css'
import HowItWorks from '../../../LandingPages/Home/HowItWorks/HowItWorks';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { Helmet } from 'react-helmet';
import AppSectionHeader from '../../../../components/CommonComponents/AppSectionHeader/AppSectionHeader';


const FreeCoins = () => {

    return (
        <div className='free-coins'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Free Coins | 0x0.com</title>
                <link rel='canonical' href='https://0x0.com' />
            </Helmet>
            <AppSectionHeader header={"Earn Free 0x0COM Coins"} details={"Follow The Easy Steps Below To Claim Your Free 0x0 Tokens"} />
            
            <div className="free-coins-items relative ">
                    <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                    <div className='item howitworks-item text-center flex flex-col items-center'>
                        <img className='how-image w-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="" />
                        <span className='text-secondary text-md mt- '>STEP 1</span>
                        <h3 className='text-white font-bold mt-1 mb-2 text-xl'>Connect Metamask</h3>
                        <p className='text-gray w-[85%]'>Connect your wallet to get AI-driven alerts for trading trends and potential successful projects</p>
                    </div>
                    <div className='item howitworks-item text-center flex flex-col items-center'>
                        <img className='how-image w-24' src="https://static.vecteezy.com/system/resources/previews/023/986/731/original/twitter-logo-twitter-logo-transparent-twitter-icon-transparent-free-free-png.png" alt="" />
                        <span className='text-secondary text-md mt-2'>STEP 2</span>
                        <h3 className='text-white font-bold mt-1 mb-2 text-xl'>Link Twitter</h3>
                        <p className='text-gray w-[85%]'>Connect your wallet to get AI-driven alerts for trading trends and potential successful projects</p>
                    </div>
                    <div className='item howitworks-item text-center flex flex-col items-center'>
                        <img className='how-image w-24' src="https://cdn-icons-png.freepik.com/512/6688/6688018.png" alt="" />
                        <span className='text-secondary text-md mt-2'>STEP 3</span>
                        <h3 className='text-white font-bold mt-1 mb-2 text-xl'>Like and Retweet</h3>
                        <p className='text-gray w-[85%]'>Connect your wallet to get AI-driven alerts for trading trends and potential successful projects</p>
                    </div>
                    <div className='item howitworks-item text-center flex flex-col items-center'>
                        <img className='how-image w-24' src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-reward-5168165-4323638.png" alt="" />
                        <span className='text-secondary text-md mt-2'>STEP 4</span>
                        <h3 className='text-white font-bold mt-1 mb-2 text-xl'>Reap the Rewards</h3>
                        <p className='text-gray w-[85%]'>Connect your wallet to get AI-driven alerts for trading trends and potential successful projects</p>
                    </div>
            </div>
        </div>
    );
};

export default FreeCoins;