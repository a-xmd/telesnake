import styles from './grid.module.css'
import { useState } from 'react'
import { Block } from '../block/block.tsx'

interface TeletekstChar {
  char: string
  color?: 'red' | 'blue'
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
    ...[
      ...Array(14).fill({ char: '', color: 'green' }),
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
      {
        char: '',
      },
    ],
    ...Array(800).fill(null),
  ])

  return (
    <div className={styles.grid}>
      {values.map((value, index) => {
        return (
          <Block key={`cell-${index}`} color={value?.color}>
            {value?.char ?? '·'}
          </Block>
        )
      })}
    </div>
  )
}
