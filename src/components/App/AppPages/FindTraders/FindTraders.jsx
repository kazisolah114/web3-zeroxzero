import React, { useEffect, useState } from 'react';
import AppSectionHeader from '../../../CommonComponents/AppSectionHeader/AppSectionHeader';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import './FindTraders.css';
import SearchDayCount from './SearchDayCount';
import SearchResult from './SearchResult';
import { Helmet } from 'react-helmet';


const FindTraders = () => {
    const [baseCurrency, setBaseCurrency] = useState([]);
    const [targetCurrency, setTargetCurrency] = useState([]);
    const [timePeriod, setTimePeriod] = useState("");
    useEffect(() => {
        fetch('/findtraders.json')
            .then(res => res.json())
            .then(data => {
                setBaseCurrency(data.base_currency);
                setTargetCurrency(data.target_currency);
                setTimePeriod(data.time_period);
            });
    }, []);

    // Base
    const [clickedBase, setClickedBase] = useState(false);
    const [selectedBase, setSelectedBase] = useState(null);
    useEffect(() => {
        if (baseCurrency.length > 0) {
            setSelectedBase(baseCurrency[0]);
        }
    }, [baseCurrency]);
    const handleSelectedBase = (base) => {
        setSelectedBase(base);
        setClickedBase(false);
    };

    // Target
    const [clickedTarget, setClickedTarget] = useState(false);
    const [selectedTarget, setSelectedTarget] = useState(null);
    useEffect(() => {
        if (targetCurrency.length > 0) {
            setSelectedTarget(targetCurrency[0]);
        }
    }, [targetCurrency]);
    const handleSelectedTarget = (target) => {
        setSelectedTarget(target);
        setClickedTarget(false);
    };

    // Time Period
    const [clickedTime, setClickedTime] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    useEffect(() => {
        if (timePeriod.length > 0) {
            setSelectedTime(timePeriod[0]);
        }
    }, [timePeriod]);
    const handleSelectedTime = (time) => {
        setSelectedTime(time);
        setClickedTime(false);
    };


    const [showSearchResult, setShowSearchResult] = useState(false);
    const handleShowSearchResult = () => {
        setShowSearchResult(true);
    }



    console.log(selectedBase);
    console.log(selectedTarget);
    console.log(selectedTime);

    return (
        <div className='find-traders'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Find Traders | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <AppSectionHeader header={"Search For Custom Leaders"} details={"Choose your base and target currencies to return a list of the top performers within your selected time period"} />
            <SearchDayCount />
            <div className="find-traders-content">
                <div className="search-content">
                    <div className="search">
                        <div className='item relative'>
                            <h2 className='font-semibold uppercase text-light mb-3'>Base Currency</h2>
                            <div onClick={() => setClickedBase(!clickedBase)} className='flex items-center gap-3  cursor-pointer bg-slate-900 px-5 py-3 rounded-t-md '>
                                <img className='w-6' src={selectedBase?.flag} alt="" />
                                <p className='text-[#e2e2e2] flex items-center justify-between w-full text-lg '>{selectedBase?.abr}
                                    <HiOutlineChevronDown className={`${clickedBase && "rotate-180 duration-200 relative top-[1px]"}`} />
                                </p>
                            </div>
                            {clickedBase &&
                                <div className='z-[3] absolute top-full w-full bg-gray-800'>
                                    <ul className=''>
                                        {
                                            baseCurrency.map((currency, index) => <li
                                                key={index}
                                                onClick={() => handleSelectedBase(currency)}
                                                className={`flex items-center gap-3 py-3 px-5 hover:bg-gray-700  cursor-pointer`}
                                            >
                                                <img className='w-[17px]' src={currency.flag} alt="" />
                                                <div className='flex items-center gap-2'>
                                                    <p className='text-[#e2e2e2] flex items-center gap-1 underline'>{currency.currency}</p>
                                                    <span className='text-gray'>{currency.abr}</span>
                                                </div>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                        </div>

                        <div className='item relative z-[2]'>
                            <h2 className='font-semibold uppercase text-light mb-3'>Target Currency</h2>
                            <div onClick={() => setClickedTarget(!clickedTarget)} className='flex items-center gap-3  cursor-pointer bg-slate-900 px-5 py-3 rounded-t-md '>
                                <img className='w-6' src={selectedTarget?.flag} alt="" />
                                <p className='text-[#e2e2e2] flex items-center justify-between w-full text-lg '>{selectedTarget?.abr}
                                    <HiOutlineChevronDown className={`${clickedTarget && "rotate-180 duration-200 relative top-[1px]"}`} />
                                </p>
                            </div>
                            {clickedTarget &&
                                <div className='absolute top-full w-full bg-gray-800'>
                                    <ul className=''>
                                        {
                                            targetCurrency.map((currency, index) => <li
                                                key={index}
                                                onClick={() => handleSelectedTarget(currency)}
                                                className={`flex items-center gap-3 py-3 px-5 hover:bg-gray-700  cursor-pointer`}
                                            >
                                                <img className='w-[17px]' src={currency.flag} alt="" />
                                                <div className='flex items-center gap-2'>
                                                    <p className='text-[#e2e2e2] flex items-center gap-1 underline'>{currency.currency}</p>
                                                    <span className='text-gray'>{currency.abr}</span>
                                                </div>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                        </div>

                        <div className='item relative'>
                            <h2 className='font-semibold uppercase text-light mb-3'>Time Period</h2>
                            <div onClick={() => setClickedTime(!clickedTime)} className='flex items-center gap-3  cursor-pointer bg-slate-900 px-5 py-3 rounded-t-md '>
                                <p className='text-[#e2e2e2] flex items-center justify-between w-full text-lg '>{selectedTime?.time}
                                    <HiOutlineChevronDown className={`${clickedTime && "rotate-180 duration-200 relative top-[1px]"}`} />
                                </p>
                            </div>
                            {clickedTime &&
                                <div className='absolute top-full w-full bg-gray-800'>
                                    <ul className=''>
                                        {
                                            timePeriod.map((time, index) => <li
                                                key={index}
                                                onClick={() => handleSelectedTime(time)}
                                                className={`flex items-center gap-3 py-3 px-5 hover:bg-gray-700  cursor-pointer`}
                                            >
                                                <div className='flex items-center gap-2'>
                                                    <p className='text-[#e2e2e2] flex items-center gap-1 underline'>{time.time}</p>
                                                </div>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="item flex items-end">
                            {/* <h2 className='font-semibold uppercase text-light mb-3 opacity-0 invisible'>Search Now</h2> */}
                            <button onClick={handleShowSearchResult} className='bg-secondaryHover hover:bg-secondary duration-200 w-full font-semibold py-[13px] rounded-md'>Search Now</button>
                        </div>
                    </div>
                </div>
                {showSearchResult &&
                    <SearchResult />
                }
            </div>
        </div>
    );
};

export default FindTraders;