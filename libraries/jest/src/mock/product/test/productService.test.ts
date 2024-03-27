import { ProductService } from '@mock/product/productService'
import { StubProductClient } from '@mock/product/stubProductClient'

describe('stub product client', () => {
  let productService: ProductService

  beforeEach(() => {
    productService = new ProductService(new StubProductClient())
  })

  test('should fetch available items successfully when productClient.fetchItems() returns available items', async () => {
    const result = await productService.fetchAvailableItems()
    const expected = [
      { id: 1, name: 'Item 1', available: true },
      { id: 3, name: 'Item 3', available: true },
    ]

    expect(result.length).toBe(2)
    expect(result).toEqual(expected)
  })
})
