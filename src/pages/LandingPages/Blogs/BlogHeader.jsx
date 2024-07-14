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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='blogs-header flex items-center justify-between mb-10 '>
            <div className='categories flex gap-3 max-lg:hidden'>
                <button onClick={() => handleSelectedCategory("View All")} className={`${selectedCategory == "View All" && 'bg-secondary'} text-white px-5 py-1 font-semibold rounded-full`}>All Blogs</button>
                {
                    categories.map(category => (
                        <div key={category}>
                            <button onClick={() => handleSelectedCategory(category)} className={`${selectedCategory == category && 'bg-secondary'} text-white duration-200 px-5 py-1 font-semibold rounded-full`}>{category}</button>
                        </div>
                    ))
                }
            </div>
            <div className="relative lg:hidden w-44">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-[#122036] border border-gray-500 border-opacity-50 text-white py-2 px-4 rounded flex justify-between items-center focus:outline-none"
                >
                    {selectedCategory || "Select Category"}
                    <svg className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {isOpen && (
                    <ul className="absolute z-10 mt-1 w-full bg-[#122036] border border-gray-500 border-opacity-50 rounded shadow-lg">
                        <li>
                            <button
                                onClick={() => { handleSelectedCategory("View All"); setIsOpen(false); }}
                                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                View All
                            </button>
                        </li>
                        {categories.map(category => (
                            <li key={category}>
                                <button
                                    onClick={() => { handleSelectedCategory(category); setIsOpen(false); }}
                                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className='search-blog flex items-center gap-3 rounded-full text-light py-3 px-4 bg-[#122036] max-md:hidden'>
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
