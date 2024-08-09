import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Jobs from './Jobs';
import DefaultDetails from './DefaultDetails';
import { useMediaQuery } from 'react-responsive';

const Careers = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className="careers container py-14 grid grid-cols-[1fr_2fr] gap-10 max-lg:grid-cols-1">
      <Jobs />
      {isLargeScreen && (
        <div>
          {pathname === '/careers' ? <DefaultDetails /> : <Outlet />}
        </div>
      )}
    </div>
  );
};

export default Careers;
