import React from 'react'
import Link from 'next/link';
import CardProps from './CardProps'
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";

const Card = () => {
  return (
    <div>
        <div>
        
        {/* Card 1 */}
        <Link href="https://www.google.com/maps/place/Hong+Kong/@22.3962843,114.1246459,11.81z/data=!4m5!3m4!1s0x3403e2eda332980f:0xf08ab3badbeac97c!8m2!3d22.3193039!4d114.1693611" passHref>
            <a target="_blank" rel="noopener noreferrer">
            <CardProps 
                img={HongkongPortrait}
                country=" HONGKONG"
                place="HongKong Skyline"
                date="12 Jan, 2021 - 24 Jan, 2021"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
            </a>
        </Link>

        

        </div>    
    </div>
  )
}

export default Card