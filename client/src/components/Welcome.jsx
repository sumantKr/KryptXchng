import { AiFillPlayCircle } from "react-icons/ai";

import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from './index'
import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { slicedAccount } from "../utils/util-function";
const commonGridStyles = "white-glassmorphism min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Input = ({ placeholder, type, name, value, onHandleChange }) => {
    return (
        <input placeholder={placeholder}
            type={type}
            step="0.0001"
            value={value}
            onChange={(e) => { onHandleChange(e, name) }}
            className="w-[95%] p-3 mb-4 rounded-sm outline-none bg-transparent  border-none text-sm bg-[#181f496b]"
        />
    )
}
const Welcome = () => {
    const value = useContext(TransactionContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const {addressTo,amount,keyword,message}=value.formData;
        if(!addressTo || !amount || !keyword || !message) return;
        value.sendTransaction();
    }
    return (
        <div className="w-[100vw] flex justify-center items-center py-10">
            <div className="text-white width-[85%] flex justify-between md:flex-row flex-col ">
                <div className=" m-10 flex flex-col justify-center md:text-left text-center md:items-start">
                    <h1 className="text-5xl py-3">
                        Send Crypto <br />
                        across the world
                    </h1>
                    <p>
                        Explore the crypto world. <br />
                        Buy and Sell cryptocurrencies <br />
                        easily on Krypto.
                    </p>
                    {value.account 
                        ? null
                        :
                        <button type="button" className="bg-blue-600 p-3 mt-5 px-6 my-1 rounded-full hover:bg-blue-900" onClick={value.connectWallet}>Connect Your Wallet</button>
                    }
                    <div className="pt-7 grid  lg:grid-cols-3 grid-cols-2 ">
                        <div className={`rounded-tl-xl  ${commonGridStyles}`}>Reliability</div>
                        <div className={`${commonGridStyles}`}>Blockchain</div>
                        <div className={`${commonGridStyles}`}>Ethereum</div>
                        <div className={`${commonGridStyles}`}>Web 3.0</div>
                        <div className={`${commonGridStyles}`}>Security</div>
                        <div className={`rounded-br-xl ${commonGridStyles}`}>Low Fees</div>
                    </div>
                </div>
                <div className=" m-10 flex flex-col justify-center text-left items-center">
                    <div className="relative justify-end items-start rounded-xl m-4 h-40 w-72 white-glassmorphism eth-card">
                        <div className="absolute flex justify-center items-center w-10 h-10 left-2 top-2 rounded-full border-2 border-white">
                            <SiEthereum fontSize={26} />
                        </div>
                        <div className="absolute flex justify-center items-center  right-2 top-2 ">
                            <BsInfoCircle fontSize={16} />
                        </div>
                        <p className="text-lg absolute bottom-10 left-2">{
                            slicedAccount(value.account)}</p>
                        <p className=" text-xl absolute bottom-5 left-2">Ethereum</p>
                    </div>
                    <div className=" w-80 m-4 flex flex-col justify-between items-center p-6 blue-glassmorphism ">
                        <Input placeholder="Address To" name="addressTo" type="text"  onHandleChange={value.handleChange}/>
                        <Input placeholder="Amount (ETH)" name="amount" type="number" onHandleChange={value.handleChange} />
                        <Input placeholder="Keyword (GIF)" name="keyword" type="text" onHandleChange={value.handleChange} />
                        <Input placeholder="Message..." name="message" type="text" onHandleChange={value.handleChange} />
                        <div className="h-[1px] bg-white w-[98%] mb-1" />
                        {
                            value.isLoading
                                ?
                                <Loader />
                                :
                                <button type="button" className="w-[98%] border-[1px] mt-2 p-2 border-white border-opacity-10 rounded-full hover:bg-[rgba(91,33,182,0.1)] hover:border-opacity-60" onClick={handleSubmit}>Send ETH</button>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;