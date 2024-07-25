import React, { useEffect, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Loader from '../../../../components/CommonComponents/Loader/Loader';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SearchResult = ({ selectedBase, selectedTarget, selectedTime, renderResult }) => {
    console.log(renderResult);
    const [customResult, setCustomResult] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(typeof error);
    useEffect(() => {
        fetch(`https://leaderboard.0x0.com/top?token=${selectedTarget.wallet}&interval=${selectedTime.interval}`)
            .then(res => res.json())
            .then(data => {
                setCustomResult(data);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            })
    }, [renderResult])

    const notify = () => toast.success('Wallet added to the tracking list!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const [tracking, setTracking] = useState(false);
    const [trackingList, setTrackingList] = useState([]);
    const handleTrackWallet = (wallet) => {
        if (trackingList.includes(wallet)) {
            setTrackingList(trackingList.filter(item => item !== wallet));

        } else {
            setTrackingList([...trackingList, wallet]);
            setTracking(!tracking)
            notify();
        }

    }
    return (
        <div>
            {isLoading ?
                <SkeletonTheme baseColor="#202020" highlightColor="#44444430" >
                    <div className="">
                        <div className='mb-3 mt-8'>
                            <Skeleton height={"40px"} />
                        </div>
                        <div className=''>
                            <Skeleton className='mb-1' count={10} height={"40px"} />
                        </div>
                    </div>
                </SkeletonTheme>
                : error
                ?
                <div className="error-message flex flex-col gap-3 justify-center items-center mt-10">
                    <img src="/images/error-robot.png" alt="" className='w-80 mb-5' />
                    <h3 className='font-semibold text-[#ed615b] text-xl'>An error has occured while fetching data!</h3>
                    <p className='text-gray'>Pleae refresh the page or try again later</p>
                </div>
                :
                <div className='search-result '>
                    <ToastContainer />
                    {customResult?.leaderboard && customResult?.leaderboard.length > 0 ?
                        <div className='mt-5 flex flex-col justify-center '>
                            <div className='search-table-head text-light bg-[#122036] px-[30px] py-5 rounded-md '>
                                <p>#</p>
                                <p className='mr-12'>Wallet Address</p>
                                <p>Profit Percentage</p>
                                <p>Coin Volume</p>
                                <p className='mx-auto text-center'>Track Wallet</p>
                            </div>
                            {
                                customResult?.leaderboard?.map((item, index) => <div className='search-table-content  border-b border-slate-800   text-light  px-[30px] py-5'>
                                    <p>{index + 1}</p>
                                    <Link to={`https://etherscan.io/address/${item.wallet}`} target="_blank" className=''>{item.wallet.substring(0, 6)}...{item.wallet.substring(item.wallet.length - 6)}</Link>
                                    <p className={`${item.profitPercent.startsWith("-") ? 'text-red-400' : 'text-green-400'}`}>{item.profitPercent}</p>
                                    <p>N/A</p>
                                    <p onClick={() => handleTrackWallet(item.wallet)} className='mx-auto cursor-pointer'>
                                        {trackingList.includes(item.wallet) ?
                                            <HiOutlineEyeSlash className='text-2xl text-secondary' />
                                            :
                                            <HiOutlineEye className='text-2xl' />
                                        }
                                    </p>

                                </div>)
                            }
                        </div>
                        :
                        <div className='text-center mt-10'>
                            <h4 className='text-gray'>No records were found for the given base, target and time period😕</h4>
                        </div>
                    }

                </div>
            }
        </div>
    );
};

export default SearchResult;