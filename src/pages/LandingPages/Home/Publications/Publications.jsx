import React, { useEffect, useState } from 'react'
import { HiOutlineCalendar } from 'react-icons/hi2';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';

const Publications = () => {
    const [publications, setPublications] = useState([]);
    useEffect(() => {
        fetch('publications.json')
            .then(res => res.json())
            .then(data => {
                setPublications(data);
            })
    }, [])
    const navigate = useNavigate();
    const visitPublication = (url) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            window.open(url, '_blank')
        } else {
            navigate(url);
        }
    }
    return (
        <div className='publications-section py-24 my-24 container' data-aos="fade-up" data-aos-duration="1000">
            <SectionHeader sectionTitle={"Our_ Publications"} sectionDesc={"Have a look at some of our publications posted on different platforms with ethical community"} />
            <div className="publications mt-10 grid lg:grid-cols-2 gap-10">
                {
                    publications.map((item, index) => (
                        <div key={index} onClick={() => visitPublication(item.link)} className='publication group  flex flex-col  md:flex-row cursor-pointer overflow-hidden'>
                            <div className='md:w-2/4 overflow-hidden '>
                                <img className='w-full h-full transform transition-transform duration-500 group-hover:scale-110' src={item.banner} alt="" />
                            </div>
                            <div className='md:w-2/4 p-3 bg-[#1F2937] text-gray'>
                                <h3 className='font-bold mb-3 group-hover:underline duration-200'>{item.title.slice(0, 72)}...</h3>
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
            <div className='mt-20 flex justify-center'>
                <button className='primary-button-outline w-52'><Link>View More</Link></button>
            </div>
        </div>
    );
}
export default Publications;
