/* eslint-disable no-console */
import http from 'http'
import 'reflect-metadata'

import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

async function main() {
  const app = express()
  const httpServer = http.createServer(app)

  const typeDefs = `#graphql
    type Query {
      hello: String
    }
  `
  const resolvers = {
    Query: {
      hello() {
        return 'world'
      },
    },
  }

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // eslint-disable-next-line new-cap
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await apolloServer.start()

  app.use(cors(), bodyParser.json(), expressMiddleware(apolloServer))

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
      server started on => http://localhost:4000
      graphql playground => http://localhost:4000/graphql`)
      return
    }
    console.log(`Production server Started...`)
  })
}

main().catch(console.error)
