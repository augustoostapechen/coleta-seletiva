declare namespace Sentilo {
  interface IObservations {
    value: string;
    timestamp: string;
    location: string;
    time: number;
  }

interface ISensors {
    sensor: string;
    observations: IObservations[]
  }
}