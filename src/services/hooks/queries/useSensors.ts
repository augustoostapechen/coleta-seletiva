import { useQuery } from "react-query"
import sentiloApi from "../../sentilo"

export async function getSensors(): Promise<Sentilo.ISensors[]> {
  const { data: { sensors } } = await sentiloApi.get(
    `/data/${import.meta.env.VITE_APP_SENTILO_UTFPR_PROVIDERID}?limit=1000`
  )

  return sensors
}

export function useSensors() {
  return useQuery(
    'sensors', getSensors,
    { staleTime: 1000 * 60 * 10 } // 10 minutes
  )
}