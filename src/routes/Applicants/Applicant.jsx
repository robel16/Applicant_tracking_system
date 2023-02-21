import React from 'react'
import Joblist from '../Joblist/Joblist.route'
import Button from '../../components/Button/button.component'
 import axios from 'axios'
 import { useEffect,useState } from 'react'
import Applicantjoblistcard from "../../components/Applicant_joblistCard/ApplicantJoblist.component"
const Applicant=()=> {
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




let jobs = joblists.map((job) =><Applicantjoblistcard job={job}/> )
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