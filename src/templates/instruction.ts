import { FlexMessage } from '@line/bot-sdk'

export default (actions = []): FlexMessage => ({
  type: 'flex',
  altText: 'instruction-flex',
  contents: {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: "check Today's greed and fear index ",
              wrap: true,
            },
          ],
          action: {
            type: 'message',
            label: '>gfi',
            text: '>gfi',
          },
          backgroundColor: '#f79400',
          margin: 'md',
          justifyContent: 'center',
          paddingTop: 'xl',
          paddingBottom: 'xl',
          paddingStart: 'md',
          paddingEnd: 'md',
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'check crypto price',
              wrap: true,
            },
          ],
          action: {
            type: 'message',
            label: '>price BTC',
            text: '>price BTC',
          },
          backgroundColor: '#f79400',
          margin: 'md',
          justifyContent: 'center',
          paddingTop: 'xl',
          paddingBottom: 'xl',
          paddingStart: 'md',
          paddingEnd: 'md',
        },
      ],
      backgroundColor: '#0d5595',
    },
  },
})
