import dotenv from 'dotenv'

dotenv.config()

export default {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || '',
  COINMARKETCAP_API_KEY: process.env.COINMARKETCAP_API_KEY,
}
