import React from 'react'
import loginImg from "../../access/image1.png";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

const Login = ({registerProp, resetProp, showPasswordProp, togglePasswordProp}) => {
  return (
    <div className='main-container --flex-center'>

        <div className='image-container'>
            <img src={loginImg} alt='image'/>
        </div>

        <div className='form-container'>
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Login</h2>
                <input type="text" className='--width-100' placeholder='Username'/>
                <div className='password'>
                <input type={showPasswordProp ? "text" : "password"} className='--width-100' placeholder='Password'/>

                <span className='icon'onClick={togglePasswordProp}>
                  {showPasswordProp ? <AiFillEyeInvisible/> :<AiFillEye/>}
                </span>
                </div>
               
                <button className='--btn --btn-primary --btn-block'>Login</button>
                <a href='#' className='--text-sm' onClick={resetProp}>Forgot Password</a>
                <span className='--text-sm --block'>Dont have an accout?  <a href='#' className='--text-sm' onClick={registerProp}>Register</a></span>
            </form>
        </div>
      
    </div>
  )
}

export default Login
