import React from 'react';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import './HighFlyers.css';
import Lottie from 'react-lottie';

const HighFlyers = () => {
    const animationDataUrl = 'https://lottie.host/f63bdba5-3982-433f-86bb-bcca97cffd6d/5jWSKw9bEo.json';
    const [animationData, setAnimationData] = React.useState(null);

    React.useEffect(() => {
        fetch(animationDataUrl)
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error('Error loading animation data:', error));
    }, [animationDataUrl]);

    if (!animationData) {
        return null; // or render a loading indicator
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
        speed: 5000,
    };
    return (
        <div className='flyers-section py-24 container' data-aos="fade-up"
        data-aos-duration="1000">
            <div className="flyers-content relative flex  gap-5 items-center justify-between">
                <div className="flyers-info relative w-3/4">
                    {/* <BackgroundShadow customShadow="0px 0px 400px 50px #1181E8" /> */}
                    <span className='text-secondary text-lg font-semibold'>YOU WILL GET</span>
                    <h2 className='text-white text-4xl mt-3 mb-5 font-bold'>HIGH_ FLYERS NFTs</h2>
                    <p className='text-gray'>Embark on an exhilarating journey with the 0x0 Reveal, where 10,000 unique High Flyers NFTs await collectors. Each High Flyer boasts distinct traits, and upon minting, you acquire a pilot in training, unveiling their character upon completion.
                        A significant portion of the 200 million 0x0 tokens is dedicated to staking High Flyers, with 100 million set aside for this purpose. The more High Flyers you hold, the larger your stake in the pool, promising enhanced rewards for avid collectors.
                        <span className='mb-3 block'></span>
                        Beyond the intrinsic value of ownership, High Flyers NFT holders enjoy exclusive privileges such as participating in bi-monthly skirmishes. During these events, participants can redeem clues for a chance to win prizes reaching up to $50,000, with unclaimed prizes rolling over for added anticipation. Additionally, holders receive exclusive invitations to virtual reality meetups and the opportunity to host engaging gaming events. Don't miss the chance to grow your High Flyers fleet, unlocking unique utilities, and immerse yourself in a dynamic world of NFT collecting and experiences.</p>
                    <button className='primary-button-outline mt-5'>Launch Our App Now</button>
                </div>
                <div className="flyers-image">
                    <img className='w-[700px]' src="https://i.ibb.co/PzPv1Sw/american-apes.png" alt="" />
                    {/* <Lottie options={defaultOptions} height={450} width={600} style={{  }} /> */}
                </div>
            </div>
        </div>
    );
};

export default HighFlyers;