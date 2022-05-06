import { DiReact } from 'react-icons/di'
import { BsFillHeartFill } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className="w-full py-10 text-white gradient-bg-footer">
            <div className="text-3xl flex items-center  justify-center w-3/4 mx-auto">
                <p className='mx-1'>
                    Made with
                </p>
                <BsFillHeartFill  className='mx-1' color='red'/>
                <p className='mx-1' >
                    and
                </p>
                <DiReact className='mx-1' color='#61dbfb'/>
            </div>
        </div>
    )
}

export default Footer;