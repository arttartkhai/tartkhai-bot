import config from 'config/development'
import { ILatestQuote, IMetadata } from 'types/services'
import { CustomCoinData } from 'types/template'

const formatNumber = (num: number | null): string => {
  return num ? num.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '-'
}

// transform string to number for numStr that come from formatNumber fn
export const parseIntWithUnFormatNumber = (numStr: string): number => Number.parseInt(numStr.replace(/,/g,''))

export const createCustomPriceData = (meta: IMetadata, quote: ILatestQuote): CustomCoinData => ({
  name: meta.name,
  symbol: meta.symbol,
  logo: meta.logo,
  maxSupply: quote.max_supply ? formatNumber(quote.max_supply) : null,
  totalSupply: formatNumber(quote.total_supply),
  circulatingSupply: formatNumber(quote.circulating_supply),
  rank: formatNumber(quote.cmc_rank),
  price: formatNumber(quote.quote?.USD?.price),
  volume: formatNumber(quote.quote?.USD?.volume_24h),
  marketCap: formatNumber(quote.quote?.USD?.market_cap),
  percentChange_1h: formatNumber(quote.quote?.USD?.percent_change_1h),
  percentChange_24h: formatNumber(quote.quote?.USD?.percent_change_24h),
  percentChange_7d: formatNumber(quote.quote?.USD?.percent_change_7d),
  percentChange_30d: formatNumber(quote.quote?.USD?.percent_change_30d),
  percentChange_60d: formatNumber(quote.quote?.USD?.percent_change_60d),
  percentChange_90d: formatNumber(quote.quote?.USD?.percent_change_90d),
  // temporary website, it's possible to be 404
  coinMarketCapUrl: `${config.COINMARKETCAP_CURRENCIES_URL}/${transformToKebab(meta.name)}`,
})

export const transformToKebab = (input: string) => input.trim().replace(/ /g, '-').toLowerCase()
