/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, no-console */
const Log = (target: any, propertyName: string | symbol) => {
  console.log('Property decorator!')
  console.log(target, propertyName)
  console.log('====================================================')
}

const Log2 = (target: any, name: string, description: PropertyDescriptor) => {
  console.log('Accessor decorator!!')
  console.log('🚀 ~ target:', target)
  console.log('🚀 ~ name:', name)
  console.log('🚀 ~ description:', description)
  console.log('====================================================')
}

const Log3 = (target: any, name: string | symbol, description: PropertyDescriptor) => {
  console.log('Method decorator!!')
  console.log('🚀 ~ target:', target)
  console.log('🚀 ~ name:', name)
  console.log('🚀 ~ description:', description)
  console.log('====================================================')
}

const Log4 = (target: any, name: string | symbol, position: number) => {
  console.log('Parameter decorator!!')
  console.log('🚀 ~ target:', target)
  console.log('🚀 ~ name:', name)
  console.log('🚀 ~ position:', position)
  console.log('====================================================')
}

class Product {
  @Log
  title: string
  private _price: number

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price + 1 * tax
  }

  get price() {
    return this._price
  }

  @Log2
  set price(val: number) {
    if (val <= 0) {
      throw new Error('Invalid price - should be positive!')
    }
    this._price = val
  }
}

export default Product
