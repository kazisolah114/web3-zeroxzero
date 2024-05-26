import React, { useState } from 'react';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import './Testimonials.css'

const Testimonials = () => {
    const testimonials = [
        { title: "Trading crypto has been so easy", opinion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Loamet consectetur adipisicingor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.", userData: { image: "/images/logo-eth.png", name: "Daniel Dugan", title: "CEO, ABC Inc." } },
        { title: "Changed my thoughts about crypto", opinion: "amet consectetur adipisicingLorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.", userData: { image: "/images/logo-ltc.png", name: "David Miller", title: "CTO, Beck IT" } },
        { title: "Can't thank enough to 0x0", opinion: "Lorem amet consectetur adipisicing adipisicing elit.amet consectetur adipisicing dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.", userData: { image: "/images/logo-btc.png", name: "Ritchel Goes", title: "Crypto Trader" } }
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

    return (
        <div className='testimonials-section py-24 container' data-aos="fade-up"
         data-aos-duration="1000">
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
                                    className="w-10"
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
                </div>
            </div>
        </div>
    );
};

export default Testimonials;