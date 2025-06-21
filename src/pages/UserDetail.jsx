import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Sam Wilson', email: 'sam@example.com' }
]

const UserDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = users.find(u => u.id === parseInt(id))

  if (!user) return <p>User not found</p>

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate(-1)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Go Back
      </button>
    </div>
  )
}

export default UserDetail
