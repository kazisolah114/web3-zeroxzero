import React, { useEffect, useState } from 'react';
import MarketUpdate from './MarketUpdate';
import { Helmet } from 'react-helmet';

const MarketStatistics = () => {


    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Market Stats | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <MarketUpdate />
        </div>
    );
};

export default MarketStatistics;