import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const changeName = (e) => {
    setFirstName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName && email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      }
      setPeople([...people, newPerson])

      setFirstName('')
      setEmail('')
    }
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
              onChange={changeName}
              value={firstName}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={changeEmail}
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

export default ControlledInputs
