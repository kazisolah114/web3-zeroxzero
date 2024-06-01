import React, { useEffect, useState } from 'react';
import AppSectionHeader from '../../../../components/CommonComponents/AppSectionHeader/AppSectionHeader';
import { Helmet } from 'react-helmet';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
import PriceChart from './0x0PriceChart';
import { Link } from 'react-router-dom';
import { HiDocument, HiDocumentDuplicate, HiGlobeAlt, HiOutlineDocumentDuplicate, HiOutlineGlobeAlt } from 'react-icons/hi2';
import TokenConvert from './TokenConvert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { HiGlobe } from 'react-icons/hi';

const TokenStatistics = () => {
    const [tokenPrice, setTokenPrice] = useState(null);
    console.log(tokenPrice?.price?.usdPrice)
    useEffect(() => {
        fetch('https://statboard.0x0.com/api/token/price')
            .then(res => res.json())
            .then(data => {
                setTokenPrice(data);
            })
    }, [])

    const [zeroxDaily, setZeroxDaily] = useState({});
    const [zeroxWeekly, setZeroxWeekly] = useState({});
    const [zeroxMonthly, setZeroxMonthly] = useState({});
    const [zeroxAlltime, setZeroxAlltime] = useState({});
    console.log(zeroxDaily.quote?.USD.high)
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
                console.log(responses);
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

    const data = {
        "usdPrice": 0.00189,
        "_24hrPercentageChange": "+17.008329",
        "_24High": "0.06883",
        "_24Low": "0.01498",
        "_7dHigh": "0.03983",
        "_7dLow": "0.02933",
        "_30dHigh": "0.09983",
        "_30dLow": "0.010933",
        "allTimeHigh": "0.09993",
        "allTimeLow": "0.0103933",
        "totalSupply": "199.83M"
    }
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
                        <div className=" bg-[#122036] rounded-md py-3 px-5">
                            <div className="token-details-header flex justify-between items-end">
                                <div className='token-main-header'>
                                    <div className='flex items-center gap-2 mb-2 text-light'>
                                        <h2 className='text-2xl font-bold'>${(tokenPrice?.price?.usdPrice ?? 0).toFixed(5)} USD</h2>
                                        <h2 className={` text-md font-semibold  ${tokenPrice?.price?.['24hrPercentChange'].startsWith('-') ? 'text-red-400' : 'text-green-400'}`}><span className=''>{`${tokenPrice?.price?.['24hrPercentChange'].startsWith('-') ? '' : '+'}`}{Number(tokenPrice?.price?.['24hrPercentChange'] ?? 0).toFixed(2)}%</span> (1d)</h2>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-sm'>0x0.com: AI Smart Contract Price Chart (USD)</p>
                                    </div>
                                </div>
                                <div className="token-time-header  rounded-md  p-1 flex items-center gap-1 text-light">
                                    <button className=' hover:bg-[#192b4793] px-4   rounded-md'>1D</button>
                                    <button className='bg-[#182b47] hover:bg-[#192b4793] px-4  rounded-md'>7D</button>
                                    <button className='hover:bg-[#192b4793] px-4   rounded-md'>1M</button>
                                    <button className='hover:bg-[#192b4793] px-4   rounded-md'>1Y</button>
                                    <button className='hover:bg-[#192b4793] px-4 rounded-md'>All</button>
                                </div>
                            </div>
                            <div className="price-chart mt-12 w-[95%] mx-auto">
                                <PriceChart />
                            </div>
                        </div>
                        <div className="compare-0x0 mt-5 bg-[#122036] rounded-md py-5 px-5">
                            <h2 className='font-semibold text-xl mb-7'>About 0x0COM Token</h2>
                            <p className='text-light'>Developing a privacy-centric infobiotics application to provide tailored recommendations for traders and fleets, enabling early identification of successful projects. The worlds first AI focused copy trading application. With the Alpha version of 0X0.com, users have the ability to discover and follow the most profitable Ethereum users. 0X0.com enables its users to identify profit per address over a specific period of time, while trading specific pairs. Additionally, 0X0.com users can purchase customized searches. Whenever 0X0.com identifies an Ethereum address that is generating significant profit, users receive alerts each time this address makes a trade.
                                <br />
                                <br />
                                High Flyers will receive 5000 unique NFTs on the Ethereum blockchain, which can be utilized for staking. Monthly treasure hunts will be organized in the Metaverse for tracking virtual asset profits. For the monthly treasure hunts, owners of High Flyer NFTs will receive a clue based on the token ID of their NFT. To win the treasure hunts, users must own three NFTs with the appropriate token IDs or collaborate as a team and gather three clues. If you would like to know where to buy 0x0.com at the current rate, the top cryptocurrency exchange for trading in 0x0.com stock is currently Uniswap v2.
                            </p>
                            <div className='mt-10 flex gap-5 items-center'>
                                <Link target='_blank' to="https://www.0x0.com/static/media/whitepaper.3902559b8642dc803f00.pdf"><button className='underline text-secondary hover:text-[#65ffffeb] duration-200 text-sm'>View White Paper</button></Link>
                                <Link target='_blank' to="https://etherscan.io/token/0xB8fda5AEe55120247F16225feFf266dfdB381D4C#code"><button className='underline text-secondary hover:text-[#65ffffeb] duration-200 text-sm'>View Token Contract</button></Link>
                            </div>

                        </div>
                    </div>
                    <div className="token-details-sidebar ">
                        <TokenConvert tokenPrice={tokenPrice} />
                        <div className="informations mb-5 bg-[#122036] rounded-md py-3 px-5">
                            <div>
                                <h2 className='font-semibold text-xl mb-7'>0x0COM Informations</h2>
                                <div className="officials mb-5">
                                    <ul className='flex items-center gap-2'>
                                        {/* <h2 className='text-md font-semibold text-gray '>Official Links</h2> */}
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
                                    navigator.clipboard.writeText("wallet address")
                                }} className='flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer '>0xE320...902J8 <HiOutlineDocumentDuplicate /></h2>
                            </div>
                            <div className="address mt-5 flex items-center justify-between">
                                <h2 className='text-md font-semibold text-gray '>Airdrop Address</h2>
                                <h2 onClick={() => {
                                    handleWalletCopy();
                                    navigator.clipboard.writeText("airdrop wallet address")
                                }} className='flex items-center justify-between text-[#f1f1f1] hover:text-white duration-200 gap-2 cursor-pointer '>0xT280...73J17 <HiOutlineDocumentDuplicate /></h2>
                            </div>
                            <ToastContainer />
                        </div>
                        <div className="statistics bg-[#122036] rounded-md py-3 px-5">
                            <h2 className='font-semibold text-xl mb-7'>0x0COM Price Statistics</h2>
                            <ul>
                                <li className='flex items-center justify-between text-light mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>0x0.com Price</p><p>${tokenPrice?.price?.usdPrice.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>24H Percentage</p><p>{Number(tokenPrice?.price?.['24hrPercentChange']).toFixed(5)}%</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>24H High</p><p>${zeroxDaily.quote?.USD.high.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>24H Low</p><p>${zeroxDaily.quote?.USD.low.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>7D High</p><p>${zeroxWeekly.quote?.USD.high.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>7D Low</p><p>${zeroxWeekly.quote?.USD.low.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>30D High</p><p>${zeroxMonthly.quote?.USD.high.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>30D Low</p><p>${zeroxMonthly.quote?.USD.low.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-80'><p className='text-gray'>All Time High</p><p>${zeroxAlltime.quote?.USD.high.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-804'><p className='text-gray'>All Time Low</p><p>${zeroxAlltime.quote?.USD.low.toFixed(5)}</p></li>
                                <li className='flex items-center justify-between text-light  mb-2 pb-3 border-b border-gray-700 border-opacity-804'><p className='text-gray'>Total Supply</p><p>199.83M 0x0</p></li>
                                <li className='flex items-center justify-between text-light mb-2'><p className='text-gray'>Max Supply</p><p>200M 0x0</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenStatistics;