import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from './firebase'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReels from './StoryReels'
function Feed() {
    const [post, setpost] = useState([])
    useEffect(() => {
        db.collection("tan").orderBy("timestamps", "desc").onSnapshot(snapshot => {
            setpost(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log(post)
    return (
        <div className="feed">
            {/* storyReels */}
            <StoryReels />
            <MessageSender />
            {
                post.map(pos => (
                    <Post
                    profilepic={pos.profilepic}
                    message={pos.message}
                    username={pos.username}
                    image={pos.image}
                    timestamps={pos.timestamps}
                     />
                ))
            }
           
           
        </div>
    )
}

export default Feed
