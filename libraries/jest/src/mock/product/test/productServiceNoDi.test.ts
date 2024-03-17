import { ProductClient } from '@mock/product/productClient'
import { ProductService } from '@mock/product/productServiceNoDi'

jest.mock('@mock/product-anti-pattern/productClient')

describe('product service', () => {
  let productService: ProductService
  const mockItems = [
    { id: 1, name: 'Item 1', available: true },
    { id: 2, name: 'Item 2', available: false },
    { id: 3, name: 'Item 3', available: true },
  ]
  const fetchItems = jest.fn(async () => mockItems)
  ;(ProductClient as jest.Mock).mockImplementation(() => {
    return {
      fetchItems,
    }
  })

  beforeEach(() => {
    productService = new ProductService()
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
