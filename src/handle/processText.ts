import { Message } from '@line/bot-sdk'
import { Commands } from '../constants/command'
import instruction from '../templates/instruction'
import image from '../templates/image'
import { extractCommand } from '../utils/message'
import { getPricesFlex } from './command/getPricesFlex'

export default async (text: string): Promise<Message | Message[]> => {
  const { command, args } = extractCommand(text)
  if (command && args) {
    switch (Commands[command]) {
      case Commands.GFI:
        return image('https://alternative.me/crypto/fear-and-greed-index.png')
      case Commands.PRICE:
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
