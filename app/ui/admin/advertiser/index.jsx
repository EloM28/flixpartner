"use client";
import { React, useState, useEffect, useRef } from "react";
//import TousDossiers from "@/src/components/Admin-general/advertiser";
import TableAdvertisers from "./table-advertiser";
const Advertisers = () => {

  const [displayMoDetail, setDisplayMoDetail] = useState(false);
  const detailsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (detailsRef.current && !detailsRef.current.contains(event.target)) {
      setDisplayMoDetail(false);
    }
  };
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

  const [data,setData]=useState([])
  const FetchData=async()=>{   
    try{
      const res = await fetch('/admin/api/advertisers');
      const datas=await res.json()
      if(!datas.error){
       setData(datas.result)
       console.log(datas.result)
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
    <div className="relative rounded-md bg-white pt-10 md:mt-14">
      <div className="w-[100%] h-[100%]">
    
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
                    <th className="text-start py-2 lg:px-4 xl:px-8 border bg-blue-300 p-2">#</th>
                    <th className="text-start py-2 lg:px-6 xl:px-14 border bg-blue-300 p-2">First name</th>
                    <th className="py-2 text-start lg:px-6 xl:px-14 border bg-blue-300 p-2">Last name</th>
                    <th className="text-start py-2 lg:px-8 xl:px-14 border bg-blue-300 p-2">E-mail</th>
                    <th className="py-2 text-start lg:px-4 xl:px-10 border bg-blue-300 p-2">Phone</th>
                    <th className="text-start py-2 lg:px-8 xl:px-14 border bg-blue-300 p-2">Type</th>
                  </tr>
                </thead>
                <tbody>   
                 {data && data.map((item,index=0)=>(     
                <tr key={index}>
                        <TableAdvertisers
                          index={index+1}
                          id={item.iduser}
                          nom={item.nom}
                          prenom={item.prenom}
                          email={item.email}
                          tel={item.Telephone}
                          type={item.typeuser}
                        />
                      </tr>
                ))}  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisers;
