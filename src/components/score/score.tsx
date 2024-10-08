import styles from './score.module.css'
import { useContext } from 'react'
import { GameContext } from '../../game-context.tsx'

export const Score = () => {
  const { score } = useContext(GameContext)

  return (
    <div className={styles.score}>
      {score < 100 && '0'}
      {score < 10 && '0'}
      {score}
    </div>
  )
}
