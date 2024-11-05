
"use client"

import { useEffect,useState,useRef } from "react";
import { useContext } from "react";
import { SessionContext } from "../context/auth";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const  ClientDashBoard=()=>{
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
    var i=0;
    const data=async()=>{
      
       try{

        const requestOptions = {
      
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_user:sessions})
          };  
          const chartData = {
      
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_user:sessions})
          };  
      const res = await fetch('/api/publicite/Dashboard',requestOptions);
      const datacharts = await fetch('/api/publicite/Dashboard/chart',chartData);
      const chart=await datacharts.json();
      //const chart= await fetch('/api/publicite/Dashboard',{method:"GET"});
         const datas=await res.json()
         //const chartdata=await chart.json();
        // console.log(datas);
        if(chart){
          setchartData(chart.data);
          setchartDay(chart.day);
        }
         if(!datas.error){
          console.log(datas['count']);
           
            setStatus("en cour")
            setDonnes(datas.publicite); 
          setNombrePub(datas.nbrepub)
          setNombrePubenCour(datas.nbrepubencour)
          
         
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
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*--Metric Card--> */}
                 
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-blue-700"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">You have: </h5>
                                <h3 className="font-bold text-xl lg:text-3xl">{nbrepub}  Advertisement<span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                              
                            </div>
                        </div>
                    </div>
                 
                </div>
 
                <div className="w-full md:w-1/2 xl:w-2/3 p-6">
                  
                    <div className="bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-purple-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold uppercase text-gray-600">You have:</h5>
                                <h3 className="font-bold text-xl lg:text-3xl">{nbrepubencour}  Advertising in progress <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></h3>
                                
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
<div>
                
                <div className="w-full md:w-500 xl:w-600 p-6">
                   {/* <!--Table Card--> */}
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h5 className="font-bold uppercase text-gray-600">List of videos</h5>
                        </div>
                        <div className="p-5 overflow-x-auto">
                            <table className="w-full p-5 text-gray-700">
                                <thead>
                                    <tr>
                                       <th>#</th>
                                        <th className="text-left text-blue-900">video name</th>
                                        <th className="text-left text-blue-900">start date</th>
                                        <th className="text-left text-blue-900">end date</th>
                                        <th className="text-left text-blue-900">status</th>
                                    </tr>
                                </thead>
                          {donnes.map((data)=>(
                                <tbody>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{data.publicite}</td>
                                        <td>{data.datedebut}</td>
                                        <td>{data.datefin}</td>
                                        {data.status===1 && <td>In progress</td>}
                                        {data.status===0 && <td>finished</td>}
                                    </tr>

                                </tbody>
                                ))}
                            </table>

                            <p className="py-2"><a href="#">See More issues...</a></p>

                        </div>
                    </div>
                    {/*<!--/table Card-->/*/}
                </div>

                


            </div>
            {/* <div>
               <p className="px-6 font-bold text-gray-600">Distributed By: <a href="https://themewagon.com/" target="_blank">ThemeWagon</a></p>
            </div> */}
        </div>

</>
)
 

  
  
}


 export default ClientDashBoard
