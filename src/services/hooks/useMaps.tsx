import React, { useState } from 'react'
import L, { Routing } from 'leaflet'
import { getPlan } from '../../utils/getPlan'

interface IMapContextData {
  setMap(map: L.Map): void
  addRouting(waypoints: L.LatLng[]): void
  clearRouting(): void
}

const MapContext = React.createContext<IMapContextData>({} as IMapContextData)

const MapProvider = ({ children }: any) => {
  const [customMap, setCustomMap] = useState<L.Map>()
  const [routingControl, setRoutingControl] = useState<Routing.Control>({} as Routing.Control)
  const [routingsControl, setRoutingsControl] = useState<Routing.Control[]>([] as Routing.Control[])

  const setMap = (map: L.Map) => {
    setCustomMap(map)
  }

  const addRouting = (waypoints: L.LatLng[]) => {
    const myPlan = getPlan(waypoints)

    const routingControl = new Routing.Control({
      waypoints,
      // plan: myPlan,
      lineOptions: {
        styles: [{ color: '#6FA1EC', weight: 4 }],
        extendToWaypoints: false,
        missingRouteTolerance: 1,
        addWaypoints: false,
      },
    })

    setRoutingControl(routingControl)

    const newArray = routingsControl
    newArray.push(routingControl)
    setRoutingsControl(newArray)

    customMap && routingControl.addTo(customMap)
  }

  const clearRouting = () => {
    routingsControl.forEach((routingControl) => customMap?.removeControl(routingControl))
  }

  return <MapContext.Provider value={{ setMap, addRouting, clearRouting }}>{children}</MapContext.Provider>
}

const useCustomMap = (): IMapContextData => {
  const context = React.useContext(MapContext)

  if (!context) {
    throw new Error('useCustomMap must be used within a MapProvider')
  }

  return context
}

export { MapProvider, useCustomMap }
