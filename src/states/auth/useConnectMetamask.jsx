import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
// import { JsonRpcProvider } from '@ethersproject/providers';
// Create the Injected Connector (for MetaMask)
const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
const useConnectMetamask = () => {
    const web3 = new Web3(window.ethereum);
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React()
    const [activatingConnector, setActivatingConnector] = useState();
    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(0);
    // const provider = new JsonRpcProvider(process.env.VITE_APP_RPC_URL);
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    useEffect(()=> {
        if (active) {
            setWallet(account);
        }
        else {
            setWallet(null);
        }
    }, [active]);

    const handleConnectWallet = async () => {
        setActivatingConnector(injected);
        activate(injected, (error) => {
            if (error) {
                setActivatingConnector(undefined)
            }
        })
        // try {
        //     if (window.ethereum !== undefined) {
        //         const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        //         setWallet(accounts[0])
        //         // console.log(accounts)
        //         // const signer = web3.eth.accounts.privateKeyToAccount(accounts[0]);
        //         // console.log(signer)
        //         // setSigner(signer);
        //     } else {
        //         console.log("Type mismatched:", typeof window.ethereum);
        //     }
        // } catch (error) {
        //     console.log("Error with connecting wallet:", error)
        // }

        // try {
        //     await activate('Injected', err=>{
        //         console.log(err)
        //     });
        // } catch (error) {
        //     console.error('Error connecting to MetaMask:', error);
        // }

    }
    const handleDisconnectWallet = async () => {
        // try {
        //     if (window.ethereum !== undefined) {
        //         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        //         if (accounts.length > 0) {
        //             await window.ethereum.request({ method: 'eth_requestAccounts', params: [] });
        //             console.log("Wallet has been disconnected!")
        //             setWallet(null);
        //         } else {
        //             console.log("There is no account to disconnect")
        //         }
        //     } else {
        //         console.log("Type mismatched")
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
        deactivate(injected, (error) => {
            console.log(error)
        });
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
        handleDisconnectWallet,
        web3,
        activatingConnector,
        setActivatingConnector,
        // rpcProvider: provider
    }
};

export default useConnectMetamask;