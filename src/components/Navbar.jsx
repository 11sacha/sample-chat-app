import React from 'react'
import { auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth' 
import SignIn from './SignIn'
import LogOut from './LogOut.jsx'

const style = {
    nav: `bg-[#98C900] h-20 flex justify-between items-center p-4 rounded-tr-md rounded-tl-md`,
    heading: `text-white text-3xl px-4`
}

function Navbar() {
    const [user] = useAuthState(auth)
    console.log(user)

  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {user ? <LogOut/> : <SignIn/>}
    </div>
  )
}

export default Navbar