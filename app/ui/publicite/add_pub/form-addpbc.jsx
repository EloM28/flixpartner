import React,{useState,useEffect,useContext} from 'react'
import { SessionContext } from '../../context/auth';
import Facture from "@/app/ui/publicite/add_pub/facture"
import FormSelectFile from "@/app/ui/publicite/add_pub/form-publicite-file"
import PubDisponible from './index';
const FormAddpbc = ({files}) => {
    const [datedebut,setDateDebut]=useState('');
    const [nombreview,setNombreViews]=useState(0);
    const [nombreclick, setNbreClick] = useState(0);
    const [typepub,setTypepub]=useState('');
    const [data,setData]=useState([]);
    const [prixclick, setPrixClick] = useState(0)
    const [nompublicite, setNomPublicite] = useState('');
    const [prixviews, setPrixViews] = useState(0);
    const [user,setUser] =useState(null) ; 
    const [nomuser,setNomUser]=useState('')
    const [prenom,setPrenom]=useState('')
  const [prix,setPrix]= useState([]);
  const [activeFacture, setActiveFacture] = useState(false);
  const [activeForm, setFormActive] = useState(true);
  const { useRouter } = require('next/navigation');
  const [fordata,setFormData]=useState([])
  const [Errormessage,setErrormessage]=useState('')
  const [activefomfile, setFormFileActive] = useState(false);
  const router = useRouter();
    const handlenomPubliciteChange = (event) => {
      setNomPublicite(event.target.value);
    };
    const handleNombreViewInputChange = (event) => {
      const value = event.target.value;

      if (value === '' || value === '0' || !value.startsWith('0')) {
          setNombreViews(value);
          const viewItem = prix.find(item => item.type === "views");
          if (viewItem) {
              setPrixViews(viewItem.prix * (parseInt(value) || 0));
          }
      }
  };
   
    const handleNombreClickInputChange = (event) => {
      const value = event.target.value;

      if (value === '' || value === '0' || !value.startsWith('0')) {
          setNbreClick(value);
           console.log(value)
          const viewItem = prix.find(item => item.type === "click");
          if (viewItem) {
              setPrixClick(viewItem.prix * (parseInt(value) || 0));
          }
      }
    };
  
      const handleInputDateDebut = (event) => {
        setDateDebut(event.target.value);
      };

      const users=useContext(SessionContext);
      const session=users?.session
 
      useEffect(()=>{
        if(session){
        
         if ( session.user !== session) {
              setUser(session.user);
              setNomUser(session.nom);
              setPrenom(session.prenom)

            } 
          }
      FetchPrix()
      if (files[0] && files[0].type.includes('video')) {
        setTypepub('Video');
    } else {
        setTypepub('Photo');
    }
    if(files[1]){
    setData(files[1])   
      
    }
      },[session,files]);

      useEffect(() => {
        if(data){
          if( data[0]?.nom || data[0]?.prenom|| data[0]?.user){
            setNbreClick(data[0].nombreclick)
            setNombreViews(data[0].nombreview)
            setPrixViews(data[0].prixviews)
            setPrixClick(data[0].prixclick)
            setDateDebut(data[0].datedebut)
            setNomPublicite(data[0].nompub)
          }
        }

    }, [data]);
      const FetchPrix=async(id)=>{
     
        try { 
          
            const res = await fetch('/client/api/publicite/prix');
            if(res){
           setPrix(await res.json())
            }
          } catch (error) {
            console.error("Erreur lors de la séléction des données :", error);
          }
       };
    const onClickButton= async()=>{
 
      const data=[
          user,
          nomuser,
          prenom,
          nompublicite,
          datedebut,
          typepub,
          nombreview,
          nombreclick,   
          prixclick,
          prixviews,
          files[1],
          files[0]
      ];
       setFormData(data)
   //if(user  && datedebut && typepub && nompublicite){
    if(typepub ){
        setActiveFacture(true);
        setFormActive(false)
        
      }
      else{
            setErrormessage("commplété tous les champs")
         // setData(data);
          setActiveFacture(0);
        
      
      } 
    
  }; 

  const back=()=>{
    setFormFileActive(true)
    setFormActive(false)
  }

  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    // Fonction pour définir la date minimale à aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
}, []);

  return (
    <>
    { activefomfile &&(<FormSelectFile />)}
    {activeForm &&
    <div className='w-full border border-red-500'>
      <div className="flex items-center justify-center w-full h-full">
      <div className="bg-gray-200 rounded-2xl md:flex w-full h-full lg:p-5 items-center">
          <div className="md:w-3/5 px-4 py-8 lg:px-8">
               <h2 className="font-bold text-lg text-[#002D74]">Be invoiced by</h2>
              <form action="" className="flex flex-col gap-4">
               {Errormessage &&<span className='text-red-500'>{Errormessage}</span> } 
                <div>
                  <div className='space-x-11'>
                    <label className='font-semibold'>Click</label>
                    <input type="number" value={nombreclick} onChange={handleNombreClickInputChange}
                    className="p-2 mt-4 rounded-xl border" name="" placeholder=""/>
                  </div>
                  <div>The price is {prixclick} Fbu</div>
                </div>
                <div>
                  <div className='space-x-10'>
                    <label className='font-semibold'>Views</label>
                    <input type="number" value={nombreview} onChange={handleNombreViewInputChange}
                    className="p-2 mt-4 rounded-xl border" name="email" placeholder=""/>
                  </div>
                  <div>The price is {prixviews} Fbu</div>
                </div>
                <div className='space-x-12'>
                    <label className='font-semibold'>Type</label>
                   
                      <input type='text' value={typepub} onChange={(e)=>setTypepub(e.target.value)} readOnly  className="p-2 mt-4 rounded-xl border"/>
                </div>
                <div className='space-x-10'>
                    <label className='font-semibold'>Start day</label>
                    <input type="date" onChange={handleInputDateDebut}  min={minDate} 
                    className="p-2 mt-4 px-5 rounded-xl border" name="email" placeholder=""/>
                </div>
                <div className='space-x-4'>
                    <label className='font-semibold'>File name</label>
                    <input type="text" value={nompublicite} onChange={handlenomPubliciteChange}
                    className="p-2 mt-4 rounded-xl border" name="email" placeholder=""/>
                </div>

              </form>
          </div>
          <div className="px-4 md:px-0 md:w-2/5 md:mr-4 lg:mr-0">
            <h1 className="text-lg md:text-xl font-bold mb-4 md:text-center">My Video/Image</h1>

            <div>
                       { files && ( files[0].type && files[0].type.includes('video') ? (<video className="w-full rounded-lg shadow-lg" controls>
                            <source src={files[0].url} type={files[0].type} />
                            Your browser does not support the video tag.
                        </video>):(
                          <>
                          <img className="w-full  rounded-lg shadow-lg" src={files[0].url} alt="Selected Image" />
                          </>
                        ) )}
                    </div>
            
            <div className="mt-4 mb-20 md:mb-0 text-sm flex justify-between items-center container-mr">
              <button onClick={back}
               className="hover:border register text-white bg-gray-500 hover:border-gray-700 rounded-xl py-2 px-5 hover:scale-110 hover:bg-gray-700 font-semibold duration-300">Back</button>
              <button onClick={onClickButton}
              className="hover:border register text-white bg-blue-500 hover:border-blue-700 rounded-xl py-2 px-5 hover:scale-110 hover:bg-blue-700 font-semibold duration-300">Next</button>
            </div>
          </div>
      </div>
       </div>
      </div> }

      {activeFacture && <Facture formdata={fordata} />}
      </>
  )
}

export default FormAddpbc
