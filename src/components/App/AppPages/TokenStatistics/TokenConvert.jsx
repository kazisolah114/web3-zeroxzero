import React, { useState } from 'react';
import './TokenStatistics.css'
import { HiArrowsUpDown } from 'react-icons/hi2';
import { HiOutlineChevronDown } from 'react-icons/hi';

const TokenConvert = () => {
    const usdPrice = 0.00689;
    const [usdPricePerToken, setUsdPricePerToken] = useState(usdPrice);
    const [numberOfTokens, setNumberOfTokens] = useState(1);

    const handleCompareToken = (value) => {
        setNumberOfTokens(value);
        const calculatedValue = value * usdPrice;
        setUsdPricePerToken(calculatedValue);
    }

    const languages = [
        { language: "US Dollar", abr: "USD", flag: "https://www.pngall.com/wp-content/uploads/12/USD-PNG-Images.png" },
        { language: "US Dollar Coin", abr: "USDC", flag: "https://seeklogo.com/images/U/usd-coin-usdc-logo-CB4C5B1C51-seeklogo.com.png" },
        { language: "Ethereum", abr: "ETH", flag: "/public/images/logo-eth.png" },
        { language: "Bitcoin", abr: "BTC", flag: "/public/images/logo-btc.png" },
        { language: "Swiss Franc", abr: "CHF", flag: "https://cdn.coinranking.com/lJBdOdg9C/chf.svg?size=34x34" },
        { language: "The Euro", abr: "EU", flag: "https://iconape.com/wp-content/png_logo_vector/eur.png" }

    ]
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [clicked, setClicked] = useState(false);
    const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setClicked(false);
    }

    return (
        <div className="compare-currency mb-5 bg-[#122036] rounded-md py-3 px-5">
            <h2 className='font-semibold text-xl mb-7'>Compare 0x0COM</h2>

            <div className='relative mb-3'>
                <div onClick={() => setClicked(!clicked)} className='flex items-center gap-2 cursor-pointer'>
                    Compare with <img className='w-[17px]' src={selectedLanguage.flag} alt="" />
                    <p className='text-[#e2e2e2] flex items-center gap-1'>{selectedLanguage.abr}
                        <HiOutlineChevronDown className={`${clicked && "rotate-180 duration-200 relative top-[1px]"}`} />
                    </p>
                </div>
                {clicked &&
                    <div className='absolute z-10 top-9 w-full bg-gray-800'>
                        <ul className=''>
                            {
                                languages.map((language, index) => <li
                                    key={index}
                                    onClick={() => handleSelectLanguage(language)}
                                    className={`flex items-center gap-3 py-3 px-5 hover:bg-gray-700  cursor-pointer`}
                                >
                                    <img className='w-[17px]' src={language.flag} alt="" />
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[#e2e2e2] flex items-center gap-1 underline'>{language.language}</p>
                                        <span className='text-gray'>{language.abr}</span>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                }
            </div>

            <div className="compare flex flex-col gap-4">
                <div className='flex items-center justify-between border p-3'>
                    <h2>0x0COM</h2>
                    <input type="number" value={numberOfTokens} onChange={(e) => handleCompareToken(e.target.value)} />
                </div>
                <div className='mx-auto cursor-pointer flex justify-center items-center'>
                    <HiArrowsUpDown className='text-2xl' />
                </div>
                <div className='flex items-center justify-between border p-3'>
                    <h2>USD</h2>
                    <input type="number" value={usdPricePerToken.toFixed(2)} />
                </div>
            </div>
        </div >
    );
};

export default TokenConvert;
