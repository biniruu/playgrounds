interface ProductServiceInterface {
  fetchItems: () => Promise<{ id: number; name: string; available: boolean }[]>
}

class ProductService {
  constructor(private productClient: ProductServiceInterface) {
    this.productClient = productClient
  }

  fetchAvailableItems() {
    return this.productClient.fetchItems().then(items => items.filter(item => item.available))
  }
}

export { ProductService }
