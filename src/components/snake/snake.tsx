import { Block } from '../block/block.tsx'
import { useSnakeMovement } from './use-snake-movement.ts'
import { FC } from 'react'
import { useKeyboardHandler } from './use-keyboard-handler.ts'

interface SnakeProps {
  isPlaying: boolean
  hasOpenWalls: boolean
  gridSize: {
    width: number
    height: number
  }
}

export const Snake: FC<SnakeProps> = ({
  isPlaying,
  hasOpenWalls,
  gridSize,
}) => {
  const { positions, proposedDirectionRef } = useSnakeMovement({
    isPlaying,
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
