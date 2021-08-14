export interface CustomCoinData {
    name: string,
    symbol:string,
    logo: string,
    maxSupply: string | null,
    totalSupply: string,
    circulatingSupply: string
    rank: string,
    price: string,
    volume: string,
    marketCap: string,
    percentChange_1h: string,
    percentChange_24h: string,
    percentChange_7d: string,
    percentChange_30d: string,
    percentChange_60d: string,
    percentChange_90d: string,
    coinMarketCapUrl: string,
  }

export type PriceCardProp = CustomCoinData[]