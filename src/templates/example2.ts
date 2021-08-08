import { FlexMessage } from "@line/bot-sdk";

export default () : FlexMessage=> ({
  type: 'flex',
  altText: 'example',
  contents: {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'BTC',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
            },
            {
              type: 'text',
              text: '70%',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
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
                      type: 'filler',
                    },
                  ],
                  width: '70%',
                  backgroundColor: '#0D8186',
                  height: '6px',
                },
              ],
              backgroundColor: '#9FD8E36E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#27ACB2',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'Buy milk and lettuce before class',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ETH',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
            },
            {
              type: 'text',
              text: '30%',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
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
                      type: 'filler',
                    },
                  ],
                  width: '30%',
                  backgroundColor: '#DE5658',
                  height: '6px',
                },
              ],
              backgroundColor: '#FAD2A76E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#FF6B6E',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'Wash my car',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'BNB',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
            },
            {
              type: 'text',
              text: '100%',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
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
                      type: 'filler',
                    },
                  ],
                  width: '100%',
                  backgroundColor: '#7D51E4',
                  height: '6px',
                },
              ],
              backgroundColor: '#9FD8E36E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#A17DF5',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'Buy milk and lettuce before class',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ADA',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
            },
            {
              type: 'text',
              text: '70%',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
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
                      type: 'filler',
                    },
                  ],
                  width: '70%',
                  backgroundColor: '#0D8186',
                  height: '6px',
                },
              ],
              backgroundColor: '#9FD8E36E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#27ACB2',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'Buy milk and lettuce before class',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'USDT',
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
            },
            {
              type: 'text',
              text: '30%',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
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
                      type: 'filler',
                    },
                  ],
                  width: '30%',
                  backgroundColor: '#DE5658',
                  height: '6px',
                },
              ],
              backgroundColor: '#FAD2A76E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#FF6B6E',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'Wash my car',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
      {
        type: 'bubble',
        size: 'nano',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: "DODGE",
              color: '#ffffff',
              align: 'start',
              size: 'md',
              gravity: 'center',
            },
            {
              type: 'text',
              text: '100%',
              color: '#ffffff',
              align: 'start',
              size: 'xs',
              gravity: 'center',
              margin: 'lg',
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
                      type: 'filler',
                    },
                  ],
                  width: '100%',
                  backgroundColor: '#7D51E4',
                  height: '6px',
                },
              ],
              backgroundColor: '#9FD8E36E',
              height: '6px',
              margin: 'sm',
            },
          ],
          backgroundColor: '#A17DF5',
          paddingTop: '19px',
          paddingAll: '12px',
          paddingBottom: '16px',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'Buy milk and lettuce before class',
                  color: '#8C8C8C',
                  size: 'sm',
                  wrap: true,
                },
              ],
              flex: 1,
            },
          ],
          spacing: 'md',
          paddingAll: '12px',
        },
        styles: {
          footer: {
            separator: false,
          },
        },
      },
    ],
  },
})
