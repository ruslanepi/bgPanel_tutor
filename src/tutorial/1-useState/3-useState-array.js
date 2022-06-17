import React, { useState } from 'react'
import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  return (
    <div>
      {people.map((item) => {
        return <div>{item.name}</div>
      })}
    </div>
  )
}

export default UseStateArray
