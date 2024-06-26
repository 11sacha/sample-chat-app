import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 `,
    input: `w-full text-xl p-3 bg-[#98C900] text-white outline-none border-none rounded-bl-md`,
    button: `w-[20%] bg-orange-400 rounded-br-md text-gray-500 hover:text-white`
}

function SendMessage({scroll}) {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        type="text" 
        placeholder='Message' 
        className={style.input}/>
        <button className={style.button}>Send</button>
    </form>
  )
}

export default SendMessage