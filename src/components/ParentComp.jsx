import React from 'react'
import ChildCom from './ChildCom'

function ParentComponent() {
  return (
    <div> This is A ParentComponent

        <ChildCom fname='Jon-deer' age=' 37'  cellNo="9988774455" isStudent='true'/>
    </div>
  )
}

export default ParentComponent