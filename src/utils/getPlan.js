export const getPlan = (waypoints) =>
  new L.Routing.Plan(waypoints, {
    addWaypoints: false,
    createMarker: function (index, waypoint, numberWaypoints) {
      if (index === 0 || index === numberWaypoints - 1) {
        return L.marker(waypoint.latLng)
      } else {
        return false
      }
    },
  })
