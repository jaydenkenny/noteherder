import React from 'react'
import './NoteForm.css'


const Note = ({ note }) => {

  return (
    <li>
      <div className="note">
        <div className="note-title">
          {note.title}
        </div>
        <div className="note-body">
          <p>
            {note.body}
          </p>
        </div>
        <button className="button" >
            🗑️
        </button>
      </div>
    </li>
  )
  
}

export default Note
// onClick={this.props.deleteNote()}