import React from 'react'

function ChildCom(props) {
  return (
    <div> This is the in ChieldComponent

        <h1>First Name: {props.fname} </h1>
        <h2>Age :{props.age} </h2>
        <h3>Cell No: {props.cellNo}</h3>
        <h2>IsStudent: {props.isStudent}</h2>
    </div>
  )
}

export default ChildCom