import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './TokenStatistics.css';
import BackgroundShadow from '../../../CommonComponents/BackgroundShadow/BackgroundShadow';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const PieChart = ({ tokenStats }) => {
    console.log("Token Stats from char:", tokenStats);
    const data = {
        "last24hrPercentChange": "-101.09137",
        "lastWeekPercentChange": "-104.0307",
        "lastMonthPercentChange": "74.03807",
        "exchangeAddress": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        "exchangeName": "Uniswap v2",
        "liquidity0x0USDC_0x0": "140",
        "liquidity0x0USDC_USDC": "105",
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
        "transfers": "1554",
        "usdPrice": 34.100655,
        "eth_price": 14.10015,
        "usdPriceFormatted": "0.066436239445721545",
        "number_of_stakers": "942",
        "liquid_token": "583",
        "staked_token": "767",
        "unique_wallets": "767",
    };

    const options = {
        animationEnabled: true,
        backgroundColor: [
            'transparent',
        ],
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}",
            // startAngle: -90,
            dataPoints: [
                { y: data?.last24hrPercentChange, label: "24H Percentage" },
                { y: data?.nativePriceValue, label: "Native Price Value" },
                { y: data?.transfers, label: "Transactions" },
                { y: data?.eth_price, label: "ETH price" },
                { y: data?.usdPrice, label: "USD Price" },
                { y: data?.liquid_token, label: "Liquid Token" },
                { y: data?.number_of_stakers, label: "Stakers" },
                { y: data?.staked_token, label: "Staked Token" },
                { y: data?.unique_wallets, label: "Unique Wallets" },
                
            ],
            // Setting data labels text color to white
            indexLabelFontColor: "white"
        }]
    }
    return (
        <div className="flex flex-col items-center w-[100%] relative">
            <BackgroundShadow customShadow="0px 0px 400px 60px #10B8B9" />
            <CanvasJSChart options={options}
            // onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
};

export default PieChart;
