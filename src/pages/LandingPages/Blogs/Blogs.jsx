import React, { useEffect, useState } from 'react';
import BlogHeader from './BlogHeader';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlogs, setSelectedBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("View All");
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                const selectedBlogs = selectedCategory === "View All"
                    ? data
                    : data.filter(item => item.category === selectedCategory);

                setSelectedBlogs(selectedBlogs);
                setFilteredBlogs(data);
                setBlogs(data);
            })
    }, [selectedCategory]);


    return (
        <div className='blogs py-12 container'>
            <BlogHeader blogs={blogs} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  setFilteredBlogs={setFilteredBlogs}  />
            <div className="blogs-items grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-20 gap-x-14 ">
                {
                    selectedBlogs.map(item => <div key={item.id} className='blog-item'>
                        <Link to={`${item.id}`}></Link>
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
            <div className="show-more mt-24 ">
                <button className='text-dark  bg-secondary hover:bg-secondaryHover duration-200 font-semibold px-10 py-3 rounded-md '>Show More</button>
            </div>
        </div>
    );
};

export default Blogs;