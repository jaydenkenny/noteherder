import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base, {auth} from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      currentNote:{},
      uid: null,
    }
  }

  deleteNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
    this.setState({ notes })
    }
  
  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes, currentNote:note })
  }

  signedIn = () =>{
    return this.state.uid
  }

  authHandler = (user) =>{
    this.setState({ uid: user.uid }, this.syncNotes)
  }

  signedOut = () =>{
    auth.signOut().then(
      () =>{
      base.removeBinding(this.ref)
      this.setState({ notes:{} })
    })
  }

  componentWillMount(){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.authHandler(user)
      }else{
        this.setState({uid: null})
      }
    })
  }

  syncNotes=()=>{
    this.ref = base.syncState(
      `${this.state.uid}/notes`,
      {
        context: this,
        state: 'notes',
      }

    )
  }

  renderMain = () =>{
    const actions = {
      saveNote: this.saveNote,
      deleteNote: this.deleteNote,
    }
    return (
      <div>
        <SignOut signOut ={this.signedOut}/>
        <Main notes={this.state.notes} {...actions} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? this.renderMain() : <SignIn />}
      </div>
    );
  }
}

export default App;