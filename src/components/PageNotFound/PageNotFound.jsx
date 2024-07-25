import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='bg-black max-w-full h-[100vh] text-center '>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Page Not Found | 0x0</title>
                <link rel="canonical" href="http://0x0.com/page-not-found" />
            </Helmet>
            <div className=''>
                <div className='flex items-center flex-col top-36 relative'>
                    <h3 className='text-9xl font-extrabold italic text-slate-600 mb-10'>404</h3>
                    <p className='text-7xl font-bold italic text-slate-600 mb-8'>Page Not Found</p>
                    <p className='text-xl text-slate-500 mb-10'>The page you are looking for doesn't exist or being worked on!</p>
                    <Link className='text-secondary border border-[#0fcfcfb3] rounded-full px-5 py-3 hover:bg-[#b0b0b01f] duration-200' to="/">Go to the Homepage</Link>
                </div>
            </div>
        </div>
            );
};

export default PageNotFound;