import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">About This App</h2>
      <p className="mb-6">UserNavigator is a simple multi-page React app using React Router and Tailwind CSS.</p>
      <Link to="/" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Back to Home</Link>
    </div>
  )
}

export default About
