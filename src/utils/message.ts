import * as _ from 'lodash'
interface ICommandResult {
  command?: string
  args?: string[]
}

export const extractCommand = (message: string): ICommandResult => {
  // command with args
  const regex: RegExp = />(\w+)\s(.+)/
  if (regex.test(message)) {
    const matchGroups = regex.exec(message)
    if (matchGroups) {
      const command = matchGroups[1].toUpperCase()
      const argsString = matchGroups[2]
      const args = argsString
        .split(' ')
        .filter((a) => !!a)
        .map((a) => a.toUpperCase())
      return { command, args }
    }
  }

  // pure command
  if (_.startsWith(message, '>')) {
    return { command: message.replace('>', '').trim().toUpperCase(), args: [] }
  }

  return {}
}


