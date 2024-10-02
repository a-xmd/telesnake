import { useState } from 'react'
import { Position } from '../../types.ts'
import { useInterval } from '../../hooks/use-interval.ts'

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export const useSnakeMovement = () => {
  const [direction] = useState<Direction>(Direction.DOWN)
  const [positions, setPositions] = useState<Position[]>(() => [
    { x: 12, y: 7 },
    { x: 13, y: 7 },
    { x: 14, y: 7 },
    { x: 15, y: 7 },
    { x: 16, y: 7 },
  ])

  useInterval(() => {
    const withoutLastBlock = positions.slice(1)
    const head = withoutLastBlock.at(-1)

    if (!head) {
      return
    }

    switch (direction) {
      case Direction.RIGHT: {
        setPositions([...withoutLastBlock, { x: head.x + 1, y: head.y }])
        break
      }
      case Direction.LEFT: {
        setPositions([...withoutLastBlock, { x: head.x - 1, y: head.y }])
        break
      }
      case Direction.UP: {
        setPositions([...withoutLastBlock, { x: head.x, y: head.y - 1 }])
        break
      }
      case Direction.DOWN: {
        setPositions([...withoutLastBlock, { x: head.x, y: head.y + 1 }])
        break
      }
    }
  }, 1000)

  return { positions }
}
