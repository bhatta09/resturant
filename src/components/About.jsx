import React from 'react'
import img from "../assets/img/about.png";
import Button from '../layouts/Button';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
        <img src={img} alt="img" />

        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>Why choose us?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Aperiam laborum dicta at accusamus quos, consequatur
                animi ad libero alias minima fugit iste quidem fugiat voluptate error,
                 dignissimos inventore quae impedit velit? Iste porro
                  laborum architecto minima consectetur veniam dolores quibusdam.
                   </p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Odit molestias temporibus perspiciatis aliquam rerum sapiente
                      beatae possimus fuga, eius veniam.
                      </p>
                      <div className='flex justify-center lg:justify-start'>
                        <Button title="Learn More" />
                      </div>
        </div>
    </div>
  )
}

export default About