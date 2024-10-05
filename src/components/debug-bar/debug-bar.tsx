import styles from './debug-bar.module.css'
import { type FC } from 'react'

interface DebugBarProps {
  isPlaying: boolean
  togglePlayState: () => void
}

export const DebugBar: FC<DebugBarProps> = ({ isPlaying, togglePlayState }) => {
  return (
    <div className={styles.container}>
      <div className={styles.debugBar}>
        <div className={styles.leftSection}>wip: debug bar</div>
        <div className={styles.rightSection}>
          <button className={styles.pauseButton} onClick={togglePlayState}>
            {isPlaying ? 'pause' : 'play'}
          </button>
        </div>
      </div>
    </div>
  )
}
