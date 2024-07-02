import React, { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import useConnectMetamask from '../states/auth/useConnectMetamask';
import { useInactiveListener } from '../states/hooks/useInactiveListener';

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    // const { wallet, balance, handleConnectWallet, handleDisconnectWallet, web3, activatingConnector, setActivatingConnector, rpcProvider } = useConnectMetamask();
    const { wallet, balance, tokenBalance, handleConnectWallet, handleDisconnectWallet, web3, activatingConnector, setActivatingConnector } = useConnectMetamask();
    
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

    useInactiveListener(!!activatingConnector);

    return (
        <UserContext.Provider value={{ wallet, balance, tokenBalance, web3, handleConnectWallet, handleDisconnectWallet: handleDisconnect }}>
            {children}
        </UserContext.Provider>
    )
}
