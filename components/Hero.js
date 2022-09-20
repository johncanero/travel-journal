import React from 'react'
import Image from 'next/image'
import TravelHero from '../public/images/travelHero.jpg'
import TerracesHero from '../public/images/terracesHero.jpg'

const Hero = () => {
  return (
    <div>
        <div className='mx-auto w-10/12 mt-6 shadow-lg md:w-10/12 md:mt-10 lg:w-4/12'>
            <Image
                src={TerracesHero}
                alt="travelHero.jpg"
                className='rounded-2xl'
            />
        </div>
    </div>
  )
}

export default Hero