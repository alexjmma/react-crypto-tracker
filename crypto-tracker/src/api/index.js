const cmc_baseUrl = 'https://pro-api.coinmarketcap.com/v1'
const cors = 'https://cors-anywhere.herokuapp.com/'
const news_url = 'https://newsapi.org/v2/top-headlines'
const CMC_API_KEY = process.env.REACT_APP_CMC_API_KEY

export function getCrypto_Listings() {
  console.log('0. calling getGlobalMetrics_Quotes...')
  return fetch(cors + cmc_baseUrl + '/cryptocurrency/listings/latest?CMC_PRO_API_KEY='+ CMC_API_KEY)
  .then(console.log('step 1, returning response.json()..'))
  .then(response => response.json())
}

export function getNews() {
  console.log('Startings News API')
  return fetch(cors + news_url )
  .then(response => response.json())
}
