import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HiOutlineBriefcase, HiOutlineCalculator, HiOutlineChevronDown, HiOutlineChip, HiOutlineCurrencyDollar, HiOutlineCurrencyYen, HiOutlineDatabase, HiOutlineDocumentText, HiOutlineLightBulb, HiOutlineOfficeBuilding, HiOutlineQuestionMarkCircle, HiOutlineScale, HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi';
import { HiOutlineMap, HiOutlineMapPin } from 'react-icons/hi2';

const Navbar = ({setShowResponsiveMenu}) => {
    const navs = [
        {
            title: "Purpose", items: [
                { icon: <HiOutlineDatabase />, name: "Trade Masters Table", desc: "Lorem ipsum doler semit", link: "/trade-table" },
                { icon: <HiOutlineCurrencyDollar />, name: "Quantum Profit Scanner", desc: "Lorem ipsum doler semit", link: "/profit-scanner" },
                { icon: <HiOutlineChip />, name: "AI Arb Scout", desc: "Lorem ipsum doler semit", link: "/arb-scout" },
                { icon: <HiOutlineLightBulb />, name: "Chain Trace Pro", desc: "Lorem ipsum doler semit", link: "/chain-trace" },
                { icon: <HiOutlineCurrencyYen />, name: "Cryptoscore Pro", desc: "Lorem ipsum doler semit", link: "/cryptoscore" }
            ]
        },
        {
            title: "Hybrid AI Tech", items: [
                { icon: <HiOutlineCurrencyYen />, name: "Crypto Guardian", desc: "Lorem ipsum doler semit", link: "/trade-table" },
                { icon: <HiOutlineCalculator />, name: "Sectors Seasons Charge", desc: "Lorem ipsum doler semit", link: "/profit-scanner" },
                { icon: <HiOutlineLightBulb />, name: "Block Trend Illuminator", desc: "Lorem ipsum doler semit", link: "/arb-scout" },
                { icon: <HiOutlineScale />, name: "Project Trend Predictor", desc: "Lorem ipsum doler semit", link: "/chain-trace" }
            ]
        },
        { title: "Ethical Consideration", link: "/consideration" },
        { title: "Blogs", link: "/blogs" },
        {
            title: "Company", items: [
                { icon: <HiOutlineOfficeBuilding />, name: "About 0x0", desc: "Lorem ipsum doler semit", link: "/aboutus" },
                { icon: <HiOutlineUsers />, name: "Our Team", desc: "Lorem ipsum doler semit", link: "/our-team" },
                { icon: <HiOutlineQuestionMarkCircle />, name: "Support", desc: "Lorem ipsum doler semit", link: "/support" },
                { icon: <HiOutlineMap />, name: "Roadmap", desc: "Lorem ipsum doler semit", link: "/roadmap" },
                { icon: <HiOutlineDocumentText />, name: "Publications", desc: "Lorem ipsum doler semit", link: "/publications" },
                { icon: <HiOutlineBriefcase />, name: "Careers", desc: "Lorem ipsum doler semit", link: "/careers" }
            ]
        }
    ];

    const [dropdownClicked, setDropdownClicked] = useState(null);
    const handleDropdownClicked = (value) => {
        
        setDropdownClicked(value);
        if(value === dropdownClicked) {
            setDropdownClicked(null);
        }
    }

    return (
        <nav className='navbar'>
            <ul className='flex gap-7'>
                {navs.map((nav, index) => (
                    <li key={index} onClick={() => handleDropdownClicked(index)} className={`nav-item ${dropdownClicked === index ? 'show' : 'hide'}`}>
                        {nav.items ?
                            <p  className={`d-item flex items-center gap-1 justify-between `}>
                                {nav.title}
                                <HiOutlineChevronDown className={`relative top-[1px] ${dropdownClicked === index ? 'max-lg:-rotate-90 duration-75' : ''}`} />
                            </p>
                            :
                            <Link to={nav.link} onClick={() => setShowResponsiveMenu(false)} className=' flex items-center gap-1'>
                                {nav.title}
                            </Link>
                        }
                        {nav.items && (
                            <ul className='dropdown z-10 w-80 top-10 p-3 rounded-md absolute bg-gray-800'>
                                {nav.items.map((dropdown, dropdownIndex) => (
                                    <li key={dropdownIndex} className={` cursor-pointer hover:bg-gray-700 rounded-md mb-1 last:mb-0`}>
                                        <Link to={dropdown.link} onClick={() => setShowResponsiveMenu(false)} className='flex gap-4 items-center p-2'>
                                            <span className='text-3xl'>{dropdown.icon}</span>
                                            <div className='w-full'>
                                                <h5 className='font-semibold'>{dropdown.name}</h5>
                                                <p className='font-extralight text-sm'>{dropdown.desc}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;