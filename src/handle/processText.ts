import { Message } from '@line/bot-sdk'
import { Commands } from 'constants/command'
import example from 'templates/example'
import example2 from 'templates/example2'
import instruction from 'templates/instruction'
import image from 'templates/image'
import { extractCommand } from 'utils/message'
import { priceCarousel } from 'templates/priceCard'
import { getPricesFlex } from './command/getPricesFlex'

export default async (text: string): Promise<Message | Message[]> => {
  const { command, args } = extractCommand(text)
  if (command && args) {
    switch (Commands[command]) {
      case Commands.GFI:
        return image('https://alternative.me/crypto/fear-and-greed-index.png')
      case Commands.PRICE:
        // return priceCarousel()
        return await getPricesFlex(args)
      default:
        return [
          {
            type: 'text',
            text: 'Invalid command, try again with below example',
          },
          instruction(),
        ]
    }
  }
  return []
}
