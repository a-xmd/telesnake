import { Grid } from './components/grid/grid.tsx'
import { GameProvider } from './game-context.tsx'

export function App() {
  return (
    <GameProvider>
      <Grid />
    </GameProvider>
  )
}
