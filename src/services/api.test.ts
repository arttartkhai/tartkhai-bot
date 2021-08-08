import { getLatestQuote} from './api'

it('', async () => {
    const data = await getLatestQuote(['eth'])
    console.log("🚀 ~ file: api.test.ts ~ line 5 ~ it ~ data", data)
})