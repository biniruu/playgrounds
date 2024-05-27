/* eslint-disable new-cap, no-console, @typescript-eslint/ban-types */
const Logger = (logString: string) => {
  console.log('Logger decorator')

  return (constructor: Function) => {
    console.log(logString)
    console.log(constructor)
  }
}

const WithTemplate = (template: string, hookId: string) => {
  console.log('WithTemplate decorator')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (constructor: any) => {
    console.log('🚀 ~ template:', template)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const p = new constructor()
    // document.getElementById(hookId)?.insertAdjacentHTML('beforeend', template)
    if (typeof window !== 'undefined') {
      const hookEl = document.getElementById(hookId)
      console.log('🚀 ~ hookEl:', hookEl)
      if (hookEl) {
        hookEl.innerText = template
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        hookEl.getElementsByTagName('h1')[0].textContent = p.name
      }
    }
  }
}

const element = '<h2>My Person Object</h2>'

@Logger('LOGGING - PERSON')
@WithTemplate(element, 'app')
class Person3 {
  name = 'Max'

  constructor() {
    console.log('Create person object...')
  }
}

export default Person3
