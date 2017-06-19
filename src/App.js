import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base from './base'
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
    delete notes[note.id]
    
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
    this.setState({ uid: user.uid })
  }

  signedOut = () =>{
    this.setState({uid: null})
  }

  componentWillMount(){
    base.syncState(
      'notes',
      {
        context: this,
        state:'notes',
      }

    )
  }
  // openNote= (currentNote) =>{
  //   this.setState({currentNote}, ()=>{console.log(currentNote)})
  // }

  renderMain = () =>{
    return (
      <div>
        <SignOut signOut ={this.signedOut}/>
        <Main notes={this.state.notes} currentNote={this.state.currentNote} saveNote={this.saveNote} deleteNote={this.deleteNote} openNote={this.openNote} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;