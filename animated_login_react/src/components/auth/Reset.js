import React from 'react'
import resetImg from '../../access/image3.png';
import {AiOutlineClose} from 'react-icons/ai'

const Reset = ({loginProp}) => {
  return (
    
    <div className='main-container --flex-center'>

        <div className='form-container reset'>
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Reset</h2>
                
                <input type="email" className='--width-100' placeholder='email'/>
              
                <button className='--btn --btn-primary --btn-block'>Reset Password</button>
             
                <span className='--text-sm --block --text-center'>We will send you a reset link!!!</span>

                <div className='close'  onClick={loginProp}>
                    <AiOutlineClose color='red'/>
                </div>
            </form>
        </div>

        <div className='image-container'>
            <img src={resetImg} alt='image'/>
        </div>
      
    </div>
  )
}

export default Reset
