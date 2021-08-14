import { FlexBox, FlexMessage } from '@line/bot-sdk'
import { Color } from '../constants/styles'

interface InstructionItem {
  title: string
  description: string
  actionMessage: string
}

const COMMAND_LIST: InstructionItem[] = [
  {
    title: '>gfi',
    description: 'checking Fear & Greed Index',
    actionMessage: '>gfi',
  },
  {
    title: '>price {symbols}',
    description: 'checking price by specify symbol',
    actionMessage: '>price btc eth ada',
  },
]

const createInstructionBox = (data: InstructionItem): FlexBox => {
  return {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: data.title,
        size: 'lg',
        weight: 'bold',
      },
      {
        type: 'text',
        text: data.description,
        wrap: true,
        offsetStart: 'xxl',
        size: 'sm',
      },
      {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'text',
            text: 'Ex.',
            flex: 1,
            gravity: 'center',
            align: 'center',
          },
          {
            type: 'button',
            action: {
              type: 'message',
              label: data.actionMessage,
              text: data.actionMessage,
            },
            height: 'sm',
            color: Color.Primary,
            style: 'primary',
            flex: 3,
          },
        ],
        margin: 'sm',
        paddingEnd: 'lg',
      },
    ],
    paddingTop: 'md',
  }
}

const getInstructionBoxes = (commandList: InstructionItem[]) => {
  let result : any = []
  commandList.forEach((item, index) => {
    result.push(createInstructionBox(item))
    if (index !== commandList.length - 1) {
      result.push({ type: 'separator', margin: 'lg', color: Color.Secondary })
    }
  })
  return result 
}

export default (): FlexMessage => {
  return {
    type: 'flex',
    altText: 'instruction-manual',
    contents: {
      type: 'bubble',
      size: 'mega',
      header: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'Command Lists',
            color: Color.White,
            weight: 'bold',
            size: 'xl',
          },
        ],
        backgroundColor: Color.Primary,
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: getInstructionBoxes(COMMAND_LIST),
        backgroundColor: Color.VeryLightPrimary,
        paddingTop: 'none',
      },
    },
  }
}
