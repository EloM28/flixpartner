'use client'
import React,{useState,useEffect,useContext} from 'react'
import { SessionContext } from '../../context/auth';
import Facture from './facture'

const FormDetail = (data) => {
    const users=useContext(SessionContext);
    const session=users?.session
    const { useRouter, useSearchParams } = require('next/navigation');
    const router = useRouter()
    const searchParams = useSearchParams()
    const [prixsharing, setPrixSharing] = useState(0)
    const [nombreview,setNombreView]=useState(0);
    const [days,setDays]=useState(0);
    const [datefin,setDateFin]=useState('');
    const [minDate, setMinDate] = useState('');
    const [vidName,setVidName]=useState('');
    const [vidImage, setVidImage] = useState('')
    const [nomuser,setNomUser]=useState('');
    const [prenom,setPrenom]=useState('');
    const [vidId,setVidId]=useState('');
    const [vidUniid,setVidUniid]=useState('');
    const [user,setUser] =useState(null) ; 
    const [descr,setDescription]=useState('')
    const [datas, setDatas] = useState(null)
    const [prix,setPrix]= useState([]);
    const [activeFacture, setActiveFacture] = useState(false);
    const [activeForm, setFormActive] = useState(true);
    const [formdata,setFormData]=useState([])
    const [Errormessage,setErrormessage]=useState('')
  
    const handleInputdatefin = (event) => {
    setDateFin(event.target.value);
    const today = new Date().toISOString().split('T')[0];
    // Convertir les chaînes en objets Date
    const dateFinObj = new Date(event.target.value);
    const todayObj = new Date(today);

    // Calculer la différence en millisecondes
    const differenceInMs = dateFinObj.getTime() - todayObj.getTime();

    // Convertir en jours
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));
    setDays(differenceInDays)
    const price = (prix.find(item => item.type === "sharingday")).prix
    setPrixSharing(price*differenceInDays)
  
    };

    useEffect(()=>{
    if(session){
        if ( session.user !== session) {
            setUser(session.user);
            setNomUser(session.nom);
            setPrenom(session.prenom)

        } 
        }
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
    FetchPrix()
    },[session]);
    const back=()=>{
      setFormActive(false)
      router.push('/client/dashboard/sharing-video/search-video')
    }
    const onClickButton= async()=>{
 
      const data=[
          user,
          nomuser,
          prenom,
          vidName,
          datefin,
          prixsharing,
          nombreview,
          vidId,
          vidUniid,
          days
      ];
       setFormData(data)
    if(datefin){
        setActiveFacture(true);
        setFormActive(false)
      }
      else{
            setErrormessage("commplété tous les champs")
         // setData(data);
            setActiveFacture(0);
      } 
    
  }; 

  useEffect(() => {
    if (data){
      console.log('data from back', data.data?.date)
    }
    
    if (data) {
      setDays(data.data?.days)
      setDateFin(data.data?.date)
      setPrixSharing(data.data?.price)
    }
    // Fonction pour définir la date minimale à aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
    async function fetchDatas() {
      const vidId = searchParams.get('v')
      const views = searchParams.get('vw')
      console.log('params', vidId)
      const requestOptions ={
        method : 'POST',
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            vidId
        })
    }
      const res = await fetch(`http://localhost:3001/api/posts/detail`, requestOptions)
      const response = await res.json()
      console.log('respo', response)
      if (response) {
        setDatas(response)
        setVidName(response.Title)
        setNombreView(views)
        setDescription(response.Body)
        setVidImage(response.Image)
        setVidId(response.ID)
        setVidUniid(response.uniid)
      } else {
        setErrormessage('Error')
      }
    }
    fetchDatas()

}, []);

  return (
    <>
    {activeForm &&
    <div className='w-full h-full'>
      <div className="flex items-center justify-center w-full h-full">
      <div className="bg-gray-200 rounded-2xl md:flex w-full h-full lg:p-5 items-center">
          <div className="md:w-3/5 px-4 py-8 lg:px-8">
               <h2 className="font-bold text-lg text-[#002D74]">Be invoiced by</h2>
              <form action="" className="flex flex-col gap-4">
               {Errormessage &&<span className='text-red-500'>{Errormessage}</span> } 
                <div>
                  <div className='space-x-11'>
                    <label className='font-semibold'>Video Title</label>
                    <input type="text" value={vidName} onChange={(e)=>{setVidName(e.target.value)}}
                    className="p-2 mt-4 rounded-xl border" disabled name="" placeholder=""/>
                  </div>
                </div>
                <div>
                  <div className='space-x-10'>
                    <label className='font-semibold'>Views</label>
                    <input type="text" value={nombreview} onChange={(e)=>{setNombreView(e.target.value)}}
                    className="p-2 mt-4 rounded-xl border" disabled name="email" placeholder=""/>
                  </div>
                </div>
                <div className='space-x-12'>
                    <label className='font-semibold'>Description</label>
                    <input type='text' value={descr} onChange={(e)=>{setDescription(e.target.value)}} readOnly  className="p-2 mt-4 rounded-xl border"/>
                </div>
                <div className='space-x-10'>
                    <label className='font-semibold'>End date</label>
                    <input type="date" onChange={handleInputdatefin}  min={minDate} 
                    className="p-2 mt-4 px-5 rounded-xl border" name="email" placeholder=""/>
                </div>
                <div>The price is {prixsharing} Fbu</div>
              </form>
          </div>
          <div className="px-4 md:px-0 md:w-2/5 md:mr-4 lg:mr-0">
            <h1 className="text-lg md:text-xl font-bold mb-4 md:text-center">File</h1>

            <div>
                <>
                <img className="w-full  rounded-lg shadow-lg" src={`http://localhost:3001/Thumbnails/${vidImage}`} alt="Selected Image" />
                </>
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

      {activeFacture && <Facture formdata={formdata} />}
      </>
  )
}

export default FormDetail
