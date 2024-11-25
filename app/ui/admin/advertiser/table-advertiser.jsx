"use client";
import React, { useState, useEffect, useRef } from "react";
import ActionAdvertiser from "./actions-advertiser";

const TableAdvertisers = ({
 index,
  nom,
  prenom,
  email,
  tel,
  type,
}) => {

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
  const AfficherModalDetail= (action) => {
    setDisplayMoDetail(true);
  };


  return (
    <>
      <td className="px-4 py-2 text-sm font-medium relative">
        {displayMoDetail ? (
          <div ref={detailsRef} className="ml-8 absolute">
            <ActionAdvertiser
            />
          </div>
        ) : (
          ""
        )}
        <button
          onClick={AfficherModalDetail}
          type="button"
          className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </td>
      <td className="border text-base md:text-sm lg:text-base text-start py-2 p-2">{index}</td>
      <td className="border text-base md:text-sm lg:text-base text-start py-2 p-2">{nom}</td>
      <td className="border text-base md:text-sm lg:text-base text-start py-2 p-2">{prenom}</td>
      <td className="border text-base md:text-sm lg:text-base text-start py-2 p-2">{email}</td>
      <td className="border text-base md:text-sm lg:text-base text-start py-2 p-2">{tel}</td>
      <td className="border text-base md:text-sm lg:text-base text-start py-2 p-2">{type}</td>
    </>
  );
};

export default TableAdvertisers;