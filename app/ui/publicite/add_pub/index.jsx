"use client"
import FormAddpbc from "@/app/ui/publicite/add_pub/form-addpbc"
import React, { useState } from 'react';
import { SessionContext } from '../../context/auth';
const PubDisponible = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const [selectMedia, setSelectedMedia] = useState(null);
    const [openform,setOpenForm] =useState(false) ; 
    const [openliste,setListe] =useState(true) ; 
    const [files,setFiles]=useState(null)
    const [errormessage, setmessage] = useState(null);
  const toggleDD = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleModal = () => {
    setIsDropdownVisible(false);
    setIsOpen(!isOpen);
  };

  const toggleModal2 = () => {
    setIsDropdownVisible(false);
    setIsOpen2(!isOpen2);
  };

  if (!isComponentVisible) {
    return null; // Ne rien rendre si le composant est masqué
  }

    const { useRouter } = require('next/navigation');
  const router = useRouter();

    const onClickButton= async(e)=>{
       e.preventDefault()
      if(selectMedia){
        setFiles(selectMedia);
        setOpenForm(true)
        setIsDropdownVisible(false);
        setIsOpen(!isOpen);
        setListe(false)
      }
      else{
       
          const message="Donnees manquantes";
          setmessage(message);
        }
      
      }
    
  

  const [progress, setProgress] = useState(0); // État pour suivre la progression
  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setmessage("");
        const url = URL.createObjectURL(file); // Créer une URL pour le fichier
        setSelectedMedia({
            url: url,
            type: file.type,
        });
          // Simuler une progression d'upload
          const uploadSimulation = setInterval(() => {
              setProgress((prev) => {
                  if (prev >= 100) {
                      clearInterval(uploadSimulation);
                      return 100; // Fin de l'upload
                  }
                  return prev + 10; // Augmenter la progression
              });
          }, 300); // Simule un upload toutes les 100ms
      }
  };

  return (
    <>
    {openform && <FormAddpbc files={files}/>}
    {openliste &&(<div className="w-full">
      <div className='flex items-center justify-center w-full'>
        <div className='flex space-x-4 md:space-x-20 w-full'>
          <div className='flex min-h-screen mt-8 md:mt-16 pb-24 md:pb-5 bg-white overflow-y-auto overflow-x-auto w-full'>
            <div className="flex min-h-[650px] w-full">
              <div className="relative shadow-md sm:rounded-lg w-full"> 
                <div className='mb-2'>
                  <div className="flex w-full pt-2 justify-end mt-2 md:mr-10">
                    <ul className="list-reset flex justify-between md:flex-none items-center">
                      <li className="flex-1 md:flex-none md:mr-3">
                        <div className="relative inline-block">
                          <button
                            onClick={toggleDD}
                            className="drop-button focus:outline-none font-bold hover:text-white hover:bg-blue-500 border border-black"
                          >
                            <span className="pr-2"><i className="em em-robot_face"></i></span> Add Video
                            <svg className="h-3 fill-current inline font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </button>
                          <div
                            className={`dropdownlist absolute bg-gray-800 text-white right-0 w-48 mt-3 p-4 overflow-auto z-30 ${isDropdownVisible ? '' : 'invisible'}`}
                          >
                            <div>
                              <button
                                onClick={toggleModal}
                                className="text-white hover:p-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Video available
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={toggleModal2}
                                className="text-white hover:p-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                              >
                                Video not available
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='overflow-x-auto'>
                <table className={`text-sm text-gray-500 dark:text-gray-400 w-full ${isOpen || isOpen2 ? 'blur-sm' : ''}`}>
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
            
                       {/* Modal */}
                       {isOpen && (
                <div className="fixed md:z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white w-full md:w-2/3 lg:w-1/2 p-6 rounded shadow-md">
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
                            <div className="mx-auto w-full max-w-[550px] bg-white">
                                <form className="py-4 px-9">
                                     {errormessage && <span className="text-red-500">{errormessage}</span> }
                                    <div className="mb-6 pt-4">
                                        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                            Upload File
                                        </label>

                                        <div className="mb-8">
                                            <input type="file" name="file" id="file" className="sr-only" onChange={handleFileChange} />
                                            <label htmlFor="file"
                                                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-blue-500 p-12 text-center bg-gray-200">
                                                <div>
                                                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                                        Drop files here
                                                    </span>
                                                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                                        Or
                                                    </span>
                                                    <span
                                                        className="inline-flex rounded border border-blue-500 py-2 px-7 text-base font-medium text-[#07074D]">
                                                        Browse
                                                    </span>
                                                </div>
                                            </label>
                                        </div>
                    {/* 
                                        <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                                            <div className="flex items-center justify-between">
                                                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                                    banner-design.png
                                                </span>
                                                <button className="text-[#07074D]">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                            fill="currentColor" />
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div> */}

                                        <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
                                            <div className="flex items-center justify-between">
                                                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                                    banner-design.png
                                                </span>
                                                <button className="text-[#07074D]">
                                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                                            fill="currentColor" />
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                                                <div className="absolute left-0 right-0 h-full rounded-lg bg-blue-500"  style={{ width: `${progress}%` }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <button onClick={onClickButton}                                  
                                            className="hover:shadow-form w-full rounded-md bg-blue-500 hover:bg-blue-700 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                            Next
                                        </button>
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
                <div className="bg-white w-full md:w-2/3 lg:w-1/2 p-6 rounded shadow-md">
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
                    <div className="max-w-md w-full bg-blue-400 p-4 rounded-lg shadow-lg">
                      <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
                      <form action="#" method="POST">
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                          <input type="text" id="name" name="name" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter your Name here" />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700"></label>
                          <input type="email" id="signup-email" name="email" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter your Email here"/>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message"></label>
                            <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter your message here"></textarea>
                          </div>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div> )}
    </>
  );
}

export default PubDisponible;