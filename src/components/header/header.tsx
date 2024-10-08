import styles from './header.module.css'
import { Score } from '../score/score.tsx'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topBar}>NOS TeleSnake</div>
      <Score />
      <div className={styles.topWhiteN}></div>
      <div className={styles.topRedO}></div>
      <div className={styles.topWhiteS}></div>
      <div className={styles.topLine}>{Array(27).fill('').join('')}</div>
      <div className={styles.middleN}> </div>
      <div className={styles.middleO}> </div>
      <div className={styles.middleS}></div>
      <div
        className={styles.middleTeleSnake}
      >{`T  E  L  E  S  N  A  K  E`}</div>
      <div className={styles.bottomN}> </div>
      <div className={styles.bottomO}></div>
      <div className={styles.bottomS}></div>
      <div className={styles.bottomLine}>{Array(26).fill('').join('')}</div>
      <div className={styles.finalLine}>{Array(14).fill('')}</div>
    </div>
  )
}
