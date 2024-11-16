"use client"
import React,{useState} from 'react';
import { PubliciteProvider } from '../../context/publicite';
const  LayoutAdmin=()=> {
 const [isDropdownVisible, setIsDropdownVisible] = useState(false);
 const { useRouter } = require('next/navigation');
 const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const toggleDD = (myDropMenu) => {
      setIsDropdownVisible((prevState) => !prevState);
    }
  const Logout=()=>{
    localStorage.removeItem('token');
    router.push('/client/login');
  }
  return (
    <PubliciteProvider >
      <div className="h-screen bg-gray-800 font-sans ">
        {/*--Nav--*/}
        <div className="h-full flex flex-col md:flex-row">
        <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-50 top-0">
            <div className="flex">

                <div className=" md:ml-10 flex space-x-2">
                    <button
                            onClick={toggleSidebar}
                            aria-controls="default-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                            />
                            </svg>
                    </button>
                    <div className="flex">
                      <a href="/"><img src="/images/TeramaFlixpic.ico" alt="Logo" className="h-14 mr-4" /></a>
                      <h1 className="text-white text-sm md:text-lg mt-2">TERAMAFLIX PARTNER</h1>
                    </div>
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
        {/* className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48" */}
        {/* className="mt-4 md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between" */}

      <aside
            id="default-sidebar"
            className={`md:relative md:w-48 mt-16 bg-gray-800 fixed top-0 left-0 z-40 w-64  transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                <ul className="list-reset space-y-2 font-medium">
                  {/* Liste des éléments de la sidebar */}
                  <li>
                    <a href="/admin" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/publicite/" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Advertisement</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashbord-admin/parainage" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Sponsorship</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashbord-admin/sharingVideo" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Sharing Video</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/advertiser" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Advertiser</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/payments" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Payments</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Withdrows</span>
                    </a>
                  </li>
                  <li>
                    <a href="/admin/contact" className="flex items-center p-2 text-white rounded-lg hover:bg-blue-500 border-gray-800 border-b-2 hover:border-purple-500 group">
                      <span className="ms-3">Contact</span>
                    </a>
                  </li>
                  {/* Ajoutez d'autres éléments ici */}
                </ul>

            </div>
      </aside>

   
        </div>

      </div>

    </PubliciteProvider>
  );
}

export default LayoutAdmin
