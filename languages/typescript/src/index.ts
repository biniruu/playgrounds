import { readFile } from 'fs'
import type { IncomingMessage, ServerResponse } from 'http'
import { createServer } from 'http'
import { join } from 'path'

const port = 3000

const server = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
    readFile(join(__dirname, '../public/index.html'), (error: NodeJS.ErrnoException | null, content: Buffer) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content, 'utf-8')
    })

    return
  }
  res.writeHead(404)
  res.end('Page not found')
}

// eslint-disable-next-line no-console
createServer(server).listen(port, () => console.log(`Server running on port ${port}`))
