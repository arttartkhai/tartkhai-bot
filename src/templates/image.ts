import { FlexBubble, FlexMessage } from '@line/bot-sdk'

export default (imgUrl): FlexMessage => ({
  type: 'flex',
  altText: 'image-flex',
  contents: {
    type: 'bubble',
    hero: {
      type: 'image',
      url: imgUrl,
      aspectMode: 'fit',
      size: 'full',
    },
  },
})
