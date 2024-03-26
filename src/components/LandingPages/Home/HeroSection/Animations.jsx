import React from 'react';
import './HeroSection.css';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import Lottie from 'react-lottie';

const Animations = () => {
    const animationDataUrl1 = 'https://lottie.host/a2c28eec-2ed4-4eae-b0be-ffdaa1719ee2/AobxJUx8Eq.json';
    const animationDataUrl2 = 'https://lottie.host/179d8bf9-a148-4751-b8a8-d7a30335c34f/AS8fJj4azc.json';
    const [animationData1, setAnimationData1] = React.useState(null);
    const [animationData2, setAnimationData2] = React.useState(null);

    React.useEffect(() => {
        fetch(animationDataUrl1)
            .then((response) => response.json())
            .then((data) => setAnimationData1(data))
            .catch((error) => console.error('Error loading animation data:', error));

        fetch(animationDataUrl2)
            .then((response) => response.json())
            .then((data) => setAnimationData2(data))
            .catch((error) => console.error('Error loading animation data:', error));
    }, [animationDataUrl1, animationDataUrl2]);

    if (!animationData1 || !animationData2) {
        return null; // or render a loading indicator
    }

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    return (
        <div className="hero-animations relative w-[50%]  flex justify-end " data-aos="zoom-in" data-aos-duration="1000">
            <BackgroundShadow customShadow="0px 0px 150px 40px #10B8B9" />
            <img src="https://assets-global.website-files.com/634054bf0f60201ce9b30604/651511fed6711f9008ce37a8_Hero-Dark.svg" alt="" />
            {/* <Lottie options={defaultOptions1} height={500} width={600} style={{ margin: "0 right", position: "relative", top: "80px" }} />
            <Lottie options={defaultOptions2} height={500} width={600} style={{ margin: "0 right", position: "absolute", top: "-20px" }} /> */}
        </div>
    );
};

export default Animations;
