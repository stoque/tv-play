import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Splash() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push('home')
    }, 3000)
  }, [])

  return (
    <div className="App">
      <h1>Splash</h1>
    </div>
  )
}

export default Splash
