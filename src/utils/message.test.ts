import { extractCommand } from './message'

describe('extractCommand fn', () => {
  it('should return command with no args', () => {
    let input

    input = '>gfi'
    expect(extractCommand(input)).toEqual({
      command: 'GFI',
      args: [],
    })

    input = '>gfi    '
    expect(extractCommand(input)).toEqual({
      command: 'GFI',
      args: [],
    })
  })

  it('should return command with correct args', () => {
    let input
    
    input = '>price btc eth'
    expect(extractCommand(input)).toEqual({
      command: 'PRICE',
      args: ['BTC', 'ETH'],
    })

    input = '>price btc    ETH'
    expect(extractCommand(input)).toEqual({
      command: 'PRICE',
      args: ['BTC', 'ETH'],
    })
  })
  
  it('should return nothing', () => {
    let input = 'price'
    expect(extractCommand(input)).toEqual({})
  })
})
