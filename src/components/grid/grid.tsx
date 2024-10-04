import styles from './grid.module.css'
import { Header } from '../header/header.tsx'
import { Footer } from '../footer/footer.tsx'
import { GameGrid } from '../game/game-grid/game-grid.tsx'

export const Grid = () => {
  return (
    <div className={styles.grid}>
      <Header />
      <GameGrid />
      <Footer />
    </div>
  )
}
