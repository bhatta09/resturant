import React from 'react'
import { BiRestaurant } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
            <BiRestaurant size={32} />
                <h1 className='font-semibold text-xl pb-4'>Tayār Bhayo</h1>
                <p className='text-sm'>
                    Indulge in a symphony of flavors, where each plate is a canvas for 
                    culinary excellence.
                </p>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >Reviews</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" > Our Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >Premier Menu</a>
                   </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >sandesh@academiacollegeedu.np</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >+977 9846878199</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href="/" >Socila media</a>
                    
                </nav>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @copyright devloped by 
                 <span className='text-brightColor'> Sandesh Bhatta </span>
                  |All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer;