import React from 'react';
import { HiBriefcase, HiOutlineBriefcase, HiOutlineCash, HiOutlineExternalLink, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhoneOutgoing } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const JobDetails = () => {
    let location = useLocation();
    const jobData = location.state?.jobData;
    return (
        <div className="job-details border border-gray-700 border-opacity-80 rounded-md overflow-auto h-[600px] sticky top-[120px] left-0 outlet-scrollbar">
            <div className="job-details-header flex items-start justify-between p-4 shadow-lg shadow-gray-950">
                <div>
                    <h2 className='text-white font-semibold text-2xl mb-3'>{jobData.title}</h2>
                    <div className='flex gap-5'>
                        <p className='text-light flex items-center gap-1'><HiOutlineLocationMarker /> {jobData.address}</p>
                        <p className='text-light flex items-center gap-1'><HiOutlineCash /> {jobData.salary}</p>
                        <p className='text-light flex items-center gap-1'><HiOutlineBriefcase /> Full-time</p>
                    </div>
                </div>
                <div>
                    <button className='flex items-center gap-1 font-bold text-white py-3 px-7 bg-secondaryHover hover:bg-secondary duration-200 rounded-md'>Apply Now <HiOutlineExternalLink className='text-lg font-bold' /></button>
                </div>
            </div>
            <div className="job-details-main p-4 mt-5">
                <p className='text-gray  mb-5'>{jobData.job_description}</p>
                <p className='text-gray font-semibold'>Number of vacancy: {jobData.num_vacancy}</p>
                <div className="contacts mt-5">
                    <h4 className='text-gray font-semibold mb-2 text-lg'>Contact:</h4>
                    <ul className='flex items-center gap-5'>
                        <li className='text-gray flex items-center gap-1'><HiOutlinePhoneOutgoing /> {jobData.contact.phone}</li>
                        <li className='text-gray flex items-center gap-1'><HiOutlineMail /> {jobData.contact.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;