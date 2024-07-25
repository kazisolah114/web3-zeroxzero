import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="aboutus-page container py-14">
            <div className="support-page-header mb-14">
                <h1 className='text-white text-5xl mb-5 font-bold '>About 0x0</h1>
                <p className='text-light text-3xl font-semibold mb-14'>Learn more about 0x0.com</p>
                <Link to="support" className='text-white px-10 py-3 bg-secondary hover:bg-secondaryHover duration-200  font-semibold rounded-md'>Contact us</Link>
            </div>
            <div className="aboutus">
                <div className="who-we-are flex gap-10 justify-between items-center my-32">
                    <div className='w-3/6'>
                        <h2 className='text-5xl text-white font-bold mb-7'>Who are we?</h2>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, ariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita arcearum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-'>Consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                    </div>
                    <div className='flex justify-end w-3/6'>
                        <img src="/images/lock.png" alt="" className='w-3/5 ' />
                    </div>
                </div>
                <div className="who-we-are flex flex-row-reverse gap-10 justify-between items-center my-32">
                    <div className='w-3/6 text-right'>
                        <h2 className='text-5xl text-white font-bold mb-7'>Who are we?</h2>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, ariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita arcearum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-'>Consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                    </div>
                    <div className='flex justify-start w-3/6'>
                        <img src="/images/lock.png" alt="" className='w-3/5 ' />
                    </div>
                </div>
                <div className="who-we-are flex gap-10 justify-between items-center my-32">
                    <div className='w-3/6'>
                        <h2 className='text-5xl text-white font-bold mb-7'>Who are we?</h2>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, ariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita arcearum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                        <p className='text-gray mb-'>Consectetur adipisicing elit. Ipsum rem aspernatur quia quo modi expedita architecto at tenetur facilis quam, quae ea, repellendus similique asperiores dolores? Animi quis reprehenderit provident earum perspiciatis, neque fugiat rem soluta fugit quae aperiam asperiores ratione pariatur sunt, accusantium est nulla, dicta doloremque vero vitae!</p>
                    </div>
                    <div className='flex justify-end w-3/6'>
                        <img src="/images/lock.png" alt="" className='w-3/5 ' />
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='text-4xl text-white font-bold mb-10'>Join The Team</h2>
                    <Link to="/careers" className='text-white px-10 py-4 bg-secondaryHover hover:bg-secondary duration-200  font-semibold rounded-md'>Explore Positions</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;