import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA1kf2NzQeYfh1633qmuvO7e-v1XS0HVbg",
    authDomain: "noteherder-4d8bb.firebaseapp.com",
    databaseURL: "https://noteherder-4d8bb.firebaseio.com",
    projectId: "noteherder-4d8bb",
    storageBucket: "noteherder-4d8bb.appspot.com",
    messagingSenderId: "568761620851"
  })

  const db = database(app)

  export const auth = app.auth()
  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const facebookProvider = new firebase.auth.FacebookAuthProvider()
  
  export default Rebase.createClass(db)