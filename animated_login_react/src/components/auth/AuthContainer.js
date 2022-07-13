import React from 'react'
import "./AuthContainer.scss"
import Login from './Login'
import Register from './Register'
import Reset from './Reset'
import { useState } from 'react'

const AuthContainer = () => {
    const[auth, setAuth] = useState({
        login: true,
        register: false,
        reset: false
    })
    // const[login, setLogin] = useState(true)
    // const[register, setRegister] = useState(false)
    // const[reset, setReset] = useState(false)


    const [showPasword, setShowPassword] = useState(false);

    const handleTogglePassword = () =>{
        setShowPassword(!showPasword)
      }

    const handleLogin = () => {
        setAuth({login:true,register:false,reset:false})
        // setLogin(true)
        // setRegister(false)
        // setReset(false)
    }

    const handleRegister = () => {
        setAuth({login:false,register:true,reset:false})
        // setLogin(false)
        // setRegister(true)
        // setReset(false)
    }

    const handleReset = () => {
        setAuth({login:false,register:false,reset:true})
        // setLogin(false)
        // setRegister(false)
        // setReset(true)
    }

   

  return (
    <section className='--flex-center --100vh '>
        <div className='container box'>

            {auth.login && <Login registerProp = {handleRegister} resetProp={handleReset} showPasswordProp={showPasword} togglePasswordProp={handleTogglePassword}/>}
            {auth.register &&  <Register loginProp={handleLogin} showPasswordProp={showPasword} togglePasswordProp={handleTogglePassword}/>}
            {auth.reset && <Reset loginProp={handleLogin}/>}
        

       

        

        </div>
     
    </section>
  )
}

export default AuthContainer
