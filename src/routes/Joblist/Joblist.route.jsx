import React from 'react'
import Search from "../../components/search/search.component"
import axios from 'axios'


import { useEffect,useState } from 'react'
import JoblistCard from '../../components/JoblistCard/JoblistCard.component'



const Joblist=()=> {


const [joblists,setJoblists]=useState([])




 const fetchjoblists=()=>{ 
         const res=  axios.get('http://localhost:4000/api/position').then(
            res=>{
                //  console.log(res.data.positions)
              setJoblists(res.data.positions)
                
            }
        ).catch(err=>{
            console.log(err)
        })
    }
useEffect(()=>{
    
    fetchjoblists()

},[])




let jobs = joblists.map((job,_id) => <JoblistCard job={job} key={_id}/>)
// console.log(jobs)
return (
<>

<div className='flex flex-col' >
    {jobs}
    </div>
    </>
    
// )
// for(var i=0;i<joblists.length;i++){
//     jobcards.push(<JoblistCard name={joblists[i]}/>)
//     console.log(jobcards.name)
// }
//   return (<>
//   {jobcards.instructions}
//   {/* <div className=' absolute  w-75 h-full'>
//     <div className='relative flex ml-[60%] mt-20 float-right '>
//     <Search/>
//   </div>
//   <div className='absolute top-48 items-center   left-[10%]  '>
//     <span className='text-3xl italic relative    font-semibold'>Job Lists </span>
//   </div>
  

//   </div> */}
// {/* <div className='absolute  mt-40 left-32'>
//      <h1 className='text-xl  p-2'>{!iscollaps ? truncate(``,40): truncate(``,400)} </h1> 
        
//     </div> */}

//      <JoblistCard Joblist={joblists}/>
    
 
  

 )
 
}



export default Joblist