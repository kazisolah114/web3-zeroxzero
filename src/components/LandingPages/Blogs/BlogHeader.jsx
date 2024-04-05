import React, { useState, useEffect } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const BlogHeader = ({ blogs, selectedCategory, setSelectedCategory, setFilteredBlogs }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        handleSetCategories();
    }, [blogs]);

    const handleSetCategories = () => {
        const uniqueCategories = [...new Set(blogs.map(item => item.category))];
        setCategories(uniqueCategories);
    }
    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    }

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTerm = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        const filteringBlogs = blogs.filter(blog =>
            blog.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredBlogs(filteringBlogs);
        
    }


    return (
        <div className='blogs-header flex items-center justify-between mb-10'>
            <div className='categories  flex gap-3 '>
                <button onClick={() => handleSelectedCategory("View All")} className={`${selectedCategory == "View All" && 'bg-secondary'} text-white px-5 py-1 font-semibold rounded-full`}>View All</button>
                {
                    categories.map(category => (
                        <div key={category}>
                            <button onClick={() => handleSelectedCategory(category)} className={`${selectedCategory == category && 'bg-secondary'} text-white  duration-200 px-5 py-1 font-semibold rounded-full`}>{category}</button>
                        </div>
                    ))
                }
            </div>
            <div className='search-blog flex items-center gap-3 rounded-full text-light py-3 px-4 bg-[#122036]'>
                <HiOutlineMagnifyingGlass />
                <input
                    type="text"
                    placeholder='Search blog'
                    onChange={handleSearchTerm}
                    className='outline-none bg-transparent'
                />
            </div>
        </div>
    );
};

export default BlogHeader;
