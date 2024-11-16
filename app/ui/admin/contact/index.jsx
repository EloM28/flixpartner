"use client"
import React,{useState,useEffect} from 'react'

const ContactDashAdmin = () => {
  const [data,setData]=useState([])
  const FetchData=async()=>{   
    try{
      const res = await fetch('/admin/api/contact');
      const datas=await res.json()
      if(!datas.error){
       setData(datas.result)
       console.log(datas.result)
      }
      
    }
    catch(error){
     console.log('error');
    }
  
  }
  
  useEffect(()=>{
  FetchData()
  },[])
  return (
    <div>
        <div className='flex min-h-screen  min-h-screen from-purple-100 via-purple-200 to-purple-300 bg-gradient-to-br mt-8 md:mt-16 pb-24 md:pb-5 overflow-y-auto  overflow-x-auto'>

<div className="flex min-h-[650px] w-[100%]">

    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-[100%]">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            
            <tr>
                <th>#</th>
                <th scope="col" className="py-3 px-10 md:px-10 lg:px-20 text-sm md:text-lg font-bold">User</th>
                <th scope="col" className="py-3 px-10 md:px-14 lg:px-20 text-sm md:text-lg font-bold">Email</th>
                <th scope="col" className="py-3 px-12 md:px-16 lg:px-28 text-sm md:text-lg font-bold">Message</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((item,index=0)=>(    
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <td className="py-4 px-6">{index+1} </td>
                <td className="py-4 px-10 md:px-10 lg:px-20 text-sm md:text-lg">{item.name}</td>
                <td className="py-4 px-10 md:px-14 lg:px-20 text-sm md:text-lg">{item.email} </td>
                <td className="py-4 px-12 md:px-16 lg:px-28 text-sm md:text-lg">{item.message}</td>
                
            </tr>
                  ))}  
            </tbody>
        </table>
        </div>
</div>

</div>
      </div>
    </div>
  )
}

export default ContactDashAdmin
