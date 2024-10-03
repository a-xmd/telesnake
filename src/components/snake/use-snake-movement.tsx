import { useEffect, useState, useRef } from 'react'
import { Position } from '../../types.ts'
import { useInterval } from '../../hooks/use-interval.ts'

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const isValidKey = (str: string): boolean => {
  return ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(str)
}

export const useSnakeMovement = () => {
  const directionRef = useRef<Direction>(Direction.DOWN)
  const [positions, setPositions] = useState<Position[]>(() => [
    { x: 12, y: 7 },
    { x: 13, y: 7 },
    { x: 14, y: 7 },
    { x: 15, y: 7 },
    { x: 16, y: 7 },
  ])

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (!isValidKey(e.key)) {
        return
      }
      e.preventDefault()

      switch (e.key) {
        case 'ArrowDown':
          directionRef.current = Direction.DOWN
          break
        case 'ArrowUp':
          directionRef.current = Direction.UP
          break
        case 'ArrowLeft':
          directionRef.current = Direction.LEFT
          break
        case 'ArrowRight':
          directionRef.current = Direction.RIGHT
          break
      }
    }

    window.addEventListener('keydown', keyboardHandler)
  }, [])

  useInterval(() => {
    const withoutLastBlock = positions.slice(1)
    const head = withoutLastBlock.at(-1)

    if (!head) {
      return
    }
    let newPositions: Position[] = []

    switch (directionRef.current) {
      case Direction.RIGHT: {
        newPositions = [...withoutLastBlock, { x: head.x + 1, y: head.y }]
        break
      }
      case Direction.LEFT:
        newPositions = [...withoutLastBlock, { x: head.x - 1, y: head.y }]
        break

      case Direction.UP: {
        newPositions = [...withoutLastBlock, { x: head.x, y: head.y - 1 }]
        break
      }
      case Direction.DOWN: {
        newPositions = [...withoutLastBlock, { x: head.x, y: head.y + 1 }]
        break
      }
    }
    setPositions(newPositions)
  }, 1000)

  return { positions }
}
