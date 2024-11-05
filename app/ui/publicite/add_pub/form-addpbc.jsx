import React,{useState,useEffect,useContext} from 'react'
import { SessionContext } from '../../context/auth';
const FormAddpbc = ({files}) => {

  const [selectMedia, setSelectedMedia] = useState(null);
    const [datedebut,setDateDebut]=useState('');
    const [nombreview,setNombreViews]=useState(0);
    const [nombreclick, setNbreClick] = useState(0);
    const [typepub,setTypepub]=useState('');
    const [publicite,setPublicite]=useState(null);
    const [prixclick, setPrixClick] = useState(0)
    const [nompublicite, setNomPublicite] = useState('');
    const [prixviews, setPrixViews] = useState(0);
    const [selectedOptionetNombreClick] = useState('');
    const [message, setSelectedOption] = useState('');
    const [sessions,setSession] =useState(null) ; 
  const [data, setData] = useState([]);
  const [prix,setPix]= useState([]);
  const [activeFacture, setActiveFacture] = useState(0);
  const [desactiveAjoute, setdesactiveAjout] = useState(1);
  const [activeLogin, setActiveLogin]=useState(0);
    const { useRouter } = require('next/navigation');
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

      const handleSelectType = (event) => {
        setTypepub(event.target.value);
      };
      const users=useContext(SessionContext);
      const session=users?.session
 
      useEffect(()=>{
        if(session){
        
         if ( session.user !== session) {
              setSession(session.user);
              setNom(session.nom);
              setPrenom(session.prenom)

            } 
          }
      FetchPrix()
      },[session]);

      const FetchPrix=async(id)=>{
     
        try { 
          
            const res = await fetch('/client/api/publicite/prix');
            if(res){
           setPix(await res.json())
            }
          } catch (error) {
            console.error("Erreur lors de la séléction des données :", error);
          }
        
       };
    const onClickButton= async()=>{
 
      const data=[
          sessions,
          publicite,
          datedebut,
          typepub,
          nombreview,
          nombreclick,   
          prixclick,
          prixviews
      ];
      console.log(data)
    /*  if(!sessions){
        setActiveLogin(1)
        setActiveFacture(0);
        setdesactiveAjout(0)
      }
      else{
        if(!publicite){
          const message="Donnees manquantes";
          setmessage(message);
        }
        else{
          setData(data);
          setActiveFacture(1);
          setdesactiveAjout(0)
        }
      
      } */
    
  }; 

  return (
    <div className='w-full h-full'>
      <div className="flex items-center justify-center w-full h-full">
      <div className="bg-gray-200 rounded-2xl md:flex w-full h-full lg:p-5 items-center">
          <div className="md:w-3/5 px-4 py-8 lg:px-8">
              <h2 className="font-bold text-lg text-[#002D74]">Be invoiced by</h2>
              <form action="" className="flex flex-col gap-4">
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
                    <select id="options" className="p-2 mt-4 px-8 rounded-xl border" onChange={handleSelectType}>
                    {files && files.type.includes('video') ? (
                      <option value="Video" selected>Video</option>
                    ):<option value="Photo">Image</option>}
                      
                   </select>
                </div>
                <div className='space-x-10'>
                    <label className='font-semibold'>Start day</label>
                    <input type="date" onChange={handleInputDateDebut}
                    className="p-2 mt-4 px-5 rounded-xl border" name="email" placeholder=""/>
                </div>
                <div className='space-x-4'>
                    <label className='font-semibold'>File name</label>
                    <input type="text" onChange={handlenomPubliciteChange}
                    className="p-2 mt-4 rounded-xl border" name="email" placeholder=""/>
                </div>

              </form>
          </div>
          <div className="px-4 md:px-0 md:w-2/5 md:mr-4 lg:mr-0">
            <h1 className="text-lg md:text-xl font-bold mb-4 md:text-center">My Video/Image</h1>

            <div>
                       { files && ( files.type && files.type.includes('video') ? (<video className="w-full rounded-lg shadow-lg" controls>
                            <source src={files.url} type={files.type} />
                            Your browser does not support the video tag.
                        </video>):(
                          <>
                          <img className="w-full  rounded-lg shadow-lg" src={files.url} alt="Selected Image" />
                          </>
                        ) )}
                    </div>
            
            <div className="mt-4 mb-20 md:mb-0 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0">If you agree..</p>
              <button onClick={onClickButton}
              className="hover:border register text-white bg-blue-500 hover:border-blue-700 rounded-xl py-2 px-5 hover:scale-110 hover:bg-blue-700 font-semibold duration-300">Next</button>
            </div>
          </div>
      </div>
       </div>
      </div>
  )
}

export default FormAddpbc
