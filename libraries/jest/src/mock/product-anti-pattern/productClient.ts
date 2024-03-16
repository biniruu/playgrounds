class ProductClient {
  fetchItems(): Promise<{ id: number; password: string; available: boolean }[]> {
    return fetch('http://example.com/login/id+password').then(response => response.json())
  }
}

export { ProductClient }
