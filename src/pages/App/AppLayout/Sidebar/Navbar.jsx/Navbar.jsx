import React, { useState } from 'react';
import { HiOutlineChartPie, HiOutlineChevronDown } from 'react-icons/hi';
import { HiOutlineBanknotes, HiOutlineChartBar, HiOutlineCpuChip, HiOutlineCurrencyDollar, HiOutlineLockClosed, HiOutlineQuestionMarkCircle, HiOutlineSparkles, HiOutlineSquaresPlus, HiOutlineTrophy, HiOutlineUsers, HiOutlineWallet } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setShowResponsiveMenu }) => {
    const navs = [
        {
            icon: <HiOutlineSquaresPlus />, title: "AI Trade Alerts", submenu: [
                { icon: <HiOutlineTrophy />, title: "Hall of Fame", link: "leaderboard" },
                { icon: <HiOutlineUsers />, title: "Find Traders", link: "find-traders" }
            ]
        },
        {
            icon: <HiOutlineBanknotes />, title: "Earn Rewards", submenu: [
                { icon: <HiOutlineLockClosed />, title: "Staking", link: "staking" },
                { icon: <HiOutlineCurrencyDollar />, title: "Free Coins", link: "free-coins" }
            ]
        },
        { icon: <HiOutlineChartPie />, title: "Token Statistics", link: "token-statistics" },
        { icon: <HiOutlineChartBar />, title: "Market Statistics", link: "market-statistics" },
        { icon: <HiOutlineSparkles />, title: "New Tokens", link: "new-tokens" },
        { icon: <HiOutlineWallet />, title: "0x0 Wallet", link: "0x0-wallet" },
        { icon: <HiOutlineQuestionMarkCircle />, title: "How To", link: "how-to" }
    ]

    const [toggle, setToggle] = useState(0);
    const handleToggle = (index) => {
        setToggle(toggle === index ? null : index);
      };

    return (
        
            <nav>
                <div className="navbar-content">
                    <ul className="navs">
                        {navs.map((nav, index) => (
                            <li key={index} >
                                {nav.submenu ? (
                                    <div
                                        onClick={() => handleToggle(index)}
                                        className={`group cursor-pointer flex items-center gap-3 py-3 px-2  text-[#dfdfdf] ${toggle === index ? 'bg-[#122036] text-secondary rounded-t-md' : ' '
                                            } hover:bg-[#122036] rounded-md mb-2`}
                                    >
                                        <span className={`text-[#dfdfdf] text-[22px] group-hover:text-secondary ${toggle === index && 'text-secondary'}`}>
                                            {nav.icon}
                                        </span>
                                        <span className="flex items-center justify-between w-full ">
                                            {nav.title}{' '}
                                            <HiOutlineChevronDown
                                                className={`${toggle === index && 'rotate-0'} -rotate-90 duration-75`}
                                            />
                                        </span>
                                    </div>
                                ) : (
                                    <NavLink  onClick={() => setShowResponsiveMenu(false)}
                                        to={nav.link}
                                        className={`group flex items-center gap-3 py-3 px-2 mb-2 text-[#dfdfdf]  duration-200 hover:bg-[#122036] rounded-md `}
                                    >
                                        <span className="text-[#dfdfdf] text-[22px] group-hover:text-secondary">
                                            {nav.icon}
                                        </span>{' '}
                                        {nav.title}
                                    </NavLink>
                                )}
                                <div className={`submenu ${toggle === index ? 'visible' : ''}   `}>
                                    {nav.submenu && (
                                        <ul>
                                            {nav.submenu.map((menu, menuIndex) => (
                                                <li key={menuIndex} onClick={() => setShowResponsiveMenu(false)} className=''>
                                                    <NavLink
                                                        to={menu.link}
                                                        className={`group ${toggle === index ? 'flex ' : 'hidden '
                                                            } items-center gap-3 py-3 px-2 text-[#dfdfdf] duratin-200 rounded-md hover:bg-[#122036] mb-2`}
                                                    >
                                                        <span className={`text-[#dfdfdf] text-[22px] group-hover:text-secondary ${toggle === index && 'text-secondary'}`}>
                                                            {menu.icon}
                                                        </span>{' '}
                                                        {menu.title}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
};

export default Navbar;
