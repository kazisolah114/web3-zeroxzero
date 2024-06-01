import React from 'react';
import './TokenStatistics.css';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ tokenStats }) => {
    console.log("Token Stats from char:", tokenStats);
    const data = {
        "last24hrPercentChange": -101.09137,
        "lastWeekPercentChange": -104.0307,
        "lastMonthPercentChange": 74.03807,
        "exchangeAddress": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        "exchangeName": "Uniswap v2",
        "liquidity0x0USDC_0x0": 140,
        "liquidity0x0USDC_USDC": 105,
        "nativePriceAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "nativePriceDecimals": 18,
        "nativePriceName": "Ether",
        "nativePriceSymbol": "ETH",
        "nativePriceValue": "167",
        "priceLastChangedAtBlock": "19410807",
        "tokenAddress": "0xb8fda5aee55120247f16225feff266dfdb381d4c",
        "tokenDecimals": "18",
        "tokenName": "0x0 Token",
        "tokenSymbol": "0x0",
        "transfers": 1554,
        "usdPrice": 34.100655,
        "eth_price": 14.10015,
        "usdPriceFormatted": "0.066436239445721545",
        "number_of_stakers": 942,
        "liquid_token": 583,
        "staked_token": 560,
        "unique_wallets": 767,
    };

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: "400"
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        series: [{
            name: 'Value',
            colorByPoint: true,
            data: [
                { name: '24H Percentage', y: Math.abs(data.last24hrPercentChange) },
                { name: 'Native Price Value', y: data.nativePriceValue },
                { name: 'Transactions', y: data.transfers },
                { name: 'ETH price', y: data.eth_price },
                { name: 'USD Price', y: data.usdPrice },
                { name: 'Liquid Token', y: data.liquid_token },
                { name: 'Stakers', y: data.number_of_stakers },
                { name: 'Staked Token', y: data.staked_token },
                { name: 'Unique Wallets', y: data.unique_wallets },
            ]
        }]
    };
    



    return (
        <div className="flex flex-col items-center relative">
            <BackgroundShadow customShadow="0px 0px 400px 60px #10B8B9" />
            <HighchartsReact className={"bg-transparent"}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default PieChart;
