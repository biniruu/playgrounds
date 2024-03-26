import { UserClient } from '@mock/user/stubUserClient'
import { UserServer } from '@mock/user/userServer'

describe('Authenticate user', () => {
  let userServer: UserServer<UserClient>

  beforeEach(() => {
    userServer = new UserServer<UserClient>(new UserClient())
  })

  test('should return boolean when authenticated user login', async () => {
    await userServer.login('id', 'password')
    expect(userServer.isLoggedIn).toBe(true)
  })
})
