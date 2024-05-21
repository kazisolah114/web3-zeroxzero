import React, { useEffect, useState } from 'react';

const useTokenStats = () => {
    const [tokenStats, setTokenStats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://statboard.0x0.com/api/token/`)
        .then(res => res.json())
        .then(data => {
            setTokenStats(data);
            setIsLoading(false);
        })
    }, [])
    return {tokenStats, isLoading}
};

export default useTokenStats;