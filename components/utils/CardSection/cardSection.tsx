import React, { useEffect, useState } from 'react'
import Card from './card'
import ScrollSearchBar from '../ScrollSearchBar/scrollSearchBar'
import AdSection from '../AddSection/adSection'
import Image from 'next/image'
import StarIcon from "../../icons/starIcon"
import FoodIcon from '../../icons/foodIcon'
import ImageResizer from '../../images/ImageResizer'
import PizzaHutLogo from '../images/PizzaHutLogo.png'
import Filter from '../Filter/filter'
import ShowDetails from '../ShowDetails/showDetails'

export default function cardSection() {
  const [selectedFood, setSelectedFood] = useState<Object>({})
  const [detailsView, setDetailsView] = useState<Boolean>(false)


  
  useEffect(() => {
    if (Object.keys(selectedFood).length > 0) {
      setDetailsView(true)
    } else{
      setDetailsView(false)
    }
  }, [selectedFood])

  const resturants = [
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry', 'fried rice'],
      logoImg: "https://pngimg.com/d/kfc_PNG44.png",
      foodImg: [
        "https://media.istockphoto.com/id/463123467/photo/plant-isolated-in-the-pot.jpg?b=1&s=170667a&w=0&k=20&c=hxCr9oh129ObeMtfIfrGPUKYv7g8AWIXw1fxuIDQxRM=",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg"
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' KFC',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://tastytreatbd.com/images/logos/16/T.T-Logo-400X160-pix.jpg",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/nandos.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/nandos.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/nandos.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: 'Domino',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage.png",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage.png",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage.png",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/Normas.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    },
    {
      name: ' Pizza Hut',
      foodName: ['french fry', 'burger', 'chicken fry'],
      logoImg: "https://w7.pngwing.com/pngs/1002/138/png-transparent-burger-king-logo-hamburger-burger-king-logo-restaurant-burger-king-text-fast-food-restaurant-signage.png",
      foodImg: [
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
        "https://marketplace.foodotawp.com/wp-content/uploads/2021/04/monal.jpg",
      ],
      price: '180',
      discount: '50%',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quaerat a facere debitis officia error quas mollitia magni laborum vel qui, nemo odio? Eligendi error hic explicabo debitis! Atque, mollitia.',
      location: 'Karwanbazar',
      timeRequired: '30',
      distance: '02 KM',
      rating: 3.2,
      ratingAmount:233,
      logo: <FoodIcon classes="h-10 w-10 fill-current text-[#ea4335]"/>,
    }
  ]

  return (
      <div className="grid grid-cols-12">
        <div className='col-span-2'>
          <Filter />
        </div>
        <div className='col-span-7 p-5 '>
          <ScrollSearchBar />
          <ul role="list" className='grid gap-4 w-full justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 pt-4 px-2'>
              {resturants.map((data) => (
                <Card key={Math.random()} resturant={data} chosenItem={selectedFood} setChosenItem={setSelectedFood} />
              ))}
          </ul>
        </div>
        <div className='col-span-3 p-5 px-8 border-l'>
          <ShowDetails details={selectedFood} emptyDetails={setSelectedFood} showDetails={detailsView} setShowDetails={setDetailsView}/>
        </div>
      </div>
  )
}
