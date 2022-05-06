import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'
export const TransactionContext = React.createContext();
const { ethereum } = window

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    console.log(contractAddress,contractABI,signer);
    return new ethers.Contract(contractAddress,contractABI,signer);
}

export const TransactionProvider = ({ children }) => {
    const [account, setAccount] = useState('');
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })
    const [isLoading, setisLoading] = useState(false);
    // const [currentTransactionData,setcurrentTransactionData]=useState('');
    useEffect(() => {
        walletConnected();
    }, [])
    useEffect(() => {
        connectWallet();
    }, [account])
    const handleChange = (e,name) => {
        setFormData((prevState) => {
            return { ...prevState, [name]: e.target.value }
        })
    }
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please Install Metamask!!');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error('no ethereum account found')
        }
    }
    const walletConnected = async () => {
        if (!ethereum) return alert('please Install Metamask!!');
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        console.log(accounts);
    }
    const sendTransaction = async () => {
        try {

            console.log(formData);
            const { addressTo, amount, keyword, message } = formData;
            const amountInEth=ethers.utils.parseEther(amount);
            const transactionContract=getEthereumContract();
            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:account,
                    to:addressTo,
                    gas:'0x5208',
                    value:amountInEth._hex
                }
                ]
            })
            setisLoading(true);
            const transactionHashId=await transactionContract.pushToBlockchain(addressTo,amountInEth,message,keyword);
            console.log(transactionHashId);
            console.log(`loading - ${transactionHashId.hash}`);
            setisLoading(false);

        } catch (error) {
            console.log(error);
            throw new Error('no ethereum object found')
        }
    }
    return <TransactionContext.Provider value={{ connectWallet, account, formData, setFormData, handleChange, sendTransaction,isLoading }}>
        {children}
    </TransactionContext.Provider>
}