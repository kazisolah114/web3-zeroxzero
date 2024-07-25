
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';
import { HiMenu, HiX, HiMenuAlt1 } from "react-icons/hi";
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

    useEffect(() => {
        if (showResponsiveMenu) {
            // Add the class to body when menu is shown
            document.body.classList.add('no-scroll');
        } else {
            // Remove the class from body when menu is hidden
            document.body.classList.remove('no-scroll');
        }
        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showResponsiveMenu]);

    

    return (
        <header className='main-header py-4'>
            <div className='header-content container'>
                <div className="header-logo">
                    <Link to="/"><img className='w-28' src="https://i.ibb.co/hf991LQ/0x0-logo-2.png" alt="" /></Link>
                </div>
                <div className='header-menu-main'>
                    <button className='text-3xl text-secondary'>
                        {showResponsiveMenu ?
                            <div className="close-menu" onClick={() => setShowResponsiveMenu(false)}><HiX className='opacity-0' /></div>
                            :
                            <HiMenuAlt1 onClick={() => setShowResponsiveMenu(true)} />
                        }
                    </button>
                    <div className={`header-menu flex items-center justify-between ${showResponsiveMenu ? 'show' : 'hide'}`}>
                        <div>
                            <div className={`menu-logo mb-4 pb-4 border-b border-gray-700 border-opacity-50 ${showResponsiveMenu ? 'show' : 'hide'}`}>
                                <Link to="/"><img className='w-28' src="https://i.ibb.co/hf991LQ/0x0-logo-2.png" alt="" /></Link>
                            </div>
                            <Navbar setShowResponsiveMenu={setShowResponsiveMenu} />
                        </div>
                        <LanguageSelector />
                    </div>
                </div>
                <div className="header-button">
                    <button className='flex items-center gap-2'><Link className='flex justify-center items-center w-full h-full' to={`${import.meta.env.VITE_APP_BASE_URL}`}>Launch App</Link></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
