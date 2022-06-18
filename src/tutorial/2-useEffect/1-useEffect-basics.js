import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value > 1) {
      document.title = `New title value(${value})`
    }
  }, [value])

  return (
    <>
      <h2>{value}</h2>
      <button class='btn' onClick={() => setValue(value + 1)}>
        new page title
      </button>
    </>
  )
}

export default UseEffectBasics
