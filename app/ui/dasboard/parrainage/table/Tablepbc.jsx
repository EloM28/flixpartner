import React from 'react'

const Tablepbc = () => {
  return (
    <div>
      <div className='flex min-h-screen  min-h-screen from-purple-100 via-purple-200 to-purple-300 bg-gradient-to-br mt-8 md:mt-16 pb-24 md:pb-5 md:ml-16 w-120 overflow-y-auto  overflow-x-auto'>

<div className="flex min-h-[650px]">

    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            
            <tr>
                <th>#</th>
                <th scope="col" className="py-3 px-6">file</th>
                <th scope="col" className="py-3 px-6">invoice by</th>
                <th scope="col" className="py-3 px-6">state</th>
                <th scope="col" className="py-3 px-6">Number of views / total views</th>
                <th scope="col" className="py-3 px-6">Number of clicks / total clicks</th>
            </tr>
            </thead>
            <tbody>
            
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                
            </tr>
            </tbody>
        </table>
        </div>
</div>

</div>
      </div>
    </div>
  )
}

export default Tablepbc

