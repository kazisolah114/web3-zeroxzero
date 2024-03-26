import React, { useState } from 'react';
import { HiOutlineCog6Tooth, HiOutlineCpuChip } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx/Navbar';
import { HiOutlineChip, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const Sidebar = () => {



    return (
        <aside className="main-sidebar py-5 pr-2 w-72 border-r border-gray-700 border-opacity-80">
            <div className="app-logo pb-5">
                <Link to="/app/dashboard"><img className='w-28' src="/images/0x0-logo-2.png" alt="" /></Link>
            </div>
            <div>
                <Navbar />
            </div>
            <div className="app-footer mt-16">
                <p className='text-gray text-sm'>Copyright &copy; 2017 - 2024 Firecracker Finance LLC. All rights reserved.</p>
            </div>
        </aside>
    );
};

export default Sidebar;