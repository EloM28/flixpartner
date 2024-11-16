'use client'
import React, { useState, useContext, useEffect } from 'react'
import { SessionContext } from '../../context/auth'

const SharingVideoTable = () => {
    const session = useContext(SessionContext)
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        async function fetchDatas(){
            try {
                const user = session.session?.user
                const res = await fetch('/client/api/Dashboard/sharing-video', {
                    headers : {
                        user : user
                    }
                })
                const response = await res.json()
                if (response) {
                    setDatas(response.datas)
                } else {
                    console.log('Data not found')
                }
            } catch (error) {
                console.log('Error server', error)
            }
        }
        fetchDatas()
    }, [session])
  return (
    <div>
      <div>
      <div className='flex items-center justify-center from-purple-100 via-purple-200 to-purple-300 bg-gradient-to-br md:mt-16 pb-24 md:pb-5'>

            <div className="flex min-h-[650px] w-full">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
                    <div className='flex justify-end mt-6 md:pt-3'>
                        <a
                        href="/client/dashboard/sharing-video/search-video"
                        className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-xl text-3xl px-10 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        +
                        </a>
                    </div>
                    <div className="overflow-x-auto overflow-y-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        
                        <tr>
                            <th>#</th>
                            <th scope="col" className="py-3 px-10 md:px-10 lg:px-16 xl:px-20">Video</th>
                            <th scope="col" className="py-3 px-4 md:px-10 lg:px-14 xl:px-20">Days</th>
                            <th scope="col" className="py-3 px-4 md:px-10 lg:px-14 xl:px-20">Price</th>
                            <th scope="col" className="py-3 px-6 md:px-10 lg:px-14 xl:px-20">State</th>
                        </tr>
                        </thead>
                        <tbody>
                        {datas && 
                        datas.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">{index + 1}</td> 
                                <td className="py-4 px-6">{item.title}</td>
                                <td className="py-4 px-6">{item.days}</td>
                                <td className="py-4 px-6">{item.price}</td>
                                <td className="py-4 px-6">pending</td> 
                            </tr>
                        )    
                       
                    ) 
                    }
                        </tbody>
                    </table>
                    </div>
            </div>

            </div>
</div>
    </div>
    </div>
  )
}

export default SharingVideoTable

