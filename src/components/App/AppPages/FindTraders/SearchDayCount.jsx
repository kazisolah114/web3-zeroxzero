import React, { useState } from 'react';
import TopupModal from './TopupModal';

const SearchDayCount = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    }
    return (
        <div className='flex items-center justify-between bg-[#122036] px-[30px] py-5 rounded-t-md shadow-lg shadow-gray-900  relative'>
            <TopupModal showModal={showModal} setShowModal={setShowModal} />
            <h2 className='font-semibold text-light text-lg'>Search Days Remaining: 5</h2>
            <button onClick={handleShowModal} className=' bg-[#DDC445] hover:bg-[#f5db5c] text-[#111] duration-200 px-5 py-3  rounded-md font-bold'>Top-up Search Days</button>
        </div>
    );
};

export default SearchDayCount;