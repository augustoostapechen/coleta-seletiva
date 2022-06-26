declare namespace Sentilo {
  interface IObservations {
    value: string;
    timestamp: string;
    location: string;
    time: number;
  }

  interface ISensors {
    sensor: string;
    observations: IObservations[];
  }

  type RouteDate = {
    day: string;
    waypoints: L.LatLng[];
  } 

  type ReduceReturnType = {
    date: RouteDate[];
  }

  type NewSensorsType = {
    sensor: string;
    date: RouteDate[];
  }
}