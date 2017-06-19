import React from 'react'
import './NoteForm.css'


const Note = (props) => {

  const deleteNote = (ev) => {
    ev.preventDefault()
    props.deleteNote(props.note)
  }

  const openNote = (ev) => {
    ev.preventDefault()
    props.openNote(props.note)
  }
  
  return (
    <li onClick={openNote}>
      <div className="note">
        <div className="note-title">
          {props.note.title}
        </div>
        <div className="note-body">
          <p>
            {props.note.body}
          </p>
        </div>
        <button type="submit" onClick={deleteNote}>
            🗑️
        </button>
      </div>
    </li>
  )
  
}

export default Note
//onClick={this.props.deleteNote()}