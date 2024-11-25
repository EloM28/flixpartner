
import React from 'react'
const ActionClient = ({handleToutLesDossiers, handleGenereRapport }) => {
  
  return (
    <div className="w-[10rem] h-[6rem] bg-slate-800 rounded-sm">
        <div className="w-full h-full flex flex-col space-y-1 my-1">
          <button
            className="w-full text-white hover:bg-slate-600 p-1"
          >
            Activate
          </button>
          <button
            className="w-full text-white hover:bg-slate-600 p-1"
          >
            Desactivate
          </button>
          <button
            className="w-full text-white hover:bg-slate-600 p-1"
          >
            Detail
          </button>
        </div>
    </div>
  );
};

export default ActionClient 