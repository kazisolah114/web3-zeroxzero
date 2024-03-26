import React from 'react';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import './HighFlyers.css'

const HighFlyers = () => {
    return (
        <div className='flyers-section py-24 container' data-aos="zoom-in"
        data-aos-duration="1000">
            <div className="flyers-content relative flex  gap-5 items-center justify-between">
                <div className="flyers-info relative w-[50%]">
                    {/* <BackgroundShadow customShadow="0px 0px 400px 50px #1181E8" /> */}
                    <span className='text-secondary text-lg font-semibold'>YOU WILL GET</span>
                    <h2 className='text-white text-4xl mt-3 mb-5 font-bold'>HIGH FLYERS NFTs</h2>
                    <p className='text-gray'>Embark on an exhilarating journey with the 0x0 Reveal, where 10,000 unique High Flyers NFTs await collectors. Each High Flyer boasts distinct traits, and upon minting, you acquire a pilot in training, unveiling their character upon completion.
                        A significant portion of the 200 million 0x0 tokens is dedicated to staking High Flyers, with 100 million set aside for this purpose. The more High Flyers you hold, the larger your stake in the pool, promising enhanced rewards for avid collectors.
                        <span className='mb-3 block'></span>
                        Beyond the intrinsic value of ownership, High Flyers NFT holders enjoy exclusive privileges such as participating in bi-monthly skirmishes. During these events, participants can redeem clues for a chance to win prizes reaching up to $50,000, with unclaimed prizes rolling over for added anticipation. Additionally, holders receive exclusive invitations to virtual reality meetups and the opportunity to host engaging gaming events. Don't miss the chance to grow your High Flyers fleet, unlocking unique utilities, and immerse yourself in a dynamic world of NFT collecting and experiences.</p>
                    <button className='primary-button-outline mt-5'>Launch Our App Now</button>
                </div>
                <div className="flyers-image">
                    <img className='w-[700px]' src="/public/images/hero-ilustration.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HighFlyers;