import React from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Main.css';

const Main = () => {
    return (
        <main  className='bg-[#16161F]'>
            <Header />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Main;