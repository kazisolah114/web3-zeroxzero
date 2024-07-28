import React from 'react';
import { FaRobot, FaBalanceScale, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Ethical = () => {
    return (
        <div className="ethical-page bg-[#111621] text-white py-24 px-4">
            <div className="container mx-auto">
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold mb-8 text-center text-[#0FCFCF]">Ethical Considerations</h1>
                        <p className="text-lg mb-8 text-gray-300 leading-relaxed text-center">
                            At 0x0.com, we leverage AI technology to empower less influential and small crypto holders. By using advanced algorithms, we ensure that our trading strategies are not only profitable but also ethical and inclusive.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            <div className="text-center">
                                <FaRobot className="text-6xl text-[#0FCFCF] mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-[#0FCFCF]">Why We Use AI</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    AI allows us to scan blockchain data efficiently and identify successful traders. By rating these traders, we can provide our users with reliable and actionable insights.
                                </p>
                            </div>
                            <div className="text-center">
                                <FaBalanceScale className="text-6xl text-[#0FCFCF] mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-[#0FCFCF]">Ethical Commitment</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    We are committed to using AI responsibly and ethically. By providing detailed insights and maintaining transparency, we create a fair trading environment.
                                </p>
                            </div>
                            <div className="text-center">
                                <FaChartLine className="text-6xl text-[#0FCFCF] mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-[#0FCFCF]">Benefits for Small Holders</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    AI-driven analysis ensures fair and unbiased rating of traders, timely notifications, and customized searches to help small holders make informed decisions.
                                </p>
                            </div>
                            <div className="text-center">
                                <FaShieldAlt className="text-6xl text-[#0FCFCF] mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-[#0FCFCF]">Additional Benefits</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Enhanced market understanding, reduced risk, cost efficiency, and speed and efficiency are some additional benefits AI brings to trading.
                                </p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At 0x0.com, we strive to harness the power of AI to create a more inclusive and equitable trading environment. By focusing on ethical considerations, we ensure that our platform benefits all users, regardless of their influence or investment size.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ethical;
