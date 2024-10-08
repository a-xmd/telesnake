import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  type Dispatch,
} from 'react'

interface GameContextProps {
  score: number
  setScore: Dispatch<SetStateAction<number>>
}

const defaultProps: GameContextProps = {
  score: 0,
  setScore: () => {},
}

export const GameContext = createContext<GameContextProps>(defaultProps)

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [score, setScore] = useState(0)

  return (
    <GameContext.Provider value={{ score, setScore }}>
      {children}
    </GameContext.Provider>
  )
}
