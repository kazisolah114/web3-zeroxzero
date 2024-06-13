import { useState, useEffect } from 'react';

const useLeaderboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [leaderboards, setLeaderboards] = useState([]);
    const [interval, setInterval] = useState('30d');
    const [error, setError] = useState(null);
    useEffect(() => {
        const targetWallets = {
            wbtc: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            link: "0x514910771af9ca656af840dff83e8264ecf986ca",
            doge: "0x2541a36be4cd39286ed61a3e6afc2307602489d6",
            shib: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
        };

        const fetchLeaderboardSequentially = async () => {
            setIsLoading(true);
            setError(null);
            const combinedData = [];

            for (const [token, wallet] of Object.entries(targetWallets)) {
                try {
                    const response = await fetch(`https://leaderboard.0x0.com/top?token=${wallet}&interval=${interval}`);
                    const data = await response.json();
                    combinedData.push({ token, wallet, data });
                } catch (error) {
                    setError(error);
                    break;
                }
            }

            setLeaderboards(combinedData);
            setIsLoading(false);
        };

        fetchLeaderboardSequentially();
    }, [interval]);

    return { leaderboards, isLoading, error, setInterval };
};

export default useLeaderboard;
