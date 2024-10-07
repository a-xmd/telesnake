import styles from './grid.module.css'
import { useState } from 'react'
import { Header } from '../header/header.tsx'
import { Footer } from '../footer/footer.tsx'
import { GameGrid } from '../game/game-grid/game-grid.tsx'
import { DebugBar } from '../debug-bar/debug-bar.tsx'
import { Snake } from '../snake/snake.tsx'

// @todo: these are temp values. move to context or state or ref
const SHOW_GRID = true
const GRID_SIZE_X = 32
const GRID_SIZE_Y = 14
const HAS_OPEN_WALLS = true

export const Grid = () => {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <>
      <DebugBar
        isPlaying={isPlaying}
        togglePlayState={() => setIsPlaying(!isPlaying)}
      />
      <div className={styles.grid}>
        <Header />
        <GameGrid
          SHOW_GRID={SHOW_GRID}
          GRID_SIZE_X={GRID_SIZE_X}
          GRID_SIZE_Y={GRID_SIZE_Y}
        >
          <Snake
            isPlaying={isPlaying}
            hasOpenWalls={HAS_OPEN_WALLS}
            gridSize={{ width: GRID_SIZE_X, height: GRID_SIZE_Y }}
          />
        </GameGrid>
        <Footer />
      </div>
    </>
  )
}
