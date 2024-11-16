"use client"
import React,{useState,useEffect} from 'react'

const Payments = () => {
  const [data,setData]=useState([])
  const FetchData=async()=>{   
    try{
      const res = await fetch('/admin/api/payments');
      const datas=await res.json()
      if(!datas.error){
       setData(datas.result)
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
      <div className='flex min-h-screen min-h-screen from-purple-100 via-purple-200 to-purple-300 bg-gradient-to-br mt-8 md:mt-16 pb-24 md:pb-5 overflow-y-auto  overflow-x-auto'>

<div className="flex min-h-[650px] w-[100%]">

    <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-[100%]">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            
            <tr>
                <th>#</th>
                <th scope="col" className="py-3 px-6 text-sm xl:text-lg font-bold">transactioncode</th>
                <th scope="col" className="py-3 px-6 text-sm xl:text-lg font-bold">payment method</th>
                <th scope="col" className="py-3 px-6 text-sm xl:text-lg font-bold">Amount</th>
                <th scope="col" className="py-3 px-6 text-sm xl:text-lg font-bold">Payment date</th>
                <th scope="col" className="py-3 px-10 text-sm xl:text-lg font-bold">Pay by</th>
            </tr>
            </thead>
            <tbody>
             {data && data.map((item ,index=0)=>( 
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <td className="py-4 px-6 text-sm xl:text-lg">{index++} </td>
                <td className="py-4 px-6 text-sm xl:text-lg">{item.transactioncode}</td>
                <td className="py-4 px-6 text-sm xl:text-lg">{item.	modepaiement}</td>
                <td className="py-4 px-6 text-sm xl:text-lg">{item.montant}</td>
                <td className="py-4 px-6 text-sm xl:text-lg">{new Date(item.datepaiement).toLocaleDateString()}</td>
                <td className="py-4 px-10 text-sm xl:text-lg">{item.nom} {item.prenom}</td>
                
            </tr>
            )) }
            </tbody>
        </table>
        </div>
</div>

</div>
      </div>
    </div>
  )
}

export default Payments
