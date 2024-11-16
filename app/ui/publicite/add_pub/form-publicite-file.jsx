 
 "use client"
 import React,{ useState,useEffect } from "react";
 import FormAddpbc from "./form-addpbc";
 import PubDisponible from ".";
const FormSelectFile=()=>{
    const [isOpen, setIsOpen] = useState(true); 
    const [isopenpub, setIsOpenPub] = useState(true); 
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [selectMedia, setSelectedMedia] = useState(null);
    const [files,setFiles]=useState([])
    const [publicite,setPublicite]=useState(null);
    const [errormessage, setmessage] = useState(null);
    const [openform,setOpenForm] =useState(false) ; 
    const toggleModal = () => {
        setIsDropdownVisible(false);
        setIsOpen(!isOpen);
      };
      const toggleDD = () => {
        setIsDropdownVisible(!isDropdownVisible);
      };
     
      const onClickButton= async(e)=>{
        e.preventDefault()
       if(selectMedia){
         setFiles([selectMedia,publicite]);
         setOpenForm(true)
         setIsDropdownVisible(false);
         setIsOpen(!isOpen);
         setIsOpenPub(!isopenpub)
       }
       else{
        
           const message="Donnees manquantes";
           setmessage(message);
         }
       
       }
     
   
 
   const [progress, setProgress] = useState(0); // État pour suivre la progression
   const handleFileChange = (event) => {
       const file = event.target.files[0];
       setPublicite(file)
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
    return(
                        
                        <>
                         {isopenpub && <PubDisponible/>}
                          {openform && <FormAddpbc files={files}/>}
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
                          </>
    )
}

export default FormSelectFile