import { Message } from '@line/bot-sdk'
import { getLatestQuote, getMetadata } from 'services/api'
import * as _ from 'lodash'
import { createCustomPriceData } from 'utils/data'
import { priceCarousel } from 'templates/priceCard'

export const getPricesFlex = async (symbolsInput: string[]): Promise<Message> => {
  let symbols = symbolsInput
  if (!symbols.length) {
    return {
      type: 'text',
      text: 'please specify coin symbol',
    }
  }
  if (symbols.includes('STABLECOIN')) {
    symbols = ['USDT', 'USDC', 'BUSD', 'DAI', 'UST', 'TUSD', 'PAX', 'RSR', 'HUSD', 'USDN']
  }

  const metaData = await getMetadata(symbols)
  if (metaData) {
    const latestQuoteData = await getLatestQuote(symbols)
    if (latestQuoteData) {
      const customPriceData = symbols.map((symbol) => createCustomPriceData(metaData[symbol], latestQuoteData[symbol]))
      return priceCarousel(customPriceData)
    }
  }

  return {
    type: 'text',
    text: 'Error! could not get response from 3rd server',
  }

  //TODO : mapping image and check if image exist or not
}
