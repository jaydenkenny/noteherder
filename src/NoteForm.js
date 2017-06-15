import React, { Component } from 'react'
import NoteList from './NoteList'
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
            title:this.state.title,
            body:this.state.note,

        }   
    const state = {...this.state}
    state.notes.push(note)
    state.note=''
    this.setState(state,()=>console.log(this.state))
    console.log(note)
    localStorage.setItem('notes', JSON.stringify(this.state.notes))
}


    render(){
        return(
            <div className="NoteForm">
                <form>
                    <p>
                        <input type="text" name="title" placeholder="Title your note" value={this.state.title} onChange={this.updateTitle} />
                    </p>
                    <p>
                        <textarea name="body" cols="30" rows="10" 
                        placeholder="Just start typing..." value={this.state.note}
                        onChange={this.updateNotes}></textarea>
                    </p>
                    <a className="note-button" href="#" onClick={this.postNotes}>
                        <span className="note-link-text">Save</span>
                    </a>
                </form>
            </div>
        )
    }
}

function Notes(props){
    return(
        <div className="note">
            <NoteList />
        </div>
    )
}

export default NoteForm