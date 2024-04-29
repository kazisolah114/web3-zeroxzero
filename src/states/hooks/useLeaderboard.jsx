import {useState, useEffect} from 'react';

const useLeaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`/api/leaderboards`)
            .then(res => res.json())
            .then(data => {
                setLeaderboardData(data);
                setIsLoading(false);
            })
    }, [])
    return {leaderboardData, isLoading};
};

export default useLeaderboard;