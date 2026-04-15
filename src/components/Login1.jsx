import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>User Name : </label>
        <input type='name' placeholder='Enter your name'/> <br/>

        <label>Email : </label>
        <input type='email' placeholder='Enter your Email'/> <br/>

        <label>Password : </label>
        <input type='password' placeholder='Enter your password'/> <br/>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login



