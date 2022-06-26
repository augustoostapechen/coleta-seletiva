import L from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { useWaypoints } from '../services/hooks/useWaypoints'
import { getPlan } from '../utils/getPlan'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
})

export const LeafletRoutingMachine = () => {
  const { getWaypoints } = useWaypoints()
  const waypoints = getWaypoints()
  const map = useMap()
  
  useEffect(() => {
    if (!map) return
    
    const myPlan = getPlan(waypoints)
    
    L.Routing.control({
      waypoints,
      plan: myPlan,
      lineOptions: {
        styles: [{ color: '#6FA1EC', weight: 4 }],
        extendToWaypoints: false,
        missingRouteTolerance: 1,
        addWaypoints: false,
      },
    }).addTo(map)
  
  }, [map, waypoints])

  return null
}
