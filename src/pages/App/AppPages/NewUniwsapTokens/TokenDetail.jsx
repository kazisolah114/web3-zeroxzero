import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { HiArrowsRightLeft, HiArrowsUpDown, HiOutlineXCircle } from 'react-icons/hi2';

const TokenDetail = ({ tokenDetail, setTokenDetail }) => {
    const [percentChange, setPercentChange] = useState(0);
    useEffect(() => {
        if (tokenDetail) {
            const { '24h_percent': dayPercent } = tokenDetail;
            setPercentChange(dayPercent);
        }
    }, [])


    const mentions = [
        [Date.UTC(2024, 0, 1), 120],
        [Date.UTC(2024, 0, 2), 130],
        [Date.UTC(2024, 0, 3), 150],
        [Date.UTC(2024, 0, 4), 170],
        [Date.UTC(2024, 0, 5), 160],
        [Date.UTC(2024, 0, 6), 130],
        [Date.UTC(2024, 0, 7), 140],
        [Date.UTC(2024, 0, 8), 150],
        [Date.UTC(2024, 0, 9), 170],
        [Date.UTC(2024, 0, 10), 160]
    ];
    const followers = [
        [Date.UTC(2024, 0, 1), 80],
        [Date.UTC(2024, 0, 2), 85],
        [Date.UTC(2024, 0, 3), 110],
        [Date.UTC(2024, 0, 4), 115],
        [Date.UTC(2024, 0, 5), 100],
        [Date.UTC(2024, 0, 7), 104],
        [Date.UTC(2024, 0, 8), 52],
        [Date.UTC(2024, 0, 9), 120],
        [Date.UTC(2024, 0, 10), 108]
    ];
    const holdersCount = [
        [Date.UTC(2024, 0, 1), 40],
        [Date.UTC(2024, 0, 2), 50],
        [Date.UTC(2024, 0, 3), 30],
        [Date.UTC(2024, 0, 4), 72],
        [Date.UTC(2024, 0, 5), 84],
        [Date.UTC(2024, 0, 6), 92],
        [Date.UTC(2024, 0, 7), 90],
        [Date.UTC(2024, 0, 8), 108],
        [Date.UTC(2024, 0, 9), 128],
        [Date.UTC(2024, 0, 10), 140]
    ];

    // Parse holders_count data and add a small value to avoid zeroes
    // const holdersCount = tokenDetail?.holders_count?.map(item => [item.existingAt * 1000, item.num_holders + 0.0001]) || [];


    const options = {
        chart: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            labels: {
                style: {
                    color: '#808080' // X-axis labels color (dates)
                }
            },
            title: {
                text: '',
            }
        },
        yAxis: {
            type: 'line',
            title: {
                text: ''
            },
            labels: {
                style: {
                    color: '#808080' // Y-axis labels color (dates)
                },
                formatter: function () {
                    return this.value.toFixed(2); // Format y-axis labels to 3 decimal places
                }
            },
            gridLineColor: '#333333',
            gridLineWidth: 1, // Grid line width
        },
        series: [
            {
                name: 'Mentions',
                data: mentions,
                color: '#4ADE60'
            },
            {
                name: 'Followers',
                data: followers,
                color: '#1ebcff'
            },
            {
                name: 'Unique Wallets',
                data: holdersCount,
                color: '#FFA500'
            }
        ],
        plotOptions: {
            line: {
                marker: {
                    enabled: true // Disable markers on hover
                }
            }
        },
    };

    return (
        <div className={`${tokenDetail ? 'flex' : 'hidden'}  fixed inset-0 justify-center items-center tokendetails-wrapper `}>
            {tokenDetail && (
                <div className='overlay fixed inset-0 bg-black opacity-70'></div>
            )}
            <div className='absolute w-full flex justify-center items-center bg-transparent'>
                <div className='z-10  w-3/5 max-md:w-5/6 bg-slate-900 p-5 rounded-md shadow-md'>
                    <div className="modal-header pb-5 flex items-center justify-between">
                        <div className='flex items-center gap-3'>
                            <img className='w-7' src={tokenDetail?.logo || 'https://cdn-icons-png.flaticon.com/512/16/16096.png'} alt="" />
                            <h2 className='text-2xl font-semibold'>{tokenDetail?.symbol}</h2>
                            <h2 className='text-lg font-semibold text-gray'>${tokenDetail?.prices.length > 0 ? <span>{Number(tokenDetail?.prices[tokenDetail?.prices.length - 1]?.priceUSD).toFixed(5)}</span> : <span>N/A</span>}</h2>
                            <span className={`flex items-center ${percentChange > 0 ? 'bg-green-500' : 'bg-red-500'} rounded-full px-2`}>
                                {percentChange > 0 && <span className='text-sm'>+</span>}
                                {percentChange?.toFixed(2)}%
                            </span>
                        </div>
                        <HiOutlineXCircle className='text-4xl cursor-pointer hover:text-red-400 duration-200' onClick={() => setTokenDetail(null)} />
                    </div>
                    <div className="modal-body py-10 h-[550px] overflow-auto outlet-scrollbar">
                        <HighchartsReact className={``}
                            highcharts={Highcharts}
                            options={options}
                        />
                        <div className="graph-indicator">
                            <ul className='flex items-center justify-center gap-5'>
                                <li className='flex items-center gap-2 text-gray'><span className='bg-[#FFA500] w-3 h-3 block'></span>Unique Wallets</li>
                                <li className='flex items-center gap-2 text-gray'><span className='bg-[#1ebcff] w-3 h-3 block'></span>Followers</li>
                                <li className='flex items-center gap-2 text-gray'><span className='bg-[#4ADE60] w-3 h-3 block'></span>Mentiones</li>
                            </ul>
                        </div>

                        <div className="compare mt-14 flex justify-center">
                            <div className="bg-[#162033] shadow-2xl rounded-lg max-w-lg w-full overflow-hidden">
                                {/* Header Section */}
                                <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 text-center rounded-t-lg">
                                    <h2 className="uppercase font-bold text-3xl text-white">
                                        Compare {tokenDetail?.name} <span>({tokenDetail?.symbol})</span>
                                    </h2>
                                    <p className="text-gray-300 text-lg">Explore and find similar tokens</p>
                                </div>
                                {/* Form Section */}
                                <div className="p-6">
                                    <div className="flex justify-center mb-6">
                                        <HiArrowsRightLeft className="text-6xl text-indigo-400 animate-pulse" />
                                    </div>
                                    <form className="flex flex-col items-center">
                                        <input
                                            className="w-full px-4 py-3 mb-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 border-none focus:outline-none focus:ring-4 focus:ring-indigo-500"
                                            type="text"
                                            placeholder="Search by name or address"
                                        />
                                        <button className="w-full px-4 py-3 rounded-lg bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500">
                                            Compare Token
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenDetail;
