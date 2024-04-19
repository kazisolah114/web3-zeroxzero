import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Header.css';
import { HiMenu, HiMenuAlt1, HiX } from "react-icons/hi";
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
    const navigate = useNavigate();
    const handleClickButton = () => {
        navigate(`/app/dashboard`)
    }
    return (
        <header className='main-header py-4'>
            <div className='header-content container'>
                <div className="header-logo">
                    <Link to="/"><img className='w-28' src="/public/images/0x0-logo-2.png" alt="" /></Link>
                </div>
                <div className='header-menu-main'>
                    <button className='text-2xl text-secondary'>
                        {showResponsiveMenu ?
                            <div className="close-menu" onClick={() => setShowResponsiveMenu(false)}><HiX className='opacity-0' /></div>
                            :
                            <HiMenu onClick={() => setShowResponsiveMenu(true)} />
                        }
                    </button>
                    <div className={`header-menu flex items-center justify-between ${showResponsiveMenu ? 'show' : 'hide'}`}>
                        <div className=''>
                            <div className={`menu-logo mb-4 pb-4 border-b border-gray-700 border-opacity-50 ${showResponsiveMenu ? 'show' : 'hide'}`}>
                                <img className='w-24 ' src="/public/images/0x0-logo-2.png" alt="" />
                            </div>
                            <Navbar />
                        </div>
                        <LanguageSelector />
                    </div>


                </div>
                <div className="header-button">
                    <button onClick={handleClickButton} className='flex items-center gap-2'>Launch App</button>
                </div>
            </div>




        </header >
    );
};

export default Header;