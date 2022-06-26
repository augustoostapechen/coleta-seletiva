import { Spinner } from './Components/Spinner'
import { Sidebar } from './Components/Sidebar'
import { LeafletMap } from './Components/LeafletMap'
import { useSensors } from './services/hooks/useSensors'
import { reduceSensors } from './utils/reduceSensors'

function App() {
  const { data, isLoading, isFetching, error, refetch } = useSensors()

  return isLoading ? (
    <div className="h-screen flex items-center justify-center">
      <Spinner className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" />
    </div>
  ) : error ? (
    <h1>Falha ao obter os sensores</h1>
  ) : (
    <div className="flex flex-row">
      <Sidebar
        isFetching={!isLoading && isFetching}
        handleRefetch={() => refetch()}
        sensors={reduceSensors(data || [])}
      />

      <LeafletMap />
    </div>
  )
}

export default App
