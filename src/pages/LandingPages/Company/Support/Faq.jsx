import React, { useState } from 'react';
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2';
import Lottie from 'react-lottie';

const Faq = () => {
    const faqs = [
        { question: "Question number one?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem10 Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number two?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number three?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number four?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number five?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number six?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number seven?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> }
    ]
    const [clickedQuestion, setClickedQuestion] = useState(0)
    const handleClickedQuestion = (index) => {
        setClickedQuestion(index);
    }


    const animationDataUrl = 'https://lottie.host/b5aa5056-71cb-4df6-8016-54907261805a/M7GvXqGICw.json';
    const [animationData, setAnimationData] = React.useState(null);

    React.useEffect(() => {
        fetch(animationDataUrl)
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error('Error loading animation data:', error));
    }, [animationDataUrl]);

    if (!animationData) {
        return null; // or render a loading indicator
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
        speed: 5000,
    };


    return (
        <div className="faqs-page container">
            <div className="header mb-10">
                    <h2 className=' text-secondary font-bold text-4xl'>Frequently Asked Questions</h2>
                </div>
            <div className='grid grid-cols-[4fr_3fr] gap-10 items-center  max-lg:grid-cols-1'>
                <div className="faqs">
                    {
                        faqs.map((faq, index) => <div className={`faq ${clickedQuestion === index ? 'open' : ''} mb-4 bg-[#122036] px-4 py-3 rounded-md`} key={index}>
                            <div onClick={() => handleClickedQuestion(index)} className='flex items-center justify-between  cursor-pointer'>
                                <h2 className='text-lg font-bold text-secondary'>{faq.question}</h2>
                                {clickedQuestion === index ?
                                    <span className='text-2xl text-secondary font-extralight'>{faq.openIcon}</span>
                                    :
                                    <span className='text-2xl text-secondary font-extralight'>{faq.closeIcon}</span>
                                }
                            </div>
                            {clickedQuestion === index &&
                                <p className='mt-3 text-light'>{faq.answer}</p>
                            }
                        </div>)
                    }
                </div>
                <div>
                    <Lottie options={defaultOptions} />
                </div>
            </div>
        </div>
    );
};

export default Faq;