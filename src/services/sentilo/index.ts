import axios from 'axios';

const sentiloApi = axios.create({ 
  baseURL: import.meta.env.VITE_APP_SENTILO_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `${import.meta.env.VITE_APP_SENTILO_PROVIDERID}`,
    'IDENTITY_KEY': `${import.meta.env.VITE_APP_SENTILO_UTFPR_TOKEN}`
  }
})

const sentiloElasticSearch = axios.create({
  baseURL: import.meta.env.VITE_APP_SENTILO_ELASTIC_SEARCH_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `${import.meta.env.VITE_APP_SENTILO_ELASTIC_SEARCH_AUTH}`,

  }
})

export { sentiloApi, sentiloElasticSearch };