import styles from './game-grid.module.css'
import { type CSSProperties } from 'react'
import { Snake } from '../../snake/snake.tsx'

const SHOW_GRID = true
const GRID_SIZE_X = 32
const GRID_SIZE_Y = 14
const HAS_OPEN_WALLS = true

interface GridCSSProperties extends CSSProperties {
  '--grid-size-x': number
  '--grid-size-y': number
}

export const GameGrid = () => {
  return (
    <div className={styles.gameGrid}>
      <Snake
        hasOpenWalls={HAS_OPEN_WALLS}
        gridSize={{ width: GRID_SIZE_X, height: GRID_SIZE_Y }}
      />
      {SHOW_GRID && <ShadowGrid />}
    </div>
  )
}

const ShadowGrid = () => {
  const style: GridCSSProperties = {
    '--grid-size-x': GRID_SIZE_X,
    '--grid-size-y': GRID_SIZE_Y,
  }

  return (
    <div className={styles.shadowGrid} style={style}>
      {Array(GRID_SIZE_X * GRID_SIZE_Y)
        .fill(' ')
        .map((cell, index) => (
          <div key={index}>{cell}</div>
        ))}
    </div>
  )
}
