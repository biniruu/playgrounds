import { check } from '@/mock/check'

describe('check', () => {
  let onSuccess: (param: 'yes') => void
  let onFail: (param: 'no') => void

  beforeEach(() => {
    onSuccess = jest.fn()
    onFail = jest.fn()
  })

  test('should invoke onSuccess when predicate returns true', () => {
    check(() => true, onSuccess, onFail)

    expect(onSuccess).toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledWith('yes')
    expect(onFail).not.toHaveBeenCalled()
  })

  test('should invoke onFail when predicate returns false', () => {
    check(() => false, onSuccess, onFail)

    expect(onFail).toHaveBeenCalled()
    expect(onFail).toHaveBeenCalledWith('no')
    expect(onSuccess).not.toHaveBeenCalled()
  })
})
