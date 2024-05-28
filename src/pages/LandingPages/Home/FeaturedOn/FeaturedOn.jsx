import React from 'react';
import Marquee from 'react-fast-marquee';

const FeaturedOn = () => {
    return (
        <div className='featured-on py-24 ' data-aos="fade-up" data-aos-duration="1000">
            {/* <div className="featuredon-header text-center mb-20">
                <h3 className='text-white uppercase text-md font-semibold'>Featured On</h3>
            </div> */}
            <Marquee className='gap-20'>
                <div className='flex gap-20 sm:gap-64 items-center'>
                    <div className='w-32 '><img className='w-full h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf08pZMf956akuJksGlWWeEbTlWkbvniQQXg&s" alt="" /></div>
                    <div className='w-32 '><img className='w-full h-10' src="https://basis.com/wp-content/uploads/2023/04/international_business_times.png" alt="" /></div>
                    <div className='w-32 '><img className='w-full h-10' src="https://assets-global.website-files.com/634054bf0f60201ce9b30604/63590b9f34a23f6cb7a5c90c_BI_blue_background_vertical.png" alt="" /></div>
                    <div className='w-32 '><img className='w-full h-10' src="https://cdn.benzinga.com/files/images/story/2012/cover_photo_43.png?width=1200&height=800&fit=crop" alt="" /></div>
                </div>
            </Marquee>
        </div>
    );
};

export default FeaturedOn;