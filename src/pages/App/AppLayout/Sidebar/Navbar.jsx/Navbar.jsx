import React, { useState } from 'react';
import { HiOutlineChartPie } from 'react-icons/hi';
import { HiOutlineBanknotes, HiOutlineChartBar, HiOutlineCpuChip, HiOutlineCurrencyDollar, HiOutlineHomeModern, HiOutlineLockClosed, HiOutlineQuestionMarkCircle, HiOutlineTrophy, HiOutlineUsers } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({setShowResponsiveMenu}) => {
    const [AITradeAlertsLink, setAITradeAlertsLink] = useState("dashboard");
    const [earnLink, setEarnLink] = useState("staking");

    const handleAITradeAlertsLink = (link) => {
        setAITradeAlertsLink(link);
    }

    const handleEarnLink = (link) => {
        setEarnLink(link);
    }

    const navs = [
        {
            icon: <HiOutlineCpuChip />, title: "AI Trade Alerts", link: AITradeAlertsLink, submenu: [
                { icon: <HiOutlineTrophy />, title: "Hall of Fame", link: "dashboard" },
                { icon: <HiOutlineUsers />, title: "Find Traders", link: "find-traders" },
            ]
        },
        {
            icon: <HiOutlineBanknotes />, title: "Earn", link: earnLink, submenu: [
                { icon: <HiOutlineLockClosed />, title: "Staking", link: "staking" },
                { icon: <HiOutlineCurrencyDollar />, title: "Free Coins", link: "free-coins" },
            ]
        },
        { icon: <HiOutlineChartPie />, title: "Token Statistics", link: "token-statistics" },
        { icon: <HiOutlineChartBar />, title: "Market Statistics", link: "market-statistics" },
        { icon: <HiOutlineQuestionMarkCircle />, title: "How To", link: "how-to" }
    ]

    return (
        <nav>
            <div className="navbar-content">
                <ul className="navs">
                    {
                        navs.map((nav, index) => (
                            <li key={index} onClick={() => setShowResponsiveMenu(false)}>
                                <NavLink to={nav.link} className={`group flex items-center gap-3 py-3 px-2 mb-2 text-[#dfdfdf] hover:text-secondary duration-200 hover:bg-[#122036] rounded-md`}>
                                    <span className='text-[#dfdfdf] text-[22px] group-hover:text-secondary'>{nav.icon}</span> {nav.title}
                                </NavLink>
                                <div className="submenu">
                                    {nav.submenu &&
                                        <ul>
                                            {
                                                nav.submenu.map((menu, menuIndex) => (
                                                    <li key={menuIndex} className='ml-8'>
                                                        <NavLink to={menu.link} onClick={() => (nav.title === "AI Trade Alerts" ? handleAITradeAlertsLink(menu.link) : handleEarnLink(menu.link))} className='group flex items-center gap-3 py-3 px-2 mb-2 text-[#dfdfdf] hover:text-secondary duration-200 hover:bg-gray-800 rounded-md'>
                                                            <span className='text-[#dfdfdf] text-[22px] group-hover:text-secondary'>{menu.icon}</span> {menu.title}
                                                        </NavLink>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
