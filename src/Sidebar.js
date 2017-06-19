import React from 'react'

import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'
import './Sidebar.css'

const Sidebar = ({ newNote }) => {
    const handleClick = (ev) =>{
        
    }
        return(
            <nav className="Sidebar">
                <div className="logo">
                <img src={quill} alt="Noteherder"/>
                </div>
                <button className="new-note" onClick={handleClick}>
                <img src={newHover} alt="New note"/>
                <img className="outline" src={newIcon} alt="New note"/>
                </button>
            </nav>
        )
}

export default Sidebar