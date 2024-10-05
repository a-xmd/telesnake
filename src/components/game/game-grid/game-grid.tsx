import styles from './game-grid.module.css'
import { type CSSProperties, FC, PropsWithChildren } from 'react'

interface GridCSSProperties extends CSSProperties {
  '--grid-size-x': number
  '--grid-size-y': number
}

// @todo: replace these temp values
interface GameGridProps {
  SHOW_GRID: boolean
  GRID_SIZE_X: number
  GRID_SIZE_Y: number
}

export const GameGrid: FC<PropsWithChildren<GameGridProps>> = ({
  children,
  SHOW_GRID,
  GRID_SIZE_X,
  GRID_SIZE_Y,
}) => {
  return (
    <div className={styles.gameGrid}>
      {children}
      {SHOW_GRID && (
        <ShadowGrid GRID_SIZE_X={GRID_SIZE_X} GRID_SIZE_Y={GRID_SIZE_Y} />
      )}
    </div>
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
