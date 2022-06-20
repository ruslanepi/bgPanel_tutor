import React, { useState } from 'react'

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.age && person.email) {
      const newPerson = { id: new Date().getTime().toString(), ...person }
      setPeople([...people, newPerson])
    }

    setPerson({ firstName: '', email: '', age: '' })
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age: </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button className='btn' type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>

      {people ? (
        <div>
          {people.map((person) => {
            return (
              <div className='item' key={person.id}>
                <h4>Name: {person.firstName}</h4>
                <p>email: {person.email}</p>
                <p>age: {person.age}</p>
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default MultipleInputs
