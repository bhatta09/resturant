import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img/menu1.jpg"
import img2 from "../assets/img/menu2.jpg"
import img3 from "../assets/img/menu3.jpg"

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Premiem Menu</h1>

        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={img1} title="Delicious Dish" price="Rs300" />
            <DishesCard img={img2} title=" Dish" price="Rs250" />
            <DishesCard img={img3} title="Delicious Dish" price="Rs375" />
        </div>
    </div>
  )
}

export default Menu