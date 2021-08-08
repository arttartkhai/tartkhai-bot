// TOOO: find the way to inject .env

export default {
  channelAccessToken:
    process.env.CHANNEL_ACCESS_TOKEN ||
    'gzqcoyqTE4RMb6/W4usf2ocIxbdTcXU3nPYZJPf6zEPwcSgcV2i19xI/2aIt8mnbF3H6TGpkcDF6um+EIFXrqA3X8PaiSqzCWccsSF0BDDkuNIXfonssmu5dkU5Ca3wIeOEOZL+tvGpFAzvIM8UYMVGUYhWQfeY8sLGRXgo3xvw=',
  channelSecret: process.env.CHANNEL_SECRET || '314d58ed91b9905de0f2989a820e85f9',
  COINMARKETCAP_ENDPOINT: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency',
  COINMARKETCAP_API_KEY: '049a9fe5-51db-4121-890d-409f47de5746',
}
