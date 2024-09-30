import { type FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './block.module.css'

interface BlockProps {
  color?: 'red' | 'blue' | 'green'
  background?: 'green'
}

export const Block: FC<PropsWithChildren<BlockProps>> = ({
  children,
  color,
  background,
}) => {
  return (
    <span
      className={clsx(styles.block, {
        [styles.red]: color === 'red',
        [styles.blue]: color === 'blue',
        [styles.green]: color === 'green',
        [styles.bgGreen]: background === 'green',
      })}
    >
      {children}
    </span>
  )
}
