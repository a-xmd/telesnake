import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.bottomDivider}>
        <a href="#">© AXMD - P.T. SEPT/OKT 2024</a>
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
