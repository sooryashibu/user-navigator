import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <nav className="flex gap-4 justify-center text-lg font-semibold">
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : ''}>About</NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? 'underline' : ''}>Users</NavLink>
      </nav>
    </header>
  )
}

export default Header
