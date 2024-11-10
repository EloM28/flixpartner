import React from 'react'

const Validvideo = () => {
  return (
    <div>
     
        <div className='bg-white pt-10 flex justify-center bg-gray-100'> 
            <form className='ml-4 mr-4 lg:mr-20 lg:ml-20 mb-10'>
                <div className='space-y-6 md:space-y-0 md:flex md:space-x-20'>
                <div>
                    <div class="mb-5">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video Name</label>
                        <input type="text" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <input type="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                        <input type="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>
                <div>
                    <div className="w-full max-w-xs">
                        <video className="rounded-lg shadow-lg" controls>
                            <source src="" type="" />
                        </video>
                    </div>
                </div>
                </div>
                <div className='flex items-center justify-center my-10'>
                <   button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Valid</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Validvideo
