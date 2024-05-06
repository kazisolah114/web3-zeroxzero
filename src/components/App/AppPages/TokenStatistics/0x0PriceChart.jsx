import React, { useEffect, useState } from 'react';
import './TokenStatistics.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

const PriceChart = ({ }) => {

    // Define static price data
    const priceData = [];

     // Generate timestamps for each day
     for (let i = 1; i <= 7; i++) {
        const timestamp = `2024-05-${i.toString().padStart(2, '0')}T00:00:00Z`;
        // Generate a price around 0.035000 (e.g., between 0.034500 and 0.035500)
        const price = 0.0345 + Math.random() * 0.009; // Adjust this range as needed
        priceData.push({ timestamp, price });
    }



    const options = {
        chart: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: "700"
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
            title: {
                text: ''
            },
            labels: {
                style: {
                    color: '#808080' // X-axis labels color (dates)
                }
            },
            gridLineWidth: 1, // Hide the horizontal grid lines
        },
        series: [{
            type: 'area',
            name: '',
            data: priceData.map(item => [new Date(item.timestamp).getTime(), item.price]) // Format data as [timestamp, price]
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
        <div className="zerox-price flex items-center flex-column justify-center relative ">
            <BackgroundShadow customShadow="0px 0px 400px 60px #10B8B9" />
            <HighchartsReact className={"chart"}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default PriceChart;