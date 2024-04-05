import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

const LanguageSelector = () => {
    const languages = [
        { language: "English", abr: "EN", flag: "https://scdn.italki.com/ng/static/image/asgardhp/english.svg" },
        { language: "Español", abr: "ES", flag: "https://scdn.italki.com/ng/static/image/asgardhp/spanish.svg" },
        { language: "Français", abr: "FR", flag: "https://scdn.italki.com/ng/static/image/asgardhp/french.svg" },
        { language: "Italiano", abr: "IT", flag: "https://scdn.italki.com/ng/static/image/asgardhp/italian.svg" },
        { language: "Chinese", abr: "CH", flag: "https://scdn.italki.com/ng/static/image/asgardhp/chinese.svg" }
    ]
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [clicked, setClicked] = useState(false);
    const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setClicked(false);
    }
    // console.log(selectedLanguage)

    return (
        <div className='relative'>
            <div onClick={() => setClicked(!clicked)} className='flex items-center gap-2 cursor-pointer'>
                <img className='w-[17px]' src={selectedLanguage.flag} alt="" />
                <p className='text-[#e2e2e2] flex items-center gap-1'>{selectedLanguage.abr}
                <HiOutlineChevronDown className={`${clicked && "rotate-180 duration-200 relative top-[1px]"}`} />
                </p>
            </div>
            {clicked &&
                <div className='absolute z-10 top-10 w-60 pt-3 bg-gray-800 rounded-md'>
                    <h4 className='text-xl font-semibold text-light mb-2 px-5'>Select language</h4>
                    <ul className=''>
                        {
                            languages.map((language, index) => <li
                                key={index}
                                onClick={() => handleSelectLanguage(language)}
                                className={`flex items-center gap-3 py-3 px-5 hover:bg-gray-700 ${index === languages.length - 1 ? 'rounded-b-md' : ''} cursor-pointer`}
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
    );
};

export default LanguageSelector;