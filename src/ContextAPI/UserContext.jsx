import React, { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import useConnectMetamask from '../states/auth/useConnectMetamask';

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const { wallet, balance, tokenBalance, handleConnectWallet, handleDisconnectWallet } = useConnectMetamask();
    
    // Retrieve wallet from localStorage on component mount
    useEffect(() => {
        const storedWallet = localStorage.getItem('wallet');
        if (storedWallet) {
            handleConnectWallet(storedWallet);
        }
    }, [handleConnectWallet]);

    // Save wallet to localStorage when wallet changes
    useEffect(() => {
        if (wallet) {
            localStorage.setItem('wallet', wallet);
        } else {
            localStorage.removeItem('wallet');
        }
    }, [wallet]);

    // Handle disconnecting wallet by removing it from localStorage
    const handleDisconnect = () => {
        handleDisconnectWallet();
        localStorage.removeItem('wallet');
    };

    return (
        <UserContext.Provider value={{ wallet, balance, tokenBalance, handleConnectWallet, handleDisconnectWallet: handleDisconnect }}>
            {children}
        </UserContext.Provider>
    )
}
