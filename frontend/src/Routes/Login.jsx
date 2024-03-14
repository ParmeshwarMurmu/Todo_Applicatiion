import React from 'react'
import GoogleButton from 'react-google-button'
import style from '../CSS/Login.module.css'

const Login = () => {
    return (
        <div className={style.googleBtn}>
           

           <div >
           <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
            />
           </div>
        </div>
    )
}

export default Login
