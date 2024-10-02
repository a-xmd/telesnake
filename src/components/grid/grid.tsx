import styles from './grid.module.css'
import { Header } from '../header/header.tsx'
import { Footer } from '../footer/footer.tsx'
import { GameGrid } from '../game/game-grid/game-grid.tsx'
import { Block } from '../block/block.tsx'
import { type Position } from '../../types.ts'

const Snake = () => {
  const positions: Position[] = [
    { x: 3, y: 5 },
    { x: 4, y: 5 },
    { x: 5, y: 5 },
  ]
  return positions.map((position) => <Block position={position}> </Block>)
}

export const Grid = () => {
  return (
    <div className={styles.grid}>
      <Header />
      <GameGrid>
        <Snake />
      </GameGrid>
      <Footer />
    </div>
  )
}
