import React from 'react'
import hero from "../../images/hero-desktop.jpg";
import heroMob from "../../images/hero-mobile.jpg";

export default function RightSection() {
  return (
    <div className='h-full md:w-full w-full  flex justify-center items-center'>
      <picture>
        <source media="(max-width: 770px)" srcSet={heroMob} />
        <img src={hero} alt="img" className='md:h-screen w-screen md:w-screen' />
      </picture>
    </div>
  )
}
