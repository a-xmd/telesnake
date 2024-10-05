import { type MutableRefObject, useCallback, useRef, useState } from 'react'
import { Direction, type Position } from '../../types.ts'
import { useInterval } from '../../hooks/use-interval.ts'

interface UseSnakeMovementProps {
  isPlaying: boolean
  hasOpenWalls: boolean
  gridSize: {
    width: number
    height: number
  }
}

type UseSnakeMovement = (props: UseSnakeMovementProps) => {
  positions: Position[]
  proposedDirectionRef: MutableRefObject<Direction>
}

export const useSnakeMovement: UseSnakeMovement = ({
  isPlaying,
  hasOpenWalls,
  gridSize,
}) => {
  const currentDirectionRef = useRef<Direction>(Direction.DOWN)
  const proposedDirectionRef = useRef<Direction>(Direction.DOWN)

  const [positions, setPositions] = useState<Position[]>(() => [
    { x: 4, y: 7 },
    { x: 4, y: 8 },
    { x: 4, y: 9 },
    { x: 4, y: 10 },
    { x: 4, y: 11 },
  ])

  const changeDirection = useCallback(
    ({ head, neck }: { head: Position; neck: Position }) => {
      switch (proposedDirectionRef.current) {
        case Direction.DOWN:
          if (head.y + 1 !== neck.y) {
            currentDirectionRef.current = Direction.DOWN
          }
          break
        case Direction.UP:
          if (head.y - 1 !== neck.y) {
            currentDirectionRef.current = Direction.UP
          }
          break
        case Direction.RIGHT:
          if (head.x + 1 !== neck.x) {
            currentDirectionRef.current = Direction.RIGHT
          }
          break
        case Direction.LEFT:
          if (head.x - 1 !== neck.x) {
            currentDirectionRef.current = Direction.LEFT
          }
          break
      }
    },
    [],
  )

  useInterval(
    () => {
      const withoutLastBlock = positions.slice(1)
      const head = positions.at(-1)
      const neck = positions.at(-2)

      if (!head || !neck) {
        return
      }

      if (currentDirectionRef.current !== proposedDirectionRef.current) {
        changeDirection({ head, neck })
      }

      let newPositions: Position[]

      switch (currentDirectionRef.current) {
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
    },
    isPlaying ? 175 : null,
  )

  return { positions, proposedDirectionRef }
}
