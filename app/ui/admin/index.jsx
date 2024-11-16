
"use client"

import { useEffect,useState,useRef } from "react";
import { useContext } from "react";
import { SessionContext } from "../context/auth";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const  AdminGeneral=()=>{
    const [donnes, setDonnes] = useState([])
    const [sessions,setSession]=useState(null)
    const users=useContext(SessionContext);
    const session=users?.session
    const [nbrepub,setNombrePub]=useState("")
    const [nbrepubencour,setNombrePubenCour]=useState("")
    const chartRef = useRef(null);
    const [status, setStatus]=useState(null)
    const [chartdonnee, setchartData]=useState([])
    const [chartday, setchartDay]=useState([])
    const [nombreusers,setNombreUsers]=useState("")
    const [nombrepromo,setNombrePromo]=useState("")
    var i=0;
    const data=async()=>{
      
       try{
 
      const countdata = await fetch('/admin/api/count');
      const datacharts = await fetch('admin/api//chart');
      const chart=await datacharts.json();
         const datas=await countdata.json()
        if(chart){
          setchartData(chart.data);
          setchartDay(chart.day);
        }
         if(!datas.error){
          setNombrePub(datas.nbrepub)
          setNombreUsers(datas.nombreusers)
          setNombrePromo(datas.nombrepromo)
          
         
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

        
          const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Status of current advertisements'
              }
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Month'
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'video number (nbr)'
                }
              }
            }
          };
          console.log(chartdonnee)
          const chartData = {
            labels:chartday,
            datasets: [
              {
                label: 'video number (nbr)',
                data: chartdonnee,
                fill: false,
                borderColor: 'rgb(59, 130, 246)',
                tension: 0.1
              }
            ]
          };





    return(
         <>
    
           
        <div className="main-content flex-1 bg-gray-100  md:mt-12 pb-24 md:pb-5">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h3 className="font-bold pl-2">Data analysis</h3>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
                    {/*--Metric Card--> */}
                 
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-blue-700"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                {/* <h5 className="font-bold uppercase text-gray-600">You have: </h5> */}
                                <h3 className="font-bold text-xl md:text-lg lg:text-xl xl:text-3xl">{nombreusers}  Users<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                              
                            </div>
                        </div>
                    </div>
                 
                </div>
 
                <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
                  
                    <div className="bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-purple-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h3 className="font-bold text-xl md:text-lg lg:text-xl xl:text-3xl">{nbrepub}  Advertisement<span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
                    {/*--Metric Card--> */}
                 
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-blue-700"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h3 className="font-bold text-xl md:text-lg lg:text-xl xl:text-3xl">{nombrepromo}  Promo Code<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                              
                            </div>
                        </div>
                    </div>
                 
                </div>
          
            </div>


            <div className="w-100">
               <div className="bg-white border-transparent rounded-lg shadow-xl ">
             <   div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div className="p-5 w-50">
                        <Line ref={chartRef} data={chartData} options={chartOptions} />
                    </div>
                    </div>

 </div>
     
        </div>

</>
)
 

  
  
}


 export default AdminGeneral
