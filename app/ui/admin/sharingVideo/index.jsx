"use client";
import { React, useState, useEffect, useRef } from "react";
import TousDossiers from "@/src/components/Admin-general/sharingVideo";
import TableClientsStructures from "@/src/components/Admin-general/sharingVideo/table-clients-structure";;
const SharingVStructures = () => {

  const [displayMoDetail, setDisplayMoDetail] = useState(false);
  const [showTousDossiers, setShowTousDossiers] = useState(false);
  const [showGenererRapport, setShowGenererRapport] = useState(false);

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

  const handleToutLesDossiers= ()=>{
    setShowTousDossiers(true);
  }

  const handleGenereRapport = () => {
    setShowGenererRapport(true);
  };

  const closeModalTousDossiers = ()=>{
    setShowTousDossiers(false);
  }

  const closeModalRapport = () => {
    setShowGenererRapport(false);
  };

  return (
    <div className="relative rounded-md bg-white md:mt-14 pt-10">
      <div className="w-[100%] h-[100%]">
        {showTousDossiers && (
          <TousDossiers
            closeModalTousDossiers={closeModalTousDossiers}
         
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
                    <th className="text-start py-2 md:px-4 lg:px-10 xl:px-14 border bg-blue-300 p-2">#</th>
                    <th className="text-start py-2 md:px-12 lg:px-16 xl:px-28 border bg-blue-300 p-2">Videos</th>
                    <th className="py-2 text-start md:px-4 lg:px-10 xl:px-14 border bg-blue-300 p-2">Days</th>
                    <th className="text-start py-2 md:px-4 lg:px-10 xl:px-14 border bg-blue-300 p-2"> Price</th>
                    <th className="text-start py-2 md:px-8 lg:px-16 xl:px-20 border bg-blue-300 p-2"> State</th>
                  </tr>
                </thead>
                <tbody>         
                <tr>
                        <TableClientsStructures
                          id={1}
                          video={"eric.mp4"}
                          days={"01/01/2024"}
                          price={"1000000"}
                          state={"abcde"}
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

export default SharingVStructures;
