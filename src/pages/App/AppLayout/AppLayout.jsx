import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import './AppLayout.css';
import { Helmet } from 'react-helmet';

const AppLayout = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
    const [outletHeight, setOutletHeight] = useState(88);
    return (
        <main className=' app-main  '>
            <Helmet>
                <meta charSet="utf-8" />
                <title>App | 0x0</title>
                <link rel="canonical" href="http://0x0.com" />
            </Helmet>
            <div className='container '>
                <div className='flex'>
                    <Sidebar showResponsiveMenu={showResponsiveMenu} setShowResponsiveMenu={setShowResponsiveMenu} />
                    <div className='flex flex-col w-full'>
                        <Header showResponsiveMenu={showResponsiveMenu} setShowResponsiveMenu={setShowResponsiveMenu} setOutletHeight={setOutletHeight} />
                        <div className={`outlet p-5 h-[calc(100vh-${outletHeight}px)] overflow-auto outlet-scrollbar`}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppLayout;