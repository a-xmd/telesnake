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

interface UseSnakeMovementProps {
  hasOpenWalls: boolean
  gridSize: {
    width: number
    height: number
  }
}

type UseSnakeMovement = (props: UseSnakeMovementProps) => {
  positions: Position[]
}

export const useSnakeMovement: UseSnakeMovement = ({
  hasOpenWalls,
  gridSize,
}) => {
  const directionRef = useRef<Direction>(Direction.DOWN)

  const [positions, setPositions] = useState<Position[]>(() => [
    { x: 4, y: 7 },
    { x: 4, y: 8 },
    { x: 4, y: 9 },
    { x: 4, y: 10 },
    { x: 4, y: 11 },
  ])

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (!isValidKey(e.key)) {
        return
      }
      e.preventDefault()

      const head = positions.at(-1)
      const neck = positions.at(-2)

      if (!head || !neck) {
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          if (head.y + 1 !== neck.y) {
            directionRef.current = Direction.DOWN
          }
          break
        case 'ArrowUp':
          if (head.y - 1 !== neck.y) {
            directionRef.current = Direction.UP
          }
          break
        case 'ArrowLeft':
          if (head.x - 1 !== neck.x) {
            directionRef.current = Direction.LEFT
          }
          break
        case 'ArrowRight':
          if (head.x + 1 !== neck.x) {
            directionRef.current = Direction.RIGHT
          }
          break
      }
    }

    window.addEventListener('keydown', keyboardHandler)

    return () => {
      window.removeEventListener('keydown', keyboardHandler)
    }
  }, [positions])

  useInterval(() => {
    const withoutLastBlock = positions.slice(1)
    const head = positions.at(-1)

    if (!head) {
      return
    }
    let newPositions: Position[] = []

    switch (directionRef.current) {
      case Direction.RIGHT: {
        const nextPosition =
          hasOpenWalls && head.x === gridSize.width ? 1 : head.x + 1

        newPositions = [...withoutLastBlock, { x: nextPosition, y: head.y }]
        break
      }
      case Direction.LEFT: {
        const nextPosition =
          hasOpenWalls && head.x === 1 ? gridSize.width : head.x - 1

        newPositions = [...withoutLastBlock, { x: nextPosition, y: head.y }]
        break
      }
      case Direction.UP: {
        const nextPosition =
          hasOpenWalls && head.y === 1 ? gridSize.height : head.y - 1

        newPositions = [...withoutLastBlock, { x: head.x, y: nextPosition }]
        break
      }
      case Direction.DOWN: {
        const nextPosition =
          hasOpenWalls && head.y === gridSize.height ? 1 : head.y + 1

        newPositions = [...withoutLastBlock, { x: head.x, y: nextPosition }]
        break
      }
    }

    setPositions(newPositions)
  }, 125)

  return { positions }
}
