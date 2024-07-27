import React from 'react';

const SectionHeader = ({ header, brief }) => {
    return (
        <div className="mb-20">
            <h1 className='text-secondary text-5xl mb-5 font-bold '>{header}</h1>
            <p className='text-light text-3xl font-semibold '>{brief}</p>
        </div>
    );
};

export default SectionHeader;