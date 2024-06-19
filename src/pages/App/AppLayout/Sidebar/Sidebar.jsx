import React, { useState } from 'react';
import { HiOutlineCog6Tooth, HiOutlineCpuChip } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx/Navbar';
import { HiMenu, HiX } from 'react-icons/hi';

const Sidebar = ({showResponsiveMenu, setShowResponsiveMenu}) => {
    
    return (

        <aside className={`main-sidebar h-[100vh] flex flex-col justify-between py-5 pr-2 w-72 border-r border-gray-700 border-opacity-80 ${showResponsiveMenu ? 'show' : 'hide'}`}>
            <div>
                <div className="app-logo pb-5">
                    <Link to="/app/leaderboard"><img className='w-28' src="/images/0x0-logo-2.png" alt="" /></Link>
                </div>
                <div>
                    <Navbar setShowResponsiveMenu={setShowResponsiveMenu} />
                </div>
            </div>
            <div className="app-footer">
                <p className='text-gray text-sm'>Copyright &copy; 2017 - 2024 Firecracker Finance LLC. All rights reserved.</p>
            </div>
        </aside>

    );
};

export default Sidebar;