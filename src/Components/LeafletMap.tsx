import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

import { LeafletRoutingMachine } from './LeafletRoutingMachine'
import { useWaypoints } from '../services/hooks/useWaypoints'
import { getSafe } from '../utils/getSafe'

export const LeafletMap = () => {
  const { getWaypoints } = useWaypoints()
  const waypoints = getSafe<L.LatLng[]>(getWaypoints())

  return (
    <MapContainer className="flex-1" doubleClickZoom={false} id="mapId" zoom={18} center={[-24.731328, -53.7658764]}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {waypoints && <LeafletRoutingMachine />}
    </MapContainer>
  )
}
