import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'
function Story({image, profilescr, title}) {
    return (
        <div className="story" style={{ backgroundImage: `url(${image})`, opacity: "0.8"}}>
            <Avatar className ="avatar" src={profilescr}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
