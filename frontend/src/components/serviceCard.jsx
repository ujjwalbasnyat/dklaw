import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";
import servicesData from '../assets/data/card.json'


const ServiceCard = () => {


return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {servicesData.map((service)=>
        {
            const IconComponent = FaIcons[service.icon];
            return(
            <Link 
            to={service.path}
            key={service.id}
            className=' flex flex-col items-center shadow-lg  rounded-sm px-5 py-4 gap-4 hover:bg-gray-100'>
                {IconComponent && <IconComponent className='text-white p-3 rounded-full bg-secondary' size={50}/>}
                <h3 className='font-bold text-xl lg:text-2xl'>{service.header}</h3>
                <p className='text-center'>{service.description}</p>
                <div className='flex items-center gap-2 text-primary'><FaArrowRight/>Learn more</div>
            </Link>
        )})}
    </div>
)
}

export default ServiceCard;