import { useQuery } from 'react-query'
import { Spinner } from './Components/Spinner'
import { Sidebar } from './Components/Sidebar'
import sentiloApi from './services/sentilo'

function App() {
  const { isLoading, error } = useQuery('sensors', async () => {
    const { data } = await sentiloApi.get<Sentilo.ISensors[]>(
      `/data/${import.meta.env.VITE_APP_SENTILO_UTFPR_PROVIDERID}?limit=1000`
    )

    return data
  })

  return isLoading ? (
    <div className="h-screen flex items-center justify-center">
      <Spinner />
    </div>
  ) : error ? (
    <h1>Falha ao obter os sensores</h1>
  ) : (
    <Sidebar />
  )
}

export default App
