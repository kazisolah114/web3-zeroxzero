import React, { useEffect, useState } from 'react';
import MarketUpdate from './MarketUpdate';
import MarketCarousel from './MarketCarousel';
import { Helmet } from 'react-helmet';

const MarketStatistics = () => {
    const [marketUpdate, setMarketUpdate] = useState([]);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
        .then(res => res.json())
        .then(data => {
            setMarketUpdate(data);
        })
    }, [])


    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Market Stats | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <MarketUpdate marketUpdate={marketUpdate}  />
            <MarketCarousel marketUpdate={marketUpdate} />
        </div>
    );
};

export default MarketStatistics;