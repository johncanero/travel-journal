import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAsia} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div>
        <nav className="bg-cyanColor border-gray-200 px-2 sm:px-4 py-5 md:py-6">
            <div className='flex justify-center'>
                <Link href='' passHref>
                    <a target="_blank" rel="noopener neoreferrer">
                        <div>   
                             <h1 className='flex text-white font-Poppins font-semibold'><FontAwesomeIcon icon={faEarthAsia} className='w-6 mx-2'></FontAwesomeIcon><span className='text-black items-center'>my travel journal.</span></h1>
                        </div>
                    </a>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
