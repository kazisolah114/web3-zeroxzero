import React from 'react';

const Toast = ({ title, icon }) => {
    return (
        <div className='absolute z-10 flex items-center gap-5 bg-green-600 p-5 rounded-md'>
            <span>{icon}</span>
            <h4>{title}</h4>
        </div>
    );
};

export default Toast;