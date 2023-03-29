import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth, db } from '../firebase'
import SignOut from './SignOut'
import { collection, getDocs } from 'firebase/firestore'
import SendMessage from './SendMessage'
import Messages from './Messages'

const Chat = () => {

    return (
        <>
            <div className=" <SignOut />
            <Messages />
            <SendMessage />">
                <SignOut />
                <Messages />
                <SendMessage />
            </div>
        </>
    )
}

export default Chat