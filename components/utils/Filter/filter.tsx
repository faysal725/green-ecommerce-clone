import React, { useState } from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
// import StarIcon from '../../icons/starIcon';
import StarRating from '../StarRating/starRating'


interface UserFormState {
    maxPrice: number;
    minPrice: number
}

export default function filter() {
    const [formData, setFormData] = useState<UserFormState>({
        maxPrice: 100,
        minPrice: 0
    })
    const {foodAccordian, setFoodAccordian} = useState<boolean>(false)
    
  return (
    <div className=' bg-white py-3 border-r border-slate-200'>

        {/* Heading  */}
        <div className='text-sm  my-1 border-b border-slate-200'>
            <header className='mb-2 pl-4 text-sm font-semibold	text-gray-800'>Filter</header>
        </div>
        
        {/* categories  */}
        <div  className='text-sm font-bold text-black py-5 border-b border-slate-200'>
            <header className='mb-2 pl-4 text-sm font-semibold	text-gray-800'>Categories</header>

            <ul className='pl-4  flex flex-col gap-2 text-sm text-slate-900/80 font-normal mt-3'>
                <li className='flex items-center space-x-2 my-1'>
                    <input type="checkbox" name="plant" value="Bike" className="ml-1"/>
                    <label htmlFor="plant">Gardening</label>
                </li>
                <li className='flex items-center space-x-2 my-1'>
                    <input type="checkbox" name="plant" value="Bike" className="ml-1"/>
                    <label htmlFor="plant">Plant</label>
                </li>
                <li className='flex items-center space-x-2 my-1'>
                    <input type="checkbox" name="plant" value="Bike" className="ml-1"/>
                    <label htmlFor="plant">Seeds</label>
                </li>
                <li className='flex items-center space-x-2 my-1'>
                    <input type="checkbox" name="plant" value="Bike" className="ml-1"/>
                    <label htmlFor="plant">Bulbs</label>
                </li>
                <li className='flex items-center space-x-2 my-1'>
                    <input type="checkbox" name="plant" value="Bike" className="ml-1"/>
                    <label htmlFor="plant">Planters</label>
                </li>
                <div className='flex justify-start gap-2 items-center mr-3 pl-6 cursor-pointer'>
                    <h1 className='font-normal block'>Others </h1>
                    <span className='block pt-4	font-normal rotate-180 text-2xl	'>^</span>
                </div>
            </ul>
        </div>

        
        {/* price range  */}
        <div  className='text-sm font-bold text-black py-5 border-b border-slate-200 flex flex-col'>
            <header className='mb-2 pl-4 text-sm font-semibold	text-gray-800'>Price Range</header>

                <div className='flex flex-col mt-4 gap-6 px-7'>

                    <div className='flex justify-between '>
                        <input className='border-[1px] text-center border-b-slate-200 w-14 text-stone-700/70 text-xs font-normal bg-slate-300/30 h-8 rounded-md	' type="text"  placeholder="Min" />
                        <input className='border-[1px] text-center border-b-slate-200 w-14 text-stone-700/70 text-xs font-normal bg-slate-300/30 h-8 rounded-md	' type="text"  placeholder="Max" />
                    </div>
                    <button className='bg-green-600 text-white h-7 rounded-lg font-normal hover:bg-green-800'>Set Price</button>
                </div>
        </div>




        {/* Rating */}
        <div className='text-sm font-bold text-black py-5 border-b border-slate-200'>
            <header className='mb-2 pl-4 text-sm font-semibold	text-gray-800'>Rating</header>
            <div className='pl-4 mt-2 flex items-center gap-2'>
                <input type="checkbox" />
                <div className='flex items-center'>
                    <StarRating />
                </div>
                <span className='text-sm font-normal'>above</span>
            </div>
        </div>

        {/* referrel  */}
        <div className='mt-auto mb-4 flex justify-center p-5'>
            <div className='bg-gradient-to-b from-green-700 to-green-300 rounded-xl p-3'>
                <header className='my-2 uppercase text-white font-bold text-sm'>Get 59% off</header>

                <p className='text-white text-xs'>Share your referrel code and to get discount</p>

                <button className='w-full bg-yellow-500 hover:bg-green-400 text-white font-normal text-xs rounded-md mt-3 h-7'>Share</button>
            </div>
        </div>
        
    </div>
  )
}
