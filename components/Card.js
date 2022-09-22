import React from 'react'
import Link from 'next/link';
import CardProps from './CardProps'
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";

const Card = () => {
  return (
    <div>
        <div>
            <CardProps 
                img={HongkongPortrait}
                country=" HONGKONG"
                place="HongKong Skyline"
                date="12 Jan, 2021 - 24 Jan, 2021"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>    
    </div>
  )
}

export default Card