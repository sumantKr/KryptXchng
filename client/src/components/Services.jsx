import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServiceCardArray = [
    {
        color: "bg-[#2952E3]",
        title: "Security gurantee",
        icon:<BsShieldFillCheck/>,
        subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
        
    },
    {
        color: "bg-[#8945F8]",
        title: "Best exchange rates",
        icon:<BiSearchAlt/>,

        subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"

    },
    {
        color: "bg-[#F84550]",
        title: "Fastest transactions",
        icon:<RiHeart2Fill />,
        subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
    }
]
const ServiceCard = ({color,subtitle,title,icon}) => {
    return (
        <div className='w-full p-5 white-glassmorphism text-center md:text-left  flex flex-col md:flex-row items-center justify-between mb-4'>
            <div className={`rounded-full p-3 ${color} text-[21px] `}>
                {icon}
            </div>
            <div className='ml-4'>
                <p className='text-xl'>
                    {title}
                </p>
                <p>
                   {subtitle}
                </p>
            </div>

        </div>
    )
}
const Services = () => {
    return (
        <div className='w-[100vw] flex flex-col md:flex-row items-center justify-center text-white gradient-bg-services'>
            <div className='w-3/4 flex  flex-col md:flex-row items-center justify-evenly '>
                <div className='flex flex-col text-center xl:text-left  items-start justify-center text-gradient'>
                    <h1 className='text-5xl'>Services that we continue to improve</h1>
                </div>
                <div className='p-5 flex flex-col items-center justify-evenly '>
                    {ServiceCardArray.map(({color,subtitle,title,icon})=>
                        <ServiceCard key={title} color={color} title={title} subtitle={subtitle} icon={icon} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services;