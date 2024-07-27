import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Jobs from './Jobs';
import DefaultDetails from './DefaultDetails';

const Careers = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <div className="careers container py-24 grid grid-cols-[1fr_2fr] gap-10">
            <Jobs />
            {pathname == '/careers' ? <DefaultDetails /> : <Outlet />}
        </div>
    );
};

export default Careers;