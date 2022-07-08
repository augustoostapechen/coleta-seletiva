import React from 'react'

import { Spinner } from './Components/Spinner'
import { Sidebar } from './Components/Sidebar'
import { LeafletMap } from './Components/LeafletMap'
// import { useSensors } from './services/hooks/useSensors'
import { reduceSensors } from './utils/reduceSensors'
import { ErrorPage } from './Components/ErrorPage'
import sensoresFake from './services/fakeApi/sensoresFake.json'

function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [isFetching, setIsFetching] = React.useState(false)

  // const { data, isLoading, isFetching, error, refetch } = useSensors()

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  return isLoading ? (
    <div className="h-screen flex items-center justify-center">
      <Spinner className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" />
    </div>
  ) : error ? (
    <ErrorPage />
  ) : (
    <div className="flex flex-row">
      <Sidebar
        isFetching={!isLoading && isFetching}
        handleRefetch={() => {
          setIsFetching(true)
          setTimeout(() => setIsFetching(false), 1000) // 1segundo
        }}
        sensors={reduceSensors(sensoresFake || [])}
      />

      <LeafletMap />
    </div>
  )
}

export default App
