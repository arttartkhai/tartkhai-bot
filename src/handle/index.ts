import { Client, WebhookEvent, MessageAPIResponseBase } from '@line/bot-sdk';
import config from 'config';
import processText from './processText';

// Create a new LINE SDK client.
const client = new Client(config);

// Function handler to receive the text.
export default async (event: WebhookEvent): Promise<MessageAPIResponseBase | undefined> => {
  console.log('🚀 ~ incoming event', event);

  // Process all variables here.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return;
  }

  // Process all message related variables here.
  const { replyToken } = event;
  const { text } = event.message;

  const response = processText(text);

  // Reply to the user.
  await client.replyMessage(replyToken, response);
};
