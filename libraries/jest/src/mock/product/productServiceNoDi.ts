import { ProductClient } from '@mock/product/productClient'

class ProductService {
  private productClient: ProductClient

  constructor() {
    this.productClient = new ProductClient()
  }

  fetchAvailableItems() {
    return this.productClient.fetchItems().then(items => items.filter(item => item.available))
  }
}

export { ProductService }
