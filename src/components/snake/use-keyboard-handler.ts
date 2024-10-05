import { MutableRefObject, useEffect } from 'react'
import { Direction } from '../../types.ts'

const isValidKey = (str: string): boolean => {
  return ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(str)
}

export const useKeyboardHandler = (
  proposedDirectionRef: MutableRefObject<Direction>,
) => {
  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (!isValidKey(e.key)) {
        return
      }
      // do not scroll page
      e.preventDefault()

      switch (e.key) {
        case 'ArrowDown':
          proposedDirectionRef.current = Direction.DOWN
          break
        case 'ArrowUp':
          proposedDirectionRef.current = Direction.UP
          break
        case 'ArrowLeft':
          proposedDirectionRef.current = Direction.LEFT
          break
        case 'ArrowRight':
          proposedDirectionRef.current = Direction.RIGHT
          break
      }
    }

    window.addEventListener('keydown', keyboardHandler)

    return () => {
      window.removeEventListener('keydown', keyboardHandler)
    }
  }, [])
}
