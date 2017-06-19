import React from 'react'
import './SignIn.css'
import {auth, githubProvider} from './base'

const SignIn = () =>{
    const authenticate = () =>{
        auth.signInWithPopup(githubProvider)
    }
    return(
        <button className="SignIn" onClick={authenticate}>
            Join Us
            </button>
    )

}
export default SignIn