import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white text-center p-4 mt-10">
      &copy; {new Date().getFullYear()} UserNavigator. All rights reserved.
    </footer>
  )
}

export default Footer
