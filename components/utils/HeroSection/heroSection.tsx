import React from 'react'
import Image from 'next/image'
import MappinIcon from "../../icons/mappinIcon"
import imageBG from '../../images/heroImageHighres.jpg'

export default function heroSection() {

  return (
    <div className="relative bg-gradient-to-r from-[#e7e7e7] to-transparent overflow-hidden mx-auto h-[220px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        
        <Image
        className='absolute w-[100%] lg:w-[66%] right-0 bottom-[-43px] lg:bottom-[-99px] -z-10'
        priority='false'
        src={imageBG}
        alt="Landscape picture"
        />

        <div className='w-[90%] bg-white flex justify-center items-center p-5  min-h-[67px] shadow-none sm:shadow-xl sm:w-[60%]'>
            <div className="sm:flex  w-full">
                
            {/* input for food */}
                <div className="min-w-0 flex-1 relative ">
                    <label htmlFor="food" className="sr-only">
                        food
                    </label>
                    <input
                        id="food"
                        type="food"
                        // placeholder="What do you want to eat"
                        className="block w-full rounded-md px-4 py-3 text-base text-gray-900 placeholder-gray-500 
                        h-[50px] ring-1 ring-gray-300
                        focus:border-none
                        focus:outline-none focus:ring-1 focus:ring-black
                        shadow-2xl
                        sm:shadow-none
                        peer
                        "
                    />
                    <span
                        className='absolute top-[12px] left-[16px] text-gray-500
                        transition scale-100 duration-300 ease-in-out bg-white peer-focus:text-black
                        peer-focus:visible peer-focus:text-xs peer-focus:translate-y-[-20px]
                        peer-focus:transform
                        peer-focus:scale-70
                        '>
                            What do you want to eat
                    </span>
                    <div className='absolute flex flex-col items-center top-[9px] right-[14px]'>
                        <MappinIcon classes="h-6 w-6 fill-current animate-bounce text-[#ea4335]" />
                        <span className='block bg-gradient-to-r from-[#6b72801c] to-gray-200 rounded-full h-2	w-2 skew-y-[37deg] skew-x-[37deg] rotate-[144deg] fallenShadow'></span>
                    </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-sky-700 py-3 px-4 font-medium text-white shadow hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
