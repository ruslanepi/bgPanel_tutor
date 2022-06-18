import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const getUsers = async () => {
    const response = await fetch(url)
    const newUsers = await response.json()
    setUsers(newUsers)
    setLoading(false)
  }

  useEffect(() => {
    console.log('useEffect')
    if (loading) getUsers()
  }, [loading])

  return (
    <>
      <h3>github users</h3>
      <button className='btn' onClick={() => setLoading(true)}>
        load data
      </button>

      <ul className='users'>
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user
          return (
            <li className='user' key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>more</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
