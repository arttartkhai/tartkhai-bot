import { Message } from '@line/bot-sdk'
import { Commands } from 'constants/command'
import example from 'templates/example'
import example2 from 'templates/example2'
import instruction from 'templates/instruction'
import image from 'templates/image'
import { extractCommand } from 'utils/message'
import { priceCarousel } from 'templates/priceCard'

export default (text: string): Message | Message[] | null => {
  const { command, args } = extractCommand(text)
  if (command) {
    switch (Commands[command]) {
      case Commands.gfi:
        return image('https://alternative.me/crypto/fear-and-greed-index.png')
      case Commands.price:
        return priceCarousel()
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
  return null
}
