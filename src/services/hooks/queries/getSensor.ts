import { useQuery } from "react-query"
import { sentiloElasticSearch } from "../../sentilo"


const query = JSON.stringify({
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
})

export async function getSensors() {
  const { data } = await sentiloElasticSearch.get(
    'sentilo-2022.09/_search',
    {
      params: {
        source: query,
        source_content_type: 'application/json'
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