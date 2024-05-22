import React from 'react';
import './TokenStatistics.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import BackgroundShadow from '../../../../components/CommonComponents/BackgroundShadow/BackgroundShadow';

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
      chart: {
          type: 'bar',
          backgroundColor: 'rgba(0, 0, 0, 0)',

      },
      title: {
          text: '' // No title
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      xAxis: {
        labels: {
          style: {
            color: '#EDEDED'
          }
        },
          categories: ['Airdrop Balance', 'Distributed Airdrop', 'Airdrop Goal'] // Adding categories for the x-axis
      },
      yAxis: {
          title: {
              text: '' // Label for the y-axis
          },
          labels: {
            style: {
              color: '#EDEDED'
            }
          }
      },
      series: [{
          name: 'Value',
          colorByPoint: true,
          data: [
              { name: 'Airdrop Balance', y: 49390 },
              { name: 'Distributed Airdrop', y: 39000 },
              { name: 'Airdrop Goal', y: 100000 },
          ]
      }]
  };
  
    return (
        <div className="flex flex-col items-center  relative">
          <BackgroundShadow customShadow="0px 0px 400px 60px #10B8B9" />
          <HighchartsReact className={"bg-transparent"}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default DoughnutChart;
