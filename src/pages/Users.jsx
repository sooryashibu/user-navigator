import React from 'react'
import { Link } from 'react-router-dom'
import users from '../data/users'

const Users = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">User List</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="text-green-700 underline hover:text-green-900">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
