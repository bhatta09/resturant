import img from "../assets/img/about.png";
import Button from '../layouts/Button';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
        <img src={img} alt="img" />

        <div className='space-y-4 lg:pt-14'>
            <h1 className='font-semibold text-4xl text-center md:text-start'>Why choose us?</h1>
            <p>Tayar Vayo is a vibrant and user-friendly food website designed to offer an exceptional online dining experience.
               The site showcases a wide variety of delicious dishes with detailed descriptions, allowing users to easily browse menus, 
               place orders, and explore unique cuisines. With its sleek design and seamless navigation, 
              Tayar Vayo is perfect for food lovers looking for convenience and quality at their fingertips.
                   </p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Odit molestias temporibus perspiciatis aliquam rerum sapiente
                      beatae possimus fuga, eius veniam.
                      </p>
                      <div className='flex justify-center lg:justify-start'>
                        <Link to="/about-us">
                        <Button title="Learn More" />
                        </Link>
                        
                      </div>
        </div>
    </div>
  )
}

export default About;