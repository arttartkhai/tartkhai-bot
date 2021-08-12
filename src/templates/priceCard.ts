//TODO: handle when unlimited supply,
import { FlexBox, FlexBubble, FlexCarousel, FlexMessage } from '@line/bot-sdk'
import { CustomCoinData, PriceCardProp } from 'types/template'

type CreateBox = (data: CustomCoinData) => FlexBox

const isNegative = (value: string) => Number.parseFloat(value) < 0
const getColor = (value: string) => (isNegative(value) ? '#ef4949' : '#008000')
const withArrowAndPercent = (value: string) => (isNegative(value) ? `▼ ${value}%` : `▲ ${value}%`)

const getHeader: CreateBox = (data) => {
  return {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            size: 'xl',
            flex: 0,
            contents: [
              {
                type: 'span',
                text: data.name,
              },
              {
                type: 'span',
                text: ` (${data.symbol})`,
              },
            ],
            wrap: true,
            weight: 'bold',
            text: '-',
          },
          {
            type: 'text',
            text: `$${data.price}`,
            color: getColor(data.percentChange_24h),
          },
        ],
        flex: 3,
      },
      {
        type: 'image',
        url: data.logo,
        size: 'xs',
        aspectMode: 'fit',
        flex: 1,
      },
    ],
    flex: 0,
    spacing: 'none',
    margin: 'none',
    paddingBottom: 'none',
  }
}

const getSupplyBox: CreateBox = (data) => {
  const maxSupply = Number.parseInt(data.maxSupply ? data.maxSupply : '')
  const totalSupply = Number.parseInt(data.totalSupply)
  const percentage = Math.floor((totalSupply / maxSupply) * 100).toString()
  return {
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
            contents: [],
            backgroundColor: '#0D8186',
            width: `${percentage}%`,
            height: '15px',
            alignItems: 'center',
            justifyContent: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: `${data.totalSupply} / ${data.maxSupply} (${percentage}%)`,
                color: '#ffffff',
                size: 'xs',
                align: 'center',
              },
            ],
            position: 'absolute',
            height: '15px',
            width: '100%',
          },
        ],
        backgroundColor: '#9FD8E36E',
        height: '15px',
        margin: 'xs',
        position: 'relative',
      },
    ],
  }
}

const getPriceBox: CreateBox = (data) => {
  return {
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
            text: `Rank: ${data.rank}`,
            wrap: true,
            offsetStart: 'xl',
            weight: 'bold',
            size: 'sm',
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
            text: `MCap: $${data.marketCap}`,
            wrap: true,
            offsetStart: 'xl',
            weight: 'bold',
            size: 'sm',
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
            text: `Price: $${data.price}`,
            wrap: true,
            offsetStart: 'xl',
            weight: 'bold',
            size: 'sm',
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
            text: `Volume: ${data.volume}`,
            wrap: true,
            offsetStart: 'xl',
            weight: 'bold',
            size: 'sm',
          },
        ],
        margin: 'sm',
      },
    ],
    paddingTop: 'lg',
  }
}

const getPercentageBox: CreateBox = (data) => {
  return {
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
                    size: 'xs',
                  },
                  {
                    type: 'text',
                    text: withArrowAndPercent(data.percentChange_1h),
                    flex: 0,
                    color: getColor(data.percentChange_1h),
                    size: 'xs',
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
                    text: '24h:',
                    flex: 0,
                    size: 'xs',
                  },
                  {
                    type: 'text',
                    text: withArrowAndPercent(data.percentChange_24h),
                    flex: 0,
                    color: getColor(data.percentChange_24h),
                    size: 'xs',
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
                    text: '7d:',
                    flex: 0,
                    size: 'xs',
                  },
                  {
                    type: 'text',
                    text: withArrowAndPercent(data.percentChange_7d),
                    flex: 0,
                    color: getColor(data.percentChange_7d),
                    size: 'xs',
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
                    text: '30d:',
                    flex: 0,
                    size: 'xs',
                  },
                  {
                    type: 'text',
                    text: withArrowAndPercent(data.percentChange_30d),
                    flex: 0,
                    color: getColor(data.percentChange_30d),
                    size: 'xs',
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
                    text: '60d:',
                    flex: 0,
                    size: 'xs',
                  },
                  {
                    type: 'text',
                    text: withArrowAndPercent(data.percentChange_60d),
                    flex: 0,
                    color: getColor(data.percentChange_60d),
                    size: 'xs',
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
                    text: '90d:',
                    flex: 0,
                    size: 'xs',
                  },
                  {
                    type: 'text',
                    text: withArrowAndPercent(data.percentChange_90d),
                    flex: 0,
                    color: getColor(data.percentChange_90d),
                    size: 'xs',
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
  }
}
export const priceCard = (data: CustomCoinData): FlexBubble => {
  return {
    type: 'bubble',
    header: getHeader(data),
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        // {
        //   type: 'box',
        //   layout: 'vertical',
        //   contents: [
        //     {
        //       type: 'box',
        //       layout: 'vertical',
        //       contents: [
        //         {
        //           type: 'text',
        //           text: 'Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,783,500. The last known price of Bitcoin is 45,616.08914537 USD and is down -0.12 over the last 24 hours ...',
        //           wrap: true,
        //           size: 'xxs',
        //         },
        //       ],
        //     },
        //   ],
        // },
        ...(data.maxSupply ? [getSupplyBox(data)] : []),
        ...[getPriceBox(data)],
        ...[getPercentageBox(data)],
      ],
      paddingTop: 'none',
      paddingStart: 'lg',
      paddingEnd: 'lg',
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
  }
}

export const priceCarousel = (listData: PriceCardProp): FlexMessage => {
  const cardBubble = listData.map((coinData) => priceCard(coinData))
  return {
    type: 'flex',
    altText: 'price flex',
    contents: {
      type: 'carousel',
      contents: cardBubble,
    },
  }
}
