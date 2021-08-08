//TODO: handle when unlimited supply,

import { FlexBubble, FlexMessage } from '@line/bot-sdk'

const priceCard = (): FlexBubble => ({
  type: 'bubble',
  header: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'BTC (Bitcoin)',
        size: 'xl',
        weight: 'bold',
      },
    ],
  },
  hero: {
    type: 'image',
    url: 'https://cryptoicons.org/api/color/btc/100',
    size: 'md',
    aspectMode: 'fit',
  },
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
            text: 'Supply',
            align: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'text',
                    text: '18,000,000 (76%)',
                    color: '#ffffff',
                    size: 'sm',
                  },
                ],
                backgroundColor: '#0D8186',
                width: '70%',
                height: '20px',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ],
            backgroundColor: '#9FD8E36E',
            height: '20px',
            margin: 'xs',
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '•',
                weight: 'bold',
                flex: 0,
              },
              {
                type: 'text',
                text: 'Rank: 1',
                wrap: true,
                offsetStart: 'xl',
                weight: 'bold',
              },
            ],
            margin: 'sm',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '•',
                weight: 'bold',
                flex: 0,
              },
              {
                type: 'text',
                text: 'Rank: 1',
                wrap: true,
                offsetStart: 'xl',
                weight: 'bold',
              },
            ],
            margin: 'sm',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '•',
                weight: 'bold',
                flex: 0,
              },
              {
                type: 'text',
                text: 'Rank: 1',
                wrap: true,
                offsetStart: 'xl',
                weight: 'bold',
              },
            ],
            margin: 'sm',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '•',
                weight: 'bold',
                flex: 0,
              },
              {
                type: 'text',
                text: 'Rank: 1',
                wrap: true,
                offsetStart: 'xl',
                weight: 'bold',
              },
            ],
            margin: 'sm',
          },
        ],
        paddingTop: 'lg',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'Percentage Change',
                weight: 'bold',
              },
            ],
            alignItems: 'center',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '1h:',
                        flex: 0,
                      },
                      {
                        type: 'text',
                        text: '0.69%',
                        flex: 0,
                        color: '#008000',
                      },
                    ],
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '1h:',
                        flex: 0,
                      },
                      {
                        type: 'text',
                        text: '0.69%',
                        flex: 0,
                        color: '#008000',
                      },
                    ],
                    justifyContent: 'space-between',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '1h:',
                        flex: 0,
                      },
                      {
                        type: 'text',
                        text: '0.69%',
                        flex: 0,
                        color: '#008000',
                      },
                    ],
                    justifyContent: 'space-between',
                  },
                ],
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '1h:',
                        flex: 0,
                      },
                      {
                        type: 'text',
                        text: '0.69%',
                        flex: 0,
                        color: '#008000',
                      },
                    ],
                    justifyContent: 'space-between',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '1h:',
                        flex: 0,
                      },
                      {
                        type: 'text',
                        text: '0.69%',
                        flex: 0,
                        color: '#008000',
                      },
                    ],
                    justifyContent: 'space-between',
                  },
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: '1h:',
                        flex: 0,
                      },
                      {
                        type: 'text',
                        text: '-0.69%',
                        flex: 0,
                        color: '#ef4949',
                      },
                    ],
                    justifyContent: 'space-between',
                  },
                ],
                flex: 1,
              },
            ],
            spacing: 'xl',
          },
        ],
        paddingTop: 'xl',
      },
    ],
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: 'News',
          uri: 'https://linecorp.com',
        },
      },
      {
        type: 'spacer',
        size: 'sm',
      },
    ],
    flex: 0,
    backgroundColor: '#f8f2dd',
  },
})

export const priceCarousel = (): FlexMessage => ({
  type: 'flex',
  altText: 'example',
  contents: {
    type: 'carousel',
    contents: [priceCard(), priceCard(), priceCard()],
  },
})
