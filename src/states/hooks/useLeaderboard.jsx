import {useState, useEffect} from 'react';

const useLeaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    useEffect(() => {
        fetch(`/api/leaderboards`)
            .then(res => res.json())
            .then(data => {
                setLeaderboardData(data);
            })
    }, [])
    return leaderboardData;
};

export default useLeaderboard;