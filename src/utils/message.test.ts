import { extractCommand } from './message'

describe('extractCommand fn', () => {
  it('should return command with no args', () => {
    let input

    input = '>price'
    expect(extractCommand(input)).toEqual({
      command: 'price',
      args: [],
    })

    input = '>price    '
    expect(extractCommand(input)).toEqual({
      command: 'price',
      args: [],
    })
  })

  it('should return command with correct args', () => {
    let input
    
    input = '>price btc eth'
    expect(extractCommand(input)).toEqual({
      command: 'price',
      args: ['btc', 'eth'],
    })

    input = '>price btc           eth'
    expect(extractCommand(input)).toEqual({
      command: 'price',
      args: ['btc', 'eth'],
    })
  })
  
  it('should return nothing', () => {
    let input = 'price'
    expect(extractCommand(input)).toBeUndefined()
  })
})
