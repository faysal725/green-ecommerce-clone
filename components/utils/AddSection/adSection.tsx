import React from 'react'
import addImg from '../../images/offerImg.jpg'
import Countdown from "react-countdown";


export default function adSection() {
  console.log(addImg)
  return (
    <div className=' pt-4'>
        <ul className=''>
            <li
              style={{backgroundImage: `url(${addImg.src})`}}
              className='px-3 py-5 mb-3 bg-slate-200 bg-cover bg-center bg-no-repeat drop-shadow-lg'>
                <h1 className='text-lg font-bold text-pink-500'>Save up to</h1>
                <p className='text-5xl font-extrabold text-pink-600 mb-2'> 50%</p>
                <Countdown date={Date.now() + 5000} className="text-lg font-bold text-red-600 " />
            </li>


            <li
              style={{backgroundImage: `url("https://img.freepik.com/free-photo/top-view-cooked-dough-with-sauce-meat-dark-desk-dough-dark-pasta-dish_140725-82225.jpg?w=740&t=st=1674279910~exp=1674280510~hmac=e6ea0ebf37b26d0b49b01de87b068f3e5bbc49fa941f0a249fffcb267ed44165")`}}
              className='px-3 py-5 mb-3 bg-slate-200 bg-cover bg-center bg-no-repeat drop-shadow-lg'>
                <h1 className='text-sm font-medium text-white'>Food You Cant Resist</h1>
                <p className='text-2xl font-extrabold text-white mb-2'> TK 200 OFF</p>
            </li>


            <li
              style={{backgroundImage: `url("https://img.freepik.com/free-photo/3d-render-money-transfer-mobile-banking-online_107791-16729.jpg?size=626&ext=jpg&uid=R89490391&ga=GA1.1.304422270.1673157071&semt=ais")`}}
              className='px-3 py-5 mb-3 bg-slate-200 bg-cover bg-top  bg-no-repeat drop-shadow-lg'>
                
                <p className='text-xl font-extrabold  text-pink-500'>UPTO TK 200 OFF</p>
                <h1 className='text-sm font-medium text-pink-500'>With Digital Payments.</h1>
            </li>
        </ul>
    </div>
  )
}
