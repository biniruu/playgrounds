/* eslint-disable no-console */
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import express from 'express'
import { Server } from 'socket.io'

import {
  type ClientToServerEvents,
  type InterServerEvents,
  type ServerToClientEvents,
  type SocketData,
} from '../types/socket'

const app = express()
const server = createServer(app)

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
  connectionStateRecovery: {},
})

const path = import.meta.url
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(path))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

io.on('connection', socket => {
  console.log('a user connected')

  io.emit('greetings', { spring: '🌸', summer: '🏄🏻‍♂️', fall: '🍁', winter: '☃️' })

  // socket.broadcast.emit('hello', 'world')

  socket.on('chat message', msg => {
    io.emit('chat message', msg)
    console.log(socket.data)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
