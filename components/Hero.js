import React from 'react'
import Image from 'next/image'
import TerracesHero from '../public/images/terracesHero.jpg'

const Hero = () => {
  return (
    <div>
        <div className='mx-auto w-10/12 mt-6 text-zero md:w-9/12 md:mt-10 lg:w-4/12'>
            <Image
                src={TerracesHero}
                alt="travelHero.jpg"
                className='rounded-3xl'
            />
        </div>
    </div>
  )
}

export default Hero