import React from 'react';

const Wallet = () => {
    return (
        <div className='wallet-page'>
            <div className='flex flex-col justify-center items-center h-[calc(100vh-8rem)] text-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-4xl font-bold uppercase mb-6 text-teal-400'>Coming Soon</h2>
                <p className='text-lg text-center lg:max-w-2xl'>
                    Our team is working diligently to bring you the <span className='font-semibold text-teal-300'>0x0 downloadable wallet</span>. Stay tuned for a powerful and seamless crypto experience!
                </p>
                <div className='mt-8'>
                    <button className='bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-teal-600 transition duration-300'>
                        Notify Me
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Wallet;