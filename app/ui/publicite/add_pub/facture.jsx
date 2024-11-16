"use client";
import React, { useState, useEffect, useContext } from "react";
import MethodPayment from "@/app/ui/publicite/add_pub/paymentpub"
import FormAddpbc from "./form-addpbc";
const Facture = ({ formdata }) => {
    const [donnees, setData] = useState([]);
    const [openRetour, setOpenRetour] = useState(0);
    const [openFacture, setopenFacture] = useState(true);
    const [openformpub, setopenFormPub] = useState(false);
    const [datasend, setDataSend] = useState([]);
    const [openpaiement, setOpenPaiement] = useState(0);

    const affichemessage = async () => {
        if (formdata) {
            const donnees = {
                user: formdata[0],
                nom: formdata[1],
                prenom: formdata[2],
                nompub: formdata[3],
                datedebut: formdata[4],
                typepub: formdata[5],
                nombreview: formdata[6],
                nombreclick: formdata[7],
                prixclick: formdata[8],
                prixviews: formdata[9],
                total: formdata[8] + formdata[9],
                publicite:formdata[10]
            };
            setData([donnees]);
            console.log(donnees)
        }
        console.log(donnees);
    };

    useEffect(() => {
        affichemessage();
    }, [formdata]);

    const nextbutton = () => {
        setDataSend(donnees); // Corrected to use `donnees`
        setOpenRetour(0);
        setopenFacture(0);
        setOpenPaiement(1);
    };

    const onclickBack=()=>{
        setDataSend([formdata[11],donnees]);
        setopenFormPub(true)
        setopenFacture(false)
    }
    return (
        <>
           {openformpub  &&(<FormAddpbc files={datasend}/>)}
            {openFacture && donnees.map((formdata, index) => ( // Use index as a fallback for key if no unique id
                <div key={index} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="mb-6 text-center text-xl font-bold">Bill</h1>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="font-bold mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.nom} {formdata.prenom}</p>

                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mt-4">Type</label>
                    <p className="font-bold mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.typepub}</p>

                    <label htmlFor="billed-by" className="block text-sm font-medium text-gray-700 mt-4">Date Debut</label>
                    <p id="billed-by" name="billed-by" className="font-bold mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.datedebut}</p>
                    
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mt-4">Views</label>
                    <p className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.nombreview} views pour: {formdata.prixviews} Fbu</p>
                    
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mt-4">Clicks</label>
                    <p className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.nombreclick} Clic pour : {formdata.prixclick} Fbu</p>
                    
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mt-4">Total</label>
                    <p className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.total} Fbu</p>
                    
                    <div className="flex space-x-6 mt-8">
                        <button onClick={onclickBack} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</button>
                        <button onClick={nextbutton} type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button>
                    </div>
                </div>
            ))}
            {openpaiement === 1 && <MethodPayment data={formdata} />}
        </>
    );
};

export default Facture;