import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './TokenStatistics.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const DoughnutChart = ({ transections }) => {
    console.log("Transections:", transections);
    const data = [
        {
          "token_name": "0x0 Token",
          "token_symbol": "0x0",
          "token_logo": null,
          "token_decimals": "18",
          "from_address": "0x2e134d87039a1c19654f2199c68ab824e03c16d2",
          "from_address_label": null,
          "to_address": "0xc88a9584b73bf6c417865abf7370f727f3c11e3c",
          "to_address_label": null,
          "address": "0xb8fda5aee55120247f16225feff266dfdb381d4c",
          "block_hash": "0xa77c5d5e87d083c7217400192d0b52f3a1039219eae24885d594196ca2ba5f76",
          "block_number": "19410807",
          "block_timestamp": "2024-03-11T08:57:47.000Z",
          "transaction_hash": "0xf39f7061fd729f9a7cf1318e48c2ef0032802475ff5cc8ec9c943e5d7a1c05d6",
          "transaction_index": 118,
          "log_index": 267,
          "value": "3751054346858493146",
          "possible_spam": false,
          "value_decimal": "3.751054346858493",
          "verified_contract": false
        },
        {
          "token_name": "0x0 Token",
          "token_symbol": "0x0",
          "token_logo": null,
          "token_decimals": "18",
          "from_address": "0x2e134d87039a1c19654f2199c68ab824e03c16d2",
          "from_address_label": null,
          "to_address": "0xc88a9584b73bf6c417865abf7370f727f3c11e3c",
          "to_address_label": null,
          "address": "0xb8fda5aee55120247f16225feff266dfdb381d4c",
          "block_hash": "0xa77c5d5e87d083c7217400192d0b52f3a1039219eae24885d594196ca2ba5f76",
          "block_number": "19410807",
          "block_timestamp": "2024-03-11T08:57:47.000Z",
          "transaction_hash": "0xf39f7061fd729f9a7cf1318e48c2ef0032802475ff5cc8ec9c943e5d7a1c05d6",
          "transaction_index": 118,
          "log_index": 267,
          "value": "3751054346858493146",
          "possible_spam": false,
          "value_decimal": "3.751054346858493",
          "verified_contract": false
        },
        {
          "token_name": "0x0 Token",
          "token_symbol": "0x0",
          "token_logo": null,
          "token_decimals": "18",
          "from_address": "0x2e134d87039a1c19654f2199c68ab824e03c16d2",
          "from_address_label": null,
          "to_address": "0xc88a9584b73bf6c417865abf7370f727f3c11e3c",
          "to_address_label": null,
          "address": "0xb8fda5aee55120247f16225feff266dfdb381d4c",
          "block_hash": "0xa77c5d5e87d083c7217400192d0b52f3a1039219eae24885d594196ca2ba5f76",
          "block_number": "19410807",
          "block_timestamp": "2024-03-11T08:57:47.000Z",
          "transaction_hash": "0xf39f7061fd729f9a7cf1318e48c2ef0032802475ff5cc8ec9c943e5d7a1c05d6",
          "transaction_index": 118,
          "log_index": 267,
          "value": "3751054346858493146",
          "possible_spam": false,
          "value_decimal": "3.751054346858493",
          "verified_contract": false
        },
        {
          "token_name": "0x0 Token",
          "token_symbol": "0x0",
          "token_logo": null,
          "token_decimals": "18",
          "from_address": "0x2e134d87039a1c19654f2199c68ab824e03c16d2",
          "from_address_label": null,
          "to_address": "0xc88a9584b73bf6c417865abf7370f727f3c11e3c",
          "to_address_label": null,
          "address": "0xb8fda5aee55120247f16225feff266dfdb381d4c",
          "block_hash": "0xa77c5d5e87d083c7217400192d0b52f3a1039219eae24885d594196ca2ba5f76",
          "block_number": "19410807",
          "block_timestamp": "2024-03-11T08:57:47.000Z",
          "transaction_hash": "0xf39f7061fd729f9a7cf1318e48c2ef0032802475ff5cc8ec9c943e5d7a1c05d6",
          "transaction_index": 118,
          "log_index": 267,
          "value": "3751054346858493146",
          "possible_spam": false,
          "value_decimal": "3.751054346858493",
          "verified_contract": false
        },
        {
          "token_name": "0x0 Token",
          "token_symbol": "0x0",
          "token_logo": null,
          "token_decimals": "18",
          "from_address": "0x2e134d87039a1c19654f2199c68ab824e03c16d2",
          "from_address_label": null,
          "to_address": "0xba0910e8739be6a5c8455545a4c32880993a9a6a",
          "to_address_label": null,
          "address": "0xb8fda5aee55120247f16225feff266dfdb381d4c",
          "block_hash": "0xa77c5d5e87d083c7217400192d0b52f3a1039219eae24885d594196ca2ba5f76",
          "block_number": "19410807",
          "block_timestamp": "2024-03-11T08:57:47.000Z",
          "transaction_hash": "0xf39f7061fd729f9a7cf1318e48c2ef0032802475ff5cc8ec9c943e5d7a1c05d6",
          "transaction_index": 118,
          "log_index": 266,
          "value": "3751054346858493146",
          "possible_spam": false,
          "value_decimal": "3.751054346858493",
          "verified_contract": false
        },
    ];

    const options = {
        animationEnabled: true,
        backgroundColor: [
            'transparent',
        ],
        data: [{
            type: "column",
            indexLabel: "{label}: {y}",
            startAngle: 0,
            dataPoints: [
                { y: 8284, label: "Airdrop Balance" },
                { y: 7284, label: "Airdrop Distributed" },
                { y: 10000, label: "Airdrop Goal" },
            ],
            // Setting data labels text color to white
            indexLabelFontColor: "white",
        }]
    }
    return (
        <div className="flex flex-col items-center w-[100%]">
            {/* <h2 className='mb-10 font-bold text-2xl'>0x0 Stats</h2> */}
            <CanvasJSChart options={options}
            // onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
};

export default DoughnutChart;
