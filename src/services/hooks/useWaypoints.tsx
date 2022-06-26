import React from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'
import { getPlan } from '../../utils/getPlan'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
})

interface IWaypointContextData {
  addWaypoints(waypoints: L.LatLng[]): void
  getWaypoints(): L.LatLng[]
}

const WaypointContext = React.createContext<IWaypointContextData>({} as IWaypointContextData)

const WaypointsProvider = ({ children }: any) => {
  const [waypoints, setWaypoints] = React.useState([] as L.LatLng[])

  const addWaypoints = React.useCallback((waypoints: L.LatLng[]) => {
    setWaypoints(waypoints)
  }, [])

  const getWaypoints = React.useCallback(() => waypoints, [waypoints])

  return <WaypointContext.Provider value={{ addWaypoints, getWaypoints }}>{children}</WaypointContext.Provider>
}

function useWaypoints(): IWaypointContextData {
  const context = React.useContext(WaypointContext)

  if (!context) {
    throw new Error('useWaypoints must be used within a WaypointsProvider')
  }

  return context
}

export { WaypointsProvider, useWaypoints }
