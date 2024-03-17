interface ProductServiceInterface {
  fetchItems: () => Promise<{ id: number; name: string; available: boolean }[]>
}

class ProductService<T extends ProductServiceInterface> {
  private productClient: T

  constructor(productClient: T) {
    this.productClient = productClient
  }

  fetchAvailableItems() {
    return this.productClient.fetchItems().then(items => items.filter(item => item.available))
  }
}

export { ProductService }
