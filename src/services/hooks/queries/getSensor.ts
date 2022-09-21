import { useQuery } from "react-query"
import { sentiloElasticSearch } from "../../sentilo"

export async function getSensors() {
  const { data } = await sentiloElasticSearch.post(
    'sentilo-2022.09/_search',
    {
      "size": 1000,
      "query": {
        "bool": {
          "must": [
            {
              "match": {
                "sensor": "sensor-001"
              }
            },
            {
              "match": {
                "timestamp": "20/07/2021"
              }
            }
          ]
        }
      }
    }
  )

  console.log({ data })
}

// export function useSensors() {
//   return useQuery(
//     'sensors', getSensors,
//     { staleTime: 1000 * 60 * 10 } // 10 minutes
//   )
// }