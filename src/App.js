import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      currentNote:{},
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

  openNote= (currentNote) =>{
    this.setState({currentNote}, ()=>{console.log(currentNote)})
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} currentNote={this.state.currentNote} saveNote={this.saveNote} deleteNote={this.deleteNote} openNote={this.openNote} />
      </div>
    );
  }
}

export default App;