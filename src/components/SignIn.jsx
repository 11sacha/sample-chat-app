import React from 'react'
import { GoogleButton } from 'react-google-button'
import { auth } from '../firebase.js'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const style = {
    wrapper: `flex justify-center px-4`
}

function SignIn() {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn