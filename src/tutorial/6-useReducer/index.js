import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../data'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newPeople = [...state.people, action.payload]

      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
      }
    }

    case 'NO_VALUE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'input is empty',
      }
    }
  }

  throw new Error('no matching action type')
}

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn' type='submit'>
          add person
        </button>
      </form>

      {state.people.map((person) => {
        return <div key={person.id}>{person.name}</div>
      })}
    </>
  )
}

export default Index
