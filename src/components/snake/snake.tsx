import { Block } from '../block/block.tsx'
import { useSnakeMovement } from './use-snake-movement.tsx'

export const Snake = () => {
  const { positions } = useSnakeMovement()

  return positions.map((position) => (
    <Block key={`${position.x}${position.y}`} position={position}>
      {' '}
    </Block>
  ))
}
