import React, { useEffect, useState } from 'react';
import { HiOutlineBriefcase, HiOutlineCash, HiOutlineLocationMarker } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/careers.json')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])
    const navigate = useNavigate();
    const handleJobClick = (job) => {
        navigate(`${job.id}`, { state: { jobData: job } })
    }
    return (
        <div className="jobs ">
            <ul>
                {
                    jobs.map(job => (
                        <li key={job.id} className='mb-5 last:mb-0 cursor-pointer p-4 border border-gray-700 border-opacity-80 hover:shadow-lg hover:shadow-gray-950  duration-200 rounded-md group' onClick={() => handleJobClick(job)}>
                            <h3 className='text-white font-semibold text-xl group-hover:underline '>{job.title}</h3>
                            <div className='my-2'>
                                <p className='text-light flex items-center gap-1'><HiOutlineLocationMarker /> {job.address}</p>
                                <p className='text-light flex items-center gap-1'><HiOutlineCash class /> {job.salary}</p>
                            </div>
                            <p className='text-light '>{job.job_description.slice(0, 100)}...</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Jobs;