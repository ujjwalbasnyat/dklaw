import React from 'react'
import ServiceCard from '../components/serviceCard'

const Services = () => {
  return (
    <div id='services' className='px-20'>
      <h1 className='text-2xl lg:text-4xl font-bold text-center py-10'>How can we help you?</h1>
      <ServiceCard/>
    </div>
  )
}

export default Services