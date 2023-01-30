import React from 'react'
import Image from 'next/image'
import PizzahutImg from './PizzaHutLogo.png'

type IconProps = {
    classes: string,
    sources: any,
}


export default function PizzaHutImage({ classes, sources }: IconProps) {
  return (
    <Image src={sources} className={classes} alt="" />
  )
}
