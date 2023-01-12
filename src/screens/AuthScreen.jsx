import React, {useState, useRef} from 'react'
import axios from 'axios'

const AuthScreen = () => {
  const [register, setRegister] = useState(false)
  const nameRef = useRef()
  const passRef = useRef()

  const toggle = () => {setRegister(!register)}

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      username: nameRef.current.value,
      password: passRef.current.value
    }

    axios.post(register ? '/api/register' : '/api/login', body)
    .then(res => {
      console.log(res.data)
    })
    .catch (err => {
      console.error(err)
    })
  }

  return (
    <div className='main-page'>
        <h1>{register ? "Register": "Login"}</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder='Username' ref={nameRef} />
          <input placeholder='Password' ref={passRef} />
          <button>{register ? "Register": "Login"}</button>
        </form>
          <button onClick={toggle}>Need to {!register ? "Register": "Login"}</button>
    </div>
  )
}

export default AuthScreen