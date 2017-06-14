import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component{
    constructor(){
    super()
        this.state={
            title:'',
            note:'',
            notes:[],
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateNotes = this.updateNotes.bind(this)
        this.postNotes = this.postNotes.bind(this)
    }

    updateNotes(ev){
        this.setState({
            note:ev.target.value,
        })
    }

    updateTitle(ev){
        this.setState({
            title:ev.target.value,
        })
    }

    postNotes(ev){
        console.log(ev.target.value)
        ev.preventDefault()
        const note ={
            text:this.state.note,
        }

    const state = {...this.state}
    state.notes.push(note)
    state.note=''
    this.setState(state,()=>console.log(this.state))
    console.log(note)
}


    render(){
        return(
            <div className="NoteForm">
                <form>
                    <p>
                        <input type="text" name="title" placeholder="Title your note"onChange={this.updateTitle} />
                    </p>
                    <p>
                        <textarea name="body" cols="30" rows="10" 
                        placeholder="Just start typing..." 
                        onChange={this.updateNotes}></textarea>
                    </p>
                    <a className="note-link" href="#" onClick={this.postNotes}>
                    <span className="note-link-text">Save</span>
                </a>
                </form>
            </div>
        )
    }
}

// function Comment(props){
//     return(
//         <div className="comment">
//             <div>{props.comment.text}</div>
//         </div>
//     )
// }

export default NoteForm