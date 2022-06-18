import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [resizing, setResizing] = useState(true)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    if (resizing) {
      console.log('start listening')
      window.addEventListener('resize', checkSize)
    }

    return () => {
      console.log('end listening')
      window.removeEventListener('resize', checkSize)
    }
  })
  console.log('render')
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
      <button className='btn' onClick={() => setResizing(false)}>
        stop listening resizing
      </button>

      <button className='btn' onClick={() => setResizing(true)}>
        restart listening resizing
      </button>
    </>
  )
}

export default UseEffectCleanup
