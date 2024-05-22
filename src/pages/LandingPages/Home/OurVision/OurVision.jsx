import React from 'react';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';

const OurVision = () => {
    const items = [
        { name: "Token Holders", number: "180+" },
        { name: "Unique Wallets", number: "1500" },
        { name: "Staked Tokens", number: "1923K" }
    ]
    return (
        <div className='ourvision-section py-24 container' data-aos="fade-up"
        data-aos-anchor-placement="top-center" data-aos-duration="1000">
            <div className="ourvision-content relative flex flex-row-reverse gap-20 items-center justify-between">

                <div className="vision-info relative w-[50%]">
                    {/* <BackgroundShadow customShadow="0px 0px 400px 50px #1181E8"/> */}
                    <span className='text-secondary text-lg font-semibold'>OUR VISION</span>
                    <h2 className='text-white text-4xl mt-3 mb-5 font-bold'>Users from all around_ the world</h2>
                    <p className='text-gray '>Our mission is to facilitate global connectivity and accessibility, empowering individuals worldwide to engage in seamless and secure cryptocurrency trading experiences.</p>
                    <div className="items flex items-center gap-16 mt-12">
                        {
                            items.map((item, index) => <div key={index} className='text-center'>
                                <h2 className='text-light text-4xl font-bold mb-2'>{item.number}</h2>
                                <p className='text-gray'>{item.name}</p>
                            </div>)
                        }
                    </div>
                </div>
                <div className="vision-image relative">
                    <BackgroundShadow customShadow="0px 0px 300px 50px #1181E8" />
                    <img className='' src="https://i.ibb.co/WxLSWk3/flat-map.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurVision;