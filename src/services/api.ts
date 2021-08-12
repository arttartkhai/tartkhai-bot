import axios from 'axios'
import config from 'config/development'
import { ILatestQuote, ILatestQuoteResponse, IMetadata, IMetadataResponse } from 'types/services'

const COINMARKETCAP_ENDPOINT = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency'

const coinmarketcapInstance = axios.create({
  baseURL: COINMARKETCAP_ENDPOINT,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'cache-control': 'no-cache',
    'X-CMC_PRO_API_KEY': config.COINMARKETCAP_API_KEY,
  },
})

export const getMetadata = async (symbols: string[]): Promise<Record<string, IMetadata> | undefined> => {
  const symbolsQS = symbols.join(',')
  try {
    const response = await coinmarketcapInstance.get<IMetadataResponse>('/info', {
      params: {
        symbol: symbolsQS,
      },
    })
    return response.data.data
  } catch (e) {
    console.error(e)
    return
  }
}

export const getLatestQuote = async (symbols: string[]): Promise<Record<string, ILatestQuote> | undefined> => {
  const symbolsQS = symbols.join(',')
  try {
    const response = await coinmarketcapInstance.get<ILatestQuoteResponse>('/quotes/latest', {
      params: {
        symbol: symbolsQS,
      },
    })
    const coinsQuote = response.data.data
    if (!coinsQuote) return
    return coinsQuote
  } catch (e) {
    console.error(e)
    return
  }
}
