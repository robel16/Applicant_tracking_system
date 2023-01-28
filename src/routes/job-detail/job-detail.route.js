import {TbEdit} from 'react-icons/tb'
import { useLocation } from 'react-router-dom'
import "./job-detail.style.scss"
import { Link } from 'react-router-dom'
const JobDetail=()=>{

        const location=useLocation();
       
        const {step}=location.state
        
        const {steps,title,status}= step

    return(
        <div className="job-detail-container">
            <h1>{title}</h1>
            <div className="icon-table-container">
            <Link to={`/EditJob/${title}`} state={step} className='detail-edit-icon'> <TbEdit /></Link>
            <div className="detail-steps-container">
             { steps.map((step,i)=>{
                if(i!=steps.length-1)
                return (<div className="detail-step-container" key={i}>
                <div className="detail-step">
                    step {i+1}
                </div>
                <div className='step-message'>
                    {step.text}
                    </div>

               </div>)
             })
               
             
             }
                </div>
            </div>
             <div className="detail-status-container">
                <div className="status-tag">Status:</div>
                <div className={`${status} status-container`}>
                    {status}
                </div>
             </div>
        </div>
        )
}
export default JobDetail;