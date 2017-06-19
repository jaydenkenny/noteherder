import React from 'react'
import './SignIn.css'

const SignIn = ({ authHandler }) =>{
    const authenticate = () =>{
        authHandler({
            uid:'jaydenkenny',
        })
    }
    return(
        <button className="SignIn" onClick={authenticate}>
            Join Us
            </button>
    )

}
export default SignIn