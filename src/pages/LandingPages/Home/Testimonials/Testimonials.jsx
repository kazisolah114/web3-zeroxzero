import React, { useState } from 'react';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight, HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import './Testimonials.css'
import Lottie from 'react-lottie';

const Testimonials = () => {
    const testimonials = [
        {
            title: "Trading crypto has been so easy",
            opinion: "0x0 has revolutionized my crypto trading experience. The platform is user-friendly and the support team is always ready to help. Highly recommended! I can now trade confidently.",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "Sophia Johnson",
                title: "CEO, Crypto Innovations Inc."
            }
        },
        {
            title: "Changed my thoughts about crypto",
            opinion: "I was skeptical about crypto trading, but 0x0 made it so accessible and understandable. The resources and tools provided have been invaluable. Now, I can trade with ease.",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "James Thompson",
                title: "CTO, FinTech Solutions"
            }
        },
        {
            title: "Can't thank enough to 0x0",
            opinion: "0x0 has been a game-changer for my trading strategy. The advanced analytics and real-time data have allowed me to make informed decisions and maximize my profits. Truly amazing platform!",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "Emily Davis",
                title: "Crypto Trader"
            }
        },
        {
            title: "Best trading platform ever",
            opinion: "I have tried several trading platforms, but 0x0 stands out. The interface is intuitive and the features are top-notch. I have seen significant improvements in my trades. Highly satisfied!",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "Michael Brown",
                title: "Investor, Future Wealth"
            }
        },
        {
            title: "Innovative and reliable",
            opinion: "0x0 offers innovative solutions that cater to both beginners and experienced traders. The platform's reliability and security features give me peace of mind while trading. It's a must-try!",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "Olivia Martinez",
                title: "Founder, Tech Ventures"
            }
        },
        {
            title: "Exceptional customer support",
            opinion: "The customer support at 0x0 is exceptional. They are always available to assist with any queries and ensure a smooth trading experience. I appreciate their dedication and professionalism.",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "William Smith",
                title: "Crypto Enthusiast"
            }
        },
        {
            title: "Highly recommend 0x0",
            opinion: "0x0 is a reliable and efficient trading platform. The educational resources and tools have been extremely helpful in enhancing my trading skills. I highly recommend 0x0 to everyone.",
            userData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg",
                name: "Ava Johnson",
                title: "Financial Analyst, Global Investments"
            }
        }
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
                </div>
            </div>
        </div>
    );
};

export default Testimonials;