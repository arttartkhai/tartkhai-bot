import { Message } from '@line/bot-sdk'
import { getLatestQuote, getMetadata } from 'services/api'
import { ErrorCode, IMetadata } from 'types/services'
import * as _ from 'lodash'
import { createCustomPriceData } from 'utils/data'

export const getPricesFlex = async (symbols: string[]): Promise<Message> => {
  const metadataRes = await getMetadata(symbols)
  const errorCode = metadataRes?.status?.error_code

  if (errorCode === ErrorCode.NotFound) {
    return {
      type: 'text',
      text: 'Not found the coin',
    }
  }

  if (errorCode === ErrorCode.Success) {
    const metaData = metadataRes?.data
    const latestQuoteData = await getLatestQuote(symbols)
    if (metaData && latestQuoteData) {
      const customPriceData = symbols.map((symbol) => createCustomPriceData(metaData[symbol], latestQuoteData[symbol]))
      console.log('🚀 ~ file: getPricesFlex.ts ~ line 28 ~ customPriceData ~ customPriceData', customPriceData)
      return {
        type: 'text',
        text: customPriceData[0].price?.toString() || ''
      }
    }
  }

  return {
    type: 'text',
    text: 'Error! could not reach server',
  }

  //TODO : mapping image and check if image exist or not
}
