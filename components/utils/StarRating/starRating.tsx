import React from 'react'
import StarIcon from '../../icons/starIcon';

export default function starRating() {
  return (
    <div className='flex'>
        <StarIcon classes="h-3 w-3 fill-[#FDB414] mr-1 mt-[0.15rem]" />
        <StarIcon classes="h-3 w-3 fill-[#FDB414] mr-1 mt-[0.15rem]" />
        <StarIcon classes="h-3 w-3 fill-[#FDB414] mr-1 mt-[0.15rem]" />
        <StarIcon classes="h-3 w-3 fill-[#e9e9e9] mr-1 mt-[0.15rem]" />
        <StarIcon classes="h-3 w-3 fill-[#e9e9e9] mr-1 mt-[0.15rem]" />
    </div>
  )
}
