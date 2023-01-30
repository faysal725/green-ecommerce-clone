import React, { useEffect, useState } from 'react'
import StarIcon from "../../icons/starIcon"
import CloseIcon from '../../icons/closeIcon'
import MapPinIcon from '../../icons/mappinIcon';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type dataProps = {
  details: object;
  emptyDetails: object;
  showDetails: boolean
}

export default function showDetails({details, emptyDetails, showDetails} : dataProps) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const {name, foodName, logoImg, foodImg, price, discount,description, location, timeRequired, distance, rating, ratingAmount, logo} = details

  let images = [
    "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
    "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
    "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/nandos.jpg",
  ]
  const [detailImg, setDetailImg] = useState<string>(images[0])
  // const [cardInfo, setCardInfo] = useState<string>(images[0])
  
  // useEffect(() =>{


  // }, [showDetails])

  // console.log(name, foodName, logoImg, foodImg)
  return (

    <div className='overflow-auto h-full flex justify-center'>
            

      <div className={`bg-white rounded transition ease-in-out delay-150 `} data-replace={`${showDetails? "translate-x-0" : "translate-x-72"	}`}
      >

        {/* detail image  */}
        <section className='relative z-10'>

          <div 
            onClick={() => emptyDetails({})}
            className='absolute top-2 right-4 bg-slate-100/70 rounded-xl'>
            <CloseIcon classes="h-6 w-6 fill-slate-600 hover:fill-white m-2 stroke-1" />
          </div>
          {/* <div 
            style={{backgroundImage: `url(${detailImg})`}} 
            className='bg-white bg-cover bg-center bg-no-repeat absolute w-full h-full top-0 -z-50 group-hover:scale-110 transition duration-300 ease-in-out rounded-xl	'>
          </div> */}
          <img className='w-[300px]' src="https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=" alt="" />
        </section>

        {/* showcase  */}
        <section className='flex justify-between my-4'>
          <div 
            onClick={() => setDetailImg(images[0])}
            style={{backgroundImage: `url("https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=")`}}
            className="px-1.5	rounded-xl bg-cover bg-center bg-no-repeat w-14	h-11	hover:-translate-y-1 hover:scale-110 duration-300"
          >
          </div>
          <div 
            onClick={() => setDetailImg(images[0])}
            style={{backgroundImage: `url("https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=")`}}
            className="px-1.5	rounded-xl bg-cover bg-center bg-no-repeat w-14	h-11	hover:-translate-y-1 hover:scale-110 duration-300"
          >
          </div>
          <div 
            onClick={() => setDetailImg(images[1])}
            style={{backgroundImage: `url("https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=")`}}
            className="px-1.5	rounded-xl bg-cover bg-center bg-no-repeat w-14	h-11 hover:-translate-y-1 hover:scale-110 duration-300"
          >
          </div>
          <div 
            onClick={() => setDetailImg(images[2])}
            style={{backgroundImage: `url("https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=")`}}
            className="px-1.5	rounded-xl bg-cover bg-center bg-no-repeat w-14	h-11	transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative"
          >
            <div className='h-full bg-black/20 text-white w-full flex justify-center items-center absolute rounded-xl top-0 left-0 text-xl'>7+</div>
          </div>
          
        </section>

        {/* description  */}
        <section className='mt-9 mb-2'>
          <div>
            <section className='flex flex-col justify-between items-start '>
              <h2 className='text-xl  text-slate-900/90 font-medium	mb-5'>Monstera Deliciosa Variegata (Large)</h2>

              <p className='text-xs text-gray-500	text-justify leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rem sint cum, consectetur nobis voluptates suscipit... 
              <span className='text-green-600 font-bold'>Read More</span>
              </p>
            </section>
          </div>
        </section>

        
      </div>


    </div>
  )
}
