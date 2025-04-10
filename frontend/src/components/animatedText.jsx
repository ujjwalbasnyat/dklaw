import React from 'react'
import AnimatedText from '../components/animate'
const Animation = () => {
    const services = ['Trademark Registration', 'Company Registration', 'Accounting and Taxation','Changes & Renewals', 'Business Web Services', 'Hire an Accountant', 'Hire a Lawyer'];
    const text = "From company registration to complete startup services, welcome to business suite from Dk Law Associates. We are one stop solution for all your registration, compliance & operational needs."
  return (
    <div id='home' className=' h-screen w-screen px-20 flex flex-col gap-10 bg-'>
        <div className='text-2xl lg:text-4xl font-bold'>
        <h1>We Serve:</h1>
        <AnimatedText texts={services} interval={3000} />
        </div>
        <div className=" text-sm lg:text-md md:text-sm  leading-relaxed tracking-wide text-gray-700 max-w-prose">
            {text}
        </div>
    </div>
  )
}

export default Animation