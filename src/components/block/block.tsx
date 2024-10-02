import { type FC, type PropsWithChildren, type CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './block.module.css'
import { Position } from '../../types.ts'

interface BlockProps {
  position: Position
}

interface BlockCSSProperties extends CSSProperties {
  '--pos-x': number
  '--pos-y': number
}

export const Block: FC<PropsWithChildren<BlockProps>> = ({
  children,

  position,
}) => {
  const style: BlockCSSProperties = {
    '--pos-x': position.x,
    '--pos-y': position.y,
  }
  return (
    <span className={clsx(styles.block, styles.bgGreen)} style={style}>
      {children}
    </span>
  )
}
