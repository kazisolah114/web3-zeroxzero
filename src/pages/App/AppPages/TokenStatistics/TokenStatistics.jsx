import React, { useEffect, useState } from 'react';
import AppSectionHeader from '../../../../components/CommonComponents/AppSectionHeader/AppSectionHeader';
import { Helmet } from 'react-helmet';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import PriceChart from './0x0PriceChart';
import { Link } from 'react-router-dom';
import { HiDocument, HiDocumentDuplicate, HiGlobeAlt, HiOutlineChartBar, HiOutlineDocumentDuplicate, HiOutlineGlobeAlt } from 'react-icons/hi2';
import TokenConvert from './TokenConvert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { HiGlobe, HiOutlineExternalLink } from 'react-icons/hi';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import NewTokens from './NewTokens';
import TopHoldersStakers from './TopHoldersStakers';
import ZeroxBalance from './ZeroxBalance';

const TokenStatistics = () => {
    const [tokenPrice, setTokenPrice] = useState(null);
    useEffect(() => {
        fetch('https://statboard.0x0.com/api/token/price')
            .then(res => res.json())
            .then(data => {
                setTokenPrice(data);
            })
    }, [])

    const [tokenAll, setTokenAll] = useState(null);
    useEffect(() => {
        fetch('https://statboard.0x0.com/api/token/all')
            .then(res => res.json())
            .then(data => {
                setTokenAll(data);
            })
    }, [])

    const [zeroxDaily, setZeroxDaily] = useState({});
    const [zeroxWeekly, setZeroxWeekly] = useState({});
    const [zeroxMonthly, setZeroxMonthly] = useState({});
    const [zeroxAlltime, setZeroxAlltime] = useState({});
    useEffect(() => {
        const urls = {
            daily: "https://statboard.0x0.com/api/token/daily",
            weekly: "https://statboard.0x0.com/api/token/weekly",
            monthly: "https://statboard.0x0.com/api/token/monthly",
            alltime: "https://statboard.0x0.com/api/token/alltime",
        }
        const fetchData = async () => {

            try {
                const responses = await Promise.all(Object.values(urls).map(url =>
                    fetch(url).then(response => response.json())
                ));
                const [daily, weekly, monthly, alltime] = responses;
                setZeroxDaily(daily.daily_price.periods['24h']);
                setZeroxWeekly(weekly.weekly_price.periods['7d']);
                setZeroxMonthly(monthly.monthly_price.periods['30d']);
                setZeroxAlltime(alltime.all_time_price.periods['all_time']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    const notify = () => toast.success('Wallet has been copied!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    const handleWalletCopy = () => {
        notify();
    }


    // 0x0 Token Price History
    const [selectedDuration, setSelectedDuration] = useState("1D")
    const handleDuration = (duration) => {
        setSelectedDuration(duration)
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>0x0 Token Stats | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <div className='token-stats-content'>
                {/* <div className="token-stats-charts flex justify-around items-center ">
                    <div><PieChart /></div>
                    <div><DoughnutChart /></div>
                </div> */}
                <div className="token-details ">
                    <div>
                        <ZeroxBalance tokenPrice={tokenPrice} />
                        <div className=" bg-[#122036] rounded-md py-3 px-5 blur-content bg-transparent border border-[#0fcfcf4b]">
                            <div className="token-details-header flex justify-between items-end ">
                                <div className='token-main-header'>
                                    <div className='flex items-center gap-2 text-light'>
                                        <h2 className='text-2xl font-bold'>${(tokenPrice?.price?.usdPrice ?? 0).toFixed(5)} USD</h2>
                                        <h2 className={` text-md font-semibold  ${tokenPrice?.price?.['24hrPercentChange']?.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}><span className=''>{`${tokenPrice?.price?.['24hrPercentChange']?.startsWith('-') ? '' : '+'}`}{Number(tokenPrice?.price?.['24hrPercentChange'] ?? 0).toFixed(2)}%</span> (1d)</h2>
                                    </div>
                                    <div className='mt-5 flex items-center gap-2'>
                                        <img className='w-6' src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0xb8fda5aee55120247f16225feff266dfdb381d4c.png" alt="" />
                                        <p className='text-sm'>0x0.com: Smart Contract Price Chart (USD)</p>
                                    </div>
                                </div>
                                <div className="token-time-header  rounded-md  p-1 flex items-center gap-1 text-light">
                                    <button onClick={() => handleDuration("1D")} className={`${selectedDuration == "1D" && 'bg-[#182b47]'} px-4 rounded-md`}>1D</button>
                                    <button onClick={() => handleDuration("7D")} className={`${selectedDuration == "7D" && 'bg-[#182b47]'} px-4 rounded-md`}>7D</button>
                                    <button onClick={() => handleDuration("1M")} className={`${selectedDuration == "1M" && 'bg-[#182b47]'} px-4 rounded-md`}>1M</button>
                                    <button onClick={() => handleDuration("1Y")} className={`${selectedDuration == "1Y" && 'bg-[#182b47]'} px-4 rounded-md`}>1Y</button>
                                    <button onClick={() => handleDuration("All")} className={`${selectedDuration == "All" && 'bg-[#182b47]'} px-4 rounded-md`}>All</button>
                                </div>
                            </div>
                            <div className="price-chart mt-12 w-[95%] mx-auto">
                                <PriceChart selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} />
                            </div>
                        </div>
                        <div className=' mt-5 bg-[#122036] rounded-md py-5 px-5 blur-content bg-transparent border border-[#0fcfcf4b]'>
                            <ul className='sm:flex-nowrap  flex-wrap sm:flex gap-5 justify-between grid grid-cols-2'>
                                <li>
                                    <span className='text-gray'>24H Volume (USD)</span>
                                    <p className='text-lg font-bold mt-1'>${tokenAll?.volumn?.toFixed(2) || ' N/A'}</p>
                                </li>
                                <li>
                                    <span className='text-gray'>Market Cap (USD)</span>
                                    <p className='text-lg font-bold mt-1'>${tokenAll?.marketCap?.toFixed(2) || ' N/A'}</p>
                                </li>
                                <li>
                                    <span className='text-gray'>Total Supply</span>
                                    <p className='text-lg font-bold mt-1'>
                                        {tokenAll?.total_supply
                                            ? (parseFloat(tokenAll.total_supply) >= 1e6
                                                ? (parseFloat(tokenAll.total_supply) / 1e6).toFixed(2) + 'M'
                                                : parseFloat(tokenAll.total_supply).toString())
                                            : 'N/A'} 0x0
                                    </p>
                                </li>
                                <li>
                                    <span className='text-gray'>Max Supply</span>
                                    <p className='text-lg font-bold mt-1'>
                                        {tokenAll?.max_supply
                                            ? (parseFloat(tokenAll.max_supply) >= 1e6
                                                ? (parseFloat(tokenAll.max_supply) / 1e6).toFixed(2) + 'M'
                                                : parseFloat(tokenAll.max_supply).toString())
                                            : 'N/A'} 0x0
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <TopHoldersStakers />
                        <div className="about0x0-token mt-5 bg-[#122036] rounded-md py-5 px-5 blur-content bg-transparent border border-[#0fcfcf4b]">
                            <h2 className='font-semibold text-xl mb-5'>About 0x0COM Token</h2>
                            <p className='text-gray'>
                                With the Alpha version of 0X0.com, users have the ability to discover and follow the most profitable Ethereum users. 0X0.com enables its users to identify profit per address over a specific period of time, while trading specific pairs. Additionally, 0X0.com users can purchase customized searches. Whenever 0X0.com identifies an Ethereum address that is generating significant profit, users receive alerts each time this address makes a trade. This provides 0X0.com users with an opportunity to copy trades on the Ethereum blockchain.
                                <p className='mt-4'>0X0.com aims to establish itself in three main Metaverses: Sandbox, The Other Side, and Crypto.com. They will analyze transactions within the Metaverses and provide alerts on which people are making the most profit and the popularity increases of specific assets. The high flyers will be required to interact with this functionality, gain information, and have their own game within each Metaverse.</p>
                            </p>
                            <div className='mt-7 flex gap-6 items-center'>
                                <Link target='_blank' to="https://www.coinstore.com/spot/0X0USDT?ts=1719641059546"><button className='underline text-secondary hover:text-[#65ffffeb] duration-200 text-sm flex items-center gap-1'>Coinstore Exchange <HiOutlineExternalLink /></button></Link>
                                <Link target='_blank' to="https://app.uniswap.org/explore/tokens/ethereum/0xb8fda5aee55120247f16225feff266dfdb381d4c"><button className='underline text-secondary hover:text-[#65ffffeb] duration-200 text-sm flex items-center gap-1'>Uniswap Exchange <HiOutlineExternalLink /></button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="token-details-sidebar ">
                        <TokenConvert tokenPrice={tokenPrice} />
                        <div className="informations mb-5 bg-[#122036] rounded-md py-3 px-5 blur-content bg-transparent border border-[#0fcfcf4b]">
                            <div>
                                <h2 className='font-semibold text-xl mb-7'>0x0COM Informations</h2>
                                <div className="officials mb-5">
                                    <ul className='flex items-center gap-2'>
                                        <li className='text-zinc-200 text-[15px] border border-gray-600 hover:border-gray-200 duration-150 rounded-md  px-1'><Link to="https://www.0x0.com" target="_blank" className='flex items-center gap-1'><HiOutlineGlobeAlt /> Website</Link></li>
                                        <li className='text-zinc-200 text-[15px] border border-gray-600 hover:border-gray-200 duration-150 rounded-md  px-1'><Link to="https://www.0x0.com/static/media/whitepaper.3902559b8642dc803f00.pdf" target="_blank" className='flex items-center gap-1'><HiDocumentDuplicate /> Document</Link></li>
                                        <li className='text-zinc-200 text-[15px] border border-gray-600 hover:border-gray-200 duration-150 rounded-md  px-1'><Link to="https://github.com/0x0dotcom" target="_blank" className='flex items-center gap-1'><HiDocumentDuplicate /> Github</Link></li>
                                    </ul>
                                </div>
                                <div className="socials">
                                    <ul className='flex items-center gap-4'>
                                        <h2 className='text-md font-semibold text-gray '>Socials</h2>
                                        <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://twitter.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/twitter.svg" alt="" /></Link></li>
                                        <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/facebook.svg" alt="" /></Link></li>
                                        <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://www.instagram.com/0x0_official/?hl=en" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/instagram.svg" alt="" /></Link></li>
                                        <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9 inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/discord.svg" alt="" /></Link></li>
                                        <li className='border border-gray-600 hover:border-gray-200 duration-150 w-9  inline-block rounded-full'><Link to="https://t.me/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/telegram.svg" alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="address mt-7 flex items-center justify-between">
                                <h2 className='text-md font-semibold text-gray flex items-center gap-2'><img className='w-6' src="/images/logo-eth.png" alt="" />Ethereum</h2>
                                <h2 onClick={() => {
                                    handleWalletCopy();
                                    navigator.clipboard.writeText("0xb8fda5aee55120247f16225feff266dfdb381d4c")
                                }} className='flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer '>0xb8f...381d4c <HiOutlineDocumentDuplicate /></h2>
                            </div>
                            <div className="address mt-5 flex items-center justify-between">
                                <h2 className='text-md font-semibold text-gray '>Airdrop Address</h2>
                                <h2 onClick={() => {
                                    handleWalletCopy();
                                    navigator.clipboard.writeText("0x2d2a04422dc3888b912B6e76a0e2b4adc580028d")
                                }} className='flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer '>0x2d2...0028d <HiOutlineDocumentDuplicate /></h2>
                            </div>
                            <ToastContainer />
                        </div>
                        <div className="statistics bg-[#122036] rounded-md py-3 px-5 blur-content bg-transparent border border-[#0fcfcf4b]">
                            <h2 className='font-semibold text-xl mb-7'>0x0COM Price Statistics</h2>
                            <ul>
                                <li className='flex items-center justify-between text-light mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>0x0.com Price</p><p>${tokenPrice?.price?.usdPrice?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>24H Percentage</p><p>{Number(tokenPrice?.price?.['24hrPercentChange'])?.toFixed(5) || ' N/A'}%</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>24H High</p><p>${zeroxDaily.quote?.USD.high?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>24H Low</p><p>${zeroxDaily.quote?.USD.low?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>7D High</p><p>${zeroxWeekly.quote?.USD.high?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>7D Low</p><p>${zeroxWeekly.quote?.USD.low?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>30D High</p><p>${zeroxMonthly.quote?.USD.high?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>30D Low</p><p>${zeroxMonthly.quote?.USD.low?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>All Time High</p><p>${zeroxAlltime.quote?.USD.high?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-804'><p className='text-gray'>All Time Low</p><p>${zeroxAlltime.quote?.USD.low?.toFixed(5) || ' N/A'}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-804'><p className='text-gray'>Total Supply</p><p>{tokenAll?.total_supply
                                    ? (parseFloat(tokenAll.total_supply) >= 1e6
                                        ? (parseFloat(tokenAll.total_supply) / 1e6).toFixed(2) + 'M'
                                        : parseFloat(tokenAll.total_supply).toString())
                                    : 'N/A'} 0x0</p></li>
                                <li className='flex items-center justify-between text-light mb-2'><p className='text-gray'>Max Supply</p><p>{tokenAll?.max_supply
                                    ? (parseFloat(tokenAll.max_supply) >= 1e6
                                        ? (parseFloat(tokenAll.max_supply) / 1e6).toFixed(2) + 'M'
                                        : parseFloat(tokenAll.max_supply).toString())
                                    : 'N/A'} 0x0</p></li>
                            </ul>
                        </div>
                        <NewTokens />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenStatistics;