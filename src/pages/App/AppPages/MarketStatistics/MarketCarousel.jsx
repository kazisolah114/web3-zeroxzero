
import React from 'react';


const MarketCarousel = ({ marketUpdate }) => {
    return (
        <div className='carousel p-5 bg-[#122036] rounded-md mt-20'>
            {
                marketUpdate.map((item, index) => <div className='carousel-item w-[338px] text-light bg-gray-900 px-5 py-7 flex  flex-col gap-3 rounded-md' key={index}>
                    <div className='flex items-center gap-3'>
                        <img className='w-7' src={item.image} alt="" />
                        <h5 className='font-semibold text-lg'>{item.name}</h5>
                        <span className='uppercase font-semibold text-gray '>{item.symbol} / usd</span>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>USD {item.current_price}</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='text-gray'>${item.ath}</p>
                        <span className={`${item.ath_change_percentage < 0 ? 'bg-red-400' : 'bg-green-400'} rounded-full px-2`}>{item.ath_change_percentage.toFixed(2)}%</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MarketCarousel;