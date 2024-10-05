import { Block } from '../block/block.tsx'
import { useSnakeMovement } from './use-snake-movement.ts'
import { FC } from 'react'
import { useKeyboardHandler } from './use-keyboard-handler.ts'

interface SnakeProps {
  hasOpenWalls: boolean
  gridSize: {
    width: number
    height: number
  }
}

export const Snake: FC<SnakeProps> = ({ hasOpenWalls, gridSize }) => {
  const { positions, proposedDirectionRef } = useSnakeMovement({
    hasOpenWalls,
    gridSize,
  })
  useKeyboardHandler(proposedDirectionRef)

  return positions.map((position) => (
    <Block key={`${position.x}${position.y}`} position={position}>
      {' '}
    </Block>
  ))
}
