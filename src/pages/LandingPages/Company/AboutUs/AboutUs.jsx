import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';

const AboutUs = () => {
    return (
        <div className="aboutus-page container py-24">
            <div>
                <SectionHeader header={"About 0x0"} brief={"Learn more about 0x0.com"} />
                <Link to="/support" className='text-white px-10 py-3 bg-secondary hover:bg-secondaryHover duration-200  font-semibold rounded-md'>Contact us</Link>
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
                <div className="who-we-are flex gap-10 justify-between items-center">
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

            </div>
        </div>
    );
};

export default AboutUs;