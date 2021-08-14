import { createCustomPriceData, parseIntWithUnFormatNumber, transformToKebab } from './data'

describe('parseIntWithUnFormatNumber', () => {
  let input
  it('should return int', () => {
    input = '111,222,333.04'
    expect(parseIntWithUnFormatNumber(input)).toEqual(111222333)
  })
})

describe('createCustomPriceData', () => {
  const mockMeta = {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    category: 'coin',
    description:
      'Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,783,500. The last known price of Bitcoin is 45,616.08914537 USD and is down -0.12 over the last 24 hours. It is currently trading on 8933 active market(s) with $34,409,712,312.26 traded over the last 24 hours. More information can be found at https://bitcoin.org/.',
    slug: 'bitcoin',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    urls: {
      website: ['https://bitcoin.org/'],
    },
    platform: null,
  }
  const mockPrice = {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    max_supply: 21000000,
    circulating_supply: 18779718,
    total_supply: 18779718,
    cmc_rank: 1,
    quote: {
      USD: {
        price: 45049.61289091343,
        volume_24h: 39707372463.017365,
        percent_change_1h: 0.69419495,
        percent_change_24h: 4.12124901,
        percent_change_7d: 7.9247753,
        percent_change_30d: 37.09556361,
        percent_change_60d: 31.55031237,
        percent_change_90d: -23.46503889,
        market_cap: 846019026100.5189,
      },
    },
  }

  it('should return correct custom data', () => {
    expect(createCustomPriceData(mockMeta, mockPrice)).toEqual({
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      marketCap: '846,019,026,100.52',
      maxSupply: '21,000,000',
      name: 'Bitcoin',
      percentChange_1h: '0.69',
      percentChange_24h: '4.12',
      percentChange_30d: '37.1',
      percentChange_60d: '31.55',
      percentChange_7d: '7.92',
      percentChange_90d: '-23.47',
      price: '45,049.61',
      rank: '1',
      symbol: 'BTC',
      totalSupply: '18,779,718',
      circulatingSupply: '18,779,718',
      volume: '39,707,372,463.02',
      coinMarketCapUrl: 'https://coinmarketcap.com/currencies/bitcoin'
    })
  })
})


describe('transformToKebab', () => {
  let input
  it('should transform to kebab case', () => {
    input = 'USD Coin'
    expect(transformToKebab(input)).toEqual('usd-coin')

    input = '  TrueUsd '
    expect(transformToKebab(input)).toEqual('trueusd')
  })
})
