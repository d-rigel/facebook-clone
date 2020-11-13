import React, { useState, useEffect } from "react";
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"
import db from "./firebase"

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        )
    }, [])
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            {posts.map((post )=> 
                 <Post
                  key={post.id} 
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                 />
           )}

           { /*
            <Post
            profilePic="https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=6&m=1158245623&s=612x612&w=0&h=y0LbpRFMHMj_9YC_kpKvLYcijEunxP27KyjXBrDHcFg=" 
            message="Waw this really works"
            timestamp="this is a timestamp"
            username="Greenfield Cohen"
            image="https://upload.wikimedia.org/wikipedia/commons/b/b9/Place_Jacobins_Lyon.jpg"
             />
            <Post
            profilePic="https://qph.fs.quoracdn.net/main-qimg-4f6fac2d967cc57b26a41cfd3ff6637e"
            message="this works secondly"
            timestamp="another time stamp"
            username="Allan carrier"

             />
            */}
        
        </div>
    )
}

export default Feed