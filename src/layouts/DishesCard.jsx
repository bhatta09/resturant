import React from 'react'
import {BsStarFill} from "react-icons/bs";
import {BsStarHalf} from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg'>
        <img src={props.img} alt="img" className='rounded-lg'/>
        <div className='space-y-4'>
            <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
            <div className='flex flex-row justify-center'>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarHalf className='text-brightColor'/>
            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
                <h3 className='font-semibold text-lg'>{props.price}</h3>
                <Button title="Buy Now" />
            </div>
        </div>
    </div>
  )
}

export default DishesCard