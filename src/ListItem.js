import React, { Component } from 'react'
import './NoteList.css'

class ListItem extends Component{
    constructor(){
        super()
        this.state={
            items:[{title:"Citizens of distant epochs",body:"Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?"},
            {title:"Preserve and cherish that pale blue dot",body:"network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"},
            {title:"Laws of physics",body:"Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas"},]
        }
        
        this.addTitle = this.addTitle.bind(this)
        this.deleteNote = this.deleteNote.bind(this)    
    }

     deleteNote(ev){
            ev.preventDefault()
            const del = ev.target.closest('.justForDelete')
            del.remove()
        }

       addTitle(newAdd,index){
        return(
                <li key={index} className="justForDelete">
                    <div className="note">
                    <div className="note-title">
                        {newAdd.title}
                    </div>
                    <div className="note-body">
                        <p>
                        {newAdd.body}
                        </p>
                    </div>
                        <a className="note-list" href="#" onClick={this.deleteNote}>
                            <span className="note-link-text">Delete</span>
                        </a>
                    </div>
                </li>
        )
       }


    render(){
        return(
        <ul id="notes">
            {this.state.items.map(this.addTitle)}
        </ul>
        )
    }
}

export default ListItem