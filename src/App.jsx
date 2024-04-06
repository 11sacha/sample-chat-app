import { React, useState } from 'react'
import Navbar from './components/Navbar'
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './components/Chat.jsx'

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative rounded-lg`
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat/> : null}
      </section>
    </div>
  )
}

export default App
