import React, { useState } from 'react'

const UseSateBasics = () => {
  const [text, setText] = useState('Default value')

  const handleClick = (e) => {
    setText(e.target.value)
  }

  const clearHandler = (e) => {
    e.target.placeholder = ''
    setText('')
  }

  return (
    <div>
      <h1>Text</h1>
      <input
        className='input'
        onChange={(e) => handleClick(e)}
        placeholder='default'
        value={text}
        onClick={(e) => clearHandler(e)}
      />
      <h3>our state: {text}</h3>
    </div>
  )
}

export default UseSateBasics
