import React from 'react'
import './DisplayNumber.css';


function DisplayNumber(props) {
  return (
    <div>
        <input value={props.value}></input>
    </div>
  )
}

export default DisplayNumber