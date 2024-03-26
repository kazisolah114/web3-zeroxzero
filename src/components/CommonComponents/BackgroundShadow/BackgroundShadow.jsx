import React from 'react';
import './BackgroundShadow.css';

const BackgroundShadow = ({ customShadow }) => {
    return (
        <div style={{boxShadow: customShadow}} className={`background-shadow`}>
            
        </div>
    );
};

export default BackgroundShadow;