import React, { useEffect, useState } from 'react';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { useNavigationType } from 'react-router-dom';

const Publications = () => {
    const [publications, setPublications] = useState([]);
    useEffect(() => {
        fetch('publications.json')
            .then(res => res.json())
            .then(data => {
                setPublications(data);
            })
    }, [])
    const navigate = useNavigationType();
    const visitPublication = (url) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.open(url, '_blank')
        } else {
            navigate(url);
        }
    }
    return (
        <div className='publications-page container py-14'>
            <div className="publications-page-header mb-14">
                <h1 className='text-white text-5xl mb-5 font-bold '>0x0 Publications</h1>
                <p className='text-light text-3xl font-semibold '>Publications about 0x0.com platform</p>
            </div>
            <div className="publications mt-10 grid lg:grid-cols-2 gap-10">
                {
                    publications.map((item, index) => (
                        <div key={index} onClick={() => visitPublication(item.link)} className='publication group  flex flex-col  md:flex-row cursor-pointer overflow-hidden'>
                            <div className='md:w-2/4 overflow-hidden '>
                                <img className='w-full h-full transform transition-transform duration-500 group-hover:scale-110' src={item.banner} alt="" />
                            </div>
                            <div className='md:w-2/4 p-3 bg-[#1F2937] text-gray'>
                                <h3 className='font-bold mb-3 group-hover:underline duration-200 text-light'>{item.title.slice(0, 72)}...</h3>
                                <div className='flex flex-col justify-between h-40'>
                                    <p className='text-justify'>{item.post.slice(0, 160)}...</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='flex items-center gap-2'><HiOutlineCalendar /> {item.date_of_post}</p>
                                        <img className='w-12' src={item.platform_logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Publications;