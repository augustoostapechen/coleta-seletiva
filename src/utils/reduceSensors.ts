import L from 'leaflet'
import moment from "moment"

interface IReduceSensors {
  sensor: string;
  date: Sentilo.RouteDate[]
}

export function getObservationsByDate(observations: Sentilo.IObservations[]) {
  return observations.reduce((observationsByDate, { timestamp, location }) => {
    let index = observationsByDate.findIndex(
      (observationsByDatePrev) => moment(observationsByDatePrev.day, 'DD/MM/YYYY').format() === moment(timestamp, 'DD/MM/YYYY').format()
    )
  
    if (index < 0) {
      index = observationsByDate.length
      observationsByDate.push({
        day: moment(timestamp, 'DD/MM/YYYY').format('DD/MM/YYYY'),
        waypoints: new Array<L.LatLng>()
      })
    }

    observationsByDate[index].waypoints.push(
      L.latLng(parseFloat(location.split(' ')[0]), parseFloat(location.split(' ')[1]))
    )
    
    return observationsByDate;
  }, new Array<Sentilo.RouteDate>());
}

export function reduceSensors(sensorsArray: Sentilo.ISensors[]): IReduceSensors[] {
  return sensorsArray.map(sensor => {
    
    const observationsByDate = getObservationsByDate(sensor.observations)
    
    return {
      sensor: sensor.sensor,
      date: observationsByDate
    }
  })
}