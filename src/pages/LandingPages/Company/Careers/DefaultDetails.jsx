import React from 'react';

const DefaultDetails = () => {
    return (
        <div className='p-4 border border-gray-700 border-opacity-80 rounded-md flex flex-col items-center justify-center overflow-auto h-[600px] sticky top-[120px] left-0'>
            <img src="/public/images/hero-ilustration.png" alt="" className='w-64 mb-10' />
            <h2 className='text-2xl font-bold text-secondary mb-2'>Join The Exciting Team Today!</h2>
            <p className='text-light mb-5'>Looking for an opportunity? Here is your chance with team 0x0.</p>
            <p className='text-gray text-center'>Explore our jobs posted by the team and apply the ones that matches your skills and experiences. We aim to response to your application as soon as we can since we take your interest in working with us very seriously.</p>
        </div>
    );
};

export default DefaultDetails;