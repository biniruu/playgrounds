export interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  hello: (prop: string) => void
  'chat message': (msg: string) => void
  greetings: ({ spring, summer, fall, winter }: Greetings) => void
}

interface Greetings {
  spring: string
  summer: string
  fall: string
  winter: string
}

export interface ClientToServerEvents {
  hello: () => void
  'chat message': (msg: string) => void
}

export interface InterServerEvents {
  ping: () => void
}

export interface SocketData {
  name: string
  age: number
}
