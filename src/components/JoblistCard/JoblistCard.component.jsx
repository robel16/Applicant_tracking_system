import React from 'react'
import { useRef } from 'react'
import { useState, } from 'react'
import {AiFillDownCircle,AiOutlineEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import {IoIosArrowDropupCircle} from 'react-icons/io'
const JoblistCard=(props)=> {
// console.log(props.Joblist)


const handledelete=()=>{
  
alert("are you sure you want to delete")
    
}


const Displayjobs=(props)=>{

const Handleclick=()=>{
      setIsCollapsed(!isCollapsed);
  setTimeout(() => {  
    setText(truncate(`${job.instructions} `, isCollapsed ? 400 : 40))
})}

const job=props.job;
const[isCollapsed,setIsCollapsed]=useState(false);  

const truncate=(string,n)=>{
    return string?.length>n ? string.substr(0,n-1) + '...': string;
}
const [text, setText] = useState(truncate(`${job.instructions} `, 40));
const classname = " md:text-xl font-normal sm:text-sm ";

let steps = job.steps.map(step =>
    
<>

   { !isCollapsed && <div className={ isCollapsed ? `flex bg-blue-400 items-center transition ease-out duration-300 space-x-2  flex-row` :'flex relative items-center   md:flex-row  sm:flex-col   '}     >
<div className='flex relative md:top-2 md:p-2 justify-center items-center   flex-row'>
    <span className=' text-xl font-semibold md:w-10  sm:w-10 sm:text-sm     '  > {step.type}</span>
    </div>
     <div className='flex relative md:top-1 md:p-2 justify-center items-center  ml-6 mt-2 '>
    <span className=' '>{step.prompt}</span>
     </div> 
    </div>}

    </>
    )
        return(<>
       
              <div className={isCollapsed ? `flex  flex-row relative xl:w-70 xl:h-[200px] sm:w-70   sm:h-[400px] bg-[#BEB9B9] ml-24 top-[25%] border-2 shadow-xl mx-2 mb-16    rounded-3xl overflow-hidden ` : `  flex flex-row relative xl:w-70 xl:h-[500px] sm:w-70 sm:h-[800px] bg-[#BEB9B9]  top-[25%] ml-24 border-2 shadow-xl mx-16 mb-16    rounded-3xl overflow-hidden ` } key={job._id} >
                <div className=' h-10 w-10 relative -right-[85%] top-3 text-5xl'> 
{isCollapsed ?   <AiFillDownCircle className=' hover:scale-125 cursor-pointer  ' onClick={Handleclick}/> : <IoIosArrowDropupCircle className='hover:scale-125 cursor-pointer' onClick={Handleclick}/>}
                </div>
               
                  { !isCollapsed &&  
                  
                  <div className=' relative  flex h-10 w-10 md:-right-[80%] top-20 items-center space-x-3 sm:-right-[70%]   '>
                    <div className={` text-2xl`}>
                    
                        <AiOutlineEdit className='text-3xl hover:scale-125 text-blue-500 hover:text-blue-700 ' />
                                        
                    </div>
                    <div className=" " onClick={handledelete}>
                      
                        <BsFillTrashFill className='text-3xl hover:scale-125 text-red-500 hover:text-red-700 ' />
                    </div>

                          </div>
                               }
            <span className='text-3xl ml-4 top-[11%] relative font-semibold'>Title: </span>
            <span  className=" top-[11%] relative  p-1 sm:p-1  text-xl  ">{job.title}</span> 
         <div className={isCollapsed ? ` relative sm:flex sm:flex-row md:-right-[38%] top-20 md:text-xl font-semibold sm:-left-[0%] sm:ml-60` :` relative md:-left-[25%] sm:-left-[45%] sm:h-9 top-64 flex  text-xl font-semibold  sm:top-[60%] sm:flex sm:flex-col`}>
    <h2 className='sm:left-3 '>stages {job.steps.length}</h2>
</div>
         <div className=  { isCollapsed ? ` absolute top-[35%] ml-24 text-md transition delay-500   ` :`absolute top-[35%] ml-24 text-md `}   >
            <h1 className='font-semibold text-2xl sm:mt-4 '>Job instructions</h1> 
          
            <span className= {`${classname} `}>
              {text}
</span> 
         </div>
                <div className=' relative top-[55%] right-[20%]    sm:w-auto sm:h-auto  '>
                     {steps}  
                </div>
                
</div>

        </>)
        
    // })
    // return jobslists
    
//  }

}
return(<>

{Displayjobs(props)}

</>)

}
 

  



export default JoblistCard