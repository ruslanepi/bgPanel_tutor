import React from 'react'

const ErrorExample = () => {
  let title = 'title4'

  const handleClick = () => {
    title = 'new title'
  }

  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  )
}

export default ErrorExample
