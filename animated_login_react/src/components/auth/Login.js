import React from 'react'
import loginImg from "../../access/image1.png";

const Login = ({registerProp, resetProp}) => {
  return (
    <div className='main-container --flex-center'>

        <div className='image-container'>
            <img src={loginImg} alt='image'/>
        </div>

        <div className='form-container'>
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Login</h2>
                <input type="text" className='--width-100' placeholder='Username'/>
                <input type="password" className='--width-100' placeholder='Password'/>
                <button className='--btn --btn-primary --btn-block'>Login</button>
                <a href='#' className='--text-sm' onClick={resetProp}>Forgot Password</a>
                <span className='--text-sm --block'>Dont have an accout?  <a href='#' className='--text-sm' onClick={registerProp}>Register</a></span>
            </form>
        </div>
      
    </div>
  )
}

export default Login
