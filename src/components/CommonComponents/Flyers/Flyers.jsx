import React from 'react';

const FlyersOne = () => {
    return (
        <div className='absolute top-0 left-0'>
            <img src="https://www.programming-hero.com/mobileApp/triangle.svg" alt="" className='w-40' />
        </div>
    );
};


const FlyersTwo = () => {
    return (
        <div className='absolute top-5 right-0' >
            <img src="https://www.programming-hero.com/team/blue-square.svg" alt="" className='w-40' />
        </div>
    );
};

export { FlyersOne, FlyersTwo };