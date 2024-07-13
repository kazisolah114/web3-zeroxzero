import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';

const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
});

// Replace this with the actual ABI of the 0x0 token
const tokenAbi = [
    // Minimal ABI to get ERC20 Token balance
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "type": "function"
    }
];

// Replace with the actual address of the 0x0 token contract
const tokenAddress = '0xb8fda5aee55120247f16225feff266dfdb381d4c';

const useConnectMetamask = () => {
    const web3 = new Web3(window.ethereum);
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React()

    const [activatingConnector, setActivatingConnector] = useState();
    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(0);
    const [tokenBalance, setTokenBalance] = useState(0);
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    useEffect(() => {
        if (active) {
            setWallet(account);
        } else {
            setWallet(null);
        }
    }, [active, account]);

    const handleConnectWallet = async () => {
        setActivatingConnector(injected);
        activate(injected, (error) => {
            if (error) {
                setActivatingConnector(undefined);
            }
        });
    };

    const handleDisconnectWallet = async () => {
        deactivate(injected, (error) => {
            console.log(error);
        });
    };

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
    }, [wallet, web3]);

    useEffect(() => {
        const fetchTokenBalance = async () => {
            try {
                if (wallet) {
                    const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
                    const balance = await tokenContract.methods.balanceOf(wallet).call();
                    const tokenBalance = web3.utils.fromWei(balance, 'ether');
                    setTokenBalance(tokenBalance);
                }
            } catch (error) {
                console.error('Error fetching token balance', error);
            }
        };
        fetchTokenBalance();
    }, [wallet, web3]);

    return {
        wallet,
        balance,
        tokenBalance,
        handleConnectWallet,
        handleDisconnectWallet,
        web3,
        activatingConnector,
        setActivatingConnector,
    };
};

export default useConnectMetamask;
