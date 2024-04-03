import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import './AppLayout.css';
import { Helmet } from 'react-helmet';

const AppLayout = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
    return (
        <main className=' app-main h-[100vh] '>
            <Helmet>
                <meta charSet="utf-8" />
                <title>App | 0x0</title>
                <link rel="canonical" href="http://0x0.com" />
            </Helmet>
            <div className='container flex   justify-between'>
                <Sidebar showResponsiveMenu={showResponsiveMenu} setShowResponsiveMenu={setShowResponsiveMenu} />
                <div className='flex flex-col  w-full'>
                    <Header showResponsiveMenu={showResponsiveMenu} setShowResponsiveMenu={setShowResponsiveMenu} />
                    <div className='outlet py-5 px-5 text-justify max-h-[88.7vh] overflow-auto outlet-scrollbar'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppLayout;