import React from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <main  className='landing-main bg-[#111621] '>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Main;