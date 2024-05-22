import React from 'react';
import { HiOutlineXCircle } from 'react-icons/hi2';
// import CanvasJSReact from '@canvasjs/react-charts';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CoinChart = ({ modalCoinData, setModalCoinData }) => {
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
                { y: 0.00816, label: "11th March" },
                { y: 0.00316, label: "12th March" },
                { y: 0.00478, label: "13th March" },
                { y: 0.00762, label: "14th March" },
                { y: 0.00462, label: "15th March" },
            ],
            // Setting data labels text color to white
            indexLabelFontColor: "white"
        }]
    }

    return (
        <div className="modal-wrapper">
            {modalCoinData && (
                <div className="overlay fixed inset-0 bg-black opacity-70"></div>
            )}
            <div className={`${modalCoinData ? 'flex' : 'hidden'} fixed inset-0 justify-center items-center  `}>
                <div className="modal w-3/4 bg-slate-900 p-5 rounded-md shadow-md">
                    <div className="modal-header flex items-center justify-between mb-10">
                        <div className='flex items-center gap-3'>
                            <img className='w-8' src={modalCoinData?.image} alt="" />
                            <h2 className='text-2xl font-semibold'>{modalCoinData?.name} Chart</h2>
                        </div>
                        <HiOutlineXCircle className='text-4xl  cursor-pointer hover:text-red-400 duration-200' onClick={() => setModalCoinData(null)} />
                    </div>
                    <div className="chart">
                        {/* <CanvasJSChart options={} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinChart;
