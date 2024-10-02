import styles from './grid.module.css'
import { Header } from '../header/header.tsx'
import { Footer } from '../footer/footer.tsx'

export const Grid = () => {
  return (
    <div className={styles.grid}>
      <Header />
      <div>content</div>
      <Footer />
    </div>
  )
}
