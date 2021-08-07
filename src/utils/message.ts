import * as _ from 'lodash';
interface ICommandResult {
  command: string;
  args: string[];
}

export const extractCommand = (message: string): ICommandResult | undefined => {
  // command with args
  const regex: RegExp = />(\w+)\s(.+)/;
  //TODO: and word is in command list
  if (regex.test(message)) {
    const matchGroups = regex.exec(message);
    if (matchGroups) {
      const command = matchGroups[1].toLowerCase();
      const argsString = matchGroups[2];
      const args = argsString.split(' ').filter((a) => !!a);
      return { command, args };
    }
  }

  // pure command
  //TODO: and word is in command list
  if (_.startsWith(message, '>')) {
    return { command: message.replace('>', '').trim().toLowerCase(), args: [] };
  }
};
