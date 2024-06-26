import React from 'react';
import './StackedCards.css';
import Lottie from 'react-lottie';
import SectionHeader from '../../../../components/CommonComponents/SectionHeader/SectionHeader';

const StackedCards = () => {
    const animationDataUrls = [
        'https://lottie.host/f7d73fa5-8827-402e-a710-053cb3873d97/MhjJdXMBat.json',
        'https://lottie.host/f7d73fa5-8827-402e-a710-053cb3873d97/MhjJdXMBat.json',
        'https://lottie.host/f7d73fa5-8827-402e-a710-053cb3873d97/MhjJdXMBat.json',
        'https://lottie.host/f7d73fa5-8827-402e-a710-053cb3873d97/MhjJdXMBat.json',
        'https://lottie.host/f7d73fa5-8827-402e-a710-053cb3873d97/MhjJdXMBat.json',
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
        { title: "PERSONALIZED LEARNING USING AI", details: "Blockchain based Copy Trading using public blockchain ledgers and powered by AI technology" },
        { title: "PERSONALIZED LEARNING USING AI", details: "Blockchain based Copy Trading using public blockchain ledgers and powered by AI technology" },
        { title: "PERSONALIZED LEARNING USING AI", details: "Blockchain based Copy Trading using public blockchain ledgers and powered by AI technology" },
        { title: "PERSONALIZED LEARNING USING AI", details: "Blockchain based Copy Trading using public blockchain ledgers and powered by AI technology" },
        { title: "PERSONALIZED LEARNING USING AI", details: "Blockchain based Copy Trading using public blockchain ledgers and powered by AI technology" },
    ];

    if (animationsData.length === 0) {
        return <div>Loading...</div>; // Or render a loading indicator
    }

    return (
        <div className='stacked-cards-container container py-24'>
            <SectionHeader sectionTitle={"X-Factors Of _0x0COM"} sectionDesc={"Our X-Factors and Articial Intelligence tools developed and being developed"} />
            <div className="cards flex flex-col items-center">
                {cards.map((item, index) => (
                    <div key={index} className='card h-72 md:h-[340px]'>
                        <div className="texts text-center md:text-left px-5 md:px-10 py-7 flex flex-col justify-between">
                            <h2 className='font-semibold text-sm md:text-base md:font-bold text-white'>{item.title}</h2>
                            <h2 className='font-bold text-2xl md:text-4xl text-white'>{item.title}</h2>
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
    );
};

export default StackedCards;
