import React, { useState } from 'react';
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import './HowTo.css'

const FAQ = () => {
    const faqs = [
        { question: "Question number one?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem10 Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus /> , openIcon: <HiMiniMinus /> },
        { question: "Question number two?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number three?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number four?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number five?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number six?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number seven?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
        { question: "Question number eight?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. ratione quaerat quia, esse facilis optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam et repellat consequatur illo ratione quaerat quia, esse facilis optio.", closeIcon: <HiMiniPlus />, openIcon: <HiMiniMinus /> },
    ]

    const [clickedQuestion, setClickedQuestion] = useState(0)
    const handleClickedQuestion = (index) => {
        setClickedQuestion(index);
    }

    return (
        <div className="faqs-page w-3/4 mx-auto py-5">
            <div className="header mb-10">
                <h2 className='text-center text-gray font-bold text-3xl'>Frequently Asked Questions</h2>
            </div>
            <div className="faqs">
                {
                    faqs.map((faq, index) => <div className={`faq ${clickedQuestion === index ? 'open' : ''} mb-4 bg-[#122036] px-4 py-3 rounded-md`} key={index}>
                        <div onClick={() => handleClickedQuestion(index)} className='flex items-center justify-between  cursor-pointer'>
                            <h2 className='text-lg font-bold text-[#f1f1f1]'>{faq.question}</h2>
                            {clickedQuestion === index ?
                            <span className='text-2xl text-gray font-extralight'>{faq.openIcon}</span>
                            :
                            <span className='text-2xl text-gray font-extralight'>{faq.closeIcon}</span>
                            }
                        </div>
                        {clickedQuestion === index &&
                        <p className='mt-3 text-gray'>{faq.answer}</p>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default FAQ;