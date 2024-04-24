import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useConnectMetamask = () => {
    const web3 = new Web3(window.ethereum);
    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(0);
    const handleConnectWallet = async () => {
        try {
            if (window.ethereum !== undefined) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWallet(accounts[0])
            } else {
                console.log("Type mismatched:", typeof window.ethereum);
            }
        } catch (error) {
            console.log("Error with connecting wallet:", error)
        }

    }
    const handleDisconnectWallet = async () => {
        try {
            if (window.ethereum !== undefined) {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    await window.ethereum.request({ method: 'eth_requestAccounts', params: [] });
                    console.log("Wallet has been disconnected!")
                    setWallet(null);
                } else {
                    console.log("There is no account to disconnect")
                }
            } else {
                console.log("Type mismatched")
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const updateBalance = async () => {
            try {
                if (wallet) {
                    const balanceWei = await web3.eth.getBalance(wallet);
                    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
                    setBalance(balanceEther);
                }
            } catch (error) {
                console.error('Error fetching balance', error);
            }
        };
        updateBalance();
    }, [wallet]);
    return {
        wallet,
        balance,
        handleConnectWallet,
        handleDisconnectWallet
    }
};

export default useConnectMetamask;