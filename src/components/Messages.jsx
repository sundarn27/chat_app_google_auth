import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, db } from '../firebase'
import SignOut from './SignOut'
import { collection, getDocs } from 'firebase/firestore'
import SendMessage from './SendMessage'

const Messages = () => {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        (async () => {
            const colRef = collection(db, 'messages')
            const snapshots = await getDocs(colRef)
            const docs = snapshots.docs.map((doc) => {
                let data = doc.data()
                data.id = doc.id
                return data
            });
            setMessages(docs);
        })()
    }, [])
    console.log(messages)

    return (
        <div className="chat-container">
            {messages.sort( (a,b) => a.createdAt > b.createdAt ? 1 : -1 ).map((msg) => {
                return (
                    <div key={msg.id} className={`msg ${msg.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        <img src={msg.photoURL} alt="" />
                        <p>{msg.text}</p>
                        {/* <span>{msg.createdAt}</span> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Messages