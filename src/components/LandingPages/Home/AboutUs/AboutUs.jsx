import React from 'react';
import SectionHeader from '../../../CommonComponents/SectionHeader/SectionHeader';
import { HiOutlinePlayCircle } from 'react-icons/hi2';
import './AboutUs.css';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';
import Lottie from 'react-lottie';




const AboutUs = () => {
    const animationDataUrl = 'https://lottie.host/3d6be601-bfbd-42e7-ab48-374b97ad2534/F5hV8tWsbd.json';
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
        <div className='aboutus-section py-24 container'  data-aos="fade-down-right" data-aos-duration="1000">
            <SectionHeader sectionTitle={"About Us"} sectionDesc={"Lorem ipsum dolor semet is a world class game ipsum leto Lorem ipsum dolor semet is a world class game ipsum leto lorem"} />
            <div className="aboutus-content relative  flex items-center gap-10 justify-between" >
                <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                <div className="aboutus-info relative w-[50%]">
                    <BackgroundShadow customShadow="0px 0px 400px 50px #10B8B9" />
                    <h2 className='text-light text-5xl font-bold mb-6 leading-[60px]'>
                        We are a leading <span className='text-secondary'>AI-driven</span> alerts platform
                    </h2>
                    <h4 className='text-gray text-xl  mb-4 '>Have gained the trust of thousands of customers — and this number is keeps growing!</h4>
                    <p className='text-gray text-1xl text-justify mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora illo debitis placeat optio nisi nulla necessitatibus excepturi soluta esse voluptas, maiores quaerat corrupti? Laboriosam reiciendis esse deserunt accusantium odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ab?</p>
                    <div className='flex buttons'>
                        <button className='primary-button-outline'>See More About Us</button>
                        <button className='text-gray ml-6 text-xl hover:text-light duration-200 flex items-center gap-2'><HiOutlinePlayCircle className='relative top-[2px]' /> See how we work</button>
                    </div>
                </div>
                <div className='relative aboutus-image  flex justify-end text-right ' data-aos="fade-up" data-aos-duration="1000">
                <Lottie options={defaultOptions} height={550} width={600} style={{  }} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;