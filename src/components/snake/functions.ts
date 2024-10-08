import type { Position } from '../../types.ts'

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const createCoord = ({
  maxGridX,
  maxGridY,
}: {
  maxGridX: number
  maxGridY: number
}) => ({
  x: getRandomInt(1, maxGridX),
  y: getRandomInt(1, maxGridY),
})

export const positionIsInSnake = (snake: Position[], target: Position) => {
  return snake.some(
    (position) => position.x === target.x && position.y === target.y,
  )
}

export const findFreePosition = (
  snake: Position[],
  gridSize: { width: number; height: number },
) => {
  let freePosition: Position | null = null

  while (!freePosition) {
    const potentialPosition = createCoord({
      maxGridX: gridSize.width,
      maxGridY: gridSize.height,
    })

    if (!positionIsInSnake(snake, potentialPosition)) {
      freePosition = potentialPosition
    }
  }
  return freePosition
}
