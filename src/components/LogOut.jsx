import React from 'react'
import { auth } from '../firebase'

const signOut = () => {
    signOut(auth)
}

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

function LogOut() {
  return (
    <div className='px-4'>
        <button className={style.button} onClick={() => {
          auth.signOut()
          }}>
          Log Out
        </button>
    </div>
    
  )
}

export default LogOut