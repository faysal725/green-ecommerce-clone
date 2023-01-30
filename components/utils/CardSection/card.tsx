import React from 'react'
import StarIcon from "../../icons/starIcon"
import Image from 'next/image'
import AddToFavourite from '../../icons/addToFavourite'
import StarRating from '../StarRating/starRating'

type dataProps = {
  resturant: object,
  chosenItem: object,
  setChosenItem: object
}

export default function card({resturant, chosenItem, setChosenItem} : dataProps) {

  return (
    <li 
      onClick={() => setChosenItem(resturant)}
      className='relative  sm:w-full border-slate-50 group card-item px-2.5'>
        


      <div className='flex flex-col gap-4 px-5 pb-4 border rounded-2xl'>
        {/* image part  */}
        <div className='flex justify-center relative'>
          <img className='w-[190px]' src="https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=" alt="" />
          <AddToFavourite classes='h-5 w-5 fill-red-400 absolute right-3 top-4' />
        </div>
        <div>
          <p className='text-slate-700 font-medium text-sm'>Monstera DK Var (L)</p>
          <div>
            <div className='flex gap-2'>
              <StarRating />
              <span className='text-xs text-slate-600'>(45)</span>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col text-xs text-slate-400'>
            <span>Price</span>
            <span className='font-bold text-slate-700 text-sm'>
              <span>$</span> 343</span>
          </div>
          <button className=' bg-white text-slate-800/90 text-xs font-bold  h-7 rounded-lg font-medium hover:bg-green-600 hover:text-white px-4 	border'>Add to cart</button>
        </div>
      </div>

    </li>
  )
}





{/* <div 
className='flex justify-center relative pt-24 pb-24 rounded-tl overflow-hidden'>
  <div 
   style={{backgroundImage: `url(${resturant.foodImg[0]})`}} 
   className='bg-white bg-cover bg-center bg-no-repeat absolute w-full h-full top-0 -z-50 group-hover:scale-110 transition duration-300 ease-in-out'>
     <div className='h-full bg-black/20'></div>
  </div>
 <div className='flex justify-between absolute  top-0 right-0 w-full'>
   <div></div>
   <div className='text-center flex flex-col justify-center items-center bg-white -space-y-2 p-1 rounded-tr-sm '>
     <p className='text-lg font-semibold text-red-700'>30</p>
     <p className='text-xs text-stone-700'>MIN</p>
   </div>
 </div> 
 <div className='flex flex-col items-start gap-2 absolute  text-white font-bold text-xs top-4 left-0 pr-1.5'>
   <p className='bg-sky-700/90 px-2 py-1 rounded-r-lg'>{resturant.discount} OFF</p>
 </div>
 <div></div>
</div>


<div className='mb-5 flex bg-sky-700 rounded-b-md'>
 <div className='whitespace-nowrap	flex flex-row items-center pl-2 text-white '>
   <p className='font-semibold border-r-2 border-sky-200 pr-2'>Discount</p>
 </div>
 <div className='whitespace-nowrap	overflow-hidden'>
   <div className='flex carousel-element'>
     {
       resturant.foodName.map((name, key) => (
         <p key={key} className='font-regular text-sm hover:italic cursor-default text-sky-200 hover:text-sky-50 p-1	 m-1'>{name}</p>
       ))
     }
   </div>
 </div>
</div>

<div className='w-full text-black px-3 pb-3 bg-white'>
 <div className='pl-4 md:pl-0 flex grow justify-between'>
   <div className='flex justify-between gap-2 items-center w-full'>
     <div>
       <p className='font-medium text-sky-700'>{resturant.name}</p>
       <p className='text-sm'>{resturant.location} - <span className='text-gray-500'>{resturant.distance}</span></p>
     </div>
     <div>
       <div className='flex items-start'>
         <StarIcon classes="h-3 w-3 fill-[#FDB414] mr-1 mt-[0.15rem]" />
         <p className='text-sm	font-normal text-gray-500'> {resturant.rating}</p>
       </div>
       <p className='flex items-center text-sky-700 font-bold'>
         <span className='mr-1 text-base font-thin text-gray-500'>৳</span>
         {resturant.price} 
       </p>
     </div>
   </div>
 </div>
</div> */}