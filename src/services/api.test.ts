import { getLatestQuote, getMetadata } from './api'

it('', async () => {
  const data = await getMetadata(['eth,cake'])
  console.log('🚀 ~ file: api.test.ts ~ line 5 ~ it ~ data', data)
})
