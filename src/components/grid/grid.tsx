import styles from './grid.module.css'

export const Grid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.topBar}>NOS TeleSnake</div>
      <div className={styles.page}>000</div>
      <Header />
      <div className={styles.bottomDivider}>
        <a href="#">© AXMD - P.T. SEPT. 2024</a>
      </div>
      <div className={styles.topscores}>topscores</div>
      <div className={styles.debug}>debug</div>
      <div className={styles.instellingen}>instellingen</div>
      <a className={styles.bron} href="https://github.com/a-xmd/telesnake">
        bron
      </a>
    </div>
  )
}

const Header = () => {
  return (
    <div className={styles.header}>
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
