import { type FC, type PropsWithChildren, type CSSProperties } from 'react'
import clsx from 'clsx'
import styles from './block.module.css'
import { Position } from '../../types.ts'

interface BlockCSSProperties extends CSSProperties {
  '--pos-x': number
  '--pos-y': number
}

interface BlockProps {
  position: Position
  color?: 'green'
  className?: string
}

export const Block: FC<PropsWithChildren<BlockProps>> = ({
  children,
  position,
  className = '',
}) => {
  const style: BlockCSSProperties = {
    '--pos-x': position.x,
    '--pos-y': position.y,
  }

  return (
    <span
      className={clsx(styles.block, { [className]: className })}
      style={style}
    >
      {children}
    </span>
  )
}
