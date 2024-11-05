"use client"
import { useState,useEffect } from "react";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SessionContext,SessionProvider } from "../../context/Auth";
const  ListePublicite=()=>{
    const [donnes, setDonnes] = useState([])
    const router = useRouter();
    const [sessions,setSession]=useState(null)
    const users=useContext(SessionContext);
    const session=users.session

    const data=async()=>{
      
       try{

        const requestOptions = {
      
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_user:sessions})
          };  
      const res = await fetch('/api/publicite/liste_publicite_par_user',requestOptions);
         const datas=await res.json()
         if(!datas.error){
          setDonnes(datas);
          console.log(datas)
         }
         
       }
       catch(error){
        console.log('error');
       }

    }
    
    useEffect(()=>{
      if(session){
      
       if ( session.user !== session) {
            setSession(session.user);
            
          } 
        }
        
    },[session]);
    useEffect(()=>{
        data()
        },[sessions])



   const updatecommande=async(id)=>{
     
    try {
        // Insérer les données dans la base de données
        const data = {
          id: id,
          id_message: 2,
          etat: 'valide'
        };
        console.log(data);
  
       
        // Réinitialiser les champs de saisie
        const res = await axios.post('/api/commande/validation',data);
        if(res){
       console.log(1)
        }
      } catch (error) {
        console.error("Erreur lors de l'insertion des données :", error);
      }
    
   };


    return (
       <>

<div className='flex min-h-screen  min-h-screen from-purple-100 via-purple-200 to-purple-300 bg-gradient-to-br md:mt-16 pb-24 md:pb-5 ml-16 w-120'>

    <div className="flex min-h-[650px]">

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                
                <tr>
                    <th>#</th>
                    <th scope="col" className="py-3 px-6">type publicite</th>
                    <th scope="col" className="py-3 px-6">nom publicite</th>
                    <th scope="col" className="py-3 px-6">date debut</th>
                    <th scope="col" className="py-3 px-6">date Fin</th>
                    <th scope="col" className="py-3 px-6">status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/*`src/vendeur/page?id=${encodeURIComponent(commande.ID)}`*/}
                    {donnes.map((publicite)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">{publicite.idpublicite}</td>
                    <td className="py-4 px-6">{publicite.typepublicite}</td>
                    <td className="py-4 px-6">{publicite.publicite}</td>
                    <td className="py-4 px-6">{publicite.datedebut}</td>
                    <td className="py-4 px-6">{publicite.datefin}</td>
                    <td className="py-4 px-6"><Link href={`/publicite?id=${publicite.idpublicite}`} className=" rounded text-red-500 hover:text-blueGray-800" target="_blank">Supprimer</Link></td>
                    <td className="py-4 px-6"><button  onClick={()=>updatecommande(publicite.idpublicite)}  className="text-blue-500 hover:text-blueGray-800" target="_blank">Valider</button></td>
                </tr> ))}
                </tbody>
            </table>
            </div>
    </div>
    
</div>
</div>

<div className="text-sm text-white font-semibold py-10 text-center -mt-20">
    Made with <a href="https://chat.openai.com/g/g-8gGyAPc6i-material-tailwind-gpt" className="text-white hover:text-gray-800" target="_blank">MT GPT</a> based on <a href="https://www.material-tailwind.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Material Tailwind Framework</a>.
</div>
       </>
    )
}

export default ListePublicite;