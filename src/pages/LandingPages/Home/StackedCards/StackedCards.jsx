import React from 'react';
import './StackedCards.css';
import Lottie from 'react-lottie';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';

const StackedCards = () => {
    const animationDataUrls = [
        'https://lottie.host/8950a5cc-7aa7-48b2-a7be-92a4e6e4fc9d/3QfoRI1NSf.json',
        'https://lottie.host/e6be5e02-5d2d-4aef-acdb-fd89669319e4/jNeRj2dFPM.json',
        'https://lottie.host/65cab60a-d8c0-494e-8a97-adbddc04fe89/0yP1tPl4jU.json',
        'https://lottie.host/661b6eeb-d072-47a0-9071-7bdde01eb56e/AkSDCru20S.json',
        'https://lottie.host/772deb06-ab9b-4c6a-9d8d-d5dee4d5a299/IVgArDgGaT.json',
    ];

    const [animationsData, setAnimationsData] = React.useState([]);

    React.useEffect(() => {
        Promise.all(animationDataUrls.map(url =>
            fetch(url)
                .then(response => response.json())
                .catch(error => {
                    console.error('Error loading animation data:', error);
                    return null; // In case of error, return null
                })
        ))
            .then(data => setAnimationsData(data.filter(Boolean))); // Filter out null values
    }, []);

    const cards = [
        { title: "Blockchain based Copy Trading", details: "Blockchain based Copy Trading using public blockchain ledgers and powered by AI technology" },
        { title: "REAL-TIME MARKET ANALYSIS", details: "Continuous AI-driven scanning of multiple blockchains to identify emerging trends and profitable trading patterns in real-time" },
        { title: "RISK MANAGEMENT OPTIMIZATION", details: "Advanced algorithms that assess and balance risk factors across various crypto assets, enhancing portfolio stability and potential returns" },
        { title: "PREDICTIVE TRADING SIGNALS", details: "AI-powered forecasting models that analyze historical data and market sentiment to generate accurate trading signals and entry/exit points" },
        { title: "DECENTRALIZED INTELLIGENCE NETWORK", details: "A collaborative ecosystem where AI models learn from aggregated, anonymized trading data, continually improving trading strategies for all users" }
    ];


    return (
        <div className=' py-24 my-24 bg-[#161c28]' 
        // data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000"
        >
            <div className='stacked-cards-container container'>
                <SectionHeader sectionTitle={"X-Factors Of _0x0COM"} sectionDesc={"Our X-Factors and Articial Intelligence tools developed and being developed"} />
                <div className="cards flex flex-col items-center">
                    {cards.map((item, index) => (
                        <div key={index} className='card h-72 md:h-[340px]'>
                            <div className="texts text-center md:text-left px-5 md:px-10 py-7 flex flex-col justify-between">
                                <h2 className='header font-semibold uppercase text-sm md:text-base md:font-bold text-white'>{item.title}</h2>
                                <h2 className='font-bold uppercase leading-10 text-2xl md:text-4xl text-white'>{item.title}</h2>
                                <p className='text-semibold md:text-xl text-white'>{item.details}</p>
                            </div>
                            <div className="image hidden bg-white rounded-e-[10px] w-80 h-full md:flex items-center justify-center">
                                <div className='max-w-64'>
                                    <Lottie
                                        options={{
                                            loop: true,
                                            autoplay: true,
                                            animationData: animationsData[index],
                                            rendererSettings: {
                                                preserveAspectRatio: 'xMidYMid slice',
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default StackedCards;