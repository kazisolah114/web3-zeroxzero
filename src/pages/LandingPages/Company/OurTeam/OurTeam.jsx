import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';

const OurTeam = () => {
    const team = [
        { name: "Mart", avator: "/images/american_apes.png", title: "Founder and CM", email: "mr@0x0.com", socials: { linkedin: "martlinkedin", twitter: "marttwitter", facebook: "martfacebook" } },
        { name: "Kazi", avator: "/images/american_apes.png", title: "Front-end Developer", email: "ks@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Alex", avator: "/images/american_apes.png", title: "Marketing Manager", email: "marketing@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Cok", avator: "/images/american_apes.png", title: "Web3 Developer", email: "email not available", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Jube", avator: "/images/american_apes.png", title: "HR Manager", email: "info@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Andy", avator: "/images/american_apes.png", title: "Solidity Developer", email: "email not available", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
    ]


    return (
        <div className="team-page container py-24">
            <SectionHeader header={"0x0 team"} brief={"Meet the heros behind 0x0.com"} />
            <div className="team grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {team.map((member, index) => (
                    <div key={index} className='team-member bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105'>
                        <div className='avator-container mb-5'>
                            <img src={member.avator} alt={`${member.name} avatar`} className='w-36 h-36 rounded-full mx-auto shadow-lg' />
                        </div>
                        <h3 className='text-white text-2xl font-semibold mb-2 text-center'>{member.name}</h3>
                        <h4 className='text-white text-lg text-center'>{member.title}</h4>
                        <p className='text-gray-200 text-center mb-4'>{member.email}</p>
                        <div className='socials flex justify-center space-x-4'>
                            <a href={`https://linkedin.com/in/${member.socials.linkedin}`} className='text-white hover:text-gray-300'>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href={`https://twitter.com/${member.socials.twitter}`} className='text-white hover:text-gray-300'>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href={`https://facebook.com/${member.socials.facebook}`} className='text-white hover:text-gray-300'>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-32'>
                <h2 className='text-4xl text-white font-bold mb-10 '>Join The Team</h2>
                <Link to="/careers" className='text-white px-10 py-4 bg-secondaryHover hover:bg-secondary duration-200  font-semibold rounded-md'>Explore Positions</Link>
            </div>
        </div>
    );
};

export default OurTeam;