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
                        <p className='text-white w-3/6 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ad exercitationem eum maxime nostrum non explicabo omnis facere! Amet, consectetur!</p>
                        <button className='mt-16 font-semibold rounded bg-secondary hover:bg-secondaryHover duration-200 w-48 h-12 text-center'><Link to="https://t.me/www0x0com" target='_blank'>JOIN NOW</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;