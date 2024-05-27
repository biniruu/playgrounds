/* eslint-disable no-console */
import { readFile } from 'fs'
import type { IncomingMessage, ServerResponse } from 'http'
import { createServer } from 'http'
import { join } from 'path'

// import Person2 from './decorator/decorator-factory'
// import Person1 from './decorator/first-class-decorator'
// import Person3 from './decorator/more-useful-decorator'
// import Product from './decorator/property-decorator'

// decorator
// {
//   const person1 = new Person1()
//   const person2 = new Person2()
//   const person3 = new Person3()
//   const product = new Product('Product', 30)

//   console.log('🚀 ~ person1:', person1)
//   console.log('===============================================================================')
//   console.log('🚀 ~ person2:', person2)
//   console.log('===============================================================================')
//   console.log('🚀 ~ person3:', person3)
//   console.log('===============================================================================')
//   product.price = 20
//   console.log('🚀 ~ product:', product.price)
// }

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

createServer(server).listen(port, () => console.log(`Server running on port ${port}`))
