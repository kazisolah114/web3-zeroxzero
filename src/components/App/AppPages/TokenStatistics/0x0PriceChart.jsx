import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './TokenStatistics.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PriceChart = ({ tokenStats }) => {
    
    const options = {
        animationEnabled: true,
        backgroundColor: [
            'transparent',
        ],
        axisX: {
            labelFontColor: "gray"
        },
        axisY: {
            labelFontColor: "gray"
        },
        data: [{
            type: "spline",
            indexLabel: "{label}: {y}",
            startAngle: -90,
            dataPoints: [
                { y: 0.00076, label: "9th March" },
                { y: 0.00312, label: "10th March" },
                { y: 0.00216, label: "11th March" },
                { y: 0.00616, label: "12th March" },
                { y: 0.00478, label: "13th March" },
                { y: 0.00762, label: "14th March" },
                { y: 0.00362, label: "15th March" },
                // { y: tokenStats?.usdPrice, label: "9th March" },
                // { y: tokenStats?.usdPrice, label: "10th March" },
                // { y: tokenStats?.usdPrice, label: "11th March" },
                // { y: tokenStats?.usdPrice, label: "12th March" },
                // { y: tokenStats?.usdPrice8, label: "13th March" },
                // { y: tokenStats?.usdPrice, label: "14th March" },
            ],
            // Setting data labels text color to white
            indexLabelFontColor: "white"
        }]
    }
    return (
        <div className="flex flex-col items-center ">
            <CanvasJSChart options={options}
            // onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
};

export default PriceChart;