import styles from './grid.module.css'
import { useState } from 'react'
import { Block } from '../block/block.tsx'

interface TeletekstChar {
  char: string
  color?: 'red' | 'blue'
  background?: 'green'
}

export const Grid = () => {
  const [values] = useState<(TeletekstChar | null)[]>(() => [
    ...[
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      ...Array(27).fill({ char: '', color: 'green' }),
    ],
    ...[
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: ' ',
      },
      {
        char: ' ',
      },
      ...Array.from(Array.from('TELESNAKE').join('  ')).map((item) => ({
        char: item,
        color: 'green',
      })),
      {
        char: ' ',
      },
    ],
    ...[
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
        color: 'red',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
        color: 'green',
      },

      ...Array(26).fill({ char: '', color: 'green' }),
    ],
    ...[...Array(14).fill({ char: '', color: 'green' })],
  ])

  return (
    <div className={styles.grid}>
      {values.map((value, index) => {
        return (
          <Block
            key={`cell-${index}`}
            color={value?.color}
            background={value?.background}
          >
            {value?.char ?? '·'}
          </Block>
        )
      })}
      <div className={styles.bottomDivider}>
        <a href="#">© AXMD - P.T. SEPT. 2024</a>
      </div>
      <div className={styles.topscores}>topscores</div>
      <div className={styles.over}>over</div>
      <div className={styles.instellingen}>instellingen</div>
      <a className={styles.bron} href="https://github.com/a-xmd/telesnake">
        bron
      </a>
    </div>
  )
}
