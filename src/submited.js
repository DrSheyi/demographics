import { Button,Fab } from '@material-ui/core'
import {useState} from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

 function Submited(props){

    const [success,setSuccess] = useState(props.status);
  
    return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column',padding:'20px',height:'95vh'}}>
       <div>
        <CheckCircleIcon  style={{borderRadius:"50%",fontSize:"100px"}} />
        <h3>Your Response has been Successfully Submitted.</h3>
        
        </div>
    </div>
    );
}
export default Submited;