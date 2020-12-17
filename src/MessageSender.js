import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'
import db from './firebase'
function MessageSender() {
    const [{User}, dispatch] = useStateValue();

    const [input, setinput] = useState("")
    const [imageURL, setimageURL] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

            db.collection("tan").add({
                message: input,
                timestamps: firebase.firestore.FieldValue.serverTimestamp(),
                profilepic: User.photoURL,
                image: imageURL,
                username: User.displayName
            })


        setimageURL('')
        setinput("")
    }

    return (
        <div className="messagesender">
            <div className='messagesender__top'>
                <Avatar src={User.photoURL} />
                <form>
                    <input className="messagesender__input"
                    value={input}
                    onChange={e => setinput(e.target.value)} 
                    placeholder={`What's on your mind ${User.displayName}`} />
                    <input
                     placeholder="image URL (optional)"
                     value={imageURL}
                     onChange={e => setimageURL(e.target.value)}
                      />
                    <button onClick={handleSubmit} type="submit">hidden submit</button>
                </form>
            </div>
            <div className="messagesender__bottom">
                <div className="messagesender__option">
                    <VideoCallIcon style={{ color: "red"}} />
                    <h4>Live Video</h4>
                </div>
                <div className="messagesender__option">
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messagesender__option">
                    <InsertEmoticonIcon style={{ color: "orange"}} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
