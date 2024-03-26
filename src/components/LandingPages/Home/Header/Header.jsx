import React from 'react';
import Navbar from './Navbar/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Header.css';
import { HiOutlineArrowRight, HiOutlineChevronDoubleRight, HiReply } from "react-icons/hi";
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const navigate = useNavigate();
    const handleClickButton = () => {
        navigate("/app/dashboard")
    }
    return (
        <header className='main-header py-4'>
            <div className='container flex justify-between items-center'>
            <div className='flex items-center gap-10'>
                <div className="header-logo">
                    <Link to="/"><img className='w-28' src="/public/images/0x0-logo-2.png" alt="" /></Link>
                </div>
                <div className="header-menu">
                    <Navbar />
                </div>
            </div>
            <div className='flex items-center gap-10'>
                <LanguageSelector />
                <div className="header-button">
                    <button onClick={handleClickButton} className='primary-button-outline flex items-center gap-2'>CryptoIntel Collective</button>
                </div>
            </div>
            </div>
        </header>
    );
};

export default Header;