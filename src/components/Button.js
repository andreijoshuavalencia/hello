import React from 'react'
import './Button.css'

function Button(props) {

  const clickHandler = (event) => {
    console.log(event.target.textContent);
  }

  return (
    <div className='number'>
        <button onClick={clickHandler}>{props.number}</button>
    </div>
  )
}

export default Button