
"use client"
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import FacturePublicite from "./facture";
import Facture from "./facture";
const MethodPayment=({data})=>{
    const router = useRouter();
    const [modepayment,setModePayment]= useState("");
    const [montant, setMontant] = useState(0);
    const [phonenumber,setPhoneNumber]=useState("")
    const [code,setCode]=useState("")
    const [datas, setData]=useState([]);
    const [activeFacture , setActiveFacture]=useState(false)
    const [Activepayment,setActivePayment]=useState(true)
    const [message,setMessage]=useState("")
    const [error, setError] = useState(true)
    const [paymentId,setPaymentId]=useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const clickbouttonEnvoyer=async(code)=>{
    try{ 
      const formData={
        iduser : data[0],
        title : data[3],
        datefin : data[4],
        vidId : data[7],
        days : data[9],
        prixsharing : data[5],
        idpaiement : code,
      }
      

      // Réinitialiser les champs de saisie
      
      const requestOptions = {
        headers : {
            'Content-Type' : 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      };  
      console.log('datas2', requestOptions)
      const res = await fetch('/client/api/Dashboard/sharing-video/ajoute',requestOptions);
      const response= await res.json()
      console.log('respond', response)
      if(response){
        console.log(response)
        if(response.message==="manquantes"){
            setMessage(response.affiche)
          }
          else{
            if(response.message==="correct"){
              setTimeout(()=>{
                setError(false)
                setMessage('Payment and sharing video succed')
              }, 4000)
              
              router.push("/client/dashboard/sharing-video");
            } 
          }
      } 
    } catch (error) {
      console.error("Erreur lors de l'insertion des données :", error);
    } finally {
      setError(true)
      setMessage('')
    }
    }

  const openFacture=()=>{
    setData(data)
    setActiveFacture(true)
    setActivePayment(false)
    }

  const toggleModal = () => {
    setMessage("")
    setPhoneNumber("")
    setCode("")
     setModePayment("Lumicash")
    setIsOpen(!isOpen);
    setMontant(data[5])
  };
  const toggleModal2 = () => {
    setMessage("")
    setPhoneNumber("")
    setCode("")
    setModePayment("Ecocash")
    setIsOpen2(!isOpen2);
    setMontant(data[5])
  };
  const toggleModal3 = () => {
    setMessage("")
    setPhoneNumber("")
    setCode("")
    setModePayment("IHELA")
    setIsOpen3(!isOpen3);
    setMontant(data[5])
  };
  
  const handleChangeMontant = (e) => {
      setMontant(e.target.value);
  };
  const Payer = async(e) => {
    e.preventDefault();
      
     const formData={
         modepayment,
         prix:data[5],
         number:phonenumber,
        code,
        user:data[0]
      }
   
     if(!modepayment || data[5]==0 || !data[0] || !phonenumber){
      setMessage("absence of some datas ")
    }
    else{
      setMessage("")
      const requestOptions = {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };
      console.log('mode ', requestOptions)
    
      const res = await fetch('/client/api/Dashboard/sharing-video/paye/',requestOptions);
      const datas= await res.json()
    
      if(res){
        if(datas.message==="manquantes"){
            setMessage(datas.affiche)
          } else {
            if(datas.message==="correct"){
                const codepaiement=datas.code
                setPaymentId(codepaiement)
                clickbouttonEnvoyer(codepaiement)
            } 
          }
    }
   }
  }
  useEffect(()=>{
  },[paymentId])
    return (
         <>
         {activeFacture && <Facture formdata={data}/>}
        {Activepayment &&
        <div className="w-full">
        <div className='flex items-center justify-center w-full'>
          <div className='flex space-x-4 md:space-x-20 w-full'>
            <div className='flex min-h-screen mt-8 md:mt-16 pb-24 md:pb-5 bg-white overflow-y-auto overflow-x-auto w-full'>
              <div className="flex min-h-[650px] w-full">
                <div className="relative shadow-md sm:rounded-lg w-full">
                <button onClick={openFacture}
                        className="flex items-center px-2 m-1  hover:text-white rounded hover:bg-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12H3m0 0l6-6m-6 6l6 6"
                          />
                        </svg>
                    </button>
                  <div className='flex justify-center items-center mt-4 font-bold text-xl'>Pay by</div>
                  <div className='md:flex justify-center items-center md:space-x-4 lg:space-x-10 mt-10'>
                      <div className='flex justify-center items-center'>
                          <button
                              onClick={toggleModal}
                              >
                             <div className="flex justify-center items-center bg-gray-100 hover:p-4 hover:bg-yellow-300">
                              <img src="/images/lumicash.png" alt="Description de l'image" className="smd:max-w-full md:h-32 lg:h-48 rounded-lg shadow-lg" />
                             </div>
                          </button>
                      </div>
                          <div className='flex justify-center items-center'>
                                <button
                                  onClick={toggleModal2}
                                >
                                 <div className="flex justify-center items-center bg-gray-100 hover:p-4  hover:bg-gray-200">
                                  <img src="/images/ecocash.png" alt="Description de l'image" className="max-w-full md:h-32 lg:h-48 rounded-lg shadow-lg" />
                                 </div>
                              </button>
                          </div>
                          <div className='flex justify-center items-center'>
                                <button
                                  onClick={toggleModal3}
                                >
                                 <div className="flex justify-center items-center bg-gray-100 hover:p-4  hover:bg-gray-200">
                                  <img src="/images/ihela3.png" alt="Description de l'image" className="max-w-full md:h-32 lg:h-48 rounded-lg shadow-lg" />
                                 </div>
                              </button>
                          </div>
                  </div>
                </div>
              </div>
            </div>
              
                {/* Modal */}
                {isOpen && (
                  <div className="fixed md:z-10 inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-screen">
                          <div className="bg-blue-500 w-full md:w-2/3 lg:w-1/2 p-6 rounded shadow-md">
                            <div className="flex justify-end">
                                  {/* Close Button */}
                                  <button
                                      onClick={toggleModal}
                                      className="text-gray-700 hover:text-red-500 mt-4"
                                  >
                                      <svg
                                          className="w-6 h-6"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"
                                          ></path>
                                      </svg>
                                  </button>
                            </div>
                            <div className="flex items-center justify-center">
                              {/* Author: FormBold Team */}
                              <div className="mx-auto w-full max-w-[550px] flex justify-center items-center">
                                  <form onSubmit={Payer}>
                                    {message && <span className={`${error ? "text-red-400 font-bold text-2xl" : "text-green-400 font-bold text-2xl"}`}>{message}</span>}
                                   <div className="flex justify-center items-center mb-5">
                                     <img src="/images/lumicash.png" alt="Description de l'image" className="max-w-full h-24 rounded-lg shadow-lg" />
                                   </div>
                                  <div className="space-y-5">
                                  <div className='flex flex-col md:flex-row md:space-x-6'>
                                      <label className='flex flex-row md:flex-col text-white'>Total to pay in FBU</label>
                                      <input type="text" placeholder="" readOnly value={montant}  onChange={(e)=>setMontant(e.target.value)}
                                      className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  <div className='flex flex-col md:flex-row md:space-x-24'>
                                      <label className='flex flex-row md:flex-col text-white'>Number</label>
                                      <input type="text" placeholder="Enter yaur number here" onChange={(e)=>setPhoneNumber(e.target.value)} 
                                      className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  <div className='flex flex-col md:flex-row md:space-x-14'>
                                      <label className='text-white flex flex-row md:flex-col'>Coupon code</label>
                                      <input type="text" placeholder="Enter code" onChange={(e)=>setCode(e.target.value)} 
                                      className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  </div>
                                  <div className='mt-6'>
                                      <button
                                       className="hover:shadow-form w-full rounded-md bg-blue-200 hover:bg-blue-700 py-3 px-8 text-center text-base font-semibold text-blue-700 hover:text-white outline-none">Confirm</button>
                                  </div>
                                  </form>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
              )}
            {/* Modal2 */}
            {isOpen2 && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="bg-blue-500 w-full md:w-2/3 lg:w-1/2 p-6 rounded shadow-md">
                    <div className="flex justify-end">
                      {/* Close Button */}
                      <button
                        onClick={toggleModal2}
                        className="text-gray-700 hover:text-red-500"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-center items-center pt-10">
                      <div className="max-w-md w-full p-4 rounded-lg shadow-lg">
                        <form onSubmit={Payer}>
                        {message && <span className={`${error ? "text-red-400 font-bold text-2xl" : "text-green-400 font-bold text-2xl"}`}>{message}</span>}
                        <div className="flex justify-center items-center mb-5">
                                     <img src="/images/ecocash.png" alt="Description de l'image" className="max-w-full h-24 rounded-lg shadow-lg" />
                                   </div>
                                  <div className="space-y-5">
                                  <div className='flex flex-col md:flex-row md:space-x-6'>
                                      <label className='flex flex-row md:flex-col text-white'>Total to pay in FBU</label>
                                      <input type="text" placeholder="" onChange={handleChangeMontant}
                                      readOnly value={montant} className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  <div className='flex flex-col md:flex-row md:space-x-24'>
                                      <label className='flex flex-row md:flex-col text-white'>Number</label>
                                      <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)} 
                                      placeholder="Enter yaur number here" className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  <div className='flex flex-col md:flex-row md:space-x-14'>
                                      <label className='text-white flex flex-row md:flex-col'>Coupon code</label>
                                      <input type="text" onChange={(e)=>setCode(e.target.value)} 
                                       placeholder="Enter code" className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  </div>
                                  <div className='mt-6'>
                                      <button onChange={Payer}
                                       className="hover:shadow-form w-full rounded-md bg-blue-200 hover:bg-blue-700 py-3 px-8 text-center text-base font-semibold text-blue-700 hover:text-white outline-none">Confirm</button>
                                  </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
  
            {/* Modal3 */}
            {isOpen3 && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="bg-blue-500 w-full md:w-2/3 lg:w-1/2 p-6 rounded shadow-md">
                    <div className="flex justify-end">
                      {/* Close Button */}
                      <button
                        onClick={toggleModal3}
                        className="text-gray-700 hover:text-red-500"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-center items-center pt-10">
                      <div className="max-w-md w-full p-4 rounded-lg shadow-lg">
                        <form onSubmit={Payer}>
                        {message && <span className={`${error ? "text-red-400 font-bold text-2xl" : "text-green-400 font-bold text-2xl"}`}>{message}</span>}
                        <div className="flex justify-center items-center mb-5">
                                     <img src="/images/ihela3.png" alt="Description de l'image" className="max-w-full h-24" />
                                   </div>
                                  <div className="space-y-5">
                                  <div className='flex flex-col md:flex-row md:space-x-2'>
                                      <label className='text-white flex flex-row md:flex-col'>Total to pay in FBU</label>
                                      <input type="text" placeholder=""  onChange={handleChangeMontant}
                                      readOnly value={montant} className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  <div className='flex flex-col md:flex-row md:space-x-6'>
                                      <label className='text-white flex flex-row md:flex-col'>Account number</label>
                                      <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)} 
                                      placeholder="Enter yaur number here" className="flex flex-row md:flex-col border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                  </div>
                                  </div>
                                  <div className='mt-6'>
                                      <button onChange={Payer}
                                      className="hover:shadow-form w-full rounded-md bg-blue-200 hover:bg-blue-700 py-3 px-8 text-center text-base font-semibold text-blue-700 hover:text-white outline-none">Confirm</button>
                                  </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
  
          </div>
        </div>
      </div>

    }

{activeFacture===1 && <FacturePublicite data={datas} />}
    </>
)

}

export default MethodPayment;