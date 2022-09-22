import React from 'react'
import CardProps from './CardProps'
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";
import BoracayPortrait from "../public/images/boracayPortrait.jpg";

const Card = () => {
  return (
    <div className='lg:flex lg:flex-wrap lg:justify-center'>
        <div>
            <CardProps 
                img={BoracayPortrait}
                country=" PHILIPPINES"
                place="Boracay"
                date="26 July, 2014 -  30 July, 2014"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>    
        
        <div>
            <CardProps 
                img={HongkongPortrait}
                country=" HONGKONG"
                place="HongKong Skyline"
                date="26 Jan, 2016 -  30 Jan, 2016"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>    
    </div>
  )
}

export default Card