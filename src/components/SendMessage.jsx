import React from 'react'
import { useState } from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app'
import Messages from './Messages'

const SendMessage = () => {

    const [ msg,setMsg ] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            uid,
            photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
    }

  return (
    <div className='form-container'>
        <form onSubmit={sendMessage}>
            <input type="text" placeholder='Type Here... @sundar' value={msg} onChange={(e) => setMsg(e.target.value)} />
            <button>Send 🕊️</button>
        </form>
    </div>
  )
}

export default SendMessage