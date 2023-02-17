import React from 'react'
import Joblist from '../Joblist/Joblist.route'
import Button from '../../components/Button/button.component'
 import axios from 'axios'
 import { useEffect,useState } from 'react'
 import JoblistCard from '../../components/JoblistCard/JoblistCard.component'
const Applicant=()=> {
const [joblists,setJoblists]=useState([])
 const fetchjoblists=()=>{ 
         const res=  axios.get('https://rekebot2.mmcytech.com/job').then(
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




let jobs = joblists.map((job) => <JoblistCard job={job}/>)
// console.log(jobs)
return (
<>

<div className='flex flex-col' key={jobs._id}>
    {jobs}
    </div>
 
    </>
)
}

export default Applicant