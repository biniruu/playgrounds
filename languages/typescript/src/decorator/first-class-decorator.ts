/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-types
const Logger = (constructor: Function) => {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person1 {
  name = 'Max'

  constructor() {
    console.log('Create person object...')
  }
}

export default Person1
