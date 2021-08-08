import axios from 'axios'
import config from 'config/development'
import { ILatestQuoteResponse } from 'type/services'

// const testInstance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   headers: {
//     'Content-Type': 'application/json; charset=utf-8',
//     'cache-control': 'no-cache',
//   },
// })

// export const getPosts = async (symbols: string[]) => {
//   const response = await testInstance.get('/posts')
// }

const coinmarketcapInstance = axios.create({
  baseURL: config.COINMARKETCAP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'cache-control': 'no-cache',
    'X-CMC_PRO_API_KEY': config.COINMARKETCAP_API_KEY,
  },
})

export const getLatestQuote = async (symbols: string[]): Promise<Record<string, any> | undefined> => {
  const symbolsQs = symbols.join(',')

  try {
    const response = await coinmarketcapInstance.get<ILatestQuoteResponse>('/quotes/latest', {
      params: {
        symbol: symbolsQs,
      },
    })
    const coinsQuote: Record<string, any> | undefined = response.data.data
    if (!coinsQuote) return
    return coinsQuote
  } catch (e) {
    console.error(e)
    return
  }
}
