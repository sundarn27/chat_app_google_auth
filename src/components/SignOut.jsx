import React from 'react'
import { auth } from '../firebase'

const SignOut = () => {
  return (
    <div className='signout-container'>
        <h1>ARS 💬</h1>
        <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default SignOut