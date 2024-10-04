import { Block } from '../block/block.tsx'
import { useSnakeMovement } from './use-snake-movement.tsx'
import { FC } from 'react'

interface SnakeProps {
  hasOpenWalls: boolean
  gridSize: {
    width: number
    height: number
  }
}

export const Snake: FC<SnakeProps> = ({ hasOpenWalls, gridSize }) => {
  const { positions } = useSnakeMovement({ hasOpenWalls, gridSize })

  return positions.map((position) => (
    <Block key={`${position.x}${position.y}`} position={position}>
      {' '}
    </Block>
  ))
}
