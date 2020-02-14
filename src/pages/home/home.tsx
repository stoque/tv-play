import React from 'react'

import { useNavigation } from '../../shared/hooks'

type Props = {
  isActive: boolean
}

function Home({ isActive }: Props) {
  useNavigation({
    isActive: true,
    onLeft: () => console.log('onLeft'),
    onDown: () => console.log('onDown'),
    onUp: () => console.log('onUp'),
    onRight: () => console.log('onRight'),
    onBack: () => console.log('onBack'),
    onEnter: () => console.log('onEnter'),
  })

  return (
    <div className={isActive ? 'is-active' : ''}>
      <h1>Home</h1>

      <button type="button" onClick={() => console.log('button 1')}>
        Button 1
      </button>
      <button type="button" onClick={() => console.log('button 2')}>
        Button 2
      </button>
    </div>
  )
}

export default Home
