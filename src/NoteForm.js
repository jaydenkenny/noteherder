import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }
  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.currentNote){
          this.setState({note: nextProps.currentNote})
      }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })
  }

  handleRemove = (ev) =>{
    this.props.deleteNote(this.state.note)
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.state.note.body}
            ></textarea>
          </p>
          <button type="submit">
            🐝
          </button>
          <button type="submit" onClick={this.handleRemove}>
            🗑️
        </button>
        </form>
      </div>
    )
  }
}

export default NoteForm