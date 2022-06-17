import React, { useState } from 'react'
import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem2 = (id) => {
    let newPeopleList = people.filter((person) => person.id !== id)
    setPeople(newPeopleList)
  }

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      console.log(oldPeople, newPeople)
      return newPeople
    })
  }

  return (
    <>
      {people.length ? (
        people.map((person) => {
          const { id, name } = person

          return (
            <div key={id} className='item'>
              <h4>
                {id}. {name}
              </h4>
              <button className='btn' onClick={() => removeItem(id)}>
                clear items
              </button>
            </div>
          )
        })
      ) : (
        <h3>empty list of people</h3>
      )}
    </>
  )
}

export default UseStateArray
