import React from 'react';
import './OurTeam.css'
import { HiOutlineCamera } from 'react-icons/hi';

const OurTeam = () => {
    const team = [
        { name: "Mart", avator: "/images/american_apes.png", title: "Founder and CM", email: "mr@0x0.com", socials: { linkedin: "martlinkedin", twitter: "marttwitter", facebook: "martfacebook" } },
        { name: "Kazi", avator: "/images/american_apes.png", title: "Front-end Developer", email: "ks@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Alex", avator: "/images/american_apes.png", title: "Marketing Manager", email: "marketing@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
        { name: "Cok", avator: "/images/american_apes.png", title: "Web3 Developer", email: "cok@0x0.com", socials: { linkedin: "kazilinkedin", twitter: "kazitwitter", facebook: "kazifacebook" } },
    ]


    return (
        <div className="team-page container py-14">
            <div className="support-page-header mb-14">
                <h1 className='text-white text-5xl mb-5 font-bold '>0x0 Team</h1>
                <p className='text-light text-3xl font-semibold '>Meet the heroes behind 0x0.com</p>
            </div>
            <div className="team  grid grid-cols-4 items-center  gap-5 ">
                {
                    team.map((member, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <div className='avator-container mb-7'>
                                <img src={member.avator} alt="" className='w-40' />
                            </div>
                            <h3 className='text-light font-semibold text-2xl mb-2'>{member.name}</h3>
                            <h4 className='text-light'>{member.title}</h4>
                            <h4 className='text-gray'>{member.email}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurTeam;