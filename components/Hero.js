import React from 'react'
import Image from 'next/image'
import BoholLake from '../public/images/boholLake.jpg'


const Hero = () => {
  return (
    <div>
        <div className='mx-auto w-10/12 mt-6 text-zero md:w-9/12 md:mt-10 lg:w-4/12'>
            <Image
                src={BoholLake}
                alt="travelHero.jpg"
                className='rounded-3xl'
            />
        </div>
    </div>
  )
}

export default Hero