'use client'
import React, {useState} from 'react'

function PromoCode() {
    const [promoCode, setPromoCode] = useState('')

    const handleSendCode = async() =>{
        console.log('first')
    }
  return (
    <section className="p-4 flex flex-col items-center mt-20">
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md px-4 py-8 bg-blue-400 rounded-lg shadow-lg sm:px-6 md:px-8 lg:px-10">
                <h1 className="text-xl font-bold mb-4 text-white">Referral code</h1>
                <p className="text-white">Enter your code which is composed of capital letters and special characters.</p>   

            <div className="w-full max-w-sm mt-7">
                <div className="flex items-center w-full">
                    <input type="text" value={promoCode} onChange={(e)=>{setPromoCode(e.target.value)}} placeholder="Enter promo code" className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <button onClick={handleSendCode} className="flex items-center justify-center w-24 h-10 bg-white text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                        <img src="/images/send.png" alt="Envoyer" className="w-10 h-10"/>
                    </button>
                </div>
                <p className="mt-2 text-sm text-white dark:text-gray-400">Make sure that your code is valid</p>
            </div>

            </div>
        </div>
    </section>
  )
}

export default PromoCode
