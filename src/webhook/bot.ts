import express, { Request, Response } from 'express'
import { WebhookEvent, middleware } from '@line/bot-sdk'
import config from 'config/development'
import handleEvent from 'handle'

export default () => {
  const router = express.Router()

  router.get('/', async (_: Request, res: Response): Promise<Response> => {
    return res.status(200).json({
      status: 'success',
      message: 'Connected successfully!',
    })
  })

  router.post('/', middleware(config), async (req: Request, res: Response): Promise<Response> => {
    const events: WebhookEvent[] = req.body.events
    
    if (config.isDebugMode) {
      console.log('🚀 ~ events', events)
    }

    // Process all of the received events asynchronously.
    const results = await Promise.all(
      events.map(async (event: WebhookEvent) => {
        try {
          await handleEvent(event)
        } catch (err: unknown) {
          if (err instanceof Error) {
            console.error(err)
          }

          // Return an error message.
          return res.status(500).json({
            status: 'error',
          })
        }
      })
    )

    // Return a successful message.
    return res.status(200).json({
      status: 'success',
      results,
    })
  })

  return router
}
