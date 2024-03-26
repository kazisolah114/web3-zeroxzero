import React, { useState } from 'react';

const AppSectionHeader = ({ header, details, defaultBtn, secondBtn }) => {
    const [selectedButton, setSelectedButton] = useState("monthly");
    const handleSelectedButton = (button) => {
        setSelectedButton(button);
    }
    return (
        <div className="leaderboard-header text-center mb-10">
            <h2 className='text-3xl font-bold text-light mb-3'>{header}</h2>
            <p className='text-gray w-3/6 mx-auto font-light text-[17px]'>{details}</p>
            {defaultBtn && secondBtn &&
                <div className="toggler mt-10 mx-auto bg-[#122036] w-[fit-content] rounded-full flex justify-between items-center">
                    <button onClick={() => handleSelectedButton("monthly")} className={`text-secondary ${selectedButton == "monthly" && "bg-white"} rounded-full w-40 px-2 py-[10px] font-semibold transition duration-300 ease-in-out`}>{defaultBtn}</button>
                    <button onClick={() => handleSelectedButton("quarterly")} className={`text-secondary ${selectedButton == "quarterly" && "bg-white"} rounded-full w-40 px-2 py-[10px] font-semibold transition duration-300 ease-in-out`}>{secondBtn}</button>
                </div>
            }
        </div>
    );
};

export default AppSectionHeader;