import { UserClient } from '@mock/user/userClient'
import { UserServer } from '@mock/user/userServer'

jest.mock('@mock/user/userClient')

describe('Authenticate user', () => {
  let userServer: UserServer<UserClient>
  const login = jest.fn(async () => 'success')
  ;(UserClient as jest.Mock).mockImplementation(() => {
    return { login }
  })

  beforeEach(() => {
    userServer = new UserServer<UserClient>(new UserClient())
  })

  test('should log in successfully when try to authenticate user login', async () => {
    await userServer.login('id', 'password')

    expect(login).toHaveBeenCalled()
    expect(userServer.isLoggedIn).toBe(true)
  })

  test('should not execute login() when already logged in', async () => {
    await userServer.login('id', 'password')
    await userServer.login('id', 'password')

    expect(login).toHaveBeenCalledTimes(1)
  })
})
