import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './HowTo.css'
import FAQ from './FAQ';
import { Link } from 'lucide-react';

const HowTo = () => {
    const [activeTab, setActiveTab] = useState("trade");
    const handleActiveTab = (value) => {
        setActiveTab(value);
    }
    return (
        <div className='howto-page'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>How To | 0x0.com</title>
                <link rel="canonical" href="https://0x0.com" />
            </Helmet>
            <div className="howto-content">
                <Tabs>
                    <TabList className="tablist flex items-center gap-5 mb-7 ">
                        <Tab onClick={() => handleActiveTab("trade")} className={`${activeTab == 'trade' && 'bg-secondary'}`}>Trade Alert</Tab>
                        <Tab onClick={() => handleActiveTab("custom")} className={`${activeTab == 'custom' && 'bg-secondary'}`}>Custom Search</Tab>
                        <Tab onClick={() => handleActiveTab("faq")} className={`${activeTab == 'faq' && 'bg-secondary'}`}>FAQ</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="trade-alert bg-[#122036] p-5 rounded-md">
                            <h2 className='main-title'>Defination</h2>
                            <p>A Trade Alert Subscription is a subscription by the user to follow a particular ETH address (Ethereum wallet/user) trading on a particular market, e.g. wallet 0x7A49140b3E8A97d0Ac1ca46967074A51DD4359fF, trading APE/USDC.</p>
                            <p className='mt-2'>Once the subscription is set up, the 0x0 Telegram Bot will alert the user of any trade by that wallet on that market, when it happens in the future.
                                The alerts are sent as messages on Telegram, via the same 0x0 Bot.</p>
                            <h2 className='sub-title mt-10'>Setup</h2>
                            <p>There are 2 ways to set up a Trade Alerts. On the website https://app.0x0.com , or via the 0x0 Bot on Telegram.</p>
                            <h2 className='sub-title mt-10'>Using Website</h2>
                            <ul className='flex flex-col gap-5'>
                                <li className='flex gap-5'>
                                    <span>1</span>
                                    <div>
                                        <p>Navigate to the leaderboards page:  https://app.0x0.com</p>
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>2</span>
                                    <div>
                                        <p>Under one of the 3 leaderboard markets WETH/WBTC, WETH/USDC, APE/USDC, choose a trader (wallet address) to subscribe to:</p>
                                        <img className='mt-2 w-96' src="https://app.0x0.com/static/media/leader-card.510b7072470bd69acf94.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>3</span>
                                    <div>
                                        <p>You will see a confirmation popup:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/confirmation-popup.de6aaa3610c7bb0f9699.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>4</span>
                                    <div>
                                        <p>You will now receive Trade Alerts for that wallet and market.</p>
                                    </div>
                                </li>
                            </ul>
                            <h2 className='sub-title mt-10'>Using Telegram</h2>
                            <ul className='flex flex-col gap-5'>
                                <li className='flex gap-5'>
                                    <span>1</span>
                                    <div>
                                        <p>Navigate to: https://app.0x0.com/#/settings</p>
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>2</span>
                                    <div>
                                        <p>Click Link Telegram:</p>
                                        <img className='mt-2 w-96' src="https://app.0x0.com/static/media/leader-card.510b7072470bd69acf94.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>3</span>
                                    <div>
                                        <p>If on PC, a new tab will open with a invite link to the 0x0 Bot:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-invite-confirmation.4552d487654f4a9abd69.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>4</span>
                                    <div>
                                        <p>If on a Phone, it will open the Telegram App, with the same invite. Click the invite, and then click the Start button:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-start-bot.248f05545ea39a947b4c.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>5</span>
                                    <div>
                                        <p>You will see a message from the Bot, confirming your address and that the link up was successful:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-success-start.fa88a3c37a250121259a.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>6</span>
                                    <div>
                                        <p>Now that the 0x0 Bot is linked up to your account, you can manage and receive your trade alerts here too, from the Menu:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-bot-capabilities.29891b4ae6fb3b69c85e.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <h2 className='sub-title mt-10'>Subscribe To AI Trade Alert</h2>
                            <ul className='flex flex-col gap-5'>
                                <li className='flex gap-5'>
                                    <span>1</span>
                                    <div>
                                        <p>Tap /alerts from Bot menu.</p>
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>2</span>
                                    <div>
                                        <p>Tap “Add”:</p>
                                        <img className='mt-2 w-96' src="https://app.0x0.com/static/media/telegram-add-trade-alert.9ac15111861eb6766847.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>3</span>
                                    <div>
                                        <p>The Bot will prompt you to provide the address of the wallet you want to get alerts for. Paste it into the chat as a single message:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-add-trade-alert.9ac15111861eb6766847.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>4</span>
                                    <div>
                                        <p>After it accepts that, a popup keyboard will appear with selections for markets. Tap one:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-available-markets.b37c3a7660583da8bb3e.png" alt="" />
                                        <p className='mt-2'>It has to be one of the listed markets. Soon we will allow you to enter your own custom pair, for any market.</p>
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>5</span>
                                    <div>
                                        <p>After choosing a market, the Bot will confirm the Subscription:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-subscription-confirmation.4879e523b1ca14f4b3d1.png" alt="" />
                                    </div>
                                </li>
                            </ul>
                            <h2 className='sub-title mt-10'>Unsubscribe To AI Trade Alert</h2>
                            <ul className='flex flex-col gap-5'>
                                <li className='flex gap-5'>
                                    <span>1</span>
                                    <div>
                                        <p>If on website, visit https://app.0x0.com/#/settings, at the bottom of the page you can view subscriptions and remove individual ones by clicking the unwatch (eye) icon on the right:</p>
                                        <img className='mt-2 w-96' src="https://app.0x0.com/static/media/website-unsubcribe.e889ef8ad4d1ef786704.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>2</span>
                                    <div>
                                        <p>If on Telegram, visit your chat with the 0x0 Bot, click the Menu, and /alerts option:</p>
                                        <img className='mt-2 w-96' src="https://app.0x0.com/static/media/telegram-unsubscribe-1.e2f8caa28164e38b808d.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>3</span>
                                    <div>
                                        <p>Then click the Remove Subscription button:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-unsubscribe-2.cec4559d4712f8d672a9.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>4</span>
                                    <div>
                                        <p>The Bot will then show you your Subscriptions:</p>
                                        <img className='mt-2' src="https://app.0x0.com/static/media/telegram-unsubscribe-3.ff8404060b346c270dcb.png" alt="" />
                                    </div>
                                </li>
                                <li className='flex gap-5'>
                                    <span>5</span>
                                    <div>
                                        <p> Click one, and then it will confirm that the Subscription has been removed:</p>
                                        <img className='mt-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAACTCAYAAAB1YlneAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACIdSURBVHgB7Z0JcFRVusf/nYSQTgJZQEwChGwGAoos4kSWEHgoCiPOe09nHEUdeJbDVOkwVWOVWqCVQim1SquGGasGLUZmHETHcd5zZPCJ8CCEBEFkEQUkZiNA2JMAgQ6Q5X3f6e12p7vT3beTdN98v6pUd+5y7rm37/2f7/zPueeY0tJHdkIQBEEwFDHoDUwmDIwzw2yOR0zsAETHxCA6KhqmqCgIgiCEgs6ODrR3tKO9rQ1t12/AYrmKa60WWtE/41dTT0buUdExSEpOhjkhUYRcEIRehwXfcqUFl5qb0N7ejv5Ej0TuJorUByWnIHFwkvouCILQF3BQGT9oMMyJg9By6SIuk8h39pNIPuTiHh0TjdSb0hA7cCAEQRDCARVwJiUre7jx3GmybowfxYfUKxkwIBbD0oeLsAuCEJawNrFGsVYZnZCJe3R0NIakpSufXRAEIVxhjRqalqZcBiMTEnHnKk/qsDQl8IIgCOEOCzzbx0ZuEwyJuHPjqVgxgiBEEqxZrF1GRbe4cwnIvWIEQRAiDdYuozoOusWd+7FLd0dBECIR1q7ByakwIrrEnS+MOTERgiAIkYo5IUG9RW80dIl7bJyZrom8eeoXeb/AurW/QD5CyWy8uuUlzEW4kYtfrn0Hv8xDP6Snz70/X9uegV904v7vRkNXv0UeKyZw+Ob8Ax4dqV12Au8veQpvV6GP8JQnG8c/wpOL/oxK9C1zV3yGZXgDRS9tRci4+yW8ihV4YbP39WXPFWoW9PXvpIULtodR529+upxrgPsLhoa17JrlKoyELnHnQcCCpeL1ec4HjaPa1Z9hxofPYOGaavQ+1Xh70Ty8rb7zQz8dpXNWYBPChdkoHrkLFZhOUfrWkOVr7gwS7h1eVvJv8twIEvN5YSp+W/HCHP8Luq7nGtj+grGJGRC8loUrusSdR3cMCVV/xsLXMylKfBRz19hF1S2adomged2jqFsPLHNElu5RJYv0s5jmcV2g2AR/ST0eW/1TZNrygiffwZqHRzi2cimwXI5P6z78yEOafubv7ukYWfE+xZ3P4aUnc7HJawHoLU33/G/CRiom5vO1nfoZXXf63OmhVnB8J7ZVeTuOW9TLhcEyYIW2llNMkf9q+++zCys1BaaqiUy1b+ieV+d1q1cF/igP178eixyFsKf7wX48zX3kcq5wK8T13m9uuJy767b5Pu4b79fFV/qu19b3veVtXRDnaCCM+EKTPnGPCuEF2VyOiuceRhZ7iVXWB21GxTMosgmZeiDWQvPAFWLZDHpI6aZ2rF/2C2xT63n/ZwF6aIr4oVE1g5dQpysap+Mtq8eTc+Y5xWvNU5Q/23dlYZD/vdkuKM9i5IfO/FttFbvAB5I/2vaREdixspqOu5OevBnIX1PtwSbqLk33/K/CAcpT8Y55nm2Zqh0U6P4Ba1bUB2kFjcCjmR86fh91fajNoZZ/H/quLKYukXPX62ZllIf8z3bb18P9YDse18rqupzrbLfj6rnfPJz7tJ2U1xVqnfu2ld7uG6/XJYBr6/M+8OMe8fscjUW0Ad+s19dbJqTD+B5D3fERyMqmr3kzMINsiL9qHvDKNR+iYuRUzNI0JFXscD4ElaU7UT8yE7y72p+EdK39QWahOl6I4ruhA4piVvq4yblwsn/3kP9N732Eeu16f/OntrVF0FTD+etx12sAv9PsJv9dsFpVK/EsyrZQxBtEw63298Hm9/E+bHmvrUf91Ie7Ngp6uG5Ouss/rX9Pcz94uF+8ovd+80DFemdefW6rvW+8XRdP6Xu7tr7uAz/uu0DO0UgYcUjyMCquRiFr5AnU1dLX7Eyqetej1mW9RvxVNdG2rSd4/5GFWLPlpy6LKxBa3KvXXD0utR+/S/6Dy9/cx8mGIKvAddvZeNs9mu6hc9700jxrVMfR4ZZ3kOV3Nd3T72P7/TaTDTennuwBKjRgt16qu79uAeF+v/hA7/3WBd/ber1vqrxcF7/St+UVPu6Dbu+RQM5RCHfCR9zJV55GN1epepDqHRGDM1LTiH93cARED+uKnqxOktitefgEeZ1P2aq0Vl/bcfwu+Q8mf9SQOtWTn+qhYbWnz5lsg5UzyNrwJpYsHM66CRxi49jW/fezN2haLZFXj5FlwueAYOnueD6o1Xm/BYKv+0bh4bp0sc18nauP+yCvF54LIWwIj7qIrctdxes2EbNVFx+jxkM7+U8+jGleG/jcUH7xT7HIo81BPiNFRq/qsmhsaKI9lT/t8d3yryJwf/KnhQu8neVuPvxWlO50TTugNN0YOSrXzy25oLELiDWqnVFs35fbBQq77DFthtPX9v77VVNacDmHl570N0+BHc/rueq93wLF233jgua6eMDrufq6D4K8R4TIpM8i92nP2XouKE64dbljv/cZgCKXsodtiwLqb877v2Gt3jqO4R4B64R9zkf+4Kji1n/4Bt4/Pt3l+FlbnPmveP0NVDySGUD+rIJZsX5Fl0Nv2rELyx7hhlVtnBv4OXM7wGOrbXl07y3TpY+7tVeH9TeiY638CDNWezs/27F3TCcr51lNXmy/n3vafOzNnq+b1ZqAH9A9VO/leB7PVbuv3vstAHzdN16vizs+rq3P+6AXngshbNA1h+rwrBwIQt/DFgap1Up5IUkInpN1NTASMnaAIAiCARFxFwRBMCBiywiCIEBsGUEQBCECEHEXBEEwICLugiAIBkTEXRAEwYCIuOuhR2ZXEgRB0I+IuyAIggERcRcEQTAgfTC2jOdZjSoDmiGGx8MoR7F2piOXWZC8zapjXZ613nWkPTUEK0+u4DMf9rz7ml1JEAQhPOijyJ1n1QFWzJmHIvfZY3jZkp2YsVo7OQTPEFNuXUd/K3fS/2qaN9v2r+/CtEfs3rdmVh3b9k9WTFWz8uTzwEnrtdtat581bYRtcgVf+dDMEmRLtzRTM9KjIAhCGNFH4u42q06AM8TU1p8Adn7ojKh5NhvtLEy+ZtVR22pm2LFtX7oZ3c9i42t2JUEQhDAiPCbrCOUMMd3OqsPjoT+Lx4pzqXCoRn7xVODD161DnmZ3M4tNyGYJEoT+yETMfZCiquq/Y9P+QNZZySj+T0wZao9HO3Dhy3+g/KR99x/jgVyzY9tWH+n0F8JD3EM5i5Afs+pYx/Z+FHPXkG//MLBjSXX3+cjrZnYlQRC8M3wW7r8rlTUZ1wNZp9lmckIN/vmxVbGV0P9oFjL+exsauGDIHUhi/3er2Kv0fozx+/+Fg+i/hEdvmVDOEOPPrDp2u2XF9K7Lfc1i42t2pVDO8CQIBmP8hFQ0UaR97FoA61ikH3wIcyfS95PbsGGjMxRv+KERHVEJGOpYcg2X7FH8yWbvhUQ/IkzmUA3lDDH+zKpjbVi1T+1X6Vc+uptdSRAEbxzc+A/1OX5CYOu8MiwBUR1XcF79sx+nLHnInj+R0tpPUX0O4iw1/TpqZ2TIX0EQeo3x8x9CeoNnP9zXOleGY/p/FAK7NZ47nJ58x/md2FB6EoEiQ/4KgiD0GSzsU5FQqxV2box9CJOplv3Pj/+OvSjEAw+S547+jYi7IAgRgl3Y3aL7icPJhqlyROsNpf9ArcWM9Ino14i4C4IQnmgbVL0Jux3zcE2kPhHp5g5cOYt+TZg0qAqCIPhg4kQM4VA09yE84OywZuvP/i/sSSK/nQqCbNty9t03BW67GwppUBUEQYA0qLrQ2dEBQRCESMeIWqZL3G/ckFcFBEGIfIyoZbrE/UrLZQiCIEQ6RtQyXeJ+9fJlXGu1QBAEIVJhDWMtMxq6u0I2njsnAi8IQkTC2sUaZkR0d4XsaG/D+dOnED9oEBISB2HAgFiYoqT7vCAI4Qk3nrLHzlaMESN2OyHr584XycgXShAEIZKQEFsQBMGAhCxyNyckqr+YmAEwmUwQBEEIRzo7O9HWdgOWKy3qz6joFveo6BgkpQxB7MCBEARBCHc4+OS2wQHJqYgzJ+Bi0wXVdmg0dNsyySLsgiBEKKxdHJwaEV3izjbMABF2QRAiGBZ41jKjoVvcBUEQIh0Rdze48VQQBCHSMaKW6RJ36RUjCIIRMKKWST93QRAEAyLiLgiCYEBE3AVBEAyIiLsgCIIBEXEXBEEwICLuQi9zL1btKccnT+dDEISeI2QDhwnG4v43y/FykeuyumPr8Kdlq7HhKHqYfCz9+F0sGuVhFeXh5w+uxhH4izOtur8sxk/eqnRZW/D0enzwRGYQ6QpCeCPi3q/Ix/1PL8YcvIulbiLnERK8F5dtRRV9zbt7Mf7riYV4eSVQ1eMiWIlVyxbjC/6aNxuvlizEsZLFWF1lXRfssbOKZ6PgLe3+92IJC7sgGBCxZfoJBfOXYBVFsC8XAzWb/RB2G1VHSQzpb8Nbz+NPZbRgVBbyNGl+8nE5Duyx/X38GpaO1uw8mo/pXL9qvgcrZv5rtnVuy23HPVJlX2D7315rGH2vS9qfvLkEBfBOXVk56kYtxBLtceYXYybKsb3MbWOXfK/X5M1qKa16+l6f67WWE9cMDux5DfdDEHoXEXejYxPBDxZloWbtYkx48HmsCsZWoXTmsE1SVooNtkVHquqwrfQV/HzhYvp7BWsxHYtW2kWWjrtuoRLPF3l9yTpsqXIrVEhEPymZruySpRsRAGS1rFzuTJuOfYyE+4OPvQt8FkpV4TRz9r2OZffPnq7OZ4vLlrZ8s03Daf+F9ilZ71JozXzicWCt7ZyPZWLmIt8FiyD0BWLLGBi7n8ziOeEt/6N1ByyYexY6/mXP/cXffu5cf/RzTUFB6Zc+jkVPWCP7IyoqBravfd7q0R91t1NmKxGFBx+8W+YvVh769hJb2nTspWuLcaCkCPeMXu2M7t3YsJXaEUqKKYr+nAooKqyK6rF2IZ3PU8s1aXO+afk7tnSOvoftTyxHDp+UPd2y96gwqkSXc4YghA8i7gbmyFsleDG7hLzyd/FJcTk1hj7vaAx1NCTCc0OjQuO5s/e9ZBF57nuygCnPq+i9gCyVVxdlImuU1reud/leU+U5b1nk32fxsREsbmlTLaKOag4uIuzOxlIqEJZjDtkoG0AifqwMq2nbvC4bZmLRunIs0iypy3ZaLXW1NRCEcEfE3dCQV/7bR0jIqCH1TRJ5EqyXj5VjLYn8KhL+n2+2bXbUe+RcZY+46XMpyfGBkkzksEWR9xo+IEtlu6ZgsBYY2r0zvYptXdkreKH2cdq+BEs3PxKEVeSWdl4W5a4e26p87fM5tpQtx8uzl2DpKLKDSt9V59ZV3Dmi95SnHARKXnYmXAs8QegddHnuPBehEAlYRf4nUxbjxVKSqLvz4Wyg9N37JG90Pgro735ukF1EHjVHzFrRq4Vaz42rr2p7nnCUTB8zF1Fjom39Um2DKkW/XLNgz9rp0/vJxndpP03a3K7AeaNI/ItuCgm2ZlC0kGwdKgg8NSyrfFvzdL/93J/m7/CDGtQcs/bKsZ/zfxVBiACMqGW6IveO9nZEx0jwHzlYe71s8Hdz8txfXuf03MFR/0Lb/iyws0kES95V3npd2Tq8UEINtyX2jT/H0oVZWLWS07AWCttLtnbJz6pl6zCLjvHBm3WYoPXzuzmPVQ8uBqg28vK6d9US1R6wzI8umsqama4sGc8FAecblO/lznOn835xM/yA8rW2HLNKbNeN9ythnx9CmMNaZjRMaekjgy6yUobeLPOnCoIQ8Vy/1oqm82dhJHTZMu1tNyAIghDptLe1wWjoEvdrrRYIgiBEOkbUMl3ifv2aRRpVBUGIaFjDWMuMhs7eMkDr1SsQBEGIVFjDjBij6h5+oOXyRRjyygiCYHxIu5SGGRDd4s5diK60XIIgCEKkwdplxG6QTEgGDmu5fAk3blyHIAhCpMCa1XLJuIFpaEaFpKpN84Vzhi0BBUEwFqxVrFkkXjAqIRvyV12s8yLwgiCEN/1Fq0I6nvuNtuu4cO60WDSCIIQlrE1Ko9qMr1Ehn6yDS8PGc2dwRXrRCIIQJnBfdtakxrNn+o270DOjfnH3oksXcfVKCxIHJSEuPgEmkwmCIAi9CYs692Pn7o79zTLWNXCY3wchXY8daMbAOLMaRTI6OgZR0dEi+IIghAwWchbw9vY2NVYMDylgfYse/ZJeGa+XLy5faBmLRhAEoXeQCbIFQRAMiIi7IAiCARFxFwRBMCAi7oIgCAZExF0QBMGAiLgLgiAYEBF3QRAEAyLiLgiCYEBiOjpkFEdBEASjEZN6czoEQRAEYyG2jCAIggERcRcEQTAgIu6CIAgGRMRdEATBgIi4C4IgGBARd0EQBAMi4i4IgmBAQjcTU5QJpoxhiModCdPNQ4DEeJgSzEDsAPQ612+g84oFaLmKzjMX0FF9HJ0NZ4EOmbBbEIT+gWnM+Mn6FC8mBlGTChB9xzjAPBBhi+Ua2r8+hI59R4C2NgiCIBgZXeIeNToLUcVTYKIoPVLopGi+o3QPOo7WQRAEwagEZ8uYTIiePhFRd96GSIMLougfz4RpWCray/ej306NLgiCoQlY3E0k7FHzi1TUHsmogilpENo3lonAC4IBiDebMTwjDcmDB8FsjlPLLJZWNF+6jJMNp3HVYkG4cdPQIRhzSw5SU5LV/41Nzfj+hxqcO38BegnYlomeMSkiI3ZvdHz1Ldp37ENPEkPtEjcPG4qUpCQMGBCD1tZrOHvuPBqbL1K5EtqC5X/++jb+/bFfQhD6C4MHDcLtt47B8PQ09T8/X5bWVvXdHBeHuDhrW+DJU6fxzXff49LlywgHxo6+BbeNHY0rVy04c/acWnbzsJuQEG/Gt4eP4vDRH6CHgCJ35bEbSNgZPp/Os4094sFzLWd0Xg79iHmIjY1Vy9rb2xEdHa2+N5G47zt4KCSltCD0N+zP1+23Figx3//tIZw4eZrE8qrLdgnx8RgxPE1te9+cmSTwR3C0qibkgVUgcMTOwl5XfwJfH/hW6QITHR2FOyaMV+vOXWjUpQ3+izv3iqHGUyPC59XJ3SXbQje2Pf9Id02ZjBFUTTxPP9Kh739QYn7t+nUkJsTj5puG0g84BrNn3IWv9n2D2mPHIQiCf7CwT779VuTlZOFIZRW+O3KUBLLD47Ys9kfJ6qiqqcOtBaMx4bax6hnc+813fSbwbMVwxK4VdobP4esDBx12Ta+IO3d3jKReMYHA52WaNBadZNGEAhb26YVTkEZVLI4Svv+h2uUmutxyRf2dIB/wrjsn4c5Jt6PlylWJ4AXBTzgKZ2Hfs/8gqmuP+bUPCyc/j/ysTZk4Xn3ys9kXsMfecOqMi7Db4XyyTZORfjP04N8bqlEmaz92AxNF58fRgF60ws4ROUcVLOxRUVHqB01JTlLfmdZr1/DlV/tw/foNTBofmuMLgtGxeuwF6tnyV9i18D68L6fBafUF3BZgbxfwBK/jbfTgl7jzm6dh/YJSCDDR+ZkyboIe3IXdbrUMoyrW/Htm4Z5ZMzB3dhH5fsUYkpqi1rHAf3v4eyX6qfQnCIJvuPHUQo2mbMUEy6EjlUpAWeCNil/izkMKBMYQ/OaBZ3Dw8Wfw6YQhXdYWTHhUrTv4QCHC6dKa8jIRLN6EnT334umFaCM/f8euPSjf9bVaPr3wDsQOsA7NcObcefU5jHz4UDIkdxJuyzB3WTYlN8V1w9ScrsscpCBv8lgMNzu3zUuFIPQJqrtjeho1iFZ79dj9oY3sEPbhh5P1oTdCDlf8i9xvHoJgyRp1i5uA5+NX48NUHYYFly+2UzwJe+bwDEz70R2qIXXL9grV1/ZEwyns3rtf3VA3DbUej70/9t7sXbZCBffxjTNrb9wUqO60ySnQ/qJDaGGrxVsVsQlVew/jpMW5rSD0FdyPneFeMVrGjxuDBxfcpz7d8baOu0Zq0zQa/jWoBtmQWldPjRWZU/CrrF34dZ1tYVYeilGN0vpcFGtdiORC/H7mFNuyRpSWvW/bJx+/f3wucHATMGqu1/VZB9djwQFrgyTXDP42vgnL3/sMn8J/TIkJCIaBA2NVH3atsGdljsCdkyeonjJlX36FGzec49nYIw6TyVq2DoyNVd0jtduEgqtNzWhNZyFvgroyZAWlNNeiBtlIoXKFsgar4LeiscECa5SegqbDrcgYm4a41tM4dMiCDF629xTixhUgg8uKZIr+s+mT0tpT3WTbj9JUR21Fw2FnYaAlPmMsxqU7C5um2n2oanTfiiKzceloPQXkZNsLkmbU7G1CiuMY7vt6Pz7XVHIc5ZFznbflvvLovs6atcCugaAPfkGJ+7G7d3fMz81W75Pw58FD3/u1joMqTis5aTCMiF/irkZ3DIIsVGE5ifgrWfmk9JVq2YKsXKB+E7aAxN2xJQn0AhL2+j342fYfaMd78beiR/Gb5vfxu2brFsXjp5Cgr8fPmodg7sy5WHw7WTp1u3AEocOUGNx58g3yyWdfOP7PzR6FOybchrPnLihh17aI80tMk2+/jRpRrzt6x6TYvPamixcRUixNaGzNpuidv1uj7qamGhL6FOSkpPDrcKSlZphbm9HgEKJk5OSQqO/dB+vjY5dTC04e2odWEsWUJq2wshiT0pMI7uFl5gzcNjYHrXtr4N7352rDYexpsP3DVlB2DoY0dt1O5SGFRJPSYJQQT44jwaTjWmz7pmcgvrGB8ujj+LRdDjidJtfkvS33lUdKNze9lQqZw7aCkvPQikNK2P2/BoI++M1TTw2RldW1Srz5M5B1nFa8uedtGQ4AmWvXriMYgtm/x8dz/7SOo/c8LFD/5WNOZiPePVDpupGK5nk5iXXzBRw5sAelSNVEVgQJ/6/raF1zJTYdoycoKRW3IPzgm4iF/dSZsyTsu12EPTZ2APnvd1EAnYTdFOVzn3e2dMaNuUWJ/Zmz5xFaLFTwxNHxWN05Qm9GE4sPiXqTzZqJJ8GPa7XAGQdR1FnTgKv+HsKcQr/UaTTYxV4VKMmqZuATzoOP1U1NzrVsL6H5lDMS5n3J1jJ3d3zarzU53dle4EjQy/IA8+gg2GsghAyOyD/+9H+7RO3drest7px4OwonT3T8311vGPfeND+ifTmNQPArcuex0U3BjsteV4XSormYk0VCDxLxi9X4I0XjXYU5FYsXPIPF2l2Tnc5wXXPPx0CdLfrq0QX5ear1nX31nV/tQ0eHs8GH/fTiaYUYlJioGlUbTp9Ry8fckouhQ1Jx4NvD1Oga+qGIL5A1k0PWTDyJfArdLNagtJVuHJv4UNSiFdKAMfPr3ckYN9nVt/SUYldbo9mLeFL+/P0pfB3f0oBv91rILiEbiVM9dQTfchXF23JfeaR9qk/ROtonx5bHhsM11kIwgGsg6IML+tTk0LX7sIjyM9LTcANu6uBEx/88hgwPNcB2rHtfd17G6xo1+RpE1nhjU2A1e/889xa6hVOC9aUqsaV+LlkzhfhNUi7qju1WVkpXcafI/VOnDeMk8MbcW5JZtQJ/tDpbriBY2GNnYT92/CR2fb3f5aWl+HgzZk0vVDdS2c7djt4x2aNGqkYefpmJX4fuETj6zKaonY7d2nTKFpFbSNDpIYnLIAeExEvPexwcBZM3X32om2ifbIxxWlvD5u/rptvjc4Ow3TopQF6r3VLysBy+88iWgMd2An+vgaAbHgSMbU8eUkDru/Mybruyv1eihWvHHHhxTVnbL57fUuWgq/niJfQ0FynfmSMy1PHYxuXBwfjtdK7luw4/EK2W8fgyu/ceUMt4n8SEBGrPO4FA8MuW4dmM9GC1ZqZgcVIjttZ5SIuje47cZxZiAUXrBfS3YAJ/9yf1C6i5aO2Vo/alQuTJYHs0nm1EMLBo86vQp8+c6yLsHKnPKZqmbrxt5btchJ3fTD199hy+3LO3B1+D5iidrRnWeWc4zI2tSE9T0Xyg9RVznMbPYAsCacjwx4LQHCs+Ix0hkPYAjs8WlR/LvebRTA+ZlxqFrzyw/07Rvuo+6u274Dfc44zhsWK0xJEnzYHSjLumuHjoLIzTfjRZrYuz+dZ27AON2dPsSbhnjhoLJ9da7+P2Nu6nz0Ehv/fCb8zyH3/nZTxwmL1NjvfhfdkRCAS/Ineepi5KzxuqyprJVZbMJo81oEr8+lPg99RQ+soC2/g1tO3yOj/SJnH/3TfVmF00xbov71dWjVeKEDCdVfUIBi6RuTWeX4XWinQStezPIo8dJihh5y6RjFbYy3ft0dVft3s4SgcyUihC1wqT8oXTkEorA4k2L9CDkDG2gBoT4egpcvJQrdXiyLZvxb1b3BoTG0+hIb3AYV20nqpFQ2so5N3i/fiqQVQTIXB+ufz2thy+8mi9juPGTkIG3M/T4t81EHTDw/ayUPLwAzxWjP3Z4bGb+M1vHmlxwX13q6i+s6MTiYkJ6KBnkkdY5G3sxFCEPPqWHErrjM83RUMFR+7HT57C6PxcnKD8X6AaNefn7PlGNYaMfagBtmI4YrcLO7/syPvwvpcutyAQ/BvyN8qEAUt+Zui3VDt5Gr4//i2oCLrwjonqR9j4xVaX5RPHj8NIiv5KK3Y5fpieFnYZ8rdnYC8+F7UOb96+bJz5lK0rpNBb8JABPLojjwvDY8VoGURizpFv0uDBPKeQeu7YznAf5pctVG7v+vz/tivh7Q24RnHPrCK0d7SrNjkWeF+wpky9cxKio6LxxbYyKtgCK4T889ypBOT5R3ksd6PSQecXrDViHTum67gw31AjKbfQ2/203o3YhVCiuuC5VH3MSEnhdoyej/oEV1ioWdR5dEfuq6710XlAPrY0fMH+PHvw3Imht4SdYXHmrtFFd92Jf5s5DUcrq3G0ukZ58FrYSmIrhiP269euq30CFXbG71EheWLpqIljDDkyZOdlqsLtO4xgYbuFhZujhsuaRlmuDkKE3RBcqK5Fiovt4trLRuhduAMCN4iyT82fPFZMW7vvIbvZihlXkK+E/Qf6PXusE4MP2HbhKHzi+FtRMDoPY0jAW65cUcOTqDzGRKvGU/bY2YrZf/C7oISdCWgmJp6sg+cfNRrtG0rRURn46HJ2uLH0vruL0dJyVVkw7l0a7S81ibALQuhwn6yDx4phP56jeS0s/tx4yh47d37giJ1faOrLyToYbpPjfPHnCPuwCtSmxbUJPg+9tQqZZi9E0+yNIG+dW+V5AP7vK6vQdPGS8tiyMkeqwYm4X3vF7q9F2AUhxNiHAB5ua5T0Ps3eGbJJj/SqFeMvD8y7W33+87PNCBUBT5DdXr5fTSwd6RNkMzy1njqfEMDdlDaXlivr5Q6qKtq5QVE892NlX7CvIwVBMCLswe8gX5pHjOReJzxWjL07JL+gxP3Yubtjb/SKCScCFndSKLRvLAMuXo7oCL5990F0VBxQ5xMq2E/j1ne+ybiqxd22LlNrfYeIuiD0OPy8cffISCTQbo7+ELAto0VNmF08JaIaWTvJF+/Y9pUuj10QBCGURNlmYQtlIBh45K6BbY2O6hNqflU1DV8Y94Pnfuyqu+O+wyGdCFsQBEEvPVG71xW5uyREJQ9PU6dmMxqWqsZGV0PoBjvgmB6u31CDgKmxYs42qjdPOxvOiectCEK/QVfkroWFs/PkWWqSPgtBEAShb+nx8dwFQRCE3kfEXRAEwYCIuAuCIBgQEXdBEAQDIuIuCIJgQETcBUEQDIiIuyAIggExJQxLs77a0+UFn06XD0EQwoF5WLn2J8DHT2HZRgiCFVOXL/h/5kL+Q4M5FVsAAAAASUVORK5CYII=" alt="" />
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='custom-search trade-alert bg-[#122036] p-5 rounded-md'>
                            <h2 className='main-title'>Definiation</h2>
                            <p>The Custom Search Function is a way for you to find the top traders on Ethereum for a certain market, i.e. token pair, over a certain time period.</p>
                            <p className='mt-2'>
                                After making a selection, and clicking on the Submit button, the user will be shown a waiting spinner while the search is performed. The search can take some time, depending on the time period size, and the popularity of the particular search. After done user is shown:
                            </p>
                            <img className='mt-5 rounded-md w-[80%]' src="https://app.0x0.com/static/media/custom-searching.cbf80d8f5f7f7619edcd.png" alt="" />
                            <p className='mt-10'>
                                A user has a limited amount of search days they can use up with the search function. They correspond to the days of the selected time period.</p>

                            <p className='mt-3'>The options for Time periods are: The last day, week, month (30 days), 3 months (90 days), 6 months (180 days) and year (360 days). The number of days of each selection corresponds to the cost to the user performing the search.</p>

                            <p className='mt-3'>For example, if a user has 90 Search days remaining, they can perform a single search for the last 3 months, or 3x single month searches for different market selections.
                            </p>
                            <h2 className='sub-title mt-10'>Search days</h2>
                            <p>Each day, every user is allocated a daily allowance of search days, for that day, based on the total amount of 0x0 Tokens that the user holds and stakes (sum) on the platform:</p>
                            <div class=" p-5 ">
                                <table class="w-3/4 border-collapse border border-gray-300">
                                    <thead>
                                        <tr class="bg-gray-700">
                                            <th class="border border-gray-300 px-4 py-2">User 0x0 Balance</th>
                                            <th class="border border-gray-300 px-4 py-2">Daily Allowance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-gray-500 duration-200">
                                            <td class="border border-gray-300 px-4 py-2">50000</td>
                                            <td class="border border-gray-300 px-4 py-2">Unlimited</td>
                                        </tr>
                                        <tr class="hover:bg-gray-500 duration-200">
                                            <td class="border border-gray-300 px-4 py-2">20000</td>
                                            <td class="border border-gray-300 px-4 py-2">1000</td>
                                        </tr>
                                        <tr class="hover:bg-gray-500 duration-200">
                                            <td class="border border-gray-300 px-4 py-2">10000</td>
                                            <td class="border border-gray-300 px-4 py-2">200</td>
                                        </tr>
                                        <tr class="hover:bg-gray-500 duration-200">
                                            <td class="border border-gray-300 px-4 py-2">0</td>
                                            <td class="border border-gray-300 px-4 py-2">8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>Every user gets at least 7 days, a week’s worth of time period that can be used for custom searches, every day. If the user stakes or holds any 0x0 Tokens, they will be eligible for more days, according to the table above.</p>
                            <h2 className='sub-title mt-10'>Top-up Search days</h2>
                            <p>A user can also buy or top-up their balance of Search days by sending 0x0 Tokens to 0x46EA2A7F0568c7E83f3e13ba00E69A4e4310A288 from the same wallet address the user is tied to.</p>

                            <p className='mt-3'>The cost of search days is currently 1:1 with the 0x0 Token, i.e. 100 tokens will credit a user with 100 extra search days.</p>

                            <p className='mt-3'>These “paid for” days do not expire, and are separate from the daily allocation of days based on the already held and staked 0x0, as discussed previously.</p>

                            <p className='mt-3'>Purchased days should show up on the user’s balance after 16 ETH block confirmations.</p>

                            <p className='mt-3'>Spending days to perform custom searches will always use up the daily allocated amount first, before starting to use any paid for days.</p>

                            <p className='mt-3'>It is extremely important to note that users must send only 0x0 Tokens to 0x46EA2A7F0568c7E83f3e13ba00E69A4e4310A288 only, and only from the correct wallet address, tied to their account.</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <FAQ />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default HowTo;
