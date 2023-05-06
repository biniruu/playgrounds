import express from 'express'

const app = express()

app.get('/', (_req, res) => {
  res.json('hello world')
})

app.listen(8123, () => {
  // eslint-disable-next-line no-console
  console.log('server is on 8123')
})
