import React from 'react'
import CardProps from './CardProps'
import HongkongPortrait from "../public/images/hongkongPortrait.jpg";
import BoracayPortrait from "../public/images/boracayPortrait.jpg";
import BoholPortrait from '../public/images/boholPortrait.jpg'
import SingaporePortrait from '../public/images/singaporePortrait.jpg'
import CebuPortrait from '../public/images/cebuMactan.jpg'
import ThailandTemple from '../public/images/thailandTemple.jpg'

const Card = () => {
  return (
    <div className='lg:flex lg:flex-wrap lg:justify-center'>
        <div>
            <CardProps 
                img={BoracayPortrait}
                country=" PHILIPPINES"
                place="Boracay"
                date="26 July, 2014 -  30 July, 2014"
                description="Boracay is one of the best beaches in the world and a place to go for vacation! It is a go to destination with family and friends. A one for the books and beyond!"
            />
        </div>    
        
        <div>
            <CardProps 
                img={SingaporePortrait}
                country=" SINGAPORE"
                place="Marina Bay Sands"
                date="26 Jan, 2015 -  30 Jan, 2015"
                description="Marina Bay Sands, one of the finest city in the world. You are so clean and beautiful to scroll through. There is a Merlion statue which is iconic to the people!"
            />
        </div>    

              
        <div>
            <CardProps 
                img={BoholPortrait}
                country=" PHILIPPINES"
                place="Bohol"
                date="26 July, 2019 -  30 July, 2019"
                description="Bohol, you are like the kisses dessert. Knowned as the Chocolate Hills. It is one of a kind place where you see many mountains sitting and relaxing. Iconic!"
            />
        </div>   

        <div>
            <CardProps 
                img={HongkongPortrait}
                country=" HONGKONG"
                place="HongKong Skyline"
                date="26 July, 2019 -  30 July, 2019"
                description="Hongkong! Finally, we meet again after a long time. I remember the time where I did a spiderman pose on the sidewalk of the city. Till next time!"
            />
        </div>  

        <div>
            <CardProps 
                img={CebuPortrait}
                country=" PHILIPPINES"
                place="Cebu Mactan"
                date="26 July, 2019 -  30 July, 2019"
                description="Cebu, what a beautiful place for adventure and journey. I remember the famous Cebu Puso rice you have and the wonderful city and welcoming people."
            />
        </div>    

        <div>
            <CardProps 
                img={ThailandTemple}
                country=" THAILAND"
                place="Thailand Temple"
                date="1 Jan, 2019 -  4 Jan, 2019"
                description="Thailand! A beautiful gem of a country. A rich historic culture. There's a floating market where you see the hardworking people of Thailand selling their goods."
            />
        </div>  
    </div>
  )
}

export default Card
