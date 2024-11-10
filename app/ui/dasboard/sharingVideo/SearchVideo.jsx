import React from 'react'

const SearchVideo = () => {
  return (
    <div className=''>
      <div className='pt-10 flex justify-center h-screen bg-gray-100 mt-16'>
        <div class="flex flex-col space-y-4 ml-4 mr-4 md:ml-14 md:mr-14 lg:ml-20 lg:mr-20">
            <div>             
                <form class="max-w-md mx-auto">   
                    <label htmlFor="" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Video......" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col overflow-y-auto">
                <div className='m-10 space-y-4'>
                <div className='lg:flex lg:space-x-10 space-y-2 lg:space-y-0'>
                <a href='/dashboard/sharingVideo/validVideo'>
                    <div className="w-full max-w-xs">
                        <video className="rounded-lg shadow-lg" controls>
                            <source src="" type="" />
                        </video>
                    </div>
                </a>
                <div>Video Name</div>
                </div>
                <div className='lg:flex lg:space-x-10 space-y-2 lg:space-y-0'>
                <a href='/dashboard/sharingVideo/validVideo'>
                    <div className="w-full max-w-xs">
                        <video className="rounded-lg shadow-lg" controls>
                            <source src="" type="" />
                        </video>
                    </div>
                </a>
                <div>Video Name</div>
                </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchVideo
