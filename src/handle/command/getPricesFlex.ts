import { Message } from '@line/bot-sdk'
import { getLatestQuote, getMetadata } from 'services/api'
import { ErrorCode, IMetadata } from 'types/services'
import * as _ from 'lodash'

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
    const a = _.toArray<IMetadata>(metadataRes?.data)
    console.log('🚀 ~ file: getPricesFlex.ts ~ line 18 ~ getPricesFlex ~ a', a)
    // const latestQuoteData = await getLatestQuote(symbols)

    return {
      type: 'text',
      text: a[0].description || '',
    }
  }

  return {
    type: 'text',
    text: 'Error! could not reach server',
  }

  //TODO : mapping image and check if image exist or not
}
