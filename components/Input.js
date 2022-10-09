import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Input = () => {
  return (
    <div>
        <div>
            <form className="flex justify-center items-center mt-4">   
                <label for="simple-search" className="sr-only">Search</label>
                <div class="relative w-80 md:w-9/12 lg:w-4/12">
                    <button type='submit' className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-brightViolet">
                          <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5'></FontAwesomeIcon>
                    </button>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
                </div>
            </form>
            <h1 className="flex justify-center mt-5  text-center font-medium text-slate-500 font-Poppins text-lg">It is more fun to explore...</h1>

      </div>
    </div>
  )
}

export default Input