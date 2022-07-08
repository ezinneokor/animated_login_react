import React from 'react'
import registerImg from '../../access/image2.jpg'

const Register = ({loginProp}) => {
  return (

    <div className='main-container --flex-center'>

        <div className='form-container'>
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Register</h2>
                <input type="text" className='--width-100' placeholder='Username'/>
                <input type="email" className='--width-100' placeholder='email'/>
                <input type="password" className='--width-100' placeholder='Password'/>
                <button className='--btn --btn-primary --btn-block'>Register</button>
             
                <span className='--text-sm --block'>Have an accout?  <a href='#' className='--text-sm' onClick={loginProp}>Login</a></span>
            </form>
        </div>

        <div className='image-container'>
            <img src={registerImg} alt='image'/>
        </div>
      
    </div>
   
  )
}

export default Register
