import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'
import { WaypointsProvider } from './services/hooks/useWaypoints'

import './styles/global.css'
import 'tw-elements'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WaypointsProvider>
        <App />
        <ReactQueryDevtools />
      </WaypointsProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
