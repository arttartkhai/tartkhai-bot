import { extractCommand } from './message';

describe('extractCommand fn', () => {
  const input = 'price btc';
  it('should return command', () => {
    expect(extractCommand(input)).toEqual('price');
  });
});
