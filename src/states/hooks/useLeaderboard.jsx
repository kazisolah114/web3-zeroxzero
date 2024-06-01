import {useState, useEffect} from 'react';

const useLeaderboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [leaderboards, setLeaderboards] = useState([]);
    const [interval, setInterval] = useState('30d')
    // console.log(interval);
    useEffect(() => {
        const target_currency_wallets = {
            wbtc: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            link: "0x514910771af9ca656af840dff83e8264ecf986ca",
            doge: "0x2541a36be4cd39286ed61a3e6afc2307602489d6",
            shib: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
        }
        const fetchLeaderboard = async () => {
            try{
                const responses = await Promise.all(Object.values(target_currency_wallets).map( wallet =>
                    fetch(`https://leaderboard.0x0.com/top?token=${wallet}&interval=${interval}`)
                    .then(res => res.json())
                 ))
                 setLeaderboards(responses)
                 setIsLoading(false);
            } catch(error) {
                console.log("Error while fetching data:", error)
            }
        }
        fetchLeaderboard()
    }, [interval])
    return {leaderboards, isLoading, setInterval};
};

export default useLeaderboard;