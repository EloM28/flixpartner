'use client'
import { SessionContext } from '@/app/ui/context/auth'
import React, {useContext, useEffect, useState} from 'react'

function PromoCode() {
    const { session } = useContext(SessionContext)
    const [promoCode, setPromoCode] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [copy, setCopy] = useState(false)    
    const reg = /^[A-Z0-9\W]+/

    const handleSendCode = async(e) =>{
        if (promoCode){
            e.preventDefault()
            setLoading(true)
            if (!reg.test(promoCode)) {
                setError(true)
                setLoading(false)
                setSuccess("The referral code must not have whitespace and must be in UpperCase, Please try again")
                const timer = setTimeout(() => {
                    setSuccess('')
                    setError(false)
                }, 4000)

                return () => clearTimeout(timer)
            } else {
               try {
                const user = session?.user
                const email = session?.email
                const requestOptions ={
                    method : 'POST',
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body : JSON.stringify({
                        user,
                        email,
                        promoCode
                    })
                }
                const res = await fetch('/client/api/promo-code', requestOptions)
                if (res){
                    const response = await res.json()
                    if (response.message == "Success") {
                        setCopy(true)
                        setSuccess('Referral Code created successfully')
                        const timer = setTimeout(()=>{
                            setSuccess('')
                        }, 4000)
                        return () => clearTimeout(timer)
                    } else if (response.message == 'errorCode') {
                        setError(true)
                        setSuccess('Referral code already exist')
                        const timer = setTimeout(()=>{
                            setSuccess('')
                            setError(false)
                        }, 4000)
                        return () => clearTimeout(timer)
                    } else {
                        setError(true)
                        setSuccess('Referral code creation failed')
                        const timer = setTimeout(()=>{
                            setSuccess('')
                            setError(false)
                        }, 4000)
                        return () => clearTimeout(timer)
                    }
                } else { 
                    setError(true)
                    setSuccess('Referral code creation failed, Please try again later')
                    const timer = setTimeout(()=>{
                        setSuccess('')
                        setError(false)
                    }, 4000)
                    return () => clearTimeout(timer)
                }
            } catch (error) {
                setError(true)
                console.log('firsterror', error)
                setSuccess('Referral code creation failed')
                const timer = setTimeout(()=>{
                    setSuccess('')
                    setError(false)
                }, 4000)
                return () => clearTimeout(timer)
            } finally {
                setLoading(false)
            }   
            }
        }
    }

  return (
    <section className="p-4 flex flex-col items-center mt-20">
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md px-4 py-8 bg-blue-400 rounded-lg shadow-lg sm:px-6 md:px-8 lg:px-10">
                <span className={`${error ? "text-red-500" : "text-green-500"}`}>{success}</span>
                <h1 className="text-xl font-bold mb-4 text-white">Referral code</h1>
                <p className="text-white">Enter your code which is composed of capital letters and special characters.</p>   

            <div className="w-full max-w-sm mt-7">
                <div className="flex items-center w-full">
                    <input type="text" value={promoCode} onChange={(e)=>{setPromoCode(e.target.value)}} placeholder="Enter promo code" className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <button onClick={handleSendCode} className="flex items-center justify-center w-24 h-10 bg-white text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                        {/* <img src="/images/send.png" alt="Envoyer" className="w-10 h-10"/> */}
                        { loading? 'Creating...' : 'Create' }
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
