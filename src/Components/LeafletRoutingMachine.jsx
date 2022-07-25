import L from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'
import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { useCustomMap } from '../services/hooks/useMaps'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
})

export const LeafletRoutingMachine = () => {
  const map = useMap()
  const {setMap} = useCustomMap()
  
  useEffect(() => {
    if (!map) return
    
   setMap(map)
  }, [map])

  return null
}
