import React from 'react';
import './JoinCommunity.css';
import { Link } from 'react-router-dom';

const JoinCommunity = () => {
    return (
        <div className='join-community my-16'>
            <div className="container">
                <div className='community-content text-center'>
                    <div>
                        <h2 className='text-2xl text-white font-bold mb-3'>JOIN THE COMMUNITY</h2>
                        <p className='text-white w-3/6 mx-auto '>Step into a world where traders unite, share knowledge, and achieve greater success in cryptocurrency markets together</p>
                        <button className='mt-16 rounded bg-secondary hover:bg-secondaryHover duration-200 w-40 h-10 text-center text-sm '><Link to="https://t.me/www0x0com" target='_blank'>JOIN NOW</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;