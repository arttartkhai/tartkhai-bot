import express, { Request, Response } from 'express';
import { Client, WebhookEvent, TextMessage, MessageAPIResponseBase, middleware } from '@line/bot-sdk';
import config from 'config';

// Create a new LINE SDK client.
const client = new Client(config);

// Function handler to receive the text.
const textEventHandler = async (event: WebhookEvent): Promise<MessageAPIResponseBase | undefined> => {
  // Process all variables here.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return;
  }

  // Process all message related variables here.
  const { replyToken } = event;
  const { text } = event.message;

  // Create a new message.
  const response: TextMessage = {
    type: 'text',
    text,
  };

  // Reply to the user.
  await client.replyMessage(replyToken, response);
};


export default () => {
  const router = express.Router()

  router.use(middleware(config))

  router.get('/', async (_: Request, res: Response): Promise<Response> => {

    return res.status(200).json({
      status: 'success',
      message: 'Connected successfully!',
    });
  });

  router.post(
    '/',
    async (req: Request, res: Response): Promise<Response> => {
      const events: WebhookEvent[] = req.body.events;
      console.log("🚀 ~ file: bot.ts ~ line 60 ~ events", events)

      // Process all of the received events asynchronously.
      const results = await Promise.all(
        events.map(async (event: WebhookEvent) => {
          try {
            await textEventHandler(event);
          } catch (err: unknown) {
            if (err instanceof Error) {
              console.error(err);
            }

            // Return an error message.
            return res.status(500).json({
              status: 'error',
            });
          }
        })
      );

      // Return a successful message.
      return res.status(200).json({
        status: 'success',
        results,
      });
    }
  )

  return router
}
