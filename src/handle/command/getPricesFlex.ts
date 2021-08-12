import { Message } from '@line/bot-sdk'
import { getLatestQuote, getMetadata } from 'services/api'
import * as _ from 'lodash'
import { createCustomPriceData } from 'utils/data'

export const getPricesFlex = async (symbols: string[]): Promise<Message> => {
  if (!symbols.length) {
    return {
      type: 'text',
      text: 'please specify coin symbol',
    }
  }
  //TODO: check stable coin
  if (symbols.includes('STABLECOIN')) {

  }
  
  const metaData = await getMetadata(symbols)
  if (metaData) {
    const latestQuoteData = await getLatestQuote(symbols)
    if (latestQuoteData) {
      const customPriceData = symbols.map((symbol) => createCustomPriceData(metaData[symbol], latestQuoteData[symbol]))
      return {
        type: 'text',
        text: customPriceData[0].price?.toString() || ''
      }
    }
  }

  return {
    type: 'text',
    text: 'Error! could not get response from 3rd server',
  }

  //TODO : mapping image and check if image exist or not
}
