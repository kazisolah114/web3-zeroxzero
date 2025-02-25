import React, { useState } from 'react';

const AppSectionHeader = ({ header, details, defaultBtn, secondBtn, setInterval }) => {
    const [selectedButton, setSelectedButton] = useState("monthly");
    const handleSelectedButton = (button) => {
        setSelectedButton(button);
    }
    return (
        <div className="leaderboard-header text-center mb-10">
            {/* <h2 className='text-3xl font-bold text-light mb-3'>{header}</h2> */}
            <p className='text-gray-400 w-3/6 mx-auto font-semibold text-xl'>{details}</p>
            {defaultBtn && secondBtn &&
                <div className="toggler mt-10 mx-auto bg-[#122036] w-[fit-content]  flex justify-between items-center rounded-full">
                    <button onClick={() => (handleSelectedButton("monthly"), setInterval('30d'))} className={`text-secondary ${selectedButton == "monthly" && "bg-white"}  w-40 max-sm:w-32 px-2 py-3 max-sm:py-2 font-semibold transition duration-300 ease-in-out rounded-s-full`}>{defaultBtn}</button>
                    <button onClick={() => (handleSelectedButton("weekly"), setInterval('7d'))} className={`text-secondary ${selectedButton == "weekly" && "bg-white"}  w-40 max-sm:w-32 px-2 py-3 max-sm:py-2 font-semibold transition duration-300 ease-in-out rounded-e-full`}>{secondBtn}</button>
                </div>
            }
        </div>
    );
};

export default AppSectionHeader;