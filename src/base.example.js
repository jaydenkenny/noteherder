import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const ap = firebase.initializeApp(){
    apiKey: "AIzaSyA1kf2NzQeYfh1633qmuvO7e-v1XS0HVbg",
    authDomain: "noteherder-4d8bb.firebaseapp.com",
    databaseURL: "https://noteherder-4d8bb.firebaseio.com",
    projectId: "noteherder-4d8bb",
    storageBucket: "noteherder-4d8bb.appspot.com",
    messagingSenderId: "568761620851"
  }

  const db = database(app)

  export default Rebase.createClass(db)