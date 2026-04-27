import React from "react"
import  { useState } from "react"



function LoginForm() {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
date: '',
time: '',
})

const [error, setError] = useState('')
// Single handler for all inputs using e.target.name
const handleChange = (e) => {
const { name, value } = e.target
setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e) => {
e.preventDefault() // MUST — stops page reload
if (!formData.email || !formData.password || !formData.date) {
setError('All fields are required!')
return
}
console.log('Submitted:', formData)
setError('')
}
  return (
   <form onSubmit={handleSubmit}>
<input
type='name'
name='name'
value={formData.name}
onChange={handleChange}
placeholder='name'
/> <br/>
<input
type='email'
name='email'
value={formData.email}
onChange={handleChange}
placeholder='Email'
/> <br/>
<input
type='password'
name='password'
value={formData.password}
onChange={handleChange}
placeholder='Password'
/><br/>

<input
type='date'
name='date'
value={formData.date}
onChange={handleChange}
placeholder='date'
/><br/>

<input
type='time'
name='time'
value={formData.time}
onChange={handleChange}
placeholder='time'
/><br/>

<input
type='number'
name='number'
value={formData.number}
onChange={handleChange}
placeholder="Number"
/> <br/>

<input
type='color'
name='color'
value={formData.color}
onChange={handleChange}
placeholder="Color"
/> <br/>

<input
type='file'
name='file'
value={formData.file}
onChange={handleChange}
placeholder="File"
/> <br/>


{error && <p style={{ color: 'red' }}>{error}</p>}
<button type='submit'>Login</button>
</form>
  )
}

export default LoginForm
