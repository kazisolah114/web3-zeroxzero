import React, { useState } from 'react';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import './Testimonials.css'
import Lottie from 'react-lottie';

const Testimonials = () => {
    const testimonials = [
        { title: "Trading crypto has been so easy", opinion: "0x0 has revolutionized my crypto trading experience. The platform is user-friendly and the support team is always ready to help. Highly recommended! I can now trade confidently.", userData: { image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg", name: "Sophia Johnson", title: "Crypto Trader" } },
        { title: "Changed my thoughts about crypto", opinion: "I was skeptical about crypto trading, but 0x0 made it so accessible and understandable. The resources and tools provided have been invaluable. Now, I can trade with ease.", userData: { image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg", name: "James Thompson", title: "Copy Trader" } },
        { title: "Can't thank enough to 0x0", opinion: "0x0 has been a game-changer for my trading strategy. The advanced analytics and real-time data have allowed me to make informed decisions and maximize my profits. Truly amazing platform!", userData: { image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg", name: "Emily Pacheco", title: "Crypto Trader" } }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };



    const animationDataUrl = 'https://lottie.host/7ff92bce-8e80-4b4a-a7a8-90e4abb9d121/MSM04kc97P.json';
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
        <div className='testimonials-section py-24 container'
        data-aos="fade-up" data-aos-duration="1000"
        >
            <div className="testimonials-content flex gap-20 items-center justify-between">
                <div className="testimonials-info relative w-[50%]">
                    <BackgroundShadow customShadow="0px 0px 400px  50px #1181E8" />
                    <h2 className='text-white text-4xl mt-3 mb-5 font-bold text-center'>What our valuable users say</h2>
                    <p className='text-gray text-center w-[70%] mx-auto'>Hear from our regular users and get to know more how blockchain based copy trading platform 0x0</p>

                    {/* CODE WITH ONLY DATA CHANGING */}
                    <div className="testimonials relative w-[600px] mx-auto mt-10">
                        <div className="bg-[#191B28] px-8 py-7 rounded-md">
                            <h3 className="text-light font-bold text-lg mb-2">
                                {testimonials[currentIndex].title}
                            </h3>
                            <p className="text-gray">{testimonials[currentIndex].opinion}</p>
                            <div className="user mt-5 flex items-center gap-5">
                                <img
                                    className="w-10 rounded-full"
                                    src={testimonials[currentIndex].userData.image}
                                    alt=""
                                />
                                <div>
                                    <h5 className="text-light font-semibold">
                                        {testimonials[currentIndex].userData.name}
                                    </h5>
                                    <span className="text-gray font-light text-sm">
                                        {testimonials[currentIndex].userData.title}
                                    </span>
                                </div>
                            </div>
                            <FaQuoteRight className="absolute text-gray opacity-20 bottom-16 right-8 text-6xl" />
                        </div>
                        <div className="testimonials-controller justify-center flex items-center gap-5 mt-5">
                            <div
                                className="cursor-pointer border border-slate-500 hover:border-slate-300 duration-100 rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={prevTestimonial}
                            >
                                <HiArrowSmLeft className="text-gray" />
                            </div>
                            <span className="text-gray">
                                {currentIndex + 1}/{testimonials.length}
                            </span>
                            <div
                                className="cursor-pointer border border-slate-500 hover:border-slate-300 duration-100 rounded-full w-6 h-6 flex items-center justify-center"
                                onClick={nextTestimonial}
                            >
                                <HiArrowSmRight className="text-gray " />
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="testimonials-image relative">
                    <BackgroundShadow customShadow="0px 0px 300px 50px #fff" />
                    <img className='' src="https://i.ibb.co/jGLJq0C/testi-flat-map.png" alt="" />
                    {/* <Lottie options={defaultOptions} /> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;