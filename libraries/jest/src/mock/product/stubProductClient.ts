class StubProductClient {
  fetchItems() {
    return new Promise<{ id: number; name: string; available: boolean }[]>(res => {
      res([
        { id: 1, name: 'Item 1', available: true },
        { id: 2, name: 'Item 2', available: false },
        { id: 3, name: 'Item 3', available: true },
      ])
    })
  }
}

export { StubProductClient }
