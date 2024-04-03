import React from 'react';
import { HiOutlineXCircle } from 'react-icons/hi2';
import { FaSort } from "react-icons/fa";

const TopupModal = ({ showModal, setShowModal }) => {
    // Current gese 333 e
    return (
        <div className='absolute'>
            {showModal &&
                <div className='overlay fixed inset-0 bg-black opacity-70 z-10'></div>
            }
            {showModal &&
                <div className={`${showModal ? 'flex' : 'hidden'} fixed inset-0 justify-center items-center z-10 `}>
                    <div className='topup-modal bg-[#122036] p-5 rounded-md'>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-semibold text-lg'>Top-up Search Days</h2>
                            <HiOutlineXCircle className='text-4xl  cursor-pointer hover:text-red-400 duration-200' onClick={() => setShowModal(false)} />
                        </div>
                        <p className='text-sm text-gray text-center my-10'>Purchase 1 Search Day with 1 0x0COM</p>
                        <div className=''>
                            <div className='mt-10 pb-3  flex items-center justify-between border-b border-gray-700 border-opacity-80'>
                                <img className='w-6' src="/public/images/0x0-logo-head.png" alt="" />
                                <input className='topup-input  outline-none text-center' type="number" placeholder="0.00" />
                                <span className='cursor-pointer'><FaSort /></span>
                            </div>
                            <div className='flex items-center justify-between mt-2 text-gray text-sm'>
                                <p>IN USD: 0.00</p>
                                <p>WALLET BALANCE: 0.00</p>

                            </div>
                        </div>
                        <div className="actions flex items-center justify-between mt-10">
                            <button onClick={() => setShowModal(false)} className='bg-red-500 hover:bg-[#ef4444e2] duration-200 py-2 w-28 font-semibold rounded'>Cancel</button>
                            <button className='bg-secondaryHover hover:bg-secondary duration-200 py-2 w-28 font-semibold rounded'>Enter</button>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default TopupModal;