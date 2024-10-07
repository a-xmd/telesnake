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
  const currentDirectionRef = useRef<Direction>(Direction.RIGHT)
  const proposedDirectionRef = useRef<Direction>(Direction.RIGHT)

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
        case Direction.DOWN: {
          const neckAndHeadAreSeparated =
            head.y === gridSize.height && neck.y === 1

          if (head.y + 1 !== neck.y && !neckAndHeadAreSeparated) {
            currentDirectionRef.current = Direction.DOWN
          }
          break
        }
        case Direction.UP: {
          const neckAndHeadAreSeparated =
            neck.y === gridSize.height && head.y === 1

          if (head.y - 1 !== neck.y && !neckAndHeadAreSeparated) {
            currentDirectionRef.current = Direction.UP
          }
          break
        }
        case Direction.RIGHT: {
          const neckAndHeadAreSeparated =
            neck.x === 1 && head.x === gridSize.width

          if (head.x + 1 !== neck.x && !neckAndHeadAreSeparated) {
            currentDirectionRef.current = Direction.RIGHT
          }
          break
        }
        case Direction.LEFT: {
          const neckAndHeadAreSeparated =
            head.x === 1 && neck.x === gridSize.width

          if (head.x - 1 !== neck.x && !neckAndHeadAreSeparated) {
            currentDirectionRef.current = Direction.LEFT
          }
          break
        }
      }

      // restore if proposed move was invalid
      if (currentDirectionRef.current !== proposedDirectionRef.current) {
        proposedDirectionRef.current = currentDirectionRef.current
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
    isPlaying ? 125 : null,
  )

  return { positions, proposedDirectionRef }
}
