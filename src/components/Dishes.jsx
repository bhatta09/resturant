import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img/momo1.jpg"
import img2 from "../assets/img/momo2.jpg"
import img3 from "../assets/img/sekuwa.jpg"
import img4 from "../assets/img/chaumin2.jpg"
import img5 from "../assets/img/choila4.jpg"
import img6 from "../assets/img/kfc2.jpg"



const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Our Dishes</h1>
        
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={img1} title=" Chicken Momo" price="Rs200"/>
            <DishesCard img={img2} title="Buf Momo" price="Rs180"/>
            <DishesCard img={img3} title="Sekuwa" price="Rs400"/>
            <DishesCard img={img4} title="Chaumin" price="Rs180"/>
            <DishesCard img={img5} title="Choila" price="Rs350"/>
            <DishesCard img={img6} title="KFC" price="Rs450"/>
        </div>
    </div>
  )
}

export default Dishes