"use client"
import { SessionContext } from "../../../context/auth";
import { useState,useRef,useContext,useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const  ViewCode=({ code })=>{
    const { session } = useContext(SessionContext)
    const searchParams = useSearchParams()
    const { push } = useRouter();
    const [success, setSuccess] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputField = useRef(null);
    const reg = /^[A-Z0-9\W]+/
    
    const handleCopy = () => {
        // Copy the URL to the clipboard
        // console.log('promo', inputField.current.value)
        navigator.clipboard.writeText(promoCode);
        setIsCopied(true);
    
        // Reset the copied state after a certain duration
        setTimeout(() => {
          setIsCopied(false);
        }, 4000);
      };
    const handleChange = async(e) => {
        e.preventDefault()
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
                    method : 'PUT',
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
                if (res) {
                    const response = await res.json()
                    if (response.message == "Success") {
                        setSuccess('Referral code changed successfully')
                        setTimeout(()=>{
                            setSuccess('')
                        }, 4000)
                        const params = new URLSearchParams(searchParams)
                        params.set('code', promoCode)
                        push(`/client/dashboard/parrainage/view-code-promo?${params.toString()}`)
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
                        setSuccess('Referral code modification failed')
                        const timer = setTimeout(()=>{
                            setSuccess('')
                            setError(false)
                        }, 4000)
                        return () => clearTimeout(timer)
                    }
                } else { 
                    setError(true)
                    setSuccess('Referral code modification failed, Please try again later')
                    const timer = setTimeout(()=>{
                        setSuccess('')
                        setError(false)
                    }, 4000)
                    return () => clearTimeout(timer)
                }
            } catch (error) {
                console.log('Error', error)
                setError(true)
                setSuccess('Modification failed')
                const timer = setTimeout(() => {
                    setSuccess('')
                    setError(false)
                }, 4000)
    
                return () => clearTimeout(timer)
            } finally {
                setLoading(false)
            }

        }
    }
    useEffect(()=>{
        const code = searchParams.get('code')
        setPromoCode(code)
    },[session, searchParams])
    return(
        <>
    <section className="p-4 flex flex-col items-center mt-20">
    <div className="flex justify-center items-center">
            <div className="w-full max-w-md px-4 py-8 bg-blue-400 rounded-lg shadow-lg sm:px-6 md:px-8 lg:px-10">
                <h1 className="text-xl font-bold mb-4 text-white">Referral Code</h1>
                <p className="text-white">You can copy your referral code by clicking the copy button and share it with your referrals.</p>
        <span className={`${error ? "text-red-500" : "text-xl font-bold text-white"}`}>{success}</span>        
        <div className="w-full max-w-sm mt-7">
            <div className="flex items-center">
            <button onClick={handleCopy} data-tooltip-target="tooltip-url-shortener" data-copy-to-clipboard-target="url-shortener" className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600" type="button">
                    <span id="default-icon">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                    <span id="success-icon" className="hidden inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </button>
                <div className="relative w-full">
                    <input id="url-shortener"  type="text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={promoCode} onChange={(e)=>{setPromoCode(e.target.value)}} placeholder="Type your code"/>
                </div>
                <button onClick={handleChange} className=" flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-600 dark:bg-blue-600 border hover:bg-blue-800 dark:hover:bg-blue-700 rounded-r-lg border-blue-600 dark:border-blue-600 hover:border-blue-700 dark:hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Change</button>
              {/*  <div id="tooltip-url-shortener" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span id="default-tooltip-message">Copy link</span>
                    <span id="success-tooltip-message" className={`${!isCopied && "hidden"}`}>Copied!</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}
            </div>
            <span id="success-tooltip-message" className={`${!isCopied && "hidden"}`}>Copied!</span>
            <p id="helper-text-explanation" className="mt-2 text-sm text-white dark:text-gray-400">Make sure that your code is valid</p>
        </div>

        </div>
        </div>
      </section>
    </>
    )
}
export default ViewCode