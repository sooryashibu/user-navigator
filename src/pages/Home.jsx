import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to UserNavigator</h1>
      <p className="text-lg">Navigate between pages using the menu above.</p>
      <div className="space-x-4">
        <Link to="/about" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Go to About</Link>
        <Link to="/users" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">View Users</Link>
      </div>
    </div>
  )
}

export default Home
