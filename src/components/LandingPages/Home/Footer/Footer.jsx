import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-section pt-10 pb-5 border-t border-gray-700 border-opacity-80 '>
            <div className="footer-content container">
                <div className="footer-top flex items-center justify-between pb-7 mb-7 ">
                    <Link to="/"><img className='w-36' src="https://i.ibb.co/hf991LQ/0x0-logo-2.png" alt="" /></Link>
                    <div className="socials">
                        <ul className='flex items-center gap-4'>
                            <li className='border border-gray-600 hover:border-gray-200 duration-150  inline-block rounded-full'><Link  to="https://twitter.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/twitter.svg" alt="" /></Link></li>
                            <li className='border border-gray-600 hover:border-gray-200 duration-150  inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/facebook.svg" alt="" /></Link></li>
                            <li className='border border-gray-600 hover:border-gray-200 duration-150  inline-block rounded-full'><Link to="https://www.instagram.com/0x0_official/?hl=en" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/instagram.svg" alt="" /></Link></li>
                            <li className='border border-gray-600 hover:border-gray-200 duration-150  inline-block rounded-full'><Link to="https://www.facebook.com/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/discord.svg" alt="" /></Link></li>
                            <li className='border border-gray-600 hover:border-gray-200 duration-150  inline-block rounded-full'><Link to="https://t.me/www0x0com" target='_blank'><img src="https://crypto.com/__assets/mkt-nav-footer/images/icons/socials/telegram.svg" alt="" /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-main ">
                    <ul className='flex flex-col gap-1 '>
                        <h2 className='text-zinc-200 font-bold text-xl mb-3'>What we do</h2>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">Trade Alert Subscription</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">AI Trade Alerts</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">0x0 Stacking</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">High Flyers NFTs</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-1'>
                        <h2 className='text-zinc-200 font-bold text-xl mb-3'>Who do we support</h2>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">0x0 Blockchain</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">0x0 Wallet</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">0x0 NFTs</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">High Flyers NFTs</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-1 '>
                        <h2 className='text-zinc-200 font-bold text-xl mb-3'>Quick Links</h2>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">Discovery</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">Supports</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">View White Paper</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">View Token Contract</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-1 '>
                        <h2 className='text-zinc-200 font-bold text-xl mb-3'>About Us</h2>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">Our Team Goals</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">What we have done</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">Careers</Link></li>
                        <li className='text-zinc-300 inline-block hover:tracking-wider hover:underline duration-200'><Link to="">Partnership</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-1 '>
                        <h2 className='text-zinc-200 font-bold text-xl mb-3'>News Letter</h2>
                        <p className='text-zinc-200 mb-3 font-semibold '>Subscribe to our news letter</p>
                        <div className="newsletter">
                            <form action="">
                                <input type="email" placeholder='Your email address' className='subs-input' required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </ul>

                </div>

                <div className="footer-bottom flex items-center justify-between pt-7 mt-10 border-t border-gray-700 border-opacity-80">
                    <p className='text-gray text-sm'>Copyright &copy; 2017 - 2024 Firecracker Finance LLC. All rights reserved.</p>
                    <div className="items flex items-center gap-5 text-gray">
                        <Link className='text-sm hover:text-light duration-100'>Privacy Notice</Link>
                        {/* <span className='text-gray opacity-30'>|</span> */}
                        <Link className='text-sm hover:text-light duration-100'>Status</Link>
                        {/* <span className='text-gray opacity-30'>|</span> */}
                        <Link className='text-sm hover:text-light duration-100'>Cookie Preference</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;