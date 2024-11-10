"use client";
import { React, useState, useEffect, useRef, useContext } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import AffiliateAction from "./actions-affiliate";
import AffiliateTable from "./table-affiliate";
import { SessionContext } from "../../../context/auth";

const Affiliate = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { session } = useContext(SessionContext)
  const detailsRef = useRef(null)
  const [success, setSuccess] = useState('')
  const [code, setCode] = useState('')
  const [displayMoDetail, setDisplayMoDetail] = useState(false)
  const [showAction, setShowAction] = useState(false)
  const [error, setError] = useState(false)
  const [viewCode, setViewCode] = useState(false)

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setDisplayMoDetail(false);
    }
  }; 
  const closeModalAction = ()=>{
      setShowAction(false);
  }
  
  const handleViewCode = async(key, value) => {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    push(`/client/dashboard/parrainage/view-code-promo?${params.toString()}`)
  }
  useEffect(() => {
    if (displayMoDetail) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayMoDetail]);
 
  useEffect(() => {
    const fetchdata = async () => {
        try {
            const user = session?.user
            const res = await fetch('/client/api/promo-code/', {
              method : "GET",
              headers : {
                user
              }
            })
            if (res) {
              const data = await res.json()
              if (data.Success) {
                setViewCode(true)
                setCode(data.data.codepromo)
              } else {
                setViewCode(false)
              }
            } 
        } catch (error) {
          setError(true)
          setSuccess('Getting referral code fail')
        }
    }
    fetchdata()
  }, [session])

  

  return (
    <div className="relative rounded-md bg-white md:mt-10 pt-10 w-full">
      <div className="flex justify-end mr-2 mb-3">
        {viewCode ? 
        <button onClick={() => handleViewCode('code', code)} className="bg-transparent hover:bg-blue-300 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">View code</button>
        : <Link href='/client/dashboard/parrainage/code-promo/' className="bg-transparent hover:bg-blue-300 text-blue-300 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">Create code promo</Link>
        }
      </div>
      <div className="w-[100%] h-[100%]">
        {showAction && (
          <AffiliateAction
            closeModalAction={closeModalAction}
          />
        )}
      </div>
      <div className="w-[100%] h-[100%]">
    
      </div>
      <div className="w-[100%] h-[100%]">
        <div className="w-full">
          <div className="container flex flex-col space-y-1 mx-auto">
            <div className="h-[27rem] md:h-[36rem]  xl:h-[31rem] overflow-y-scroll lg:overflow-y-scroll">
              <table id="example" className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-start py-2 border bg-blue-300">Action</th>
                    <th className="text-start py-2 border bg-blue-300 p-2">#</th>
                    <th className="text-start py-2 border bg-blue-300 p-2">Code</th>
                    <th className="py-2 text-start border bg-blue-300 p-2">Users</th>
                    <th className="text-start py-2 border bg-blue-300 p-2"> Price</th>
                  </tr>
                </thead>
                <tbody>         
                <tr>
                        <AffiliateTable
                          id={1}
                          code={"ERIC"}
                          users={"eric@gmail.com"}
                          price={"1000"}
                        />
                      </tr>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
