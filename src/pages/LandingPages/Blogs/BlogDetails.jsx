import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData, Link } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                const filteredBlog = data.find(blog => blog.id == id);
                setBlog(filteredBlog);
            })
    }, [])


    return (
        <div className='blog-details py-12 container'>
            <div className="blog-content grid grid-cols-[3fr_1fr] max-lg:grid-cols-1 gap-20">
                <div className="main-blog">
                    <h2 className='text-white text-4xl max-md:text-3xl font-bold'>{blog?.title}</h2>
                    <div className='flex items-center justify-between mt-8'>
                        <span className='text-white bg-secondary rounded-sm px-3 py-[2px]'>{blog?.category}</span>
                        <div className='blog-brief-bottom flex items-center gap-16 text-gray'>
                            <p>{blog?.author}</p>
                            <p className='text-right'>{blog?.reading_time}</p>
                        </div>
                    </div>
                    <img className='w-full h-auto my-10 rounded-md' src={blog?.banner} alt="" />
                    <div className="blog-contents">
                        {
                            blog?.blog_content.map((content, index) => <div key={index} className='mb-7'>
                                <h3 className='text-light text-2xl mb-4 font-bold'>{content.section_title}</h3>
                                <p className='text-gray '>{content.section_details}</p>
                                <div className="media-content  flex items-center gap-7  max-sm:flex-col">
                                    {
                                        content?.media?.map((item, index) =>
                                            <img key={index} src={item} className='w-full  rounded-md mt-7' />
                                        )
                                    }
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="blog-bottom flex  justify-between mt-20 max-md:flex-col max-md:gap-10">
                        <div className='tags flex  gap-4'>
                            <h4 className='font-semibold text-lg text-white'>Tags:</h4>
                            <ul className='flex items-center gap-3 text-light flex-wrap'>
                                {
                                    blog?.tags.map((item, index) => <li key={index} className='bg-secondary rounded-full px-3 py-[2px]'><Link>{item}</Link></li>)
                                }
                            </ul>
                        </div>
                        <div className="socials flex items-center gap-4">
                            <h4 className='font-semibold text-lg text-white'>Share:</h4>
                            <ul className='flex items-center gap-3'>
                                <li className='border border-gray-600 hover:border-gray-200 duration-150 w-7 inline-block rounded-full'><Link to="https://twitter.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/twitter.svg" alt="" /></Link></li>
                                <li className='border border-gray-600 hover:border-gray-200 duration-150 w-7 inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/facebook.svg" alt="" /></Link></li>
                                <li className='border border-gray-600 hover:border-gray-200 duration-150 w-7 inline-block rounded-full'><Link to="https://www.instagram.com/0x0_official/?hl=en" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/instagram.svg" alt="" /></Link></li>
                                <li className='border border-gray-600 hover:border-gray-200 duration-150 w-7 inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/discord.svg" alt="" /></Link></li>
                                <li className='border border-gray-600 hover:border-gray-200 duration-150 w-7  inline-block rounded-full'><Link to="https://t.me/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/telegram.svg" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <aside className="sidebar flex flex-col gap-10">
                    <div className="table-of-content">
                        <h3 className='text-secondary font-semibold mb-5 text-xl'>TABLE OF CONTENTS</h3>
                        <ul>
                            {
                                blog?.table_of_contents?.map((item, index) => <li className='text-gray hover:text-secondary duration-200 pb-3 mb-3 border-b border-gray-500 border-opacity-50 '><Link to="#">{item}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className="recent-blogs">
                        <h3 className='text-secondary font-semibold mb-5 text-xl'>RECENT BLOGS</h3>
                        <ul>
                            {
                                blogs?.slice(0, 5).map((blog) => <Link to={`/blogs/${blog.id}`}>
                                <li className='flex gap-2 items-center mb-4 group'>
                                    <img className='w-16 h-10 rounded-sm ' src={blog.banner} alt="" />
                                    <div className=''>
                                        <span className='text-sm font-light text-gray group-hover:text-secondary duration-200'>{blog.category}</span>
                                        <p className='text-semibold text-light group-hover:text-secondary duration-200'>{blog.title.slice(0, 30)}...</p>
                                    </div>

                                </li>
                                </Link>)
                            }
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetails;