import DishesCard from '../layouts/DishesCard'
import img1 from "../assets/img/momo3.jpg"
import img2 from "../assets/img/tandori.jpg"
import img3 from "../assets/img/sekuwa2.jpg"


const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center pt-4 pb-10'>Premiem Menu</h1>

        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={img1} title="Fried Cmomo" price="Rs300" />
            <DishesCard img={img2} title=" Tandoori" price="Rs650" />
            <DishesCard img={img3} title="sekuwa" price="Rs375" />
        </div>
         </div>
  )
}

export default Menu