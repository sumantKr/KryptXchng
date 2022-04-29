import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../public/images/logo.png'
import { useState } from 'react'
const NavBarItems = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (

        <nav className='w-full items-center'>
            <div className=' w-3/4 mx-auto items-center flex justify-between py-5'>
                <div className="flex-initial justify-center items-center">
                    <img src={logo} alt="logo" className='w-32 cursor-pointer' />
                </div>
                <ul className='text-white md:flex hidden list-none justify-center items-center flex-initial'>
                    {
                        ["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) =>
                            <NavBarItems key={index} title={item} />
                        )
                    }
                    <li className="bg-blue-600  px-7 py-2 mx-4 rounded-full cursor-pointer hover:bg-blue-900">
                        Login</li>
                </ul>
                <div className='flex relative md:hidden'>
                    {toggleMenu ? <AiOutlineClose fontSize={28} className=' text-white md:hidden cursor-pointer ' onClick={() => { setToggleMenu(false) }} />
                        :
                        <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer ' onClick={() => { setToggleMenu(true) }} />
                    }
                    {
                        toggleMenu && (
                            <ul
                            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl  md:hidden
                                       flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white '
                            >
                                <li className="text-xl w-full my-2 ">
                                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                                </li>
                                {
                                    ["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) =>
                                        <NavBarItems key={index} title={item} classProps="my-2 text-lg" />
                                    )
                                }
                            </ul>
                        )
                    }
                </div>
            </div>

        </nav>
    )
}

export default NavBar;