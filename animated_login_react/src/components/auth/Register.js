import React from 'react'
import registerImg from '../../access/image2.jpg'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {GoPrimitiveDot} from 'react-icons/go'
import {FaCheck} from 'react-icons/fa'
import { useState, useEffect } from 'react';

const Register = ({loginProp, showPasswordProp, togglePasswordProp}) => {

 
  const[showIndicator,setShowIndicator] = useState();
  const[pass,setPass] = useState("");
  const[passLetter,setPassLetter] = useState(false);
  const[passNumber,setPassNumber] = useState(false)
  const[passChar,setPassChar] = useState(false)
  const[passLength,setPassLength] = useState(false)

  const[passComplete,setPassComplete] = useState("")
  
 

  const handleShowIndicator = () =>{
    setShowIndicator(true)
  }

  const handlePasswordChange = (e) =>{
    setPass(e.target.value)
    // console.log(pass);

  }


  useEffect(()=>{
    //check upper and lowercase
    if(pass.match(/([a-z].*[A-Z]) || ([A-Z].*[a-z])/)){
      setPassLetter(true)
      console.log(passLetter);

    }else{
      setPassLetter(false)
      console.log(passLetter);
    }

    //check for number

    if(pass. match(/([0-9])/)){
      setPassNumber(true)
    }else{
      setPassNumber(false)
    }

    //check for  special character

    if(pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
      setPassChar(true)
    }else{
      setPassChar(false)
    }

    if(pass.length > 7){
      setPassLength(true)
    }else{
      setPassLength(false)
    }

    if(passLetter && passNumber && passChar && passLetter){
      setPassComplete(true)
    }else{
      setPassComplete(false)
    }

   

  },[pass, passChar,passLength,passLetter, passNumber])

  return (

    <div className='main-container --flex-center'>

        <div className='form-container'>
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Register</h2>
                <input type="text" className='--width-100' placeholder='Username'/>
                <input type="email" className='--width-100' placeholder='email'/>

                {/*///////////////////// password field/////////////////////////////*/}
                <div className='password'>
                <input type={showPasswordProp ? "text" : "password"} className='--width-100'
                 placeholder='Password' onFocus={handleShowIndicator} 
                 value={pass} onChange={handlePasswordChange}/>

                <span className='icon'onClick={togglePasswordProp}>
                  {showPasswordProp ? <AiFillEyeInvisible/> :<AiFillEye/>}
                </span>
                </div>
                <button disabled={!passComplete} className={passComplete? "--btn --btn-primary --btn-block" :'--btn --btn-primary --btn-block btn-disabled'}>Register</button>
             
                <span className='--text-sm --block'>Have an accout?  <a href='#' className='--text-sm' onClick={loginProp}>Login</a></span>

                {/*////////////////////////// Password Strength Indicator //////////////////////////*/}

                <div className={showIndicator ? "show-indicator" : "hide-indicator"}>

                  <ul className='--list-style-none --text-sm --bg-grey --card --p'>
                    <p className='--text-sm'>Password Strenght Indicator</p>
                    <li className={passLetter ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                        {passLetter ? <FaCheck/> : <GoPrimitiveDot/>}
                      
                      {/* &nbsp; this is used to create space. it is a html entity */}
                      
                      &nbsp; Lowercase & Uppercase
                      </span>
                    </li>

                    <li className={passNumber ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                      {passNumber ? <FaCheck/> : <GoPrimitiveDot/>}
                      &nbsp; Number (0-9)
                      </span>
                    </li>

                    <li className={passChar ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                      {passChar ? <FaCheck/> : <GoPrimitiveDot/>}
                      &nbsp; Special Character(@$!#%^&*)
                      </span>
                    </li>

                    <li className={passLength ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                      {passLength ? <FaCheck/> : <GoPrimitiveDot/>}
                      &nbsp; At least 8 characters
                      </span>
                    </li>
                  </ul>
                </div>
            </form>
        </div>

        <div className='image-container'>
            <img src={registerImg} alt='image'/>
        </div>
      
    </div>
   
  )
}

export default Register
