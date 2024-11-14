'use client'
import {useState, useEffect} from 'react'
import MethodPayment from './payment'
const Facture = ({ formdata }) => {
    const [donnees, setData] = useState([]);
    const [openRetour, setOpenRetour] = useState(0);
    const [openFacture, setopenFacture] = useState(true);
    const [datasend, setDataSend] = useState([]);
    const [openpaiement, setOpenPaiement] = useState(0);

    const affichemessage = async () => {
        console.log(formdata);
        if (formdata) {
            const donnees = {
                user: formdata[0],
                nom: formdata[1],
                prenom: formdata[2],
                vidName: formdata[3],
                datefin: formdata[4],
                prixsharing: formdata[5],
                nombreview: formdata[6],
                vidId: formdata[7],
                vidUniid: formdata[8],
                days : formdata[9]
            };
            setData([donnees]);
            console.log(donnees)
        }
        console.log(donnees);
    };

    useEffect(() => {
        affichemessage();
    }, [formdata]);

    const onclickBack = () => {
        setDataSend(donnees); // Corrected to use `donnees` instead of `data`
        setOpenRetour(1);
        setopenFacture(0);
    };

    const nextbutton = () => {
        setDataSend(donnees); // Corrected to use `donnees`
        setOpenRetour(0);
        setopenFacture(0);
        setOpenPaiement(1);
    };

    return (
        <>
            {openFacture && donnees.map((formdata, index) => ( // Use index as a fallback for key if no unique id
                <div key={index} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="mb-6 text-center text-xl font-bold">Bill</h1>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="font-bold mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.nom} {formdata.prenom}</p>

                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mt-4">Video title</label>
                    <p className="font-bold mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.vidName}</p>

                    <label htmlFor="billed-by" className="block text-sm font-medium text-gray-700 mt-4">End date</label>
                    <p id="billed-by" name="billed-by" className="font-bold mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.datefin}</p>
                    
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mt-4">Days</label>
                    <p className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.days} days for: {formdata.prixsharing} Fbu</p>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mt-4">Total</label>
                    <p className=" mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">{formdata.prixsharing} Fbu</p>
                    
                    <div className="flex space-x-6 mt-8">
                        <button onClick={onclickBack} className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</button>
                        <button onClick={nextbutton} type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Next</button>
                    </div>
                </div>
            ))}
            {openpaiement === 1 && <MethodPayment data={datasend} />}
        </>
    );
};

export default Facture;