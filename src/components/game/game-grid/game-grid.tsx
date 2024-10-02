import styles from './game-grid.module.css'
import { type CSSProperties, type FC, PropsWithChildren } from 'react'

const SHOW_GRID = true
const SIZE_X = 32
const SIZE_Y = 14

interface GridCSSProperties extends CSSProperties {
  '--size-x': number
  '--size-y': number
}

export const GameGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.gameGrid}>
      {children}
      {SHOW_GRID && <ShadowGrid />}
    </div>
  )
}

const ShadowGrid = () => {
  const style: GridCSSProperties = { '--size-x': SIZE_X, '--size-y': SIZE_Y }

  return (
    <div className={styles.shadowGrid} style={style}>
      {Array(SIZE_X * SIZE_Y)
        .fill(' ')
        .map((cell, index) => (
          <div key={index}>{cell}</div>
        ))}
    </div>
  )
}
