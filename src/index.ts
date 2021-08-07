import express, { Application } from 'express'
import cors from 'cors'
import bot from 'webhook/bot'

const app: Application = express()
const port = process.env.PORT || 8084

app.use(cors())

app.get('/', (_, res) => {
    res.status(200).send('Reachable! ~ 🚀')
})

app.use('/webhook/bot', bot())

app.listen(port, () => console.log(`Application is live and listening on port ${port}`))



