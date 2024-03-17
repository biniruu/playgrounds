class ProductClient {
  fetchItems(): Promise<{ id: number; name: string; available: boolean }[]> {
    return fetch('http://example.com/login/id+password').then(response => response.json())
  }
}

export { ProductClient }
