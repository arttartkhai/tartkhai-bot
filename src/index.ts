import express from 'express'
import cors from 'cors'

// import bot from 'webhook/bot'

const app = express()
const port = process.env.PORT || 8084

app.use(cors())
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (_, res) => {
    res.status(200).send('Reachable! ~ 🚀')
})

// app.use('/webhook/bot', bot())

app.listen(port, () => console.log(`Running on port ${port}`))

