import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import Lottie from 'react-lottie';

const Animations = () => {
    const animationDataUrl3 = 'https://lottie.host/f3ae6f2b-f981-4918-b353-9dd1adfcfd98/wn5IYg4eOL.json';

    const [animationData3, setAnimationData3] = React.useState(null);

    React.useEffect(() => {
        fetch(animationDataUrl3)
            .then((response) => response.json())
            .then((data) => setAnimationData3(data))
            .catch((error) => console.error('Error loading animation data:', error));
    }, [ animationDataUrl3]);

    if ( !animationData3) {
        return null; // or render a loading indicator
    }
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };




    return (
        <div className=" hero-animations relative  w-[50%] flex justify-end "
        data-aos="zoom-in" data-aos-duration="1000"
        >
            <BackgroundShadow customShadow="0px 0px 150px 40px #10B8B9" />
            <div className='w-full h-full'>
                <Lottie options={defaultOptions3} />
                {/* <video controls src="/public/videos/hero-anim.mp4"></video> */}
            </div>
        </div>
    );
};

export default Animations;
