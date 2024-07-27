import React from 'react';
import './OurTeam.css'
import { HiOutlineCamera } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';

const OurTeam = () => {
    const team = [
        { name: "Matthew R.", avator: "/images/american_apes.png", title: "Founder and CM", email: "mr@0x0.com", socials: { linkedin: "martlinkedin", twitter: "marttwitter", facebook: "martfacebook" } },
        { name: "Kazi Solayman", avator: "/images/american_apes.png", title: "Front-end Developer", email: "ks@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Alex Solo", avator: "/images/american_apes.png", title: "Marketing Manager", email: "marketing@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Roy Arata", avator: "/images/american_apes.png", title: "Web3 Developer", email: "cok@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Jenna Jenna", avator: "/images/american_apes.png", title: "HR Manager", email: "info@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Andy Andres", avator: "/images/american_apes.png", title: "Solidity Developer", email: "andy@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
    ]


    return (
        <div className="team-page container py-24">
            <SectionHeader header={"0x0 team"} brief={"Meet the heros behind 0x0.com"} />
            <div className="team  grid grid-cols-4 items-center  gap-x-5 gap-y-10 ">
                {
                    team.map((member, index) => (
                        <div key={index} className='flex flex-col items-center bg-[#1d212f87] rounded-md p-4'>
                            <div className='avator-container mb-7'>
                                <img src={member.avator} alt="" className='w-36' />
                            </div>
                            <h3 className='text-light font-semibold text-xl mb-2'>{member.name}</h3>
                            <h4 className='text-light text-sm '>{member.title}</h4>
                            <h4 className='text-gray text-sm'>{member.email}</h4>
                        </div>
                    ))
                }
            </div>
            <div className='text-center mt-32'>
                <h2 className='text-4xl text-white font-bold mb-10 '>Join The Team</h2>
                <Link to="/careers" className='text-white px-10 py-4 bg-secondaryHover hover:bg-secondary duration-200  font-semibold rounded-md'>Explore Positions</Link>
            </div>
        </div>
    );
};

export default OurTeam;