import React, { useState, useContext } from 'react'
import { data } from '../../data'

const PersonContext = React.createContext()
//two components - Prrovider, Consumers

const ContextApi = () => {
  const [people, setPeople] = useState(data)

  const removePeople = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return (
    <PersonContext.Provider value={{ removePeople, people }}>
      <h3>prop drilling</h3>
      <List></List>
    </PersonContext.Provider>
  )
}

const List = () => {
  const { people } = useContext(PersonContext)
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePeople } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{id}</h4>
      <span>{name}</span>
      <div onClick={() => removePeople(id)}>remove people</div>
    </div>
  )
}

export default ContextApi
