import React from 'react'
import './SignIn.css'
import {auth, githubProvider, facebookProvider} from './base'

const SignIn = () =>{
    const authenticate = () =>{
        auth.signInWithPopup(githubProvider)
    }
    const authenticateFacebook=()=>{
        auth.signInWithPopup(facebookProvider)
    }
    return(
        <div>
         <button className="SignIn" onClick={authenticate}>
            Github
            </button>
            <button className="SignIn" onClick={authenticateFacebook}>
            Facebook
            </button>
            </div>
    )

}
export default SignIn