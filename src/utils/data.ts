import { ILatestQuote, IMetadata } from 'types/services'

export const createCustomPriceData = (meta: IMetadata, quote: ILatestQuote) => ({
  name: meta.name,
  symbol: meta.symbol,
  logo: meta.logo,
  maxSupply: quote.max_supply,
  totalSupply: quote.total_supply,
  rank: quote.cmc_rank,
  price: quote.quote?.USD?.price?.toFixed(2),
  volume: quote.quote?.USD?.volume_24h?.toFixed(2),
  marketCap: quote.quote?.USD?.market_cap?.toFixed(2),
  percentChange_1h: quote.quote?.USD?.percent_change_1h?.toFixed(2),
  percentChange_24h: quote.quote?.USD?.percent_change_24h?.toFixed(2),
  percentChange_7d: quote.quote?.USD?.percent_change_7d?.toFixed(2),
  percentChange_30d: quote.quote?.USD?.percent_change_30d?.toFixed(2),
  percentChange_60d: quote.quote?.USD?.percent_change_60d?.toFixed(2),
  percentChange_90d: quote.quote?.USD?.percent_change_90d?.toFixed(2),
})
