import { useEffect } from 'react'

type Options = {
  isActive: boolean
  onUp: Function
  onDown: Function
  onLeft: Function
  onRight: Function
  onEnter: Function
  onBack: Function
}

function useNavigation({
  isActive,
  onUp,
  onDown,
  onLeft,
  onRight,
  onEnter,
  onBack,
}: Options) {
  return useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.code) {
        case 'ArrowLeft':
          onLeft()
          break
        case 'ArrowDown':
          onDown()
          break
        case 'ArrowUp':
          onUp()
          break
        case 'ArrowRight':
          onRight()
          break
        case 'Enter':
          onEnter()
          break
        default:
          break
      }
    }

    if (isActive) {
      document.addEventListener('keydown', handleKeyDown, false)
    } else {
      document.removeEventListener('keydown', handleKeyDown, false)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [isActive, onLeft, onRight, onUp, onDown, onBack, onEnter])
}

export default useNavigation
