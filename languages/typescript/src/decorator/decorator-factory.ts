/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-types
const Logger = (logString: string) => (constructor: Function) => {
  console.log(logString)
  console.log(constructor)
}

// eslint-disable-next-line new-cap
@Logger('LOGGINS - PERSON')
class Person2 {
  name = 'Max'

  constructor() {
    console.log('Create person object...')
  }
}

export default Person2
