import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const BlogsSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, []);
    return (
        <div className='blogs-section py-24'>
            <div className="blogs-section-header flex justify-between items-start container">
                <div className='w-3/5'>
                    <h2 className='text-light text-3xl mb-3 font-bold'>0x0_ Blogs</h2>
                </div>
                <Link to="/blogs" className='text-secondary hover:text-white duration-200 text-lg flex items-center gap-3'>View All Blogs <HiArrowLongRight /></Link>
            </div>
            <Marquee direction='left' className='flex gap-20 mt-10' pauseOnHover='true' speed={50}>
                <div className="blogs-items ">
                    {
                        blogs.map(item => <div key={item.id} className='blog-item w-[400px]'>
                            <Link to={`blogs/${item.id}`}></Link>
                            <div className='blog-banner'>
                                <img src={item.banner} alt="" />
                            </div>
                            <div className="blog-brief">
                                <span className='text-white bg-secondary rounded-sm px-3 py-[2px]'>{item.category}</span>
                                <h2 className='capitalize font-semibold text-xl text-white hover:text-secondary duration-200 my-5'>{item.title}</h2>
                                <div className='blog-brief-bottom flex justify-between items-center text-gray mt-2'>
                                    <p>{item.author}</p>
                                    <p className='text-right'>{item.reading_time}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default BlogsSection;