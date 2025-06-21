import React from 'react'
import { useUser } from './UserContext' 

const About = () => {
  const user = useUser()

  return (
    <div>
      <h1>About page</h1>
      <p>Welcome, {user}!</p>
    </div>
  )
}

export default About
