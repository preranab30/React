import React from 'react'
import { useContext } from 'react'
import { DataContext } from './DataContext'

function ComponentD() {
    const data = useContext(DataContext);
  return (

    <div>this is From the ComponentDDDD
        <h2>{data}</h2>
    </div>
  )
}

export default ComponentD
