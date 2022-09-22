import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Input = () => {
  return (
    <div>
        <div>
            <form>
                <div class="relative mt-4">
                    <input
                        type="search"
                        id="search"
                        className="flex mx-auto p-4 pr-36 text-sm md:pr-96 md:text-base text-gray-900 bg-gray-50 rounded-3xl border border-gray-400 focus:ring-brightViolet focus:border-brightViolet dark:bg-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-brightViolet dark:focus:border-brightViolet"
                        placeholder="Search"
                        required
                    />
                    <button
                        type="submit"
                        className="  text-brightViolet font-semibold absolute right-9 bottom-2.5 md:right-24 lg:right-656 xl:right-896 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-2xl text-sm px-4 py-2"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5'></FontAwesomeIcon>
                    </button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Input