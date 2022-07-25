import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faGear } from '@fortawesome/free-solid-svg-icons'

import { useWaypoints } from '../services/hooks/useWaypoints'
import { Spinner } from './Spinner'
import { useCustomMap } from '../services/hooks/useMaps'

interface ISidebarProps {
  isFetching: boolean
  handleRefetch(): void
  sensors: Sentilo.NewSensorsType[]
}

export const Sidebar = ({ isFetching, handleRefetch, sensors }: ISidebarProps) => {
  const { addWaypoints } = useWaypoints()
  const { addRouting, clearRouting } = useCustomMap()

  return (
    <aside className="h-screen w-96" aria-label="Sidebar">
      <div className="h-full py-4 px-3 text-gray-900 dark:bg-gray-50">
        <div className="pt-4 pb-8 px-6">
          <a href="#!">
            <div className="flex items-center">
              <div className="grow ml-3">
                <p className="text-3xl font-semibold text-green-400">Coleta Seletiva</p>
              </div>
            </div>
          </a>
        </div>

        <ul className="space-y-3">
          {/* AQUIIIII */}
          <li className="relative" id="settings">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSettings"
              aria-expanded="false"
              aria-controls="collapseSettings"
            >
              <FontAwesomeIcon className="w-4 h-4 mr-3" icon={faGear} />
              <span>Configurações</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-3 h-3 ml-auto"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
            </a>

            <ul
              className="relative accordion-collapse collapse space-y-2"
              id="collapseSettings"
              aria-labelledby="sidenavSettings"
              data-bs-parent="#settings"
            >
              <li className="relative">
                <button
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  onClick={handleRefetch}
                >
                  {isFetching && (
                    <div className="flex items-center justify-center text-blue-600">
                      <Spinner className="mr-2 spinner-border animate-spin inline-block w-3 h-3 border-2 rounded-full" />
                    </div>
                  )}
                  Atualizar Sensores
                </button>
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary"></a>
              </li>

              <li className="relative">
                <button
                  className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  onClick={() => clearRouting()}
                >
                  Limpar mapa
                </button>
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary"></a>
              </li>
            </ul>
          </li>

          {/* AQUIIIII */}

          {sensors &&
            sensors.map((sensor, index) => (
              <li key={`${sensor.sensor}-${index}`} className="relative" id={`sensor${index}`}>
                <a
                  className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseSensor${index}`}
                  aria-expanded="false"
                  aria-controls={`collapseSensor${index}`}
                >
                  <FontAwesomeIcon className="w-4 h-4 mr-3" icon={faTruck} />
                  <span>{sensor.sensor}</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-3 h-3 ml-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    ></path>
                  </svg>
                </a>

                <ul
                  className="relative accordion-collapse collapse space-y-2"
                  id={`collapseSensor${index}`}
                  aria-labelledby={`sidenavSensor${index}`}
                  data-bs-parent={`#sensor${index}`}
                >
                  {sensor.date &&
                    sensor.date.map((date, index) => (
                      <li key={`${date.day}-${index}`} className="relative">
                        <button
                          className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                          onClick={() => addRouting(date.waypoints)}
                        >
                          {date.day}
                        </button>
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary"></a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  )
}
