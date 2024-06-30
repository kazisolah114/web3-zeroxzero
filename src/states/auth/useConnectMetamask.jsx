import { useState, useEffect } from 'react';
import Web3 from 'web3';

const useConnectMetamask = () => {
    const web3 = new Web3(window.ethereum);
    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(0);

    const [tokenBalance, setTokenBalance] = useState(0);
    const tokenAddress = '0xB8fda5AEe55120247F16225feFf266dfdB381D4C'; // 0x0 token contract address
    const tokenABI = [
        // A minimal ERC-20 ABI containing only the balanceOf function
        {
            "constant": true,
            "inputs": [{ "name": "_owner", "type": "address" }],
            "name": "balanceOf",
            "outputs": [{ "name": "balance", "type": "uint256" }],
            "type": "function"
        }
    ];

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
                    // Fetch 0x0 token balance
                    const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
                    const balanceToken = await tokenContract.methods.balanceOf(wallet).call();
                    const balanceTokenFormatted = web3.utils.fromWei(balanceToken, 'ether');
                    setTokenBalance(balanceTokenFormatted);
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
        tokenBalance,
        handleConnectWallet,
        handleDisconnectWallet
    }
};

export default useConnectMetamask;