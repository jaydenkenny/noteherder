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
            <h1 className="welcome">Welcome to Noteherder</h1>
            <div className="pls">
                <p>Got something on your mind?
                    Want somewhere to store your random thoughts?
                    Like keeping lists? 
                    <br />
                    <br />
                    <i>We'd like to Welcome you Noteherder</i>
                </p>
            </div>
            <img src="https://fleep.io/blog/wp-content/uploads/2014/07/github_icon.png" className="SignIn" onClick={authenticate} />
                    {/*Github
                </button>*/}
                <img src="http://centerlyne.com/wp-content/uploads/2016/07/logo-facebook.png" className="SignIn2" onClick={authenticateFacebook} />
                    {/*Facebook
                </button>*/}
        </div>
    )

}
export default SignIn