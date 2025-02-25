// import React, { useEffect, useState } from 'react';
// import './TokenStatistics.css';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import LoaderSpinner from '../../../../components/CommonComponents/LoaderSpinner/LoaderSpinner';

// const PriceChart = ({ selectedDuration }) => {
//     const [priceData, setPriceData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const fetchPriceData = async () => {
//             try {
//                 const response = await fetch('https://statboard.0x0.com/api/token/history', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ duration: selectedDuration }),
//                 });
//                 const data = await response.json();
//                 const formattedData = data.map(item => ({
//                     timestamp: item.timestamp * 1000, // Convert to milliseconds
//                     price: item.price
//                 }));
//                 setPriceData(formattedData);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching price data:', error);
//             }
//         };
//         setLoading(true);
//         fetchPriceData();
//     }, [selectedDuration]);

//     const options = {
//         chart: {
//             backgroundColor: 'rgba(0, 0, 0, 0)'
//         },
//         title: {
//             text: ''
//         },
//         xAxis: {
//             type: 'datetime',
//             labels: {
//                 style: {
//                     color: '#808080' // X-axis labels color (dates)
//                 }
//             },
//             title: {
//                 text: '',
//             }
//         },
//         yAxis: {
//             title: {
//                 text: ''
//             },
//             labels: {
//                 style: {
//                     color: '#808080' // Y-axis labels color (dates)
//                 },
//                 formatter: function () {
//                     return this.value.toFixed(3); // Format y-axis labels to 2 decimal places
//                 }
//             },
//             gridLineColor: '#333333',
//             gridLineWidth: 1, // Remove the horizontal grid lines
//         },
//         series: [{
//             type: 'line',
//             name: '0x0 Token Price',
//             data: priceData.map(item => [item.timestamp, item.price]), // Format data as [timestamp, price]
//             color: '#4ADE60'
//         }],
//         plotOptions: {
//             area: {
//                 marker: {
//                     enabled: false // Disable markers on hover
//                 }
//             }
//         },
//     };


//     return (
//         <div className="zerox-price ">
//             <div className='flex justify-center text-center items-center relative'>
//                 {loading &&
//                     <div className='flex flex-col items-center absolute top-24'>
//                         <LoaderSpinner />
//                         <b className='text-light mt-5'>Loading Data</b>
//                         <p className='text-gray'>Please wait a moment</p>
//                     </div>
//                 }
//             </div>
//             <div className={` ${loading && ' invisible opacity-0'}`}>
//                 <HighchartsReact className={`chart`}
//                     highcharts={Highcharts}
//                     options={options}
//                 />
//             </div>

//         </div>
//     );
// };

// export default PriceChart;

import React, { useEffect, useState } from 'react';
import './TokenStatistics.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import LoaderSpinner from '../../../../components/CommonComponents/LoaderSpinner/LoaderSpinner';

const PriceChart = ({ selectedDuration }) => {
    const [priceData, setPriceData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Mock data simulating API response
    const mockData = [
        { timestamp: 1700000000, price: 0.0021 },
        { timestamp: 1700003600, price: 0.0020 },
        { timestamp: 1700007200, price: 0.0022 },
        { timestamp: 1700010800, price: 0.0019 },
        { timestamp: 1700014400, price: 0.0023 },
        { timestamp: 1700018000, price: 0.0020 },
        { timestamp: 1700021600, price: 0.0021 },
        { timestamp: 1700025200, price: 0.0022 },
        { timestamp: 1700028800, price: 0.0018 },
        { timestamp: 1700032400, price: 0.0024 }
    ];

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const formattedData = mockData.map(item => ({
                timestamp: item.timestamp * 1000, // Convert to milliseconds
                price: item.price
            }));
            setPriceData(formattedData);
            setLoading(false);
        }, 1000); // Simulate API delay
    }, [selectedDuration]);

    const options = {
        chart: {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            labels: {
                style: {
                    color: '#808080' // X-axis labels color
                }
            },
            title: {
                text: '',
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                style: {
                    color: '#808080'
                },
                formatter: function () {
                    return this.value.toFixed(3); // Format y-axis labels to 3 decimal places
                }
            },
            gridLineColor: '#333333',
            gridLineWidth: 1,
        },
        series: [{
            type: 'line',
            name: '0x0 Token Price',
            data: priceData.map(item => [item.timestamp, item.price]), // Format data as [timestamp, price]
            color: '#4ADE60'
        }],
        plotOptions: {
            area: {
                marker: {
                    enabled: false // Disable markers on hover
                }
            }
        },
    };

    return (
        <div className="zerox-price">
            <div className='flex justify-center text-center items-center relative'>
                {loading &&
                    <div className='flex flex-col items-center absolute top-24'>
                        <LoaderSpinner />
                        <b className='text-light mt-5'>Loading Data</b>
                        <p className='text-gray'>Please wait a moment</p>
                    </div>
                }
            </div>
            <div className={` ${loading && ' invisible opacity-0'}`}>
                <HighchartsReact className={`chart`}
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
};

export default PriceChart;
