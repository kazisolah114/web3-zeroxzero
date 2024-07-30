import React from 'react';
import { FaRobot, FaBalanceScale, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Ethical = () => {
    return (
        <div className="ethical-page container py-24">
            <div className="relative ">
                <h1 className="text-4xl font-bold mb-5 text-center text-secondary ">Ethical Considerations</h1>
                <p className="text-lg mb-10 text-gray leading-relaxed text-center w-3/4 mx-auto">
                    At 0x0.com, we leverage AI technology to empower less influential and small crypto holders. By using advanced algorithms, we ensure that our trading strategies are not only profitable but also ethical and inclusive.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="text-center flex flex-col items-center bg-[#171B29] py-10 px-7 rounded-md">
                        <FaRobot className="text-6xl text-secondary mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-secondary ">Why We Use AI</h2>
                        <p className="text-light leading-relaxed">
                            AI allows us to scan blockchain data efficiently and identify successful traders. By rating these traders, we can provide our users with reliable and actionable insights.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center bg-[#171B29] py-10 px-7 rounded-md">
                        <FaBalanceScale className="text-6xl text-[#0FCFCF] mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-[#0FCFCF]">Ethical Commitment</h2>
                        <p className="text-light leading-relaxed">
                            We are committed to using AI responsibly and ethically. By providing detailed insights and maintaining transparency, we create a fair trading environment.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center bg-[#171B29] py-10 px-7 rounded-md">
                        <FaChartLine className="text-6xl text-[#0FCFCF] mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-[#0FCFCF]">Small Holders Benefits</h2>
                        <p className="text-light leading-relaxed">
                            AI-driven analysis ensures fair and unbiased rating of traders, timely notifications, and customized searches to help small holders make informed decisions.
                        </p>
                    </div>
                    <div className="text-center flex flex-col items-center bg-[#171B29] py-10 px-7 rounded-md">
                        <FaShieldAlt className="text-6xl text-[#0FCFCF] mb-4" />
                        <h2 className="text-2xl font-semibold mb-4 text-[#0FCFCF]">Additional Benefits</h2>
                        <p className="text-light leading-relaxed">
                            Enhanced market understanding, reduced risk, cost efficiency, and speed and efficiency are some additional benefits AI brings to trading.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-light text-lg leading-relaxed">
                        At 0x0.com, we strive to harness the power of AI to create a more inclusive and equitable trading environment. By focusing on ethical considerations, we ensure that our platform benefits all users, regardless of their influence or investment size.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ethical;
