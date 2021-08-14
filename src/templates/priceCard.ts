//TODO: handle when unlimited supply,
import { FlexBox, FlexBubble, FlexCarousel, FlexMessage } from '@line/bot-sdk'
import { CustomCoinData, PriceCardProp } from 'types/template'
import { Color } from 'constants/styles'

type CreateBox = (data: CustomCoinData) => FlexBox

const isNegative = (value: string) => Number.parseFloat(value) < 0
const getColor = (value: string) => (isNegative(value) ? Color.Negative : Color.Positive)
const withArrowAndPercent = (value: string) => (isNegative(value) ? `${value}% ▼` : `${value}% ▲`)

const getHeader: CreateBox = (data) => {
  return {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'image',
        url: data.logo,
        size: 'xs',
        aspectMode: 'fit',
        flex: 1,
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '-',
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
          },
          {
            type: 'text',
            text: '-',
            color: getColor(data.percentChange_24h),
            contents: [
              {
                type: 'span',
                text: `$${data.price}`,
                weight: 'bold',
              },
              {
                type: 'span',
                text: `   (${withArrowAndPercent(data.percentChange_24h)})`,
                size: 'xs',
              },
            ],
            wrap: true,
          },
        ],
        flex: 3,
        paddingStart: 'lg',
      },
    ],
    flex: 0,
    spacing: 'none',
    margin: 'none',
    paddingBottom: 'none',
  }
}

const getSupplyBox: CreateBox = (data) => {
  let barText: string
  let percentage: string

  if (!!data.maxSupply) {
    const maxSupply = Number.parseInt(data.maxSupply)
    const circulatingSupply = Number.parseInt(data.circulatingSupply)

    percentage = Math.floor((circulatingSupply / maxSupply) * 100).toString()
    barText = `${data.circulatingSupply} / ${data.maxSupply} (${percentage}%)`
  } else {
    barText = 'Unlimited'
    percentage = '100'
  }

  return {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Circulation Supply',
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
            backgroundColor: Color.Primary,
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
                text: barText,
                color: Color.White,
                size: 'xs',
                align: 'center',
              },
            ],
            position: 'absolute',
            height: '15px',
            width: '100%',
          },
        ],
        backgroundColor: Color.LightPrimary,
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
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '•',
                flex: 0,
                weight: 'bold',
              },
              {
                type: 'text',
                text: 'Rank: 1',
                weight: 'bold',
                size: 'sm',
                offsetStart: 'lg',
              },
            ],
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '•',
                flex: 0,
                weight: 'bold',
              },
              {
                type: 'text',
                text: 'Market Capitalization',
                weight: 'bold',
                size: 'sm',
                offsetStart: 'lg',
              },
            ],
          },
          {
            type: 'text',
            text: `$${data.marketCap} (USD)`,
            offsetStart: 'xxl',
            size: 'sm',
          },
        ],
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '•',
                flex: 0,
                weight: 'bold',
              },
              {
                type: 'text',
                text: 'Volume (24h)',
                weight: 'bold',
                size: 'sm',
                offsetStart: 'lg',
              },
            ],
          },
          {
            type: 'text',
            text: `$${data.volume} (USD)`,
            offsetStart: 'xxl',
            size: 'sm',
          },
        ],
      },
    ],
    paddingTop: 'md',
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
        paddingBottom: 'sm',
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
    paddingTop: 'md',
    paddingStart: 'lg',
    paddingEnd: 'lg',
  }
}

const getFooter: CreateBox = (data) => {
  return {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'button',
        style: 'link',
        action: {
          type: 'uri',
          label: 'More Information',
          uri: 'https://linecorp.com',
        },
        color: Color.White,
        height: 'sm',
      },
    ],
    backgroundColor: Color.Primary,
    paddingAll: 'none',
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
        ...[getSupplyBox(data)],
        ...[getPriceBox(data)],
        ...[getPercentageBox(data)],
      ],
      paddingTop: 'none',
      paddingStart: 'lg',
      paddingEnd: 'lg',
    },
    footer: getFooter(data)
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
