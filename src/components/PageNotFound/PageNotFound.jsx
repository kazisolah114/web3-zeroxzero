import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Page Not Found | 0X0</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='flex items-center flex-col top-36 relative'>
            <h3 className='text-9xl font-extrabold italic text-slate-600 mb-10'>404</h3>
            <p className='text-7xl font-bold italic text-slate-700 mb-8'>Page Not Found</p>
            <p className='text-xl text-slate-900 mb-10'>The page you are looking for doesn't exist or has been removed!</p>
            <button className='primary-button'><Link to="/">Go to the Homepage</Link></button>
        </div>
        </div>
    );
};

export default PageNotFound;