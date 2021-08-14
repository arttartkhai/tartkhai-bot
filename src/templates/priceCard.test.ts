import { priceCard } from './priceCard'

describe('priceCard', () => {
  const mockProp = {
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    marketCap: '846,019,026,100.52',
    // maxSupply: null,
    maxSupply: '21,000,000',
    name: 'Bitcoin',
    percentChange_1h: '0.69',
    percentChange_24h: '4.12',
    percentChange_7d: '7.92',
    percentChange_30d: '37.1',
    percentChange_60d: '31.55',
    percentChange_90d: '-23.47',
    price: '45,049.61',
    rank: '1',
    symbol: 'BTC',
    totalSupply: '18,779,718',
    circulatingSupply: '18,779,718',
    volume: '39,707,372,463.02',
  }

  const testPriceCard = priceCard(mockProp)
  console.log(JSON.stringify(testPriceCard))

  it('should match snapshot for 1 bubble', () => {
    expect(testPriceCard).toMatchSnapshot()
  })
})
