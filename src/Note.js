import React from 'react'

const Note = ({ note }) => {

  deleteNote(ev){
            ev.preventDefault()
            const del = ev.target.closest('.justForDelete')
            del.remove()
        }
        
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
        <button className="note-list" onClick={this.deleteNote}>
            <span className="note-link-text">🗑️</span>
        </button>
      </div>
    </li>
  )
  
}

export default Note