import styles from './game-grid.module.css'
import { type CSSProperties, FC, useState } from 'react'
import { Snake } from '../../snake/snake.tsx'
import { DebugBar } from '../../debug-bar/debug-bar.tsx'

interface GridCSSProperties extends CSSProperties {
  '--grid-size-x': number
  '--grid-size-y': number
}

// @todo: these are temp values. move to context or state or ref
const SHOW_GRID = true
const GRID_SIZE_X = 32
const GRID_SIZE_Y = 14
const HAS_OPEN_WALLS = true

export const GameGrid = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <>
      <div className={styles.gameGrid}>
        <Snake
          hasOpenWalls={HAS_OPEN_WALLS}
          isPlaying={isPlaying}
          gridSize={{ width: GRID_SIZE_X, height: GRID_SIZE_Y }}
        />
        {SHOW_GRID && (
          <ShadowGrid GRID_SIZE_X={GRID_SIZE_X} GRID_SIZE_Y={GRID_SIZE_Y} />
        )}
      </div>
      <DebugBar
        isPlaying={isPlaying}
        togglePlayState={() => setIsPlaying(!isPlaying)}
      />
    </>
  )
}

// @todo: split ShadowGrid into own component?

interface ShadowGridProps {
  GRID_SIZE_X: number
  GRID_SIZE_Y: number
}

const ShadowGrid: FC<ShadowGridProps> = ({ GRID_SIZE_X, GRID_SIZE_Y }) => {
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
