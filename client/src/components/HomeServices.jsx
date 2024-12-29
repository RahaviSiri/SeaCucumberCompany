import React from 'react'
import { assets } from "../assets/assets" 

const HomeServices = () => {
  return (
    <div className='flex items-center flex-col m-8'>
        <h1 className='text-3xl text-center text-blue-900'>Expertise in Sustainable Aquaculture</h1>
        <p className='text-lg mt-2 mb-5 text-center'>Specialized in eco-conscious sea cucumber farming, catering to global seafood demands.</p>
        <div className='flex flex-col sm:flex-row justify-between gap-10 sm:gap-3'>
            <div className='rounded-xl shadow-xl shadow-black flex flex-col items-center p-3 gap-2'>
                <img src={assets.Nursary} alt="" className='w-72 rounded-xl shadow-xl'/>
                <h1 className='text-center text-xl text-blue-900'>Hatchery and Nursery Care</h1>
                <p className='text-center '>Dedicated care for sea cucumbers through all early development stages, ensuring healthy growth.</p>
            </div>
            <div className='rounded-xl shadow-xl shadow-black flex flex-col items-center p-3 gap-2'>
                <img src={assets.Farming} alt="" className='w-72 rounded-xl shadow-xl'/>
                <h1 className='text-center text-xl text-blue-900'>Sustainable Farming</h1>
                <p className='text-center'>Implementing ethical practices to produce premium-quality sea cucumbers for global export.</p>
            </div>
            <div className='rounded-xl shadow-xl shadow-black flex flex-col items-center p-3 gap-2'>
                <img src={assets.Marketing} alt="" className='w-72 rounded-xl shadow-xl'/>
                <h1 className='text-center text-xl text-blue-900'>Eco-Friendly Operations</h1>
                <p className='text-center'>Prioritizing environmentally responsible methods that support local communities and international markets.</p>
            </div>
        </div>
    </div>
  )
}

export default HomeServices