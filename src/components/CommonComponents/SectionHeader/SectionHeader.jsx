import React from 'react';

const SectionHeader = ({ sectionTitle, sectionDesc }) => {
    return (
        <div className="text-center mb-16 section-header">
            <h2 className='text-3xl text-secondary font-bold mb-3'>{sectionTitle}</h2>
            <p className='text-gray text-1xl w-[40%]  mx-auto'>{sectionDesc}</p>
        </div>
    );
};

export default SectionHeader;