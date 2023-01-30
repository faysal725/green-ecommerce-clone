import React from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import SearchIcon from '../../icons/searchIcon';

export default function scrollSearchBar() {
  const [verticalScroll, setVerticalScroll] = useState<number>()

  useEffect(() => {
    const handleScroll = (event) => {
      setVerticalScroll(window.scrollY)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div  
    // className={`flex justify-center bg-white sticky top-0 z-10 w-full ${(verticalScroll >280) ? "block" : "hidden" }`}>
    <div  
    className={`flex flex-col justify-center bg-white  top-0 z-10 w-full sticky`}>
        <div className="relative rounded-md flex w-full flex-col mt-2">
          <div className="pointer-events-none absolute flex items-center top-4 left-6">
            <SearchIcon classes="h-4 w-4 fill-gray-500  stroke-1"/>
          </div>
          <input
          type="text"
          name="text"
          id="searchFor"
          className="block w-full rounded-md px-4 py-3 pl-14	 text-sm text-gray-900 placeholder-gray-500/60 
          h-10 ring-gray-600/10
          bg-slate-100/40 focus:border-none
          focus:outline-none focus:ring-1 focus:ring-gray-600/30
          shadow-2xl
          sm:shadow-none
          peer"
          placeholder="Monstera"
          />
          <p className='mt-5 font-normal text-gray-500/60 text-sm  '>Search result for <q className='text-slate-700/90 font-semibold'>Monstera</q></p>
        </div>

                  
          {/* sort section  */}
          <div className='flex gap-6 my-6 items-center text-gray-500 text-sm'>
            <span>Sort</span>

            <div className='flex gap-2 flex-wrap '>
              <button className=' bg-green-600 text-white text-xs h-7 rounded-lg font-normal hover:bg-green-800 px-4 '>Relevance</button>
              <button className='text-gray-500/90  bg-white text-black text-xs h-7 rounded-lg font-normal hover:bg-green-600 hover:text-white px-4 border'>Popular</button>
              <button className='text-gray-500/90  bg-white text-black text-xs h-7 rounded-lg font-normal hover:bg-green-600 hover:text-white px-4 border'>Most New</button>
              <select className='text-gray-500/90  bg-white text-black text-xs h-7 rounded-lg font-normal hover:bg-green-600 hover:text-white px-4 border' name="" id="">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
    </div>
  )
}
