import dummyData from '../utils/dummy'
import { slicedAccount } from '../utils/util-function'
const TransactionCard = ({url,addressFrom,addressTo,amount,message,timestamp}) => {
    return (
        <div className="h-auto w-[300px] mb-8 p-4 blue-glassmorphism  ">
            <div className="text-left  mb-8  w-full">
                <p>From : {slicedAccount(addressFrom)}</p>
                <p>To : {slicedAccount(addressTo)}</p>
                <p>Amount : {amount} ETH </p>
            </div>
            <div className="relative">
                <img className="h-40 w-[90%] my-10 mx-auto " src={url} alt="" />
                <div className="text-xs absolute flex items-center justify-center bg-blue-900 border-2 border-gray-300 w-[60%]  h-10 rounded-full bottom-[-1.5rem] left-[50%] translate-x-[-50%]">
                {timestamp}
                </div>
            </div>
        </div>
    )
}
const Transactions = () => {
    return (
        <div className="w-full py-10 text-white gradient-bg-transactions">
            <div className="w-3/4 mx-auto">
                <div className='flex flex-col text-center md:text-left text-gradient'>
                    <h1 className='text-5xl'>Latest Transactions</h1>
                </div>
                <div className=" flex flex-wrap md:flex-row justify-evenly items-center my-16">{    
                    dummyData.map(({id,url,addressFrom,addressTo,amount,message,timestamp})=>{
                        return <TransactionCard  key={id} url={url} addressFrom={addressFrom} addressTo={addressTo} amount={amount} message={message} timestamp={timestamp} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Transactions;