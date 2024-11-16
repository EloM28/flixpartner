"use client";
import { React, useState, useEffect, useRef } from "react";
//import TousDossiers from "@/src/components/Admin-general/Publicite";
import TableAdminPublicite from "./table-admin-publicite";;
const AdminPublicite = () => {

  const [displayMoDetail, setDisplayMoDetail] = useState(false);
  const [data,setData]=useState([])
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

  const FetchData=async()=>{
      
    try{
      const res = await fetch('/admin/api/publicite/liste');
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
    <div className="relative rounded-md bg-white md:mt-14 pt-10">
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
                    <th className="text-start py-2 border bg-blue-300 p-2">File</th>
                    <th className="text-start py-2 border bg-blue-300 p-2">State</th>
                    <th className="text-start py-2 border bg-blue-300 p-2">Number of views/Total</th>
                    <th className="text-start py-2 border bg-blue-300 p-2">Number of Clicks/Total</th>
                  </tr>
                </thead>
                <tbody>    
                {data && data.map((item,index=0)=>(  
                  
                <tr key={index}>

                        <TableAdminPublicite
                          index={index+1}
                          id={item.idpublicite}
                          file={item.publicite}
                          state={item.status}
                          nbrv={item.nombretype}
                          nbrc={item.nombreclic}
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

export default AdminPublicite;
