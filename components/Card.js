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
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>    
        
        <div>
            <CardProps 
                img={SingaporePortrait}
                country=" SINGAPORE"
                place="Marina Bay Sands"
                date="26 Jan, 2015 -  30 Jan, 2015"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>    

              
        <div>
            <CardProps 
                img={BoholPortrait}
                country=" PHILIPPINES"
                place="Bohol"
                date="26 July, 2019 -  30 July, 2019"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>   

        <div>
            <CardProps 
                img={HongkongPortrait}
                country=" HONGKONG"
                place="HongKong Skyline"
                date="26 July, 2019 -  30 July, 2019"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>  

        <div>
            <CardProps 
                img={CebuPortrait}
                country=" PHILIPPINES"
                place="Cebu Mactan"
                date="26 July, 2019 -  30 July, 2019"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>    

        <div>
            <CardProps 
                img={ThailandTemple}
                country=" THAILAND"
                place="Thailand Temple"
                date="1 Jan, 2019 -  4 Jan, 2019"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            />
        </div>  
    </div>
  )
}

export default Card