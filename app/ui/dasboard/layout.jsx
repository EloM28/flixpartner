"use client"
import { useState } from "react";
   import { PubliciteProvider } from "../context/publicite";
const DashClientLayout=()=>{
 const [isDropdownVisible, setIsDropdownVisible] = useState(false);
 const { useRouter } = require('next/navigation');
 const router = useRouter();

    const toggleDD = (myDropMenu) => {
      setIsDropdownVisible((prevState) => !prevState);
    }
  const Logout=()=>{
    localStorage.removeItem('token-teramapartrner');
    router.push('/client/login');
  }
  return (
<PubliciteProvider >
   <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12 ">
    {/*--Nav--*/}
  


    <div className="flex flex-col md:flex-row">
   <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
        <div className="flex">

            <div className=" md:ml-10 flex">
                <a href="/"><img src="/images/TeramaFlixpic.ico" alt="Logo" className="h-14 mr-4" /></a>
                <h1 className="text-white text-base md:text-xl">TERAMAFLIX PARTENER</h1>
            </div>

            <div className="flex w-full pt-2 justify-end mt-2 md:mr-10">
            {/* className="list-reset flex justify-between flex-1 md:flex-none items-center" */}
                <ul className="list-reset flex justify-between md:flex-none items-center">
                    <li className="flex-1 md:flex-none md:mr-3">
                        <div className="relative inline-block">
                            <button  onClick={() => toggleDD('myDropdown')} className="drop-button text-white focus:outline-none"> <span className="pr-2"><i className="em em-robot_face"></i></span> Hi, User <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                            <div
                                id="myDropdown"
                                className={`dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 ${
                                    isDropdownVisible ? '' : 'invisible'
                                }`} >
                                <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" />
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw"></i> Profile</a>
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw"></i> Settings</a>
                                <div className="border border-gray-800"></div>
                                <button onClick={Logout} className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
    
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

            <div className="mt-4 md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li className="mr-3 flex-1 md:pt-10">
                        <a href="/client/dashboard" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white hover:bg-blue-500 border-b-2 border-gray-800 hover:border-purple-500">
                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Home</span>
                        </a>
                    </li>
                    <li className="mr-3 flex-1">
                        <a href="/client/dashboard/publicite/" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white hover:bg-blue-500 border-b-2 border-gray-800 hover:border-purple-500">
                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Publicite</span>
                        </a>
                    </li>
                    <li className="mr-3 flex-1">
                        <a href="/client/dashboard/parrainage/" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white hover:bg-blue-500 border-b-2 border-gray-800 hover:border-purple-500">
                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Parainage</span>
                        </a>
                    </li>
                    <li className="mr-3 flex-1">
                        <a href="/dashboard/sharingVideo" className="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white hover:bg-blue-500 border-b-2 border-gray-800 hover:border-purple-500">
                            <i className="fa fa-envelope pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Sharing Video</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>

</div>
</div>
</PubliciteProvider>
  );
  
}

export default DashClientLayout