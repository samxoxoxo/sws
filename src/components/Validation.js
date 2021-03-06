import React, {useEffect} from 'react'
import img from '../images/greenside.png';
import '../App.css'
import { useHistory,useLocation } from "react-router-dom";




  function Validation(){

    const history = useHistory();
 
    var [err, setErr] = React.useState('')
    const location = useLocation();
    
  
    function verifiedUser() {
      const props = {
         email : location.state.email,
         logged: true
      }


      var paramss = new URLSearchParams()
      paramss.append("email", location.state.email)
      var header = new Headers()
      header.append("Content-Type", "application/x-www-form-urlencoded")
        var request={
        method:'POST',
        header: header,
        body:paramss
        
  }
  
  fetch('https://helpsws.herokuapp.com/isverified', request)
  .then((res) => res.json())
  .then((result) => {

    if(result.status === true) {
      localStorage.setItem("email", props.email)
      localStorage.setItem("check", "false" )
      localStorage.getItem("check")
      localStorage.setItem("status", JSON.stringify([false,false,false, false,false,false, false,false,false]))
      history.push({pathname: "/", state: props})
    } else {
      setErr('User not verified')
    }
    
  })
    }

   
 
    function resend(){
      
      var params = new URLSearchParams()
      params.append("email",location.state.email)
      params.append("name",location.state.name)
      var header = new Headers()
      header.append("Content-Type", "application/x-www-form-urlencoded")
        var request={
        method:'POST',
        body:params,
        header: header,
  }
  
  fetch('https://helpsws.herokuapp.com/sendmail', request)
  .then((res) => res.json())
  .then((result) => {

  alert('Mail Sent!')
  })
    }
  
    return(
    
        <div className="mainX">
           <img className="imgLogin" alt="logo of sws" src={img}></img>
            <div className="validationpara"><p>We have sent a mail to your ID {location.state.email}. Please follow the instructions and validate your email.</p></div>
        <div className="validbutton"><button onClick={()=>verifiedUser()}>Continue</button>
        <button onClick={()=>resend()}>Resend</button></div>
        <div className="errVer">{err}</div>
        </div>
      
    )
  }
export default Validation;
